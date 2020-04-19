import React, { Component } from "react"

//二级路由配置
import { Route, Link } from "react-router-dom"
import House from "../House/index.js"
import Profile from "../Profile/index.js"
import Index from "../Index/index.js"

class Home extends Component {
  render() {
    return (
      <div className="home">
        {/* 二级路由 */}
        <Link to="/home">默认首页</Link>
        <Link to="/home/house">房屋列表</Link>
        <Link to="/home/profile">个人中心</Link>

        <Route exact path="/home" component={Index}></Route>
        <Route path="/home/house" component={House}></Route>
        <Route path="/home/profile" component={Profile}></Route>
      </div>
    )
  }
}

export default Home
