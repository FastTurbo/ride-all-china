import Mock from 'mockjs'
let user = [{
  id:200001,
  name:'admin',
  password:'123456'
}]

let riders = []

for(let i = 0;i<131;i++){
  riders.push(Mock.mock({
    'id|+1':1,
    name:Mock.Random.cname(),
    'age|16-64':1,
    address:Mock.Random.county(true),
    sex:Mock.Random.integer(0,1),
    'brand|1':['美丽达','捷安特','崔克','闪电','喜德盛','自己组装']
  }))
}
export {user,riders}
