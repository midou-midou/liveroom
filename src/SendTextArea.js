import React, {Component, Fragment} from 'react'
import { Input } from 'antd'
import 'antd/dist/antd.css'

const { Textarea } = Input;

class SendTextArea extends Component{
	constructor(props){
		super(props);
		this.state = {
			content: ''
		};
		this.setmessage = this.setmessage.bind(this);
	}

	render(){
		return(
			<Textarea  
				rows={4}
				id="sendTextArea"
				placeholder="请输入聊天内容"
				size="large"
				value={this.state.content}
				onChange={this.setmessage}
			/>
			);
	}

	setmessage(e){
		this.setState{
			content: e.target.value
		}
	}

}

export default SendTextArea