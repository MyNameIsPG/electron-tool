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
          name: 'swaager',
          component: require('@/views/swaager/swaager.vue').default
        },
        {
          path: '/swaager',
          name: 'swaager',
          component: require('@/views/swaager/swaager.vue').default
        },
        {
          path: '/mysql',
          name: 'mysql',
          component: require('@/views/mysql/mysql.vue').default
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
