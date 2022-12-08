const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express()

try {

    app.use(
        /\/h5p*|\/login|\/logout/,
        createProxyMiddleware({
            target: 'http://192.168.1.72:8080',
            changeOrigin: true,
        })
    );

    //here we are configuring dist to serve app files
    app.use('/', serveStatic(path.join(__dirname, '/build')))

    // this * route is to serve project on different page routes except root `/`
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '/build/index.html'))
    })

    const port = process.env.PORT || 3000

    app.listen(port, error => {
        if (error) throw error
        console.log(`app is listening on port: ${port}`)
    })

    console.log(`app is listening on port: ${port}`)
} catch (e) {
    console.log(e)
}