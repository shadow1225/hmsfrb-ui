import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/test',
      component: resolve => require(['../pages/test.vue'],resolve),
      meta: {title: '测试'}
    }
  ]
})
