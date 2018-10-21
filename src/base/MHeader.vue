<template>
<div class="header">
   <slot></slot>
   <i class="iconfont icon-fanhui" v-if="back" @click="goback" ></i>
</div>
</template>
<script>
export default{
  props: {
    back: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {msg: 'home'}
  },
  created () {},
  methods: {
    goback () {
      this.$router.go(-1)
    }
  },
  computed: {},
  components: {}
}
</script>
<style scoped lang="less">
.header{
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 40px;
 line-height: 40px;
 background: #afd9ee;
 text-align: center;
 i{
    position: absolute;
    left: 10px;
    font-size: 20px;
 }
}
</style>
