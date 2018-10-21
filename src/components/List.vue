<template>
<div>
    <MHeader>列表</MHeader>
    <div class="content" ref="scroll"  @scroll="loadmore">
      <ul>
        <router-link v-for="(book,key) in Books" :to="{name:'detail',params:{
          bookid:book.bookId}}" tag="li" :key ="key">
          <img :src="book.bookimg" alt="">
          <div>
            <h5>{{book.bookname}}</h5>
            <p>{{book.bookinfo}}</p>
            <b>{{book.price}}</b>
            <div class="btnlist">
              <button @click.stop="remove(book.bookId)">删除</button>
              <button @click.stop="addcar(book)">添加</button>
            </div>
          </div>
        </router-link>
      </ul>
    </div>
</div>
</template>
<script>
import MHeader from '../base/MHeader.vue'
import {getBooks,removeBook,getPage} from '../api'
import * as Types from '../store/mutations-type.js'
export default{
  data () {
    return {
      Books:[],
      offset:0,
      hasmore:true
    }
  },
  created () {
    this.getpagenation()
  },
  methods: {
    //添加购物车事件
    addcar(book){
       this.$store.commit(Types.ADD_CART,book)
    },
    //滚动事件
    loadmore(){
       clearTimeout(this.timer);
       this.timer =setTimeout(()=>{

       let {scrollTop,clientHeight,scrollHeight} = this.$refs.scroll;
        if (scrollTop+clientHeight+20>scrollHeight) {
           this.getpagenation()
        }

      },13)
      
    },
    // async getBook(){
    //  let {data} = await getBooks()
    //  this.Books = data;
    // },
    async getpagenation(){
      if (this.hasmore) {
        let res =  await getPage(this.offset)
        console.log(res)
        let {hasmore,books} =res.data;
        this.hasmore= hasmore;
        this.Books= [...this.Books,...books];
        this.offset =this.Books.length // 维护便宜量的便宜，就是总数的长度
      }
     },
    async remove(id){
      await removeBook(id);
      this.Books=this.Books.filter(item=>item.bookId!==id);
      
    }
  },
  computed: {},
  components: {
  	MHeader
  }
}
</script>
<style scoped>
  .content ul{
    padding: 10px;
  }
  .content ul li{
    display: flex;
    padding-bottom: 10px;
    border-bottom: 1px solid #f1f1f1;
  }
  .content ul img{
    width: 130px;
    height: 150px;
  } 
  .content h5{
    font-size: 20px;
    line-height: 35px;
  }
  .content p{
    color: #2a2a2a;
    line-height: 25px;
  }
  .content b{
    color: red;
    line-height: 25px;
  }
  .content button{
    display: block;
    width: 60px;
    height: 20px;
    background: orange;
    border: none;
    border-radius:15px ;
    outline: none
  }
  .btnlist{
    padding-top: 20px;
    width: 140px;
    display: flex;
    justify-content: space-around
  }
</style>
