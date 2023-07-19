<template>
  <div>
    <p>{{ doubleCount }}</p>
    <button @click="addCount">增加</button>
  </div>
</template>

<script>
/* 
  1.ref 返回 ref 的实例
  2.computed 返回 computed 的实例
  3.当模板中访问 doubleCount 触发 computed 的 getter 收集依赖，此时 computed 收集到的模板的渲染函数
  4.doubleCount 需要有返回值渲染在模板上，执行 computed 传入的回调函数
  5.一旦回调函数被执行，函数内的响应式数据就会收集依赖，此时收集到的就是 computed，至此响应式数据就与 computed 建立了依赖关系
  6.当响应式数据触发 setter，会通知依赖派发，收集到的 computed 调度函数就会执行
  7.此时会再次派发 computed 收集到的模板渲染函数，通知视图更新
*/

import { computed, ref } from 'vue'
export default {
  setup () {
    const count = ref(1)
    debugger
    const doubleCount = computed(() => count.value * 2)

    function addCount () {
      count.value += 1
    }

    return {
      addCount,
      doubleCount
    }
  }
}
</script>

<style lang="scss" scoped>

</style>