import React, { Component, Fragment } from 'react'
import { message } from 'antd'
import Store from './store/index'
<<<<<<< HEAD
import { GlobalStyled } from './style.js'
import { getcleartextareaaction } from './store/actionCreate'

import 'antd/dist/antd.css'
import './sendmegboxbg.css'

=======
import { getsendmessageaction, getcleartextareaaction } from './store/actionCreate'
import 'antd/dist/antd.css'
import './sendmegboxbg.css'

const { TextArea } = Input;
const socket = require('socket.io-client')("http://120.77.250.156:83");

var res, meg;

>>>>>>> 61d9dbc3267fe64cb03d79c226441d425322161a
class SendMegsBox extends Component{
	constructor(props){
		super(props);
		this.state = {
			content: '',
			username: Store.getState().userinfo.username
		}
		this.setmessage = this.setmessage.bind(this);
		this.sendmessage = this.sendmessage.bind(this);
		this.cleartextarea = this.cleartextarea.bind(this);
<<<<<<< HEAD
		this.onEnterPress = this.onEnterPress.bind(this);
		this.updateStoreUsername = this.updateStoreUsername.bind(this);
		Store.subscribe(this.updateStoreUsername);
=======
		this.startrecord = this.startrecord.bind(this);
		this.finishrecord = this.finishrecord.bind(this);
	}

	componentDidMount(){

>>>>>>> 61d9dbc3267fe64cb03d79c226441d425322161a
	}

	render(){
		return(
		<Fragment>
			<GlobalStyled />
			{/*发送框和发送按钮*/}
<<<<<<< HEAD
			<div className="sendTextArea-and-sendbtn">
				<div id="username" className="">
					<span>{this.state.username}:</span>
				</div>
				<textarea
					id="sendTextArea"
					placeholder="聊点什么..."
					rows={1}
					className="sendboxTextArea"
					onChange={this.setmessage}
					onKeyPress={this.onEnterPress}
					value={this.state.content}
				/>
				<button 
					id="sendmessage_btn"
					className="sendboxSendButton"
					onClick={this.sendmessage}
					>
					{/* {<span className="iconfont">&#xe643;</span>} */}
					<svg className="icon" aria-hidden="true">
						<use xlinkHref="#icon-Sendmessage"></use>
					</svg>
				</button>
			</div>
=======
			<TextArea
				rows={3}
				id="sendTextArea"
				placeholder="请输入聊天内容"
				size="large"
				className="sendboxTextArea"
				onChange={this.setmessage}
				onPressEnter={this.sendmessage}
				value={this.state.content}
			/>
			<Row>
				<Col span={14}></Col>
				<Col span={10}>
					<div className="sendboxDivMarginAutoButton">
						<Button 
							id="sendmessage_btn"
							type="primary"
							className="sendboxSendButton"
							onClick={this.sendmessage}
							ghost
						>
							发送
						</Button>
						<Button 
							id="audiobutton"
							type="primary"
							className="sendboxSendButton"
							onClick={this.startrecord}
						>
							录音
							</Button>	
						<Button 
							id="stopaudio"
							type="primary"
							className="sendboxSendButton"
							onClick={this.finishrecord}
						>
							停止
						</Button>
					</div>
				</Col>
>>>>>>> 61d9dbc3267fe64cb03d79c226441d425322161a
				
			
		</Fragment>
		);
	}

	setmessage(e){
		this.setState({
			content: e.target.value
		});
	}

	sendmessage(){
		if(this.state.content === ''){
			message.error("什么都不说,点什么发送(╯▔皿▔)╯");
		}else{
			this.props.emitMegtoServer(this.state.content);
			this.setState({
				content: ''
			});
		}
	}

	onEnterPress(e){
		e.preventDefault();
		if(e.charCode===13||e.charCode===108){
			this.sendmessage();
		}
	}

	cleartextarea(){
		const action = getcleartextareaaction('');
		Store.dispatch(action);
	}

<<<<<<< HEAD
	updateStoreUsername(){
		this.setState({
			username:Store.getState().userinfo.username})
=======
	startrecord(){
		res = window.Recorder();
		res.open(function(){
			res.start();
		},function(msg, isUserNotAllow){
			console.log("用户不同意录音");
		})

	}

	finishrecord(){
		var uname = this.state.username;
		res.stop(function(blob, duration){
			var o = {
				username: uname,
				audioblob: blob
			}
			socket.emit('audioClient', o);
		})
>>>>>>> 61d9dbc3267fe64cb03d79c226441d425322161a
	}

}

export default SendMegsBox