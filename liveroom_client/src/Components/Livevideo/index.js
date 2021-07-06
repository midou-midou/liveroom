import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { message } from 'antd'
import { GlobalStyled } from '../../style.js'
import store from '../../store/index'
import { changevideojssrc } from '../../store/actionCreate'

import './index.css'

const formdata = new FormData();
const url = 'https://live.xiaoblogs.cn:8086';

class Livevideo extends Component{
	constructor(props){
		super(props);
		this.state = {
			video_srcurl: "https://imgdata.xiaoblogs.cn/Skystrike.mp4",
			live_srcurl: 'http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8',
			post: "../../static/videoplaybg/liveroombg.png",
			clientVideoSrc: "http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8"
		};
		
		this.showPanelControl=this.showPanelControl.bind(this);
		this.closePanel=this.closePanel.bind(this);
		this.uploadPost=this.uploadPost.bind(this);
		this.editliveurl=this.editliveurl.bind(this);
		this.blurLiveInput=this.blurLiveInput.bind(this);
		this.changePostInput=this.changePostInput.bind(this);
		this.changeLiveInput=this.changeLiveInput.bind(this);
		this.emitVideoUrltoServer=this.emitVideoUrltoServer.bind(this);

		this.updateState=this.updateState.bind(this);
		store.subscribe(this.updateState);
	}
	render(){
		return(
			<BrowserRouter>
				<Fragment>
					<GlobalStyled />
					<Route path='/' exact render={() => 
						<Fragment>
							<video
								ref={(current) => { this.videoPlay = current; }}
								id="player"
								className="video-js vjs-theme-sea vjs-big-play-centered vjs-fluid"
								width="100%"
								height="100%"
								controls
								preload="auto"
								poster={this.state.post} 
								webkit-playsinline="true"
								playsInline={true}
								data-setup='{}'>
								<source id="videojs-src" src={this.state.clientVideoSrc} type=""></source>
							</video>
						</Fragment>
						}></Route>
					<Route path='/backstage' exact render={() => 
						<Fragment>
							<video
								ref={(current) => { this.videoPlay = current; }}
								id="player"
								className="video-js vjs-theme-sea vjs-big-play-centered  vjs-fluid"
								width="100%"
								height="100%"
								controls
								preload="auto"
								poster={this.state.post}
								webkit-playsinline="true"
								playsInline="true"
								data-setup='{}'>
								<source id="videojs-src" src={this.state.clientVideoSrc} type=""></source>
							</video>
							<div id="video-control-panel-div" className="video-control-panel-div-style">
								{/* videoControlPanel按钮 */}
								<button id="video-arousal-control-btn" className="video-arousal-control-btn-style" onClick={this.showPanelControl}>
									<span id="video-arousal-control-span" className="video-arousal-control-span-style">VideoControl</span>
									<svg className="icon-control-span" aria-hidden="true">
										<use xlinkHref="#icon-setting"></use>
									</svg>
								</button>
								{/* videoControlPanel 播放器推流源设置相关面板 */}
								<div ref={current => {this.videoPanelDOM = current;}} id="video-control-panel-center" className="video-control-panel-center-style">
									<div id="panel-close-div" className="panel-close-div-style">
										<button id="panel-close-btn" className="panel-close-btn-style" onClick={this.closePanel}>
											<svg className="icon-panel-btn" aria-hidden="true">
												<use xlinkHref="#icon-fault"></use>
											</svg>
										</button>
										<div id="url-div" className="url-div-style">
											<div id="video-url-div" className="video-url-div-style">
												<span ref={c => this.urlSpan = c} id="video-url-span" className="video-url-span-style"></span>
												<input ref={c => this.urlInput = c} id="video-url-input" className="video-url-input-style" type="file" accept="image/png" onChange={this.changePostInput}></input>
												<button id="video-url-btn" className="video-url-btn-style" onClick={this.uploadPost} onChange={this.changePostInput}>
													<svg className="icon-panel-btn" aria-hidden="true">
														<use xlinkHref="#icon-upload"></use>
													</svg>
												</button>
											</div>
											<span id="video-url-info-span" className="video-url-info-span-style">
												仅支持png格式,请选择合适的以.png结尾的图片上传呦（＾Ｕ＾）ノ~ＹＯ
												建议1920*1080,2K,4K分辨率<span id="post-info-span" className="post-info-span-style">刷新浏览器要强制刷新,要不然海报显示不出来!</span>
											</span>
											<div id="live-url-div" className="live-url-div-style">
												<span id="live-url-span" className="live-url-span-style">{this.state.live_srcurl}</span>
												<input id="live-url-input" className="live-url-input-style" onBlur={this.blurLiveInput} onChange={this.changeLiveInput}></input>
												<button id="live-url-btn" className="live-url-btn-style" onClick={this.editliveurl}>
													<svg className="icon-panel-btn" aria-hidden="true">
														<use xlinkHref="#icon-pencil-ruler"></use>
													</svg>
												</button>
											</div>
											<span id="live-url-info-span" className="live-url-info-span-style">
												仅支持hls推流,推流地址
												<span id="rtmp-address-span" className="rtmp-address-span-style">rtmp://120.77.250.156:1935/hls,推流密钥abcd</span>如果用自己的直播服务器就改这项,建议还是用我的哦,而且别忘了改完后刷新下页面呦φ（゜▽゜*）♪
											</span>
										</div>
									</div>
								</div>
								<div ref={current => {this.fadeDOM = current}} id="fade-background-div" className="fade-background-div-style"></div>
							</div>
						</Fragment>
					}></Route>
				</Fragment>
			</BrowserRouter>
		);
	}

