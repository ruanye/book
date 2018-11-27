import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Add from '../components/Add.vue'
import Car from '@/components/Car.vue'
import List from '../components/List.vue'
import Detail from '../components/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: Home},
    {path: '/add', component: Add},
    {path: '/car', component: Car},
    {path: '/list', component: List},
    {path: '/detail/:bookid', component: Detail, name: 'detail'}
  ]
})
