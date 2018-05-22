import React,{Component} from 'react';
import PropTypes from 'prop-types';
export default class Route extends Component{
  contextTypes={
    location:PropTypes.object
  }
  constructor(props){
    super(props);
    this.path = props.path;
    this.keys =[];
    this.regexp = pathToRegexp(this.path,this.keys,{end:false});
    this.keys = this.keys.map(key=>key.name);
  }
  render(){
    let {path,component:Component,render} = this.props;
    let {location}=this.context;
    let result = location.pathname.match(this.regexp);
    let {path} = this.props;
    console.log(this.context);
    let {location:{pathname}} = this.context;
    if(path ==pathname||pathname.startsWith(path)){
      return <component location={location} />
    }
  }
}