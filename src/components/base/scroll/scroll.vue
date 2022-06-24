<template>
  <div ref="rootRef">
<!--    滚动的内容可以放在插槽里面-->
    <slot></slot>
  </div>

</template>

<script>
import useScroll from "@/components/base/scroll/use-scroll";
import {ref} from "vue";
export default {
  name: "scroll",
  // bs默认click是false 就是会阻止浏览器的原生click事件
  // 但是我们想要其为true，可以通过props声明并通过setup传递
  props: {
    click: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const rootRef = ref(null)
    useScroll(rootRef, props)
    return {
      rootRef
    }
  }
}
</script>

<style scoped>

</style>
