<template>
  <div class="recommend">
<!--    scroll是实现滚动 是针对第一个子元素生效的-->
<!--    所以需要在下面添加一个容器包裹slider和recommend-list-->
    <scroll class="recommend-content">
      <div>
        <div class="slider-wrapper">
          <div class="slider-content">
            <!--        slider数据有了之后才进行渲染-->
            <slider  v-if="sliders.length" :sliders="sliders"></slider>
          </div>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li
                v-for="item in albums"
                class="item"
                :key="item.id"
            >
              <div class="icon">
                <img width="60" height="60" :src="item.pic">
              </div>
              <div class="text">
                <h2 class="name">
                  {{ item.username }}
                </h2>
                <p class="title">
                  {{item.title}}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
// 在推荐页面的created声明周期中进行请求轮播图数据
import { getRecommend } from '@/service/recommend'
import Slider from '@/components/base/slider/slider'
import Scroll from '@/components/base/scroll/scroll'
export default {
  name: 'recommend',
  components: {
    Slider,
    Scroll
  },
  // 定义轮播图数据, 歌单数据字段
  data() {
    return {
      sliders: [],
      albums: [],
    }
  },
  async created () {
    // 发送请求到拿到结果是一个异步的过程 可以将created设计成一个async的样式
    const result = await getRecommend()
    console.log(result)
    this.sliders = result.sliders
    this.albums = result.albums
  }
}
</script>

<style lang="scss" scoped>
.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
  overflow: scroll;
  .recommend-content {
    height: 100%;
    overflow: hidden;
    .slider-wrapper {
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 40%;
      overflow: hidden;
      .slider-content {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }
    .recommend-list {
      .list-title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-theme;
      }
      .item {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding: 0 20px 20px 20px;

        .icon {
          flex: 0 0 60px;
          width: 60px;
          padding-right: 20px;
        }
        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          line-height: 20px;
          overflow: hidden;
          font-size: $font-size-medium;
        }
        .name {
          margin-bottom: 10px;
          color: $color-text;
        }
        .title {
          color: $color-text-d;
        }
      }
    }
  }
}
</style>
