import React, { Component, Fragment } from 'react'
import { Input, Button, Row, Col } from 'antd'
import Store from './store/index'
import { getsendmessageaction, getcleartextareaaction } from './store/actionCreate'
import 'antd/dist/antd.css'
import './sendmegboxbg.css'

const { TextArea } = Input;
const socket = require('socket.io-client')("http://120.77.250.156:83");

var res, meg;

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
		this.startrecord = this.startrecord.bind(this);
		this.finishrecord = this.finishrecord.bind(this);
	}

	componentDidMount(){

	}

	render(){
		return(
		<Fragment>
			{/*发送框和发送按钮*/}
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
				
			</Row>
		</Fragment>
		);
	}

	setmessage(e){
		meg = e.target.value;
		this.setState({
			content: e.target.value
		});
	}

	sendmessage(){
		this.props.emitMegtoServer(this.state.content);
		this.setState({
			content: ''
		});
	}

	cleartextarea(){
		const action = getcleartextareaaction('');
		Store.dispatch(action);
	}

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
	}

}

export default SendMegsBox