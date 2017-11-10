<template>
  <div id="app">
    <el-container>
      <header-component :activeIndex="activeIndex"></header-component>
      <el-main class="main">
        <router-view></router-view>
      </el-main>

      <el-footer class="footer">
        Footer
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import HeaderComponent from './components/HeaderComponent.vue'
  export default {
    name: 'app',
    data() {
      return {
        activeIndex:'1'

      }
    },
    method: {
      handleSelect() {
      }
    },
    components:{
      HeaderComponent
    }
  }
</script>

<style lang="less" scoped>
  #app {
    font-family: 'Microsoft YaHei', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;



    .main {
      position:fixed;
      top:160px;
      bottom:60px;
      left:0;
      right:0;
      overflow:hidden;
      overflow-y:auto;
    }

    .footer {
      height: 60px;
      line-height: 60px;
      background: #999;
      width: 100%;
      text-align: center;
      position: fixed;
      bottom: 0;
      left: 0;
    }

  }
</style>
