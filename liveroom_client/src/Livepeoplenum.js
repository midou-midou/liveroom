import React, { Component,Fragment } from 'react'
import store from './store/index'

import './livepeoplenum.css'

class Livepeoplenum extends Component{
	constructor(props){
		super(props);
		this.state = {
			livepeople: store.getState().livePeople
		}
		this.updateLivePeople = this.updateLivePeople.bind(this);
		store.subscribe(this.updateLivePeople);
	}

	render(){
		return (
			<Fragment>
				<span id="online-name" className="online-name-style">在线人数:</span>
				<span id="number_letter" className="letter">{this.state.livepeople}</span>
			</Fragment>
		);
	}
	
	updateLivePeople(){
		var DOM=document.getElementById('number_letter');
		setTimeout(() => {
			DOM.className="letter out"
		},90);
		this.setState({
			livepeople: store.getState().livePeople
		})	
	}

	componentWillUpdate(){
		var DOM=document.getElementById('number_letter');
		DOM.className="letter behind"

	}

	componentDidUpdate(){
		var DOM=document.getElementById('number_letter');
		setTimeout(() => {
			DOM.className="letter in"
		},410);
	}

}

export default Livepeoplenum