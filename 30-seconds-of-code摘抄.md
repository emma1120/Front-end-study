#Adapter 适配器

### ary
创建一个最多接受n个参数的函数，忽略任何其他参数
```
const ary = (fn, n) => (...args) => fn(...args.slice(0,n))

// eg
const firstToMax = ary(Math.max,2)

[[2,6,'a'],[8,4,6],[10]].map(x=> firstTwoMax(...x)); //[6,8,10]
```
