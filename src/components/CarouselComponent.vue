<template>
  <div>
    <el-carousel
      class="carousel"
      :interval="5000"
      type="card">
      <el-carousel-item
        class="carousel-item"
        v-for="item,index in carousels"
        :key="item.index"
        :style="{background:`rgba(0,0,0,0.1) url(${item.url}) no-repeat top center`}">

        <p class="text"><span class="date">{{ item.date }}</span> {{ item.text }}</p>

      </el-carousel-item>

    </el-carousel>
  </div>
</template>

<script>
  export default {
    props:[
      'carousels'
    ]
  }

</script>

<style lang="less" scoped>
  .carousel{

  .carousel-item{
    height:300px;

  .text{
    background:rgba(0,0,0,0.4);
    color:#fff;
    opacity:1;
    height:40px;
    width:100%;
    line-height:40px;
    margin:0;
    padding:0 20px;
    text-align:left;
    position:absolute;
    bottom:0;
    left:0;
  }
  }
  }
</style>
