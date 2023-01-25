import React, { Component, Fragment } from 'react';
import SendMegsbox from '../LiveTextarea/index';
import Login from '../LiveLogin';
import store from '../../../store/index';
import { getupdatelistdataaction, changevideojssrc } from '../../../store/actionCreate'

import '../LiveLogin/index.css'
 
// 下面的通信方式必须为长连接
import { io } from 'socket.io-client'
const socket = io("http://localhost:3000");

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
			else if(this.state.meslist.length!==data.meglist.length||this.state.livePeople!==data.liveRealPeople){
				const action = getupdatelistdataaction(data);
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
			isSC: data.type,
			username: this.state.userinfo.username,
			usermeg: data.msg,
			color: data.sccolor?data.sccolor:'',
			money: data.scmoney?data.scmoney:''
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
	}

}

export default LivePanel;