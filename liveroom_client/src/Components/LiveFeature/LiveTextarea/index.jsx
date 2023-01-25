import React, { Component, Fragment } from 'react'
import { message } from 'antd'
import Store from '../../../store/index'
import { GlobalStyled } from '../../../style.js'
import { getcleartextareaaction } from '../../../store/actionCreate'
import SCPanel from '../SuperChat/SCPanel'

import 'antd/dist/antd.css'
import './index.css'

class SendMegsBox extends Component{
	
	constructor(props){
		super(props);
		let username = Store.getState().userinfo.username;
		this.state = {
			username: username,
			isShowSC: false
		}
		Store.subscribe(this.updateStoreUsername);
	}

	componentWillUnmount(){
		Store.subscribe(() => {});
	}

	render(){
		if(!this.state.isShowSC){
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
							onChange={(e) => {this.setState({inputInner: e.target.value})}}
						/>
						<button className="sc-btn" onClick={this.showSuperChatPanel}>
							<svg className="icon" aria-hidden="true">
								<use xlinkHref="#icon-qian"></use>
							</svg>
						</button>
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
		}else{
			return (
				<SCPanel closeSuperChat={this.showSuperChatPanel} emitMegtoServer={this.props.emitMegtoServer}/>
			);
		}
	}

	sendmessage = () => {
		const {megTextarea} = this;
		if(!this.state.inputInner || this.state.inputInner.lenght === 0){
			message.error("什么都不说,点什么发送(╯▔皿▔)╯");
		}else{
			this.props.emitMegtoServer({type: false, msg: this.state.inputInner});
			megTextarea.value = '';
		}
	}

	onEnterPress = (e) => {
		if(e.charCode===13||e.charCode===108){
			e.preventDefault();
			this.sendmessage();
			return;
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

	showSuperChatPanel = () => {
		this.setState({
			isShowSC: !this.state.isShowSC
		})
	}

}

export default SendMegsBox