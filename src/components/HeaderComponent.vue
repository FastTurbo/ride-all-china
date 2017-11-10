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
      <nav-component :activeIndex="activeIndex"></nav-component>
    </el-header>
  </div>
</template>

<script>
  import HotComponent from './HotComponent.vue'
  import NavComponent from './NavComponent.vue'
  export default {
    props:[
      'activeIndex'
    ],
    components:{
      HotComponent,
      NavComponent
    }
  }

</script>

<style lang="less" scoped>
  .header {
    height:160px !important;
    padding:0;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;

  .row{
    height:100px;

  .logo{
    font-family: "Microsoft YaHei";
    padding-top:10px;
    color:#409EFF;

  p{
    margin:0;
  }

  .title {
    line-height: 60px;
    font-size: 40px;
  }
  .url{
    height:20px;
    line-height:20px;
    font-size:16px;
  }
  }

  .news{
    height:100px;
    text-align:left;
    padding:10px 20px;

  ul{
    margin:0;
    list-style:none;
  }



  }

  }


  }
</style>
