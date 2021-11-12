import { Component } from "react";
import './index.css'

class LiveDesc extends Component {
    
    render() { 
        return ( 
            <div className="desc-container">
                <div>这里是直播间的演示页面</div>
                <div>因为部署在gitee，无法演示下面的功能</div>
                <div style={{color:'red'}}>更换直播推流源、更换待机海报、在线实时人数的显示</div>
                <div>如果需要完整版本则需选择 master 分支</div>
            </div>
         );
    }
}
 
export default LiveDesc;