<template>
  <div>
    <el-header class="header">
      <el-row class="row">
        <el-col class="logo" :span="4">

          <p class="title">骑行中国</p>
          <p class="url">www.ridechina.com</p>
        </el-col>

        <el-col class="news" :offset="4" :span="16">
          <hot-component></hot-component>
        </el-col>

      </el-row>
      <nav-component :is-show="!isLogin" :active-index="activeIndex"></nav-component>
      <el-button-group class="button-group">
        <el-button type="primary" @click="login">
          <router-link to="/login" >登录</router-link>
        </el-button>
        <el-button type="primary" @click="logout">
          <router-link to="/">退出</router-link>
        </el-button>
      </el-button-group>
    </el-header>
  </div>
</template>

<script>
  export default {
    props: [
      'activeIndex'
    ],
    data(){
      return {
        isLogin:false
      }
    },
    components: {
      'hot-component': () => import('./HotComponent.vue'),
      'nav-component': () => import('./NavComponent.vue')
    },
    methods:{
      login(){
        this.isLogin = true
      },
      logout() {
        this.isLogin = false
      }
    }
  }

</script>

<style lang="less" scoped>
  .header {
    height: 160px !important;
    padding: 0;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;

    a{
      text-decoration: none;
      color:#fff;
    }

    .row {
      height: 100px;

      .logo {
        font-family: "Microsoft YaHei";
        padding-top: 10px;
        color: #409EFF;

        p {
          margin: 0;
        }

        .title {
          line-height: 60px;
          font-size: 40px;
        }
        .url {
          height: 20px;
          line-height: 20px;
          font-size: 16px;
        }
      }

      .news {
        height: 100px;
        text-align: left;
        padding: 10px 20px;

        ul {
          margin: 0;
          list-style: none;
        }

      }

    }

    .button-group{
      position:absolute;
      bottom:10px;
      right:20px;

    }

  }
</style>
