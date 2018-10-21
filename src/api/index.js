import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/'
// 增加默认的请求路径
// axios.interceptors.request.use((res)=>{
//     // 在这里统一拦截结果，把结果处理成res.data
//     return res.data;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });
// 获取轮播图数据,返回的是一个promise对象
export let getSliders = () => {
  return axios.get('/sliders')
}
// 获取热门图书接口
export let getHotBook = () => {
  return axios.get('/hot')
}
// 获取全部图书
export let getBooks = () => {
  return axios.get('/book')
}
// 删除某一本图书
export let removeBook = (id) => {
  return axios.delete(`/book?id=${id}`)
}
// 获取一本
export let findOneBook = (id) => {
  return axios.get(`/book?id=${id}`)
}
export let updateBook = (id,data) => {
  return axios.put(`/book?id=${id}`,data)
}
// 添加图书
export let addBook = (data) => {
  return axios.post('/book',data)
}
//分页加载 根据便宜量返回对应的数据 5=>5-10
export let getPage = (offset) => {
  return axios.get(`/page?offset=${offset}`)
}
