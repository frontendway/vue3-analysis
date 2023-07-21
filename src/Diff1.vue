<template>
  <div>
    <p v-for="item of obj.list" :key="item.id">{{ item.value }}</p>
    <button @click="onChange">改变</button>
  </div>
</template>

<script>
/* 
  diff 算法流程：
    1.同步头部节点
    2.同步尾部节点
*/
// 新节点多于旧节点
import { reactive } from 'vue'

export default {
  setup () {
    const obj = reactive({
      list: [
        { id: 1, value: 'a' },
        { id: 2, value: 'b' },
      ]
    })

    const onChange = () => {
      obj.list = [
        { id: 1, value: 'a' },
        { id: 2, value: 'b' },
        { id: 3, value: 'c' },
      ]
    }

    return {
      obj,
      onChange
    }
  }
}
</script>

<style lang="scss" scoped>

</style>