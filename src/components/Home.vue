<template>
  <div>
  <el-container>
    <header-component :activeIndex="activeIndex"></header-component>
    <el-main class="main">
      <router-view></router-view>
    </el-main>

    <el-footer class="footer">
      <footer-component></footer-component>
    </el-footer>
  </el-container>
  </div>
</template>

<script>
  import HeaderComponent from '@/components/HeaderComponent.vue'
  import FooterComponent from '@/components/FooterComponent.vue'
  export default {
    name: 'home',
    data() {
      return {
        activeIndex:'1'

      }
    },
    components:{
      HeaderComponent,
      FooterComponent
    }
  }
</script>

<style lang="less" scoped>
    .main {
      position:fixed;
      padding:10px 20px;
      top:160px;
      bottom:30px;
      left:0;
      right:0;
      overflow:hidden;
      overflow-y:auto;
    }

    .footer {
      height: 30px !important;
      line-height: 30px;
      background: #409eff;
      width: 100%;
      text-align: center;
      position: fixed;
      bottom: 0;
      left: 0;
    }
</style>
