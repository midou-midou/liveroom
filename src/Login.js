import React, {Component, Fragment} from 'react'
//import ReactDOM from 'react-dom';
import store from './store/index'
import { message } from 'antd'
import { gethandleloginbuttonaction } from './store/actionCreate'

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
					<input 
						className="loginInput"
						placeholder="请把用户名输到这里哦"
						value={this.state.inputValue}
						onChange={this.handleinputvalue}
					/>
						<button
							className="loginButton"
							onClick={
								this.handleloginbutton
							}
						>Login/登录</button>
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
		if(this.state.inputValue === ''){
			//ReactDOM.render(<Alert type="error" message="Error text" banner />, document.getElementById('error'));
			message.error("要把你的名字告诉我呀!");
		}else{
			store.dispatch(action);
		}
	}

}

export default Login