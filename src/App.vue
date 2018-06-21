<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
  export default {
    name: 'app',
    data() {
      return {

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
  }
</style>
