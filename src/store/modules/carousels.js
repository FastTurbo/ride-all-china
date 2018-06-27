/**
 * Created by tianpf on 2017/11/14.
 */
import * as api from '../../api/api'
import * as types from '../type'

const state = {
  list:[]
}

const getters = {
  getList: state => state.list
}

const actions = {
    getList({commit},payload){
        api.getList()
          .then(res => {
            commit(types.GET_CAROUSELS_LIST,res)
          })
    }
}

const mutations = {
  [types.GET_CAROUSELS_LIST](state,payload) {
    state.list = payload.carousels
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
