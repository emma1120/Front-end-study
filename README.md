# -ES-

收藏地址  
[MDM](https://github.com/jobbole/awesome-javascript-cn)  
[深入理解JavaScript系列-汤姆大叔](http://www.cnblogs.com/TomXu/archive/2011/12/15/2288411.html)  
[每个 JavaScript 工程师都应懂的33个概念](https://github.com/stephentian/33-js-concepts)  


=== 规范系列   
[airbnb]https://github.com/airbnb/javascript


### 1 javaScript数据类型
---

[javaScript数据类型](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)  
原始值（primitive values） :  boolean null undefined number string symbol
Object

### 2 类型判断
---
     

### 3 闭包 Closures
---
[MDN闭包](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures)  
[Master the JavaScript Interview: What is a Closure?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36)

### 4 this , call apply bind 
---
this 
 >摘抄自你不知道的JavaScript  
 为什么要使用this -- 更优雅的方式来隐形的“传递”一个对象的引用，API设计的更加简洁且易于复用  
 this 实际上是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用


### 5 深浅拷贝
---


### 6 原型 原型链 原型继承
---


###  7 立即执行函数表达式 IIFE (Immediately Invoked Function Expression)
---

```
//摘抄自你不知道的JavaScript

var a = 2;
(function foo() {
    var a =3;
    console.log(a);//3
}
)()
console.log(a) //2

//传参形式
(function IIFE(global){
   var a = 3;
   console.log(a);
   console.log(global.a)
})(window)
```


### 7 数组
---


### 8 对象
---
//遍历对象


### Promise





























学习原生js :闭包、this、作用域、继承等等

     文章学习地址：（需翻墙）[javascript面试需掌握的十个概念](https://codeburst.io/10-javascript-concepts-you-need-to-know-for-interviews-136df65ecce)

     1、value vs Reference  :   理解对象、数组、函数是如何复制和传递到函数中，知道参数是如何赋值的，

     2 Scope :  知道全局作用域、块作用域、函数作用域之间的区别。知道变量是如何使用，知道javascript引擎是如何执行变量查找的

     3、Hoisting (提升) 理解变量跟函数声明提升到作用域最顶端的，理解函数表达式是没有提升的

     4 closures(闭包) ： 知道函数保留对它在创建的作用域中访问。知道这可以让我们做什么，如 数据隐藏、记忆、动态生成的功能
     5 this

     6 new :    知道它与  面向对象的程序设计的 关联 ， 知道 函数使用new 后发生了什么 ， 理解知道如何通过new 来从函数的原型属性继承的

     7 apply call bind

     8 prototype & inheritance (原型与继承)： 理解javascript中的继承是如何通过原型链进行的，了解如何通过函数、对象实现继承，以及New 的作用。知道 _proto_ 跟 prototype的区别

     9 asynchronous js异步js) : 理解事件循环机制，了解浏览器是如何处理用户输入、web 请求、和一般事件。能够正确的识别跟实现异步代码。了解javascript是异步跟单线程的

     10 higher Order  Functions （高阶函数）

