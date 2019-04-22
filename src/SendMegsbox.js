import React, { Component, Fragment } from 'react'
import { Input } from 'antd'
import { Button } from 'antd'
import Store from './store/index'
import { getsendmessageaction } from './store/actionCreate'
import 'antd/dist/antd.css'

const { TextArea } = Input;

class SendMegsBox extends Component{
	constructor(props){
		super(props)
		this.state = {
			content: ''
		}
		this.setmessage = this.setmessage.bind(this)
		this.sendmessage = this.sendmessage.bind(this)
		this.cleartextarea = this.cleartextarea.bind(this)

	}

	render(){
		return(
		<Fragment>
			{/*显示消息框的背景-直接通过store来传递值
			<Chatbox
				meg={this.state.message}
			/>*/}
			{/*发送框和发送按钮*/}
			<TextArea
				rows={4}
				id="sendTextArea"
				placeholder="请输入聊天内容"
				size="large"
				value={this.state.content}
				onChange={this.setmessage}
			/>
			<div style={{margin: '5px'}}>
			<Button 
				id="sendmessage_btn"
				type="primary"
				onClick={this.sendmessage}
			>
			发送
			</Button>
			</div>
			<Button
				id="clearTextArea_btn"
				type="primary"
				onClick={this.cleartextarea}
			>
			清除
			</Button>
		</Fragment>
		);
	}

	setmessage(e){
		this.setState({
			content: e.target.value,
		});
	}

	sendmessage(){
		// const action = {
		// 	type: 'handlemessage',
		// 	value: this.state.content
		// }
		// Store.dispatch(action);
		const action = getsendmessageaction(this.state.content);
		Store.dispatch(action);
		this.setState({
			content: ''
		});

	}

	cleartextarea(){
		const action = {
			type: 'clearUserSendMessage',
			value: ''
		}
		Store.dispatch(action);
	}

}

export default SendMegsBox