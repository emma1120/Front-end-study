收藏

[官网](https://reactjs.org/)   

### 1、react官网API学习
```
ReactDOM.render(
  <h1>hello,word</h1>,
  document.getElementById('root')
  
)
```
#### 1.1 jsx 代表性的对象
下面是两个例子是相同的意思
```
const element = (
  <h1 className = "greeting">
    hello,world!
  </h1>
)
```
```
const element = React.createElement(
 'h1',
 {className:'greeting'},
 'Hello,word!'
)
//React.createElement 是执行一些检查版主写无bug的代码，它实际上是创建了对象类似下面这种情况：
const element = {
    type:'h1',
    prop:{
        className: 'greeting',
        children:'Hello,world!'
    }
}
上面的这些对象就称为 “React elements”
```
#### 1.2 Updating the Rendered Element
React elements 是不可改变的 immutable，一旦创建，就不能更改它的children 或者属性

#### 1.3 Functional and Class Components
定义组件的最简单方法是编写JavaScript函数：
```
function Welcome (props){
    return <h1>hello, {props.name}</h1>
}
```
ES6 class 形式：
```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

//注意：始终使用大写字母命名组件名称。
```
tip： 函数转换成class形式
* 1、使用class ， extends React.Component
* 2、添加render() 方法，并把body部分移入render（）函数中
* 3、用this.props代替原来的props


#### 1.4 props 只读
#### 1.5 state 组件内的私有
```
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```

通过 `this.setState()` 更新state
```
//错误形式
this.state.comment = 'Hello'

//正确形式
this.setSate({comment: 'Hello'})

//正确形式
this.setState((state, props) => ({
  counter: state.counter + props.increment
}))
```
备注：react是单向数据流
#### 1.6事件 Handling Events
react 里面事件都使用驼峰式

```
// HTML中
<button onclick="activateLasers()">
  Activate Lasers
</button>

//react中
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

注意 在ES6 class中 bind（this）如果不想用bind 可以有两种解决办法请看[react官网](https://reactjs.org/docs/handling-events.html)


在react里在创建DOM元素之后添加监听器addEventListener 来添加监听器。相反 只需要在 元素创建的同时添加监听器

```
class Toggle extents React.Component{
    constructior(props){
        super(props);
        this.state = {
            isToggleOn:true
        }
        //注意此处 需要绑定this  如果此处不想这样写 可以在绑定事件的DOM里面使用箭头函数
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(
        state => ({
            isTOggleOn: !state.isToggleOn
        }))
    }
    render () {
        return (
        <button onCLick={this.handleClick}>
        {this.state.isToggleOn? 'ON':'OFF'}
        <button>)
    }
}
ReactDom.render(
 <Toggle/>,
 document.getElementByID('root')
)

// <button onClick = {(e) => this.handleClick(e)}>
```
#### 1.7 条件渲染 conditional rendering
#### 1.8 列表跟keys Lists and Keys
　使用map
```
const numbers = [1,2,3,4,5];
const listItems = numbers.map((number) => <li>{number}</li>)
```
#### 1.9 Forms

#### 1.10  Lifting State UP

### 2、[Kent C.Dodds 视频部分代码记录](https://egghead.io/lessons/react-use-event-handlers-with-react)
#### 2.1 

### 3、[reactpatterans.com](https://reactpatterns.com)