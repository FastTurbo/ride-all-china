<template>
  <div>
    <div style="padding:0 275px;">
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
    <div class="line"></div>

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
            date:'2017-04-23',
            text:'畅游天路 呼吸大自然空气'
          },
          {
            url:'../static/images/carousel/xizang.jpg',
            date:'2017-5-11',
            text:'骑行西藏 领略鬼斧神工'
          },
          {
            url:'../static/images/carousel/xueshan.jpg',
            date:'2017-02-09',
            text:'雪山之巅 唯美尽收眼底'
          },
          {
            url:'../static/images/carousel/hainan.jpg',
            date:'2017-05-22',
            text:'壮美海南 秋水长天一色'
          },
          {
            url:'../static/images/carousel/gonglu.jpg',
            date:'2017-07-02',
            text:'征服公路 享受成功快乐'
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

  .line{
    height:1px;
    margin:10px 30px;
    background:linear-gradient(to left,#b3e8ff,#0038e6,#b3e8ff);
  }

</style>
