import React,{Component} from 'react';
import PropTypes from 'prop-types';
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
export default class HashRouter extends Component{
  static childContextTypes={
    location:PropTypes.object,
    history: PropTypes.object
  }
  constructor(props){
    super(props);
    this.state = { location: { pathname: window.location.hash.slice(1) || '/' } };
  }
  getChildContext(){
    return {
      location:this.state.location,
      history:{
        push(path){
          window.location.hash = path;
        }
      }
    }
  }
  componentDidMount(){
    window.location.hash = window.location.hash||'/';//添加默认hash 
    let render = () => {
      console.log('52','start')
      this.setState({ location: {pathname: window.location.hash.slice(1) || '/' } });
    }
    window.addEventListener('hashchange', render);
  }
  render(){
    console.log(window.location)
    return this.props.children?React.Children.only(this.props.children):null;
  }
}