 注：该部分问题来自  30seconds  请查看[原地址](https://30secondsofinterviews.org/)

 ### element 跟 component 差别

 ###  lifing state up in React 

 ### 在 jsx tree中怎编写注释（comments）
 ```
  const tree = (
      <div>
        {/* Commit*/}
        <p>Text</p>
      </div>
  )
 ```

 ### 状态组件


 ### 无状态组件

 ### callback函数为setState的一个参数的目的


 ###为什么 react 使用className 替代HTML 的class

 ### HTML 和React 的事件处理差别

 ###  what are inline conditional expressions 
  因为 JSX 元素tree 本身是一个大的表达式， 你不能在里面再嵌入语句，条件表达式作用树使用的语句的替代
  ```
  function App({message, isVisible}){
      return (
          <div>
             { message.length>0 ? (
                 <h2>You hava {message.length} unread messages</h2>
             ) : (
                 <h2>You hava no unread mesage</h2>
             )
             }
             {isVisible && <p>I am visible</p>}
          </div>
      )
  }
  ```


  ### key 以及 它的好处