<template>
  <div >
    <el-form class="login-form" :rules="rules" :model="user">
      <el-form-item prop="name">
        <el-input v-model="user.name" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="user.password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="primary" @click="login('user')">登录</el-button>
        <el-button type="warning" @click="reset('user')">重置</el-button>
        <p class="tips">
          <router-link class="link" to="/findPass">忘记密码？</router-link>
          <router-link class="link" to="/register">没有账号？注册</router-link>
        </p>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user:{
        name:'',
        password:''
      },
      rules:{
        name:[
          { required:true,message:'请输入用户名',trigger:'blur'}
        ],
        password:[
          { required:true,message:'请输入密码',trigger:'blur'}
        ]
      }
    }
  },
  created () {
    this.user.name = ''
    this.user.password = ''
  },
  methods:{
    login() {
        console.log(this.user)
        if(this.user.name == 'admin' && this.user.password == '123456'){
            sessionStorage.setItem('user',this.user.name);
          this.$router.push({path:'/home'});
        }else{
            this.$message({
              message:'用户名或密码错误',
              type:'error'
            })
        }
    },
    reset(user) {

    }
  }

}
</script>

<style lang="less" scoped>
  .login-form{
    border:1px solid #409eff;
    border-radius:5px;
    width:400px;
    margin:200px auto;
    padding:30px 30px 0px 30px;
    //background:linear-gradient(left top,#33CCFF,#00FF00);
  }

  .tips{
    color:#409eff;
    .link{
      text-decoration: none;
      color:#409eff;
      padding:0 5px;

      &:first-child{
        border-right:1px solid #409eff;
      }
    }
  }

</style>
