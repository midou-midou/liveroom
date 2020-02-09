<<<<<<< HEAD
import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { message } from 'antd'
import { GlobalStyled } from './style.js'
import store from './store/index'
import { changevideojssrc } from './store/actionCreate'

import './livevideo.css'

const socket = require('socket.io-client')("http://120.77.250.156:8085");

const formdata = new FormData();
const url = 'http://120.77.250.156:8086';
=======
import React, { Component } from 'react'
import ReactFlowPlayer from 'react-flow-player'
import './Livevideocss.css'
>>>>>>> 61d9dbc3267fe64cb03d79c226441d425322161a

class Livevideo extends Component{
	constructor(props){
		super(props);
		this.state = {
<<<<<<< HEAD
			video_srcurl: "http://imgdata.xiaoblogs.cn:86/Skystrike.mp4",
			live_srcurl: 'http://live.xiaoblogs.cn:81/abcd/abcd.m3u8',
			post: "http://imgdata.xiaoblogs.cn:86/liveroombg.png",
			clientVideoSrc: "http://live.xiaoblogs.cn:81/abcd/abcd.m3u8"
=======
			srcurl: 'http://live.xiaoblogs.cn:81/abcd/abcd.m3u8',
			type: "application/x-mpegurl",
			ID: 'reactflowplayer',
			initScript: 'https://releases.flowplayer.org/7.2.7/flowplayer.min.js',
			HlsUrl: 'https://cdn.jsdelivr.net/npm/hls.js@0.11.0/dist/hls.light.min.js',
			StyleUrl: 'https://releases.flowplayer.org/7.2.7/skin/skin.css',
			defaultstyleurl: '',
			AspectRatio: '9/16',
			text: "现在主播不在哦"
>>>>>>> 61d9dbc3267fe64cb03d79c226441d425322161a
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
<<<<<<< HEAD
			<BrowserRouter>
				<Fragment>
					<GlobalStyled />
					<Route path='/' exact render={() => 
						<Fragment>
							<video
								ref={(video) => { this.video = video; }}
								id="player"
								className="video-js vjs-big-play-centered  vjs-fluid"
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
						</Fragment>
						}></Route>
					<Route path='/backstage' exact render={() => 
						<Fragment>
							<video
								ref={(video) => { this.video = video; }}
								id="player"
								className="video-js vjs-big-play-centered  vjs-fluid"
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
								<button id="video-arousal-control-btn" className="video-arousal-control-btn-style" onClick={this.showPanelControl}>
									<span id="video-arousal-control-span" className="video-arousal-control-span-style">VideoControl</span>
									<svg className="icon-control-span" aria-hidden="true">
										<use xlinkHref="#icon-setting"></use>
									</svg>
								</button>
								<div id="video-control-panel-center" className="video-control-panel-center-style">
									<div id="panel-close-div" className="panel-close-div-style">
										<button id="panel-close-btn" className="panel-close-btn-style" onClick={this.closePanel}>
											<svg className="icon-panel-btn" aria-hidden="true">
												<use xlinkHref="#icon-fault"></use>
											</svg>
										</button>
										<div id="url-div" className="url-div-style">
											<div id="video-url-div" className="video-url-div-style">
												<span id="video-url-span" className="video-url-span-style"></span>
												<input id="video-url-input" className="video-url-input-style" type="file" accept="image/png" onChange={this.changePostInput}></input>
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
								<div id="fade-background-div" className="fade-background-div-style"></div>
							</div>
						</Fragment>
					}></Route>
				</Fragment>
			</BrowserRouter>
=======
			<ReactFlowPlayer
				id="videoplayer"
				playerInitScript={this.state.initScript}
				playerId={this.state.ID}
				hlsUrl={this.state.HlsUrl}
				hlsPlugin={true}
				live={true}
				styleUrl={this.state.StyleUrl}
				seekingText={this.state.text}
				sources={[
					{
						type: this.state.type,
						src: this.state.srcurl
					}
				]}
			/>
>>>>>>> 61d9dbc3267fe64cb03d79c226441d425322161a
		);
	}

	showPanelControl(){
		var paneldivDOM=document.getElementById('video-control-panel-center');
		var fadeDOM=document.getElementById('fade-background-div');
		paneldivDOM.style.display="block";
		fadeDOM.style.display="block";
	}

	closePanel(){
		var paneldivDOM=document.getElementById('video-control-panel-center');
		var fadeDOM=document.getElementById('fade-background-div');
		paneldivDOM.style.display="none";
		fadeDOM.style.display="none";
	}

	uploadPost(){
		fetch(url, {
			method: 'POST',
			mode: 'no-cors',
			body: formdata,
		}).then(response => {
			message.success("图片上传成功啦,刷新下浏览器看看自己的海报吧!(●ˇ∀ˇ●)");
		}).catch(error => {
			message.error("由于不可抗力,图片上传失败X﹏X")
		});		
	}

	editliveurl(){
		var inputDOM=document.getElementById('live-url-input');
		var spanDOM=document.getElementById('live-url-span');
		inputDOM.style.display="block";
		inputDOM.value=spanDOM.innerHTML;
	}

	blurLiveInput(){
		const action = changevideojssrc(this.state.clientVideoSrc);
		var inputDOM=document.getElementById('live-url-input');
		inputDOM.style.display="none";
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
        socket.emit('clientvideojsurl', obj);
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