import BScroll from "@better-scroll/core"
import Slide from "@better-scroll/slide"
import {onMounted, onUnmounted, ref} from "vue"
// 注册插件
BScroll.use(Slide)
// bs是在mounted钩子函数之后 所以不能在setup里面搞
export  default function useSlider(wrapperRef) {
  const slider = ref(null)
  const currentPageIndex = ref(0)
  onMounted(() => {
    // 这里多次使用了slider.value 所以使用变量sliderVal缓存
    const sliderVal = slider.value = new BScroll(wrapperRef.value, {
      click: true,
      scrollX: true, //横向滚动
      scrollY: true,
      momentum: false, // 当快速在屏幕上滑动一段距离的时候，会根据滑动 的距离和时间计算出动量，并生成滚动动画。
      bounce: false, //当滚动超过边缘的时候会有一小段回弹动画。设置为 true 则开启动画。
      probeType: 2, // probeType 为 2，仅仅当手指按在滚动区域上，一直派发 scroll 事件
      slide: true
    })
    // dot图例会指示当前的banner是第几页 当用户拖动 banner 出现下一张时，我们希望下面的 dot 图例会同步变换
    sliderVal.on('slideWillChange', (page) => {
      currentPageIndex.value = page.pageX // 即将展示的横向页面的索引值，下标从 0 开始
    })
  })
  onUnmounted(() => {
    slider.value.destroy()   //初始化挂载之后进行挂载销毁
  })
  return {
    slider,
    currentPageIndex
  }
}

