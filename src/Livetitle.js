import React, { Component, Fragment } from 'react'
import { Menu } from 'antd'

const SubMenu = Menu.SubMenu;

class Livetitle extends Component{
	render(){
		return(
			<Fragment>
				<span>Liveroom</span>
				<Menu 
					mode="horizontal"
					theme="dark"
					onClick={ () => {
						alert("点击");
					}}
					>
					<SubMenu
						
						title={
							<span>
								加入主播队伍
							</span>
						}
					>
						<Menu.Item
							key=""
						>
							管理员
						</Menu.Item>
						<Menu.Item
							key="contact"
						>
							联系我
						</Menu.Item>
					</SubMenu>
				</Menu>
			</Fragment>
			);
	}
}
export default Livetitle