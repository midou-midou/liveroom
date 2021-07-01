import React, { Component,Fragment } from 'react'
import store from '../../store/index'

import './index.css'

class Livepeoplenum extends Component{
	constructor(props){
		super(props);
		this.state = {
			livepeople: store.getState().livePeople
		}
		store.subscribe(this.updateLivePeople);
	}

	render(){
		return (
			<Fragment>
				<span id="online-name" className="online-name-style">在线人数:</span>
				<span id="number_letter" ref={current => {this.numLetter = current}} className="letter">{this.state.livepeople}</span>
			</Fragment>
		);
	}
	
	componentWillUpdate(){
		const {numLetter} = this;
		numLetter.className="letter behind"
	}
	
	updateLivePeople = () => {
		const {numLetter} = this;
		setTimeout(() => {
			numLetter.className="letter out"
		},90);
		this.setState({
			livepeople: store.getState().livePeople
		})	
	}

	componentDidUpdate(){
		const {numLetter} = this;
		setTimeout(() => {
			numLetter.className="letter in"
		},410);
	}

}

export default Livepeoplenum