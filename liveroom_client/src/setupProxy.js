const proxy = require('http-proxy-middleware')
   
module.exports = function(app) {
    app.use(
        proxy('/liveAnnounce', {
            target: 'http://localhost:8000',
            changeOrigin: true,
            pathRewrite: {'^/liveAnnounce': ''}
        }),
        proxy('/sendAnnoProxy', {
            target: 'http://localhost:8000',
            changeOrigin: true,
            pathRewrite: {'^/sendAnnoProxy': ''}
        }),
        proxy('/socket.io', {
            target: 'http://localhost:83',
            changeOrigin: true,
        })
    )
}