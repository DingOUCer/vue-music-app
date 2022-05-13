// 负责轮播图相关的请求
// 导入get方法
import { get } from './base'
export function getRecommend() {
  // 通过一个get请求获取数据 这个
  // 这里的url是通过前端发送过去的请求,应该和后端router里面的请求一致
  return get('./api/getRecommend')
}
// 完成后端请求代理 和前端请求的封装 接下来只需要在前面视图里面发送请求就行
