<template>
  <div >
    <el-form
      class="login-form"
      label-width="100px"
      :model="user">

      <el-form-item
        label="登录名"
        prop="name"
        :rules="[
          {required:true,message:'请输入用户名!'}
        ]">
        <el-input v-model="user.name"></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
        :rules="[
          {required:true,message:'请输入密码!'}
        ]">
        <el-input type="password" v-model="user.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login('user')">登录</el-button>
        <el-button type="warning" @click="reset('user')">重置</el-button>
        <p class="tips">
          <router-link class="link" to="/findPass">忘记密码？</router-link>
          <router-link class="link" to="/register">没有账号？注册</router-link>
        </p>
      </el-form-item>
      <el-form-item>

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
      }
    }
  },
  created () {
    this.user.name = ''
    this.user.password = ''
  },
  methods:{
    login(user) {

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
    width:800px;
    margin:0 auto;
    padding:20px;

    .el-form-item{
      width:400px;
      margin:20px auto 0;
    }

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
