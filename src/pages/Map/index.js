import React, { Component } from "react"

import { NavBar, Icon } from "antd-mobile" // Navbar 导航栏
import "./index.scss"

class Map extends Component {
  componentDidMount() {
    this.initMap()
  }
  // 百度地图
  initMap = () => {
    const { BMap } = window
    // console.log(BMap)

    // 创建地图实例
    var map = new BMap.Map("container")
    // 设置中心点坐标
    var point = new BMap.Point(116.404, 39.915)
    // 地图初始化，同时设置地图展示级别
    map.centerAndZoom(point, 15)
  }

  // 导航栏

  navbai = () => {
    return (
      <NavBar
        mode="dark"
        icon={<Icon type="left" />}
        onLeftClick={() => this.props.history.goBack()}
      >
        地图导航
      </NavBar>
    )
  }

  render() {
    return (
      <div className="mapBox">
        {this.navbai()}
        <div id="container"></div>
      </div>
    )
  }
}

export default Map