	showPanelControl(){
		const {fadeDOM, videoPanelDOM} = this;
		videoPanelDOM.style.display="block";
		fadeDOM.style.display="block";
	}

	closePanel(){
		const {fadeDOM, videoPanelDOM} = this;
		videoPanelDOM.style.display="none";
		fadeDOM.style.display="none";
	}

	uploadPost(){
		// fetch(url, {
		// 	method: 'POST',
		// 	mode: 'no-cors',
		// 	body: formdata,
		// }).then(response => {
		// 	message.success("图片上传成功啦,刷新下浏览器看看自己的海报吧!(●ˇ∀ˇ●)");
		// }).catch(error => {
		// 	message.error("由于不可抗力,图片上传失败X﹏X")
		// });		
	}

	editliveurl(){
		const {urlSpan, urlInput} = this;
		urlInput.style.display="block";
		urlInput.value=urlSpan.innerHTML;
	}

	blurLiveInput(){
		const action = changevideojssrc(this.state.clientVideoSrc);
		const {urlInput} = this;
		urlInput.style.display="none";
		// 判断videojs接受的视频格式是不是m3u8
		if(".m3u8" === this.state.clientVideoSrc.substr(-5)){
			store.dispatch(action);
			this.emitVideoUrltoServer(this.state.clientVideoSrc);
		}else{
			message.error("不乖哦!要输入正确的推流地址哦");
		}
	}

	changePostInput(e){
		e.preventDefault();
		let file = e.target.files[0];
		formdata.append('file', file);	
	}

	changeLiveInput(e){
		this.setState({
			clientVideoSrc: e.target.value,
			live_srcurl: e.target.value
		})
	}

	emitVideoUrltoServer(data){
		var obj = {
			videojsurl: data
        }
        //  socket.emit('clientvideojsurl', obj);
	}

	updateState(){
		this.setState({
			clientVideoSrc:store.getState().videojs_source_src
		})
	}

	componentDidUpdate(){
		var sourceDOM=document.getElementById('videojs-src');
		if(".m3u8" === this.state.clientVideoSrc.substr(-5)){
			sourceDOM.type="application/x-mpegurl";
			sourceDOM.src=this.state.clientVideoSrc;
			this.video.load();
		}
	}

}

export default Livevideo