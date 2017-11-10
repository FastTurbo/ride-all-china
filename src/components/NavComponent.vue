<template>
  <div>
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
  </div>
</template>

<script>
  export default{
    props:[
      'activeIndex'
    ]
  }
</script>

<style lang="less" scoped="">
  .nav {
    height: 60px;
    background: #409eff;

    .nav-item {
      width: 240px;
      color: #fff;
      font-size: 20px;

      &:hover, &.is-active {
        background: #a55555;
        border-bottom: 2px solid #a55555;
      }
    }
  }
</style>
