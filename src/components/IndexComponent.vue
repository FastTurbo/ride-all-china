<template>
  <div>
    <div style="padding:0 120px;">
      <el-carousel
        class="carousel"
        :interval="5000"
        type="card">
        <el-carousel-item
          class="carousel-item"
          v-for="item,index in carousels"
          :key="item.index"
          :style="{background:`url(${item.url}) no-repeat top center`}">

          <p class="text">{{item.text}}</p>

        </el-carousel-item>

      </el-carousel>
    </div>

  </div>
</template>

<script>
  export default {
    name:'index',
    data () {
      return {
        carousels:[
          {
            url:'../static/images/carousel/tianlu.jpg',
            text:'天路'
          },
          {
            url:'../static/images/carousel/xizang.jpg',
            text:'西藏'
          },
          {
            url:'../static/images/carousel/xueshan.jpg',
            text:'雪山'
          },
          {
            url:'../static/images/carousel/hainan.jpg',
            text:'海南'
          },
          {
            url:'../static/images/carousel/gonglu.jpg',
            text:'公路'
          }
        ]
      }
    },
    method:{

    }
  }

</script>

<style lang="less" scoped="">

  .carousel{

    .carousel-item{
      height:300px;

      .text{
        background:#000;
        opacity:0.3;
        color:#fff;
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
