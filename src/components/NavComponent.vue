<template>
  <div>
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
        show:this.isShow
      }
    },
    computed:{
      nav(){
        if(this.show){
          return this.$store.getters.getNav
        }else{
          return []
        }
      }

    },
    watch:{
      isShow(val) {
        console.log(val)
        this.show = val
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
