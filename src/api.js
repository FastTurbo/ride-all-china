/**
 * Created by tianpf on 2017/11/14.
 */
import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 2000
axios.defaults.headers.post['Content-Type']  = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = 'http://localhost:8080/'

axios.interceptors.request.use((config) => {
  if(config.method === 'post'){
    config.data = qs.stringify(config.data)
  }
  return config
},(error) => {
  return Promise.reject(error)
})

axios.interceptors.response.use((res) => {
  return res
},(error) => {
  return Promise.reject(error)
})

export function fetch(url,params){
  return new Promise((resolve,reject) => {
    axios.get(url,params)
      .then(res => {
        resolve(res.data)
      },err => {
        reject(err)
      })

      .catch(err => {
        reject(err)
      })
  })
}


export default {
  getList(params){
    return fetch('/static/datas/carousels.json',params)
  },
  getNav(params) {
    return fetch('/static/datas/nav.json',params)
  }
}
