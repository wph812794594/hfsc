import React, { Component } from 'react'
import { Icon } from 'antd';
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
        <li onClick={this.handleClick}>
          <Icon type="home" />
          <p>首页</p>
        </li>
        <li>
          <Icon type="appstore" />
          <p>分类</p>
        </li>
        <li>
          <Icon type="search" />
          <p>搜索</p>
        </li>
        <li>
          <Icon type="crown" />
          <p>品牌</p>
        </li>
      </ul>
    )
  }
}
