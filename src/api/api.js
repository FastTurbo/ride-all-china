import axios from 'axios'

let base = ''
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

export const userLogin = params => {return axios.post(`${base}/login`,params).then(res => res.data)};

export const getRiders = params => {return axios.get(`${base}/getRiders`,params).then(res => res.data)};

export const getNav = () => { return axios.get(`/static/datas/nav.json`).then(res => res.data)}

export const getList = () => { return axios.get(`/static/datas/carousels.json`).then(res => res.data)}
