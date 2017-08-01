/**
 * 使用mockjs 模拟数据接口的模块
 */
import Mock from 'mockjs'
import data from './data.json'
// 注册路由
Mock.mock('/api/goods', {
  code: 0,
  data: data.goods
})
Mock.mock('/api/rating', {
  code: 0,
  data: data.rating
})
Mock.mock('/api/seller', {
  code: 0,
  data: data.seller
})

