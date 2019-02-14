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
/*keys() //返回键名
values()// 返回键值的遍历器
entries() // 返回所有成员的遍历器
forEach() //遍历Map 的所有成员

const map = new Map({
    ['F','no'] ,
    ['T','yse']
})

for(let key of map.keys()){
   console.log(key)
}*/

//Map 结构转为数组结构   使用扩展运算符(...)
const map1 = new Map([[1,'one'],[2,'two'],[3,'three']])

const map1ToKeys = [...map1.keys()]
const map1ToValues = [...map1.values()]
const map1ToEntries= [...map1.entries()]
const map1ToArr = [...map1]






