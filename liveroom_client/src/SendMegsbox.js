import React, { Component, Fragment } from 'react'
import { message } from 'antd'
import Store from './store/index'
import { GlobalStyled } from './style.js'
import { getcleartextareaaction } from './store/actionCreate'

import 'antd/dist/antd.css'
import './sendmegboxbg.css'

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
		this.onEnterPress = this.onEnterPress.bind(this);
		this.updateStoreUsername = this.updateStoreUsername.bind(this);
		Store.subscribe(this.updateStoreUsername);
	}

	render(){
		return(
		<Fragment>
			<GlobalStyled />
			{/*发送框和发送按钮*/}
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

	updateStoreUsername(){
		this.setState({
			username:Store.getState().userinfo.username})
	}

}

export default SendMegsBox