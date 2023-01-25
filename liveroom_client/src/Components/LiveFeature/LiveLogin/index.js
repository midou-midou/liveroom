import React, {Component, Fragment} from 'react'
import store from '../../../store/index'
import { message } from 'antd'
import { gethandleloginbuttonaction } from '../../../store/actionCreate'

import './index.css'

class Login extends Component{

	render(){
		return (
			<Fragment>
					<input
						ref={current => {this.inputUserName = current;}}
						className="loginInput"
						placeholder="请把用户名输到这里哦"
					/>
						<div
							className="loginButton"
							onClick={
								this.handleloginbutton
							}
						>Login/登录</div>
			</Fragment>
		);
	}

	handleloginbutton = () => {
		const {inputUserName} = this;
		const action = gethandleloginbuttonaction(inputUserName.value, true);
		if(inputUserName.value === ''){
			message.error("要把你的名字告诉我呀!");
		}else{
			store.dispatch(action);
		}
	}

}

export default Login