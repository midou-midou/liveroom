# Newskin-videojs-v6-v7
Newskin videojs v6 &amp; v7
<img src="https://raw.githubusercontent.com/maluklo/Newskin-videojs-v6-v7/master/Newskin.png">
### Quick Start

```html
<link href="https://unpkg.com/video.js@7.3.0/dist/video-js.min.css" rel="stylesheet">
    <script src="https://unpkg.com/video.js@7.3.0/dist/video.min.js"></script>
<script src="newskin.js"></script>

<video id="player" 
class="video-js" 
controls preload="none" 
width="960" 
height="400" 
poster="http://vjs.zencdn.net/v/oceans.png" 
data-setup="{}">
<source src="http://vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
<source src="http://vjs.zencdn.net/v/oceans.webm" type="video/webm">
<source src="http://vjs.zencdn.net/v/oceans.ogv" type="video/ogg">
</video>
```
### Or

```html
<link href="https://unpkg.com/video.js@7.3.0/dist/video-js.min.css" rel="stylesheet">
    <script src="https://unpkg.com/video.js@7.3.0/dist/video.min.js"></script>
<script src="newskin.js"></script>

<video id="player" class="video-js"></video>
<script>
var Player = videojs("player", { 
"controls": true, 
"autoplay": false, 
"preload": "auto" ,
"poster": "http://vjs.zencdn.net/v/oceans.png",
"width": 960,
"height": 400,
sources: [
{ src: 'https://vjs.zencdn.net/v/oceans.mp4', type: 'video/mp4'},
{ src: 'https://vjs.zencdn.net/v/oceans.webm', type: 'video/webm'},
{ src: 'https://vjs.zencdn.net/v/oceans.ogv', type: 'video/ogg'}
],
});
</script>
```
