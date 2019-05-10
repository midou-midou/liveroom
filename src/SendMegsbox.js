import React, { Component, Fragment } from 'react'
import { Input, Button, Row, Col } from 'antd'
import Store from './store/index'
import { getsendmessageaction, getcleartextareaaction } from './store/actionCreate'

import 'antd/dist/antd.css'
import './sendmegboxbg.css'

const { TextArea } = Input;
var meg;

class SendMegsBox extends Component{
	constructor(props){
		super(props);
		this.state = {
			content: ''
		}
		this.setmessage = this.setmessage.bind(this);
		this.sendmessage = this.sendmessage.bind(this);
		this.cleartextarea = this.cleartextarea.bind(this);
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

}

export default SendMegsBox