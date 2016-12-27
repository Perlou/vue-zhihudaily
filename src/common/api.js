/**
 * api.js 负责与后端的通信
 * @author Perlou(perloukevin@gmail.com)
 */

'use strict'

import axios from 'axios'

// 获取最近信息
export function getLatestStory () {
  return axios.get('/api/topStory').then(data => {
    return data.data
  })
}

// 获取过往消息
export function getHistoryStory (date) {
  return axios({
    url: '/api/history/',
    method: 'GET',
    params: {
      date: date
    }
  }).then(data => {
    return data.data
  })
}

// 获取 side-nav 主题列表
export function getThemesList () {
  return axios({
    method: 'GET',
    url: '/api/themesList'
  }).then(data => {
    return data.data
  })
}
