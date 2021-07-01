import React, { Fragment, Component } from 'react';
import Store from '../../../store/index';
import Chatlistitem from '../LiveChatItem'
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
					<div id="div-scrollbar" className="scrollbar" ></div>
					{/* 通过map()动态的添加组件 */}
					{
						this.state.meslist.map((meslist, index) => {
							return(
								<Chatlistitem username={meslist.username} usermeg={meslist.usermeg} key={index}/>
							)
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