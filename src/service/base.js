import axios from 'axios'
const baseURL = '/'
const ERR_OK = 0 // 定义一个响应错误码
axios.defaults.baseURL = baseURL

// 封装一个get请求
export function get(url, params) {
  return axios.get(url, {
    params
  }).then((res) => {
    // 对响应的数据进行格式化处理
    const serverData = res.data
    if (serverData.code === ERR_OK) {
      return serverData.result
    }
  }).catch((e) => {
    // 打印失败的信息
    console.log(e)
  })
}
