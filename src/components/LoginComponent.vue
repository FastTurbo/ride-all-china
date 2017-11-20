<template>
  <div >
    <el-form
      class="login-form"
      :label-position="right"
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
        prop="pass"
        :rules="[
          {required:true,message:'请输入密码!'}
        ]">
        <el-input type="password" v-model="user.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login('user')">登录</el-button>
        <el-button type="warning" @click="reset('user')">重置</el-button>
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

  }

</style>
