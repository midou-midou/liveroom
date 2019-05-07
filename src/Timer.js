import React, { Component, Fragment } from 'react'

class Timer extends Component{
	constructor(props){
		super(props);
		this.state = {
			time: 0
		}
	}

	componentDidMount(){
		const times = this.state.time;
		this.interval = setInterval( () => {
			this.props.getstate();
			this.setState({
				time: times + 1
			})
		}, 1000);
	}

	render(){
		return <Fragment></Fragment>
	}

	componentWillUnmount(){
		clearInterval(this.interval);
	}

}

export default Timer