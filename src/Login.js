import React, {Component, Fragment} from 'react'
import { Input, Button } from 'antd'
import store from './store/index'
import { gethandleloginbuttonaction } from './store/actionCreate'
import 'antd/dist/antd.css'

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
						placeholder="输入用户名就可以和主播主播聊天啦"
						value={this.state.inputValue}
						onChange={this.handleinputvalue}
					/>
					<Button
						onClick={
							this.handleloginbutton
						}
					>Login</Button>
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
		// const action = {
		// 	type: 'handle_login_username',
		// 	value: this.state.inputValue,
		// 	state: true
		// };
		const action = gethandleloginbuttonaction(this.state.username, true);
		store.dispatch(action);
		//const action = gethandleloginbuttonaction(this.state.inputValue, true);
	}

}

export default Login