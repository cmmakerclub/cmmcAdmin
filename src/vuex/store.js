import Vue from 'vue'
import Vuex from 'vuex'

import config from '../config'

const { menu, sidebar } = config

Vue.use(Vuex)

console.log('store.js', config)
const store = new Vuex.Store({

  state: {
    menu,
    sidebar
  },

  mutations: {

  }
})

export default store

