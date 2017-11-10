/**
 * Created by tianpf on 2017/11/9.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import com from './modules/com'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    com
  }
})
