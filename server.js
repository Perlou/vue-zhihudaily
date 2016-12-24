var express = require('express')
var path = require('path')
var compression = require('compression')

var app = express()

app.use(compression())

app.use(express.static(path.join(__dirname, 'public')))

app.use(function (req, res, next) {
    res.set({
        'Access-Control-Allow-Origin': '*'
        // 'Content-Type': 'application/json;charset=utf-8'
    })
    next()
})

// api start
var getListAPI = require('./api/api').getListAPI
var getHistoryStoryAPI = require('./api/api').getHistoryStoryAPI
var getDetailAPI = require('./api/api').getDetailAPI
var getThemesListAPI = require('./api/api').getThemesListAPI
var getThemeAPI = require('./api/api').getThemeAPI

app.get('/api/topStory', getListAPI)
app.get('/api/history/*', getHistoryStoryAPI)
app.get('/api/detail/*', getDetailAPI)
app.get('/api/themesList', getThemesListAPI)
app.get('/api/theme/*', getThemeAPI)
app.get('/api/image', function (req, res) {
  var superagent = require('superagent')
  var request = superagent.get(req.query.url)
  request.pipe(res)
  request.on('end', function () {})
})

// api end
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(3000, function () {
  console.log('App is running on port 3000.')
})
