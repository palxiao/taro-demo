# start
$ yarn global add @tarojs/cli

# 微信小程序
## npm script
$ npm run dev:weapp
$ npm run build:weapp
## 仅限全局安装
$ taro build --type weapp --watch
$ taro build --type weapp
## 开发者工具设置
·关闭 ES6 转 ES5 功能
·关闭上传代码时样式自动补全
·关闭代码压缩上传


# H5
## npm script
$ npm run dev:h5
## 仅限全局安装
$ taro build --type h5 --watch


# 更新taro
# taro
$ taro update self
# npm 
npm i -g @tarojs/cli@latest 

# 更新项目中 Taro 相关的依赖，需要在项目下执行
$ taro update project


# 开发规范
JSX 里不能定义变量，使用 if/else 等，一般提前定义变量，使用三元表达式

列表渲染不用for，一般是用数组的 map 函数

组件类的第一个字母必须大写

Props 子组件接收父组件数据

State 组件内数据状态，只能通过 this.setState() 来改变数据，调用时会执行render(也就是重新渲染组件)，所以跟组件内部视图有关联的数据，才放在 state 里面。

方法名不能含有数字
方法名不能以下划线开头或结尾
方法名的长度不能大于 20

JS 代码里必须书写单引号，特别是 JSX 中，如果出现双引号，可能会导致编译错误

不要在 state 与 props 上用同名的字段，因为这些被字段在微信小程序中都会挂在 data 上。

父组件要往子组件传递函数，属性名必须以 on 开头



# 组件生命周期：

* constructor，顾名思义，组件的构造函数。一般会在这里进行 state 的初始化，事件的绑定等等 
* componentWillMount，是当组件在进行挂载操作前，执行的函数，一般紧跟着 constructor 函数后执行 
* componentDidMount，是当组件挂载在 dom 节点后执行。一般会在这里执行一些异步数据的拉取等动作 
* shouldComponentUpdate，返回 false 时，组件将不会进行更新，可用于渲染优化 
* componentWillReceiveProps，当组件收到新的 props 时会执行的函数，传入的参数就是 nextProps ，你可以在这里根据新的 props 来执行一些相关的操作，例如某些功能初始化等 
* componentWillUpdate，当组件在进行更新之前，会执行的函数 
* componentDidUpdate，当组件完成更新时，会执行的函数，传入两个参数是 prevProps 、prevState 
* componentWillUnmount，当组件准备销毁时执行。在这里一般可以执行一些回收的工作，例如 clearInterval(this.timer) 这种对定时器的回收操作 


# 预加载示例 (componentWillPreload 钩子，它接收页面跳转的参数作为参数)
```JavaScript
class Index extends Component {
  componentWillMount () {
    console.log('isFetching: ', this.isFetching)
    this.$preloadData
      .then(res => {
        console.log('res: ', res)
        this.isFetching = false
      })
  }

  componentWillPreload (params) {
    return this.fetchData(params.url)
  }

  fetchData () {
    this.isFetching = true
    ...
  }
}
```