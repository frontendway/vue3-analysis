import { createApp } from 'vue'
import Computed from './Computed.vue'
import Watch from './Watch.vue'

/* 
  初始化流程
  1.创建当前平台 app，生成一堆当前平台的渲染函数
  2.开始挂载组件
  3.创建组件 vnode，将 vnode patch 到 dom
  4.执行 processComponent，进而执行 mountComponent
  5.创建组件实例，执行 setup 函数并将返回值赋值到组件实例上以便模板中能够访问
  6.执行 setupRenderEffect 副作用函数，其实就是生成 render effect 的实例并主动执行一次渲染
  7.生成 subTree 再 patch 一次到 dom
*/

createApp(Watch).mount('#app')
