import React, { Component, Fragment } from 'react';
import SendMegsbox from '../LiveTextarea';
import Login from '../LiveLogin';
import store from '../../../store/index';
import { getupdatelistdataaction, changevideojssrc } from '../../../store/actionCreate'

import '../LiveLogin/index.css'
 
// const socket = require('socket.io-client')("https://live.xiaoblogs.cn:83");
// const sockettitle = require('socket.io-client')("https://live.xiaoblogs.cn:8085");
// const socket = require('socket.io-client')("http://192.168.31.67:83");
// const sockettitle = require('socket.io-client')("http://192.168.31.67:8085");
// 下面的通信方式必须为长连接
const socket = require('socket.io-client')("http://localhost:3000/chat");
// 下面的通信方式可以不用长连接的方式
const sockettitle = require('socket.io-client')("http://localhost:3000/liveroombackstage");

class LivePanel extends Component{
	
	constructor(props){
		super(props);
		this.state = store.getState();
		this.emitMegtoServer = this.emitMegtoServer.bind(this);
		this.updatestate = this.updatestate.bind(this);
		store.subscribe(this.updatestate);
	}

	//当初始化整个页面组件被初次挂载的时候执行
	componentDidMount(){
		socket.on('server', (data) => {
			if (data === null){
				console.log("data is null");
			}
			else if(this.state.meslist.length!==data.meglist.length||this.state.livePeople!==data.livePeople){
				const action = getupdatelistdataaction(data);
				store.dispatch(action);
			}
		});
		sockettitle.on('server', (data) => {
			if(data === null){
				console.log("data is null");
			}
			else if(this.state.videojs_source_src!==data.videojsurl){
				const action = changevideojssrc(data.videojsurl);
				store.dispatch(action);
			}

		});
	}

	updatestate(){
		this.setState(store.getState());
	}

	//将user发送的消息上传到后端，后台和前端的上传消息的API
	emitMegtoServer(data){
		var object = {
			username: this.state.userinfo.username,
			usermeg: data
		}
		socket.emit('client', object);
	}

	//进行一个条件渲染，判断条件是根据用户是不是第一次加载页面来定
	render(){
		if (this.state.userinfo.isfirstlogin === false) {
			return (
				<Fragment>
						<Login />
				</Fragment>
				);
		};
		if (this.state.userinfo.isfirstlogin === true) {
			return (
				<Fragment>
					<SendMegsbox 
						emitMegtoServer={this.emitMegtoServer}
					/>
				</Fragment>
				);
		};
		return <Fragment></Fragment>;
	}

}

export default LivePanel;