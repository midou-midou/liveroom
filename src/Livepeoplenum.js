import React, { Component,Fragment } from 'react'
import store from './store/index'

class Livepeoplenum extends Component{
	constructor(props){
		super(props);
		this.state = store.getState();
		this.setLivePeople = this.setLivePeople.bind(this);
		store.subscribe(this.setLivePeople);
	}

	render(){
		return (
			<Fragment>
				{this.state.livePeople}
			</Fragment>
		);
	}

	setLivePeople(){
		this.setState(store.getState());
	}

}

export default Livepeoplenum