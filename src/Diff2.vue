<template>
  <div>
    <p v-for="item of obj.list" :key="item.id">{{ item.value }}</p>
    <button @click="onChange">改变</button>
  </div>
</template>

<script>
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
        { id: 3, value: 'c' },
        { id: 1, value: 'a' },
        { id: 2, value: 'b' }
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