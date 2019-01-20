Node.js 是 JavaScript 运行时环境    js解析器
- 构建在 Chrome's V8 这个著名的 JavaScript 引擎之上

[狼叔github](https://github.com/i5ting/How-to-learn-node-correctly)

![avatar](./狼叔nodelive.png）
```
//下面代码来自狼叔的github    ----  学习记录
exports.list = async (ctx, next) =>{
  try {//由于是同步代码 所以 使用try／catch做的异步处理
    let students = await Student.getAllAsync();  //获取所有student的信息

    await ctx.render('students/indedx',{
      students:students
    })//渲染页面
  }catch (err){
    return ctx.api_error(err);
  }
}

//正常写法
const pkgConf = require('pkg-conf');

async function main(){
  const config = await pkgConf ('unicorn);

  console.log(config.rainbow)
}
main()


变态写法
const pkgConf = require('pkg-conf');
(async() =>{
  const config = await pkgConf ('unicorn);

  console.log(config.rainbow)
})()

//await+Promise

const Promise = require('bluebird');
const fs = Promise.promisifyAll(require("fs"));

async function main(){
    const contents = await fs.readFileAsync("myfile.js", "utf8")
    console.log(contents);
}

main();
```


videojs.getPlayers("video-player").html5player.tech_.setPlaybackRate(2)