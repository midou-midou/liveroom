import React, {Component, Fragment} from 'react'
import { Input, Button } from 'antd'
import store from './store/index'
import { gethandleloginbuttonaction } from './store/actionCreate'

import 'antd/dist/antd.css'
import './loginbg.css'

class Login extends Component{
	constructor(props){
		super(props)
		this.state = {
			inputValue: ''
		};
		this.handleloginbutton = this.handleloginbutton.bind(this);
		this.handleinputvalue = this.handleinputvalue.bind(this);
	}

	render(){
		return (
			<Fragment>
				<div>
					<Input 
						className="loginInput"
						placeholder="输入用户名就可以和主播聊天啦"
						value={this.state.inputValue}
						onChange={this.handleinputvalue}
						onPressEnter={this.handleloginbutton}
					/>
					<div className="loginButton">
						<Button
							block
							type="primary"
							className="loginButton"
							onClick={
								this.handleloginbutton
							}
						>Login</Button>
					</div>
				</div>
			</Fragment>
		);
	}

	handleinputvalue(e){
		this.setState({
			inputValue: e.target.value
		});
	}

	handleloginbutton(){
		const action = gethandleloginbuttonaction(this.state.inputValue, true);
		store.dispatch(action);
	}

}

export default Login