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
      <el-dropdown class="dropdown">
        <div class="user-info">{{sessionName}}</div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>消息</el-dropdown-item>
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
        </el-dropdown-menu>

      </el-dropdown>
    </el-header>
  </div>
</template>

<script>
  export default {

    data(){
      return {
        isLogin:false,
        activeIndex:'1',
        sessionName:''
      }
    },
    components: {
      'hot-component': () => import('./HotComponent.vue'),
      'nav-component': () => import('./NavComponent.vue')
    },
    methods:{
      login(){
        this.isLogin = false;
      },
      logout() {
        sessionStorage.removeItem('user');
        this.$router.push({path:'/login'})
      }
    },
    mounted(){
      this.sessionName = sessionStorage.getItem('user') || ''
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

    .dropdown{
      position:absolute;
      bottom:0px;
      right:20px;

      .user-info{
        height:60px;
        line-height:60px;
        font-size:24px;
        color:#fff;
        cursor:pointer;
      }
    }
  }
</style>
