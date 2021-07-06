# [liveroom_v3.0](http://live.xiaoblogs.cn)

#### 直播间的版本号从0.x.x变为x.x.x

> HLS多人交流且无需登录可配置海报和流地址的React直播间应用

## 目录
+ [部署](#部署)
+ [更新说明](#更新说明)
+ [直播间历程](#直播间里程)

## 部署

建议在Linux下部署

### 1. 环境准备(请提前准备好，下面不演示如何搭建环境)
+ nodejs环境安装配置
+ npm的安装和配置或者cnpm
+ 服务器需要nginx或着apache


### 2. 构建
React应用构建

1. 通过Git GUI工具或者Git bash将此仓库clone到准备部署的环境下
2. 通过npm命令安装直播间所需要的模块
    `npm install`
3. 模块安装完毕后启动React应用
    `npm start`
4. 编写代码，同时React会自动编译。在浏览器里查看React应用
5. 编写完代码用npm命令build
    `npm run build`
6. 将本地的build目录上传到服务器，并且配置服务器的nginx或者apache
7. React应用部署完毕

服务端   
#### PS.此方法适用于old文件夹下的文件
1. 将liveroom_server文件夹上传到服务器
2. 通过npm命令安装服务端所需模块
    `npm install`
3. 之后通过node或者用npm下的pm2模块启动服务端js文件
    + 使用node(建议后台运行)
    `nohup node socket.js & > nohup.out 2>&1`
    `nohup node socket-backstage.js & > nohup.out 2>&1`

    + 使用pm2(需要使用npm安装)
    `pm2 start socket.js`
    `pm2 start socket-backstage.js`
4. 后台OK了   
   
#### 此方法为新的开服方法   
1. 切换到liveroom_server_new文件夹下   
2. 通过npm命令安装服务端所需模块
    `npm install`
3. 之后通过node或者用npm下的pm2模块启动服务端js文件
    + 使用node(建议后台运行)
    `nohup node ./app.js & > nohup.out 2>&1`

    + 使用pm2(需要使用npm安装)
    `pm2 start socket.js`
    `pm2 start socket-backstage.js`

### 3. 之后就通过url访问吧
> 如果要访问后台配置直播间的页面要在url后面加上/backstage
> eg.http://yoururl/ 这个是普通用户访问的页面
> eg.http://yoururl/backstage 这个是主播访问的页面


## 更新说明
### 1. 直播间3.0
+ 重新设计了UI
+ 播放器使用开源播放器[videojs](https://videojs.com/)
+ 直播间的后台管理页面
    > + 可以直接更改直播间标题
    > + 可以配置其他直播源地址
    > + 可以改变播放器的背景海报
+ 修复了直播间2.0的一些问题
+ 减少了第三方UI组件库的使用

### 直播间2.0
+ 增加了聊天功能，可以实时和在直播间的人互动了
+ 增加了在线人数统计
+ 使用第三方UI组件库重置了UI
+ 使用了React-flow-player组件，可以在移动端播放
+ 使用hls推流直播

### 直播间1.0
> 其实这个1.0版本没什么可说的，太老了

+ 使用red5软件做直播服务器
+ ...我都忘了2333

## 直播间历程
### 直播间1.0
> 当时正是Ultra2019的时候，为了给无法看Y2B的小伙伴云蹦迪的乐趣，想到了直播。不能用其他平台直播境外的东西，所以就自己用Red5和videojs5.x的版本弄了一个简易的网页。   

<img src="https://imgdata.xiaoblogs.cn/liveroomv1.png" width="90%">   

### 直播间2.0
> 直播间1.0的最大问题就是rtmp推流只能用flash播放，手机不支持，没法在手机上看。之后正巧学习了React框架就索性用了这个框架。播放器啊、聊天框啊都是用的[Ant Design](https://ant.design/docs/react/introduce-cn)第三方的UI组件库。播放器是[FlowPlayer](https://www.npmjs.com/package/react-flow-player)是H5的播放器，也就用HLS推流了。之后就一直没有了更新，期间也是因为其他事情，实习，考研什么的。直到2020年的这个多灾多难的假期，有了时间准备更新下直播间。作为颜控，受不了2.0的圆角设计和UI了，哈哈O(∩_∩)O   

<img src="https://imgdata.xiaoblogs.cn/liveroomv2.png" width="90%">   

### 直播间3.0
> 直播间3.0全新设计了UI，我使用的是Balsamiq Wireframes 4，在liveroom_design的文件夹里面有设计样式图片。本来打算是重新重做直播间，其实说到也算是。参考设计是Y2B啦。做完了UI并且实现了逻辑后发现直播间的标题和播放器海报，直播源不能更改。后面又想到了用前端的另一个页面直接可以对这些元素修改。到最后终于做完啦，开始直播喽！   

<img src="https://imgdata.xiaoblogs.cn/liveroomv3.png" width="90%">   


#### 最后的话
我的思路还是有局限的地方，有新的点子的你也希望在issue中讨论哦。不断的学习，编码，才能有更好的直播间。O(∩_∩)O


> 这个项目是用React的官方脚手架构建的 [Create React App](https://github.com/facebook/create-react-app).

#### 现在的版本是v3.0

#### [直播间链接](http://live.xiaoblogs.cn)
