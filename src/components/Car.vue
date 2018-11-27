<template>
<div>
	<!-- <MHeader>购物车</MHeader> -->
  {{carlist}}
 </div>
</template>
<script>
import MHeader from '../base/MHeader.vue'
import {mapState} from 'vuex'
export default{
  data () {
    return {msg: 'home'}
  },
  created () {},
  methods: {},
  computed: {
     ...mapState(['carlist'])
    // carlist(){
    //   return this.$store.state.carlist
    // }
  },
  components: {
  	MHeader
  }
}
</script>
