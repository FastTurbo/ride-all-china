<template>
  <div id="app">
    <el-container>
      <el-header style="height:100px;background:#999;">
        Header
      </el-header>
      <el-container>
        <el-side width="200px" style="background:#5b9021;"></el-side>
        <el-main style="background:#dedede;">
          <transition name="el-fade-in-linear">
            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
      <el-footer style="height:60px;background:#999;">
        Footer
      </el-footer>
    </el-container>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
