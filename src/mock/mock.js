import { user,riders } from './user'
import axios from 'axios'
import qs from 'qs'
import MockAdapter from 'axios-mock-adapter'

export default {

  bootstrap(){
    let mock = new MockAdapter(axios);

    mock.onGet('/success').reply(200,{
      msg:'success'
    })

    mock.onGet('/error').reply(500,{
      msg:'failure'
    })

    //login
    mock.onPost('/login').reply(config => {
      console.log(config);
      let {name,password} = JSON.parse(config.data);
      return new Promise((resolve,reject) => {
          setTimeout(()=>{
            let hasUser = user.some(u => {
              if(u.name === name && u.password === password){
                  return true;
              }
            })

            if(hasUser){
              resolve([200,{code:200,msg:'请求成功',name}])
            }else{
              resolve([200,{code:500,msg:'用户名和密码错误！'}])
            }
          },1000)
      })
    })

    mock.onAny().passThrough();

  }
}
