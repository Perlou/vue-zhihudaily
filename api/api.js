/**
 * 知乎日报接口 api
 * @author Perlou(perlouke)
 */

var axios = require('axios')

// 获取最新消息
function getList () {
  return axios.get('http://news-at.zhihu.com/api/4/news/latest').then(function (data) {
    return data
  })
}

const getListAPI = (req, res) => {
  getList().then(function (data) {
    res.send(data)
  })
}

// 获取过往消息
function getHistoryStory (date) {
  return axios.get('http://news.at.zhihu.com/api/4/news/before/' + date).then(function (data) {
    return data
  })
}

const getHistoryStoryAPI = (req, res) => {
  getHistoryStory(req.query.date).then(function (data) {
    res.send(data)
  })
}

// 获取详情
function getDetail (id) {
  return axios.get('http://news-at.zhihu.com/api/4/news/' + id).then(function (data) {
    return data
  })
}

const getDetailAPI = (req, res) => {
  getDetail(req.query.id).then(function (data) {
    res.send(data)
  })
}

// 获取主题列表
function getThemesList () {
  return axios.get('http://news-at.zhihu.com/api/4/themes').then(function (data) {
    return data
  })
}

const getThemesListAPI = (req, res) => {
  getThemesList().then(data => {
    res.send(data)
  })
}

// 获取主题
function getTheme (id) {
  return axios.get('http://news-at.zhihu.com/api/4/theme/' + id).then(function (data) {
    return data
  })
}

const getThemeAPI = (req, res) => {
  getTheme(req.query.id).then(data => {
    res.send(data)
  })
}

module.exports = {
  getListAPI,
  getHistoryStoryAPI,
  getDetailAPI,
  getThemesListAPI,
  getThemeAPI
}
