import React, { Fragment, Component, createRef } from 'react';
import Store from '../../../store/index';
import Chatlistitem from '../LiveChatItem';
import SuperChatItem from '../../LiveFeature/SuperChat/SCItem';
import SCFloatItem from '../../LiveFeature/SuperChat/SCFloatItem';
import 'antd/dist/antd.css';
import '../chatbox.css';

class Chatlist extends Component{
	
	state = {
		hasMoreState: true,
		loading: false,
		isfirstlogin: Store.getState().userinfo.isfirstlogin,
		meslist: Store.getState().meslist
	}
	
	constructor(props){
		super(props);
		Store.subscribe(this.updatedata);
	}

	render(){
		return (
			<Fragment>
				<div id="list-container" className="list-container">
					<div className="sc-small-container">
						<div className="sc-scollor"></div>
						{
							this.state.meslist.map((meslist, index) => {
								if(meslist.isSC){
									return(
										<SCFloatItem name={meslist.username} money={meslist.money} color={meslist.color} key={index}/>
									)
								}
							})
						}
					</div>
					<div id="div-scrollbar" className="scrollbar" ></div>
					{/* 通过map()动态的添加组件 */}
					{
						this.state.meslist.map((meslist, index) => {
							if(meslist.isSC){
								return(
									<SuperChatItem data={meslist} key={index} />
								)
							}else{
								return(
									<Chatlistitem username={meslist.username} usermeg={meslist.usermeg} key={index}/>
								)
							}
						})
					}
				</div>
			</Fragment>
		);
	}

	updatedata = () => {
		this.setState({
			isfirstlogin: Store.getState().userinfo.isfirstlogin,
			meslist: Store.getState().meslist
		});
	}

}

export default Chatlist