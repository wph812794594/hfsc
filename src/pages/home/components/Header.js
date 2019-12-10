import React, { Component } from 'react'
import { Input } from 'antd';
import { Icon } from 'antd';
import '../../../assets/css/header.css'
const { Search } = Input;
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Icon type="unordered-list"
          style={{color:'white',fontSize:'.2rem'}}
        />
        <Search
          onSearch={value => console.log(value)}
          style={{ width: '3.1rem',}}
        />
      
      </div>
    )
  }
}
