import React, { Component, Fragment } from 'react'
import { message } from 'antd'
import Store from '../../../store/index'
import { GlobalStyled } from '../../../style.js'
import { getcleartextareaaction } from '../../../store/actionCreate'

import 'antd/dist/antd.css'
import './index.css'

class SendMegsBox extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			username: Store.getState().userinfo.username
		}
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
					ref={current => {this.megTextarea = current}}
					id="sendTextArea"
					placeholder="聊点什么..."
					rows={1}
					className="sendboxTextArea"
					onKeyPress={this.onEnterPress}
				/>
				<button 
					id="sendmessage_btn"
					className="sendboxSendButton"
					onClick={this.sendmessage}
					>
					<svg className="icon" aria-hidden="true">
						<use xlinkHref="#icon-Sendmessage"></use>
					</svg>
				</button>
			</div>
				
			
		</Fragment>
		);
	}

	sendmessage = () => {
		const {megTextarea} = this;
		if(megTextarea.value === ''){
			message.error("什么都不说,点什么发送(╯▔皿▔)╯");
		}else{
			this.props.emitMegtoServer(megTextarea.value);
			megTextarea.value = '';
		}
	}

	onEnterPress = (e) => {
		e.preventDefault();
		if(e.charCode===13||e.charCode===108){
			this.sendmessage();
		}
	}

	cleartextarea = () => {
		const action = getcleartextareaaction('');
		Store.dispatch(action);
	}

	updateStoreUsername = () => {
		this.setState({
			username:Store.getState().userinfo.username})
	}

}

export default SendMegsBox