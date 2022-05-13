import { createRouter, createWebHashHistory } from 'vue-router'
// 导入路由视图
import Recommend from '@/views/recommend'
import Singer from '@/views/singer'
import Search from '@/views/search'
import TopList from '@/views/top-list'
const routes = [
  // 设置重定向
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    // recommend对应的视图会渲染Recommend这个组件
    component: Recommend
  },
  {
    path: '/singer',
    component: Singer
  },
  {
    path: '/top-list',
    component: TopList
  },
  {
    path: '/search',
    component: Search
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
