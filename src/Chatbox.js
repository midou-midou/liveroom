import React, { Fragment, Component } from 'react';
import Store from './store/index';
import { List } from 'antd';
import 'antd/dist/antd.css';
import './chatboxbg.css';


class Chatbox extends Component{
	constructor(props){
		super(props);
		this.state = Store.getState();
		this.updatedata = this.updatedata.bind(this);
		Store.subscribe(this.updatedata);
	}
	render(){
		return (
			<Fragment>
				{/*<div className="scrollable-container">
									<div className="divbg">
									{this.state.username}:{this.state.content}
									</div>
								</div>*/}
				
				<List
					itemLayout="horizontal"
					dataSource={this.state.meslist}
					renderItem={item => ( 
						<List.Item>
							<List.Item.Meta
								title={<div>{item.username}</div>}
								description={<div>{item.message}</div>}
							/>
						</List.Item>
					)}
				/>
			</Fragment>
		);
	}

	updatedata(){
		this.setState(Store.getState());
	}


}

export default Chatbox