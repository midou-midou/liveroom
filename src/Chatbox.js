import React, { Fragment, Component } from 'react';
import Store from './store/index';
import { List, message, Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import 'antd/dist/antd.css';
import './chatboxbg.css';

class Chatbox extends Component{
	constructor(props){
		super(props);
		this.state = {
			hasMoreState: true,
			loading: false,
			meslist: Store.getState().meslist
		}
		this.updatedata = this.updatedata.bind(this);
		this.handleloadmorestate = this.handleloadmorestate.bind(this);
		Store.subscribe(this.updatedata);
	}

	render(){
		return (
			<Fragment>
			<div className="demo-infinite-container">
				<InfiniteScroll
					initialLoad={false}
					hasMore={this.state.hasMoreState && !this.state.loading}
					pageStart={0}
					loadMore={this.handleloadmorestate}
					useWindow={false}
					>
					<List
						itemLayout="horizontal"
						dataSource={this.state.meslist}
						renderItem={item => ( 
							<List.Item>
								<List.Item.Meta
									title={<div>{item.username}说：{item.usermeg}</div>}
								/>
							</List.Item>
						)}
					/>
					{
						this.state.hasMoreState && this.state.loading && (
							<div className="demo-loading-container">
								<Spin />
							</div>	
						)
					}
				</InfiniteScroll>
			</div>
			</Fragment>
		);
	}



	updatedata(){
		this.setState({
			meslist: Store.getState().meslist
		});
	}

	//?有问题
	handleloadmorestate(){
		//var list = this.state.meslist;
		if (true) {
			this.setState({
				hasMoreState: true,
				loading: false
			})
		}
		
	}


}

export default Chatbox