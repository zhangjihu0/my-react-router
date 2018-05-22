import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route} from './react-router-dom/index.js';
/**{
   * history:{
   * push()
   * },
   * location:{
   *  pathname:'/home'
   * },
   * match{
   * isExact,//是否绝对匹配
   * params:{},
   * path:'/home',
   * url:'/home'
   * }
 * }
 * 
*/
/**
 * HashRouter，
 * BowerRouter
 * 测试驱动开发 先写一个从测试用例，看看原生路由的效果，然后我们自己实现一个
 * Router 是一个路由容器
 * Route代表一条路由规则
*/
let Home =(props,context)=>{
  console.log(props);
  console.log(context);
  return <div>首页</div>
}
let User =()=><div>用户管理</div>
let Profile =()=><div>个人设置</div>
//渲染的时候会先取当前的路径(location.hash),然后跟path进行匹配，如果能匹配则切换相应的组件
  let Text = ()=>{
    return(<Router>
      <div>
        <Route path='/home' component={Home} />
        <Route path='/user' component={User} />
        <Route path='/profile' component={Profile} />
      </div>
    </Router>)
  }
  export default Text
    


