>promise 迷你书代码摘抄

`
function asyncFunction(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('Async Hello world')
        },16)
    })
}

asyncFunction().then(function(value){
    console.log(value);
}).catch(function(error){
    console.log(error)
})

// 注 如果不使用catch方法只使用then方法的   使用 promise.then(onFulfilled,onRejected)

asyncFunction().then(function(value){
    console.log(value)
}, function(err){
    console.log(err)
}
)
`


##### 创建XHR 的promise

`
 function getURL(URL){
     return new Promise(function(resolve,reject){
         var req = new XMLHttpRequest();
         req.open('GET',URL,true);
         req.onload = function(){
             if(req.status === 200){
                 resolve(req.responseText);
             }else{
                 reject(new Erroe(req.statusText))
             }
         }
         req.onerror = function(){
             reject(new Error(req.statusText))
         }
         req.send()
     })
 }

 //运行实例
 var  URL ="http://httpbin.org/get"
 getURL(URL).then(function onFulfilled(value){
     console.log(value)
 }).catch(function onRejected(error){
     console.error(error)
 }
 )

`

