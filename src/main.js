import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'

import init from './init'
import config from './config'
import store from './vuex/store'

init(config)

Vue.use(Router)
Vue.use(Resource)

import App from './App'
import Dashboard from './components/pages/Dashboard/'
import ChartJs from './components/pages/Charts/ChartJs'

const { sidebar } = config
const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: App},
    {path: '/dashboard', name: 'Dashboard', component: Dashboard},
    {path: '/charts/ChartJs', name: 'ChartJs', component: ChartJs}
  ]
})

router.beforeEach((to, from, next) => {
  console.log('router:beforeEach')
  console.log(sidebar)
  if (sidebar.isMobile && sidebar.opened) {
    sidebar.opened = false
  }
  next()
})

// router.start(App, 'app')
/* eslint-disable no-new */
// new Vue({
//   router: router,
//   el: 'body',
//   components: {App}
// })

// new Vue(Vue.util.extend({ router }, App), store).$mount('#app')
new Vue({
  router,
  store, // inject store to all children
  el: '#app',
  render: h => h(App)
})

