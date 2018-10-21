<template>
  <div id="app">
   <router-view></router-view>
   <Tap></Tap>
  </div>
</template>

<script>
import Tap from './base/Tab.vue'
export default {
  name: 'App',
  components: {
    Tap
  }
}
</script>

<style>
*{
margin: 0;
padding: 0;
}
ul,li{
list-style: none;
}
a{
text-decoration: none
}
input,button{
-webkit-appearance: none;
}
.content{
  position: fixed;
  width: 100%;
  top: 40px;
  bottom: 50px;
  overflow: auto;
}
</style>
