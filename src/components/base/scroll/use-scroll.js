import BScroll from "@better-scroll/core";
import {onMounted, onUnmounted, ref} from "vue";
import ObserveDOM from "@better-scroll/observe-dom";

BScroll.use(ObserveDOM)
// 参数通过options传递
export default function useScroll(wrapperRef, options) {
  const scroll = ref(null)
  // 将滚动的dom元素 一般是content 绑定better-scroll
  onMounted(() => {
    scroll.value = new BScroll(wrapperRef.value, {
      observeDOM:true,
      ...options,
    })
  })

  onUnmounted(() => {
    scroll.value.destroy()
  })
}
