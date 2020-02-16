import React, { Fragment, Component } from 'react';
import Store from './store/index';
//import { List, message, Spin } from 'antd';
//import InfiniteScroll from 'react-infinite-scroller';
import Chatlistitem from './Chatlistitem'
import 'antd/dist/antd.css';
import './chatboxbg.css';

class Chatbox extends Component{
	constructor(props){
		super(props);
		this.state = {
			hasMoreState: true,
			loading: false,
			isfirstlogin: Store.getState().userinfo.isfirstlogin,
			meslist: Store.getState().meslist
		}
		this.updatedata = this.updatedata.bind(this);
		//this.handleloadmorestate = this.handleloadmorestate.bind(this);
		this.listenScrollbar=this.listenScrollbar.bind(this);
		Store.subscribe(this.updatedata);
	}

	render(){
		return (
			<Fragment>
				<div id="list-container" className="list-container" onScroll={this.listenScrollbar}>
					{/* 使用antdesign中的组件 
					<InfiniteScroll
						initialLoad={false}
						hasMore={this.state.hasMoreState}
						pageStart={0}
						loadMore={this.handleloadmorestate}
						useWindow={false}
						>
						<List
							size="small"
							itemLayout="horizontal"
							dataSource={this.state.meslist}
							renderItem={item => ( 
								<List.Item>
									<List.Item.Meta
										title={<div id="list-item" className="list-item-style">
													<span id="list-item-name" className="list-item-name-style">{item.username}</span>说：
													<span id="list-item-content" className="list-item-content-style">{item.usermeg}</span>
												</div>}
									/>
								</List.Item>
							)}
						/>
						{
							this.state.hasMoreState && this.state.loading && (
								<div className="demo-loading-container">
									<Spin />
								</div>	
							)
						}
					</InfiniteScroll> */}
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

	updatedata(){
		this.setState({
			isfirstlogin: Store.getState().userinfo.isfirstlogin,
			meslist: Store.getState().meslist
		});
		var scrollbarDOM=document.getElementById('list-container');
		scrollbarDOM.scrollTop=scrollbarDOM.scrollHeight;
	}

	listenScrollbar(){
		var scrollbarDOM=document.getElementById('list-container');
		if(this.state.isfirstlogin===true){
			var DOM=document.getElementById('gotobottom');
			DOM.style.display="block";
		}
		if(scrollbarDOM.scrollTop===scrollbarDOM.scrollHeight){
			var DOMb=document.getElementById('gotobottom');
			DOMb.style.display="block";
		}	
	}

	//?有问题
	// handleloadmorestate(){
	// 	//var list = this.state.meslist;
	// 	if (true) {
	// 		this.setState({
	// 			hasMoreState: true,
	// 			loading: false
	// 		})
	// 	}
	// }


}

export default Chatbox