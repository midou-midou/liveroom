import React, { Fragment, Component } from 'react';
import Store from './store/index';
import { List, message, Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import ReactAudioPlayer from 'react-audio-player';
import 'antd/dist/antd.css';
import './chatboxbg.css';

class Chatbox extends Component{
	constructor(props){
		super(props);
		this.state = {
			hasMoreState: true,
			loading: false,
			meslist: Store.getState().meslist,
			audiosrc: "http://imgdata.xiaoblogs.cn:86/FightingisMagicTheme.mp3",
			index: 0
		}
		this.updatedata = this.updatedata.bind(this);
		this.handleloadmorestate = this.handleloadmorestate.bind(this);
		this.buildDiv = this.buildDiv.bind(this);
		Store.subscribe(this.updatedata);
	}

	render(){
		return (
			<Fragment>
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
			</Fragment>
		);
	}



	updatedata(){
		this.setState({
			meslist: Store.getState().meslist
		});
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
		}	
	}


}

export default Chatbox