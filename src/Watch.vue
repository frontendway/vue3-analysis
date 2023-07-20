<template>
  <div>
    <button @click="changeName">改变</button>
  </div>
</template>

<script>
/* 
  1.reactive 生成 proxy 的实例，反应响应式数据
  2.watch 步骤：
    1：标准化 getter 函数，
    2：以调度方式生成 job 函数，内部会执行用户传入的 cb
    3：创建 watch 的 effect 实例，并执行 effect.run，其实就是主动触发 getter 函数去收集依赖
    4：至此响应式数据就收集到了 watcher 的 effect，建立了依赖关系
    5：一旦响应式数据被修改，通知依赖执行 job 函数，进而触发传入的 cb 函数
*/
import { reactive, watch } from 'vue'

export default {
  setup () {
    const obj = reactive({ name: '张三' })
    
    watch(obj, (newValue) => {
      console.log(newValue)
    })

    function changeName () {
      obj.name = '李四'
    }

    return {
      changeName,
      obj
    }
  }
}
</script>

<style lang="scss" scoped>

</style>