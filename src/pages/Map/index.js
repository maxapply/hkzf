import React, { Component } from "react"

import "./index.scss"

class Map extends Component {
  componentDidMount() {
    this.initMap()
  }

  initMap = () => {
    const { BMapGL } = window
    // 创建地图实例
    var map = new BMapGL.Map("container")
    // 设置中心点坐标
    var point = new BMapGL.Point(116.404, 39.915)
    // 地图初始化，同时设置地图展示级别
    map.centerAndZoom(point, 15)
  }

  render() {
    return (
      <div className="mapBox">
        <div className="container"></div>
      </div>
    )
  }
}

export default Map
