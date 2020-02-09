import React, { Fragment, Component } from 'react';
import Store from './store/index';
<<<<<<< HEAD
//import { List, message, Spin } from 'antd';
//import InfiniteScroll from 'react-infinite-scroller';
import Chatlistitem from './Chatlistitem'
=======
import { List, message, Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import ReactAudioPlayer from 'react-audio-player';
>>>>>>> 61d9dbc3267fe64cb03d79c226441d425322161a
import 'antd/dist/antd.css';
import './chatboxbg.css';

class Chatbox extends Component{
	constructor(props){
		super(props);
		this.state = {
			hasMoreState: true,
			loading: false,
<<<<<<< HEAD
			isfirstlogin: Store.getState().userinfo.isfirstlogin,
			meslist: Store.getState().meslist
		}
		this.updatedata = this.updatedata.bind(this);
		//this.handleloadmorestate = this.handleloadmorestate.bind(this);
		this.listenScrollbar=this.listenScrollbar.bind(this);
=======
			meslist: Store.getState().meslist,
			audiosrc: "http://imgdata.xiaoblogs.cn:86/FightingisMagicTheme.mp3",
			index: 0
		}
		this.updatedata = this.updatedata.bind(this);
		this.handleloadmorestate = this.handleloadmorestate.bind(this);
		this.buildDiv = this.buildDiv.bind(this);
>>>>>>> 61d9dbc3267fe64cb03d79c226441d425322161a
		Store.subscribe(this.updatedata);
	}

	render(){
		return (
			<Fragment>
<<<<<<< HEAD
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
=======
				<div 
					id="container" 
					className="demo-infinite-container"
					onScroll={this.scrolltoBottom}	
				>
				</div>
				<ReactAudioPlayer
					id="audioplay"
					src="http://imgdata.xiaoblogs.cn:86/FightingisMagicTheme.mp3"
				>	
				</ReactAudioPlayer>			
>>>>>>> 61d9dbc3267fe64cb03d79c226441d425322161a
			</Fragment>
		);
	}

	updatedata(){
		this.setState({
			isfirstlogin: Store.getState().userinfo.isfirstlogin,
			meslist: Store.getState().meslist
		});
<<<<<<< HEAD
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
=======
		this.buildDiv();
	}

	buildDiv(){
		while(this.state.index<this.state.meslist.length){
			var divContainer = document.getElementById("container");
			var containerItem = document.createElement("div");
			
			if(this.state.meslist[this.state.index].audiourl != null && this.state.meslist[this.state.index].audiourl != ""){
				//说明要渲染的div是一条语音
				var url = this.state.meslist[this.state.index].audiourl;
				var containerAudioItem = document.createElement("div");
				containerAudioItem.style = "width: 70px; height: 30px; border: 3px solid black;"
				var audiopalyer = document.getElementById("audioplay");	
				containerItem.innerHTML = this.state.meslist[this.state.index].username + ":";
				containerItem.style = "display: inline;"
				divContainer.appendChild(containerItem);
				divContainer.appendChild(containerAudioItem);
				containerAudioItem.appendChild(audiopalyer);
				containerAudioItem.addEventListener("click", function(){
					console.log("success click audio");
					console.log(url);
					audiopalyer.src = url;
					audiopalyer.play();

				})
			}
			else{
				//说明要渲染的div是一条消息
				containerItem.innerHTML = this.state.meslist[this.state.index].username + ":" + this.state.meslist[this.state.index].usermeg;
				divContainer.appendChild(containerItem);
			}	
			
			this.setState({
				index: this.state.index + 1
			})
		}
	}

	//?有问题
	handleloadmorestate(){
		//var list = this.state.meslist;
		console.log("handleloadmoerestate执行");
		if (true) {
			this.setState({
				hasMoreState: true,
				loading: false
			})
>>>>>>> 61d9dbc3267fe64cb03d79c226441d425322161a
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