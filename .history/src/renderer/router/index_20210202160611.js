import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('../views/home.vue').default,
      children: [
        {
          path: '/',
          redirect: '/swaggers'
        },
        {
          path: '/swaggers',
          name: 'swagger',
          component: require('../views/swagger/swagger.vue').default
        },
        {
          path: '/mysqls',
          name: 'mysql',
          component: require('../views/mysql/mysql.vue').default
        }
      ]
    }
  ]
})
