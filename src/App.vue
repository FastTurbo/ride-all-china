<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <el-row class="row">
          <el-col class="logo" :span="4">
            <p class="title">骑行中国</p>
            <p class="url">www.ridechina.com</p>
          </el-col>

          <el-col class="news" :offset="4" :span="16">
            <ul>
              <li class="new">一个香港妹纸、一个台湾仔、一个广东人的环华之旅</li>
              <li class="new">单人骑行日本九州 四国 本州地区</li>
              <li class="new">哥俩好，骑行东南亚4国—滇藏—中尼公路—反骑新藏.</li>
              <li class="new">愿你我永远年轻，永远热泪盈眶。----环华流浪记</li>
              <li class="new">17-04-20 要有最朴素的生活， 与最遥远的梦想 </li>
              <li class="new">记录一下17年暑假川进青出骑行之旅我有故事 你 来听吗</li>
            </ul>
          </el-col>


        </el-row>
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
        <router-view></router-view>
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
      }
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

          .new{
            width:50%;
            height:26px;
            line-height:26px;
            color:#999;
            float:left;
            cursor:pointer;

            &:hover{
              color:#409EFF;
            }
          }

        }

      }

      .nav{
        height:60px;
        background:#409eff;

        .nav-item{
          width:240px;
          color:#fff;
          font-size:20px;

          &:hover,&.is-active{
            background:#a55555;
            border-bottom:2px solid #a55555;
          }
        }
      }
    }

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
