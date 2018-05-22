import React,{Component} from 'react';
import PropTypes from 'prop-types';
import pathToRegexp from 'path-to-regexp';
export default class Route extends Component{
  static contextTypes={
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
    let {path,component:A,render} = this.props;
    let {location:{pathname}} = this.context;
    if(path ==pathname||pathname.startsWith(path)){
      return <A location={this.context.location} />
    }
    return null
  }
}