<template>
<div class="detail">
	<MHeader :back=true>添加</MHeader>
   <ul class="detailul">
     
     <li>
       <label for="bookname">书名</label>
       <input type="text" id="bookname" v-model="book.bookname">
     </li>
     <li>
       <label for="bookinfo">信息</label>
       <input type="text" id="bookinfo" v-model="book.bookinfo">
     </li>
     <li>
       <label for="price">价格</label>
       <input type="text" id="price" v-model="book.price">
     </li>
     <li>
       <button @click="add">确认添加</button>
     </li>
   </ul>
   
</div>
</template>
<script>
import MHeader from '../base/MHeader.vue'
import {addBook} from '../api'
export default{
  data () {
    return {
      book: {}
    }
  },
  created () {//页面加载需要根据id发送请求
    
  },
  methods: {
    async add () {
      await addBook(this.book);
      this.$router.push('/list')
    },
   },
  components: {
  	MHeader
  }
}
</script>
<style scoped lang="less">
.detail{
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: #fff;
	width: 100%;
	z-index: 1;

}
.detailul{
  margin: 50px 10px 0 10px;
  li{
    label{
      display: block;
      font-size: 25px;
    }
    input{
       margin: 10px 0;
       height: 25px;
       width: 100%;
       outline: none;
       border: none;
       border: 1px solid #e3e3e3;
       border-radius: 5px;
       text-indent: 10px
    }
  }
}
.detail button{
    display: block;
    width: 80px;
    height: 35px;
    background: orange;
    border: none;
    border-radius:4px ;
    outline: none;
    background: #2aabd2
  }
</style>
