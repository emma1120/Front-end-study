// 该部分代码摘超自  阮一峰老师的  ECMASCript6入门

//javaScript对象 本质上是键值对的集合（hash结构）  但是传统上只能用字符串当作键


const data ={}
const element = document.getElementById('myDIv');
data[element] = 'metada';
data['[dobject HTMLDivElement]']

//解决办法 引入   Map结构（键 使用各种类型的值）

const m = new Map()
const o = {p: 'Hello World'}

m.set(o,'content')  
m.get(o) //'contnet'

m.has(o) //true
m.delete(o)

const map = new Map(['name','张三'],['title','Author'])
map.size //2
map.has('name') // ture
map.get('name')
map.has('title')
map.get('title')

//遍历方法
keys() //返回键名
values()
entries()
forEach()







