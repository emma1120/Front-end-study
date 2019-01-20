Node.js 是 JavaScript 运行时环境
- 构建在 Chrome's V8 这个著名的 JavaScript 引擎之上

[狼叔github](https://github.com/i5ting/How-to-learn-node-correctly)

1. Node.js SDK里callback写法必须会的。
2. Node.js学习重点: Async函数与Promise
    1. 中流砥柱：Promise 
    2. 终极解决方案：Async/Await

function(err, res) {
  // process the error and result
}
```

这里的 `callback` 指的是带有2个参数的函数："err"和 "res"。语义上讲，非空的“err”相当于程序异常；而空的“err”相当于可以正常返回结果“res”，无任何异常。
1. 基本的Node.js几个特性，比如事件驱动、非阻塞I/O、Stream等
2. 异步流程控制相关，Promise是必问的
3. 掌握1种以上Web框架，比如Express、Koa、Thinkjs、Restfy、Hapi等，会问遇到过哪些问题、以及前端优化等常识
4. 数据库相关，尤其是SQL、缓存、Mongodb等
5. 对于常见Node.js模块、工具的使用，观察一个人是否爱学习、折腾
6. 是否熟悉linux，是否独立部署过服务器，有+分
7. js语法和es6、es7，延伸CoffeeScript、TypeScript等，看看你是否关注新技术，有+分
8. 对前端是否了解，有+分
9. 是否参与过或写过开源项目，技术博客、有+分