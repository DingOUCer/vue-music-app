<template>
  <div>推荐页面</div>
</template>

<script>
// 在推荐页面的created声明周期中进行请求轮播图数据
import { getRecommend } from '@/service/recommend'
export default {
  name: 'recommend',
  async created () {
    // 发送请求到拿到结果是一个异步的过程 可以将created设计成一个async的样式
    const result = await getRecommend()
    console.log(result)
  }
}
</script>

<style scoped>

</style>
