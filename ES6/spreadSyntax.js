//扩展预算符号

//函数rest参数 该部分摘抄自阮老师的ECMAScript6 

/*
* rest参数 搭配的变量是一个数组  该变量将多余的参数放进数组中
* ...变量名
*/

function add(...values){
    let sum =0;
    for (var val of values){
        sum += val;
    }
    return sum;
}

add(2,5,3)

//arguments变量的写法
function sortNumbers(){
    return Array.prototype.slice.call(arguments).sort();
}

//rest参数替代arguments 变量
 const sortNumbersRest = (...numbers) => numbers.sort();
 /*
 arguments 对象不是数组，而是一个类似数组的对象 ，需使用Array.prototype.slice.call 将其转成数组
 rest 本身就是数组， 可以直接使用数组的方法
 */

 //rest 改写 push方法
 function pushRest(array,...items){
  items.forEach(function(item){
      array.push(item)
  })
 }
 var a = [];
 push(a,1,2,3)

 //rest 参数之后不能再有其他参数   ；   函数的length不包括 rest参数



 //下面代码摘抄自MDN

 myFunction(...iterableOnj);

 [...iterableOnj,'4','five',6] 

 let objClone = {...obj}