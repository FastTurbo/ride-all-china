<template>
  <div class="wrapper">
    <div v-show="isShow">
      <el-menu
        class="nav"
        :default-active="activeIndex"
        mode="horizontal"
        @select="handleSelect">
        <el-menu-item
          class="nav-item"
          v-for="item in nav"
          :key="item.index"
          :index="item.index">
          {{item.name}}
        </el-menu-item>
      </el-menu>
    </div>

  </div>
</template>

<script>
  export default{
    props:[
      'isShow',
      'activeIndex'
    ],
    created() {
      this.$store.dispatch('getNav')
    },
    data(){
      return {

      }
    },
    computed:{
      nav(){
        return this.$store.getters.getNav
      }
    },
    methods:{
      handleSelect() {
        console.log('select...')
      }
    }
  }
</script>

<style lang="less" scoped="">

  .wrapper{
    height:60px;
    background:#409eff;
  }


  .nav {
    height: 60px;
    background: #409eff;

    .nav-item {
      width: 240px;
      color: #fff;
      font-size: 20px;

      &:hover, &.is-active {
        color:#fff;
        background: #a55555;
        border-bottom: 2px solid #a55555;
      }
    }
  }
</style>
