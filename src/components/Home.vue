<template>
<div>
    <MHeader>首页</MHeader>
    <div class="content">
      <Swiper :swiperSlides="sliders"></Swiper>
      <div class="center-block">
        <h3>热门图书</h3>
        <ul>
          {{hotBooks}}
          <li v-for="hot in hotBooks">
            <img :src="hot.bookimg" alt="">
            <b>{{hot.bookname}}</b>
          </li>
        </ul>
      </div>
    </div>
</div>
</template>
<script>
import MHeader from '../base/MHeader.vue'
import Swiper from '../base/Swiper.vue'
import {getSliders,getHotBook} from '../api'
export default{
   created () {
   this.getslider()
   this.getHot()
  },
  data () {
    return {
      sliders: [],
      hotBooks:[]
    }
  },
  methods: {
    async getHot(){
      let {data} = await getHotBook()
      this.hotBooks = data;
      console.log(this.hotBooks,'222')
    },
    async getslider(){
      // 给data起别名 对象中的属性名字必须和得到的结果名字一致
      let {data: sliders} = await getSliders()
      // 将获取的数据放在sliders中
      this.sliders = sliders
    }
  },
  computed: {},
  components: {
    MHeader,
    Swiper
  }
}
</script>
<style scoped lang="less">
  h3 {}
  
.center-block{
  width: 90%;
  margin: 0 auto;
}
ul{
  padding-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  li{
    width: 50%;
    img{
      width: 100%;
    }
  }
}
</style>
