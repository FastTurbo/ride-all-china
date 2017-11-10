<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <div class="logo">

        </div>
        <el-menu
          class="nav"
          :default-active="activeIndex"
          mode="horizontal"
          @select="handleSelect">
          <el-menu-item class="nav-item" index="1">首页</el-menu-item>
          <el-menu-item class="nav-item" index="2">骑行游记</el-menu-item>
          <el-menu-item class="nav-item" index="3">骑行路线</el-menu-item>
          <el-menu-item class="nav-item" index="4">骑行队伍</el-menu-item>
          <el-menu-item class="nav-item" index="5">骑行装备</el-menu-item>
        </el-menu>
      </el-header>

      <el-main class="main">
        <div style="height:1200px;line-height:1200px;">
          Main
        </div>
      </el-main>

      <el-footer class="footer">
        Footer
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        activeIndex:'1'

      }
    },
    method: {
      handleSelect() {
        console.log('We change the menu.')
      }
    }
  }
</script>

<style lang="less" scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    .header {
      height:160px !important;
      line-height:160px;
      background:#999;
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;

      .logo{
        height:100px;
      }

      .nav{
        height:60px;

        .nav-item{
          width:240px;
          font-size:16px;
        }
      }
    }

    .main {
      position:fixed;
      top:160px;
      bottom:60px;
      left:0;
      right:0;
      background:#dedede;
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
