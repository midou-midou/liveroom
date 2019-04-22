import React, {Component} from 'react'
import { Menu } from 'antd'

class Livetitle extends Component{
	render(){
		return(
			<Menu 
				mode="horizontal"
				theme="dark"
			>
				<Menu.Item>
					欢迎来到MiMonarchRD的直播间
				</Menu.Item>
			</Menu>
			);
	}
}
export default Livetitle