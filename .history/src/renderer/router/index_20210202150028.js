import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/views/home.vue').default,
      children: [
        {
          path: '/',
          redirect: '/swaager'
        },
        { 
          path: '/swaager',
          name: 'swaager',
          component: require('@/views/swaager/swaager.vue').default
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
