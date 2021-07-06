import React, { Component,Fragment } from 'react'
import store from '../../store/index';

import './index.css'

class Livepeoplenum extends Component{
	constructor(props){
		super(props);
		this.state = {
			livepeople: 0
		}
		store.subscribe(this.updateState);
	}

	render(){
		return (
			<Fragment>
				<span id="online-name" className="online-name-style">在线人数:</span>
				<span id="number_letter" ref={current => {this.numLetter = current}} className="letter">{this.state.livepeople}</span>
			</Fragment>
		);
	}

	shouldComponentUpdate(){
		const {numLetter} = this;
		setTimeout(() => {
			numLetter.className="letter in"
		},410);
		return true;
	}

	componentDidUpdate(){
		const {numLetter} = this;
		numLetter.className="letter behind"
	}

	updateState = () => {
		const {numLetter} = this;
		setTimeout(() => {
			numLetter.className="letter out"
		},90);
		this.setState({
			livepeople: store.getState().livePeople
		})
	}

}

export default Livepeoplenum