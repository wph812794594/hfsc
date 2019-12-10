import React, { Component } from 'react'
import { Icon } from 'antd';
import {Link} from 'react-router-dom'
import '../../../assets/css/footer.css'
export default class Footer extends Component {

  constructor(props){
    super(props)
    this.state = {
      
    }
  }
  handleClick= ()=>({
      
  })
  render() {
    return (
      <ul className="footer">
        <Link to='/' >
          <li onClick={this.handleClick}>
            <Icon type="home" />
            <p>首页</p>
          </li>
        </Link>
        <Link to='/classfiy' >
          <li>
            <Icon type="appstore" />
            <p>分类</p>
          </li>  
        </Link>
        <Link to='/search' >
          <li>
            <Icon type="search" />
            <p>搜索</p>
          </li>
        </Link>
        <Link to='/brand' >
          <li>
            <Icon type="crown" />
            <p>品牌</p>
          </li>  
        </Link>
      </ul>
    )
  }
}
