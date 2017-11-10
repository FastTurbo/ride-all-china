<template>
  <div>
    <div style="padding:0 275px;">
      <carousel-component :carousels="carousels"></carousel-component>
    </div>
    <div class="line"></div>
    <div style="margin:0 auto;">
      <ul class="riders">
        <li class="rider"
            v-for="item in 16"
            :key="item">
          <img :src="'../../static/images/riders/0' + (item<10?('0'+item):item) + '.jpg'" >
          <p>{{'0' + (item<10?('0'+item):item) }}</p>
        </li>

      </ul>
    </div>
  </div>

</template>

<script>
  import CarouselComponent from './CarouselComponent.vue'
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
    methods:{

    },
    computed:{

    },
    components:{
      CarouselComponent
    }
  }

</script>

<style lang="less" scoped="">

  .line{
    height:1px;
    margin:10px 30px;
    background:linear-gradient(to left,#b3e8ff,#0038e6,#b3e8ff);
  }

  .riders{
    list-style:none;
    margin:0;
    clear:both;

    &:after{
      content:'';
      height:0;
    }

    .rider{
      float:left;
      height:120px;
      width:200px;
      border:1px solid #fff;
      position: relative;

      &:hover{
        p{
          transition:height 0.2s ease-in-out;
          height:30px;
          visibility: visible;
        }
      }

      img{
        height:120px;
        width:200px;
        z-index:5;
      }

      p{
        position:absolute;
        margin:0;
        right:0;
        bottom:0;
        left:0;
        visibility: hidden;
        height:0;
        text-align:left;
        line-height:30px;
        padding-left:20px;
        color:#fff;
        background:rgba(0,0,0,0.5);
        z-index:20;
        transition:height 0.2s ease-in-out;
      }
    }

  }

</style>
