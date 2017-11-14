/**
 * Created by tianpf on 2017/11/10.
 */
import api from '../../api'
import * as types from '../type'

const state = {
  nav:[]
}

const getters = {
  getNav:state => state.nav

}

const actions = {
  getNav({commit},payload) {
    api.getNav()
      .then(res => {
        commit(types.GET_NAV_LIST,res)
      })
  }

}


const mutations = {
  [types.GET_NAV_LIST](state,payload) {
    state.nav = payload.nav
  }
}


export default{
    state,
    getters,
    actions,
    mutations
}
