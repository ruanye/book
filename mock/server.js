'use strict'
let http = require('http')  
let fs = require('fs')
let url = require('url')
let sliders = require('./slider')
  // 读取文件
function read(cb) {
  fs.readFile('./book.json', 'utf8', function(err, data) {
    if (err || data.length == 0) {
      cb([]) //如果有错误 或者文件没长度就是空数组
    } else {
      cb(JSON.parse(data)) //将读出来的内容转化为对象
    }
  })
}
// 写入文件
function write(data, cb) { //写入内容
  fs.writeFile('./book.json', JSON.stringify(data), cb)
}
let pagesize = 5; //每页显示5个
http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By", ' 3.2.1')
  if (res.method == 'OPTIONS') return res.end('200')
    // let {
    //     pathname,
    //     query
    // } = url.parse(req.url, true);
    // //true把query转化为对象
  let pathname = url.parse(req.url, true).pathname;
  let query = url.parse(req.url, true).query;

  //true把query转化为对象
  if (pathname === '/page') {
    res.setHeader('content-type', 'application/json;charset=utf8');
    let offset = query.offset || 0; //拿到当前前端传递的值
    read(function(books) {
      // 每次偏移量在偏移的基础上增加5条
      let result = books.reverse().slice(offset, offset + pagesize) //数据倒序
      let hasmore = true;
      if (books.length <= offset + pagesize) { //已经显示的数目大于总共的条数
        hasmore = false;
      }
      res.end(JSON.stringify({
        hasmore,
        books: result
      }))
    })
    return
  }
  if (pathname === '/sliders') {
    res.setHeader('content-type', 'application/json;charset=utf8');
    return res.end(JSON.stringify(sliders))
  }
  if (pathname === '/hot') {
    res.setHeader('content-type', 'application/json;charset=utf8');

    read(function(books) { //books代表所有图书
      let hot = books.reverse().slice(0, 6);
      res.end(JSON.stringify(hot))
    })
    return
  }
  if (pathname === '/book') {
    let id = parseInt(query.id); //取出的是字符串
    switch (req.method) { //对书的增删改查
      case 'GET':
        if (!isNaN(id)) { //查询一个
          read(function(books) { //books代表所有图书
            res.setHeader('content-type', 'application/json;charset=utf8');
            let book = books.find(item => item.bookId === id);
            if (!book) book = {};
            res.end(JSON.stringify(book))
          })
        } else { //获取所有图书
          res.setHeader('content-type', 'application/json;charset=utf8');
          read(function(books) { //books代表所有图书
            res.end(JSON.stringify(books))
          })
        }
        break;
      case 'POST':
        let str = '';
        req.on('data', chunk => {
          str += chunk
        })
        req.on('end', () => {
          let book = JSON.parse(str);
          read(function(books) {
            book.bookId = books.length ? books[books.length - 1].bookId + 1 : 1;
            books.push(book);
            write(books, function() {
              res.end(JSON.stringify(book))
            })
          })
        })

        break;
      case 'PUT':
        if (id) {
          req.on('data', chunk => {
            str += chunk
          })
          res.on('end', () => {
            let book = JSON.parse(str)
            read(function(books) {
              books = books.map((item) => {
                if (item.id == id) {
                  return book
                }
                return item
              });
              write(books, function() {
                res.end(JSON.stringify({}))
              })
            })
          })
        }
        break;
      case 'OPTIONS':
        read(function(books) {
          books = books.filter(item => item.bookId !== id);
          write(books, function() {
            res.end(JSON.stringify({}))
          })
        })
        break;
    }
    return
  }
}).listen(3009)