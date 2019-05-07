import React, { Component, Fragment } from 'react';
import Socketioclient from 'socket.io-client';
import SendMegsbox from './SendMegsbox';
import Login from './Login';
import store from './store/index';
import { getupdatelistdataaction } from './store/actionCreate'

import './loginbg.css'
 
const socket = require('socket.io-client')("http://120.77.250.156:83");

//这里的meg是从store中获取的，如果当前用户的meg没有被更改，就不会执行上传数据到数据库的方法

class Tramsmitdata extends Component{
	
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
				alert("data is null");
			}
			else{
					const action = getupdatelistdataaction(data);
					store.dispatch(action);
				}
		});
	}

	updatestate(){
		this.setState(store.getState());
	}

	//将user发送的消息上传到数据库，后台和前端的上传消息的唯一API
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
					<div className="loginBackground">
						<Login />
					</div>
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

export default Tramsmitdata;