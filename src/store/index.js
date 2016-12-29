/**
 * Created by Administrator on 2016/12/2.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './action.js'

Vue.use(Vuex)

const state = {
  totalTime: 0,
  list: []
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
