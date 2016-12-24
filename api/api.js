/**
 * 知乎日报接口 api
 * @author Perlou(perlouke)
 */

const axios = require('axios')

// 获取最新消息接口
function getList () {
  return axios.get('http://news-at.zhihu.com/api/4/news/latest').then(data => {
    return data
  })
}

// // 获取过往消息
// function getHistoryStory (date) {
//   return axios.get('http://news.at.zhihu.com/api/4/news/before/' + date).then(data => {
//     return data
//   })
// }

// const getHistoryStoryAPI = (req, res) => {
//   getHistoryStory(req.query.date).then(function (data) {
//     res.send(data)
//   })
// }

export function getListApi (req, res) {
  getList().then(function (data) {
    res.send(data)
  })
}
