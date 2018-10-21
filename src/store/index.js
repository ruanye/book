import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import logger from 'vuex/dist/logger'
let state={
	carlist:[]
}
import mutations from './mutations.js'
export default new Vuex.Store({
	state,
	mutations,
	plugins:[logger()],
	strict:true
})