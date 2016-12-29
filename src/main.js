import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App.vue'
import Home from './components/Home.vue'
import store from './store'
import TimeEntries from './components/TimeEntries.vue'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Home
    }, {
      path: '/home',
      component: Home
    }, {
      path: '/time-entries',
      component: TimeEntries,
      children: [{
        path: 'log-time',
        // 懒加载
        component: resolve => require(['./components/LogTime.vue'], resolve)
      }]
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  router: router,
  store: store,
  render: h => h(App)
}).$mount('#app')
