/**
 * Created by tianpf on 2017/11/9.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import com from './modules/com'
import carousels from './modules/carousels'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    com,
    carousels
  }
})
