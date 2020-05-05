import React, { Component } from "react"

import { NavBar, Icon } from "antd-mobile" // Navbar 导航栏
import styles from "./index.module.css"
import { getCurrcity } from "../../utils"

class Map extends Component {
  componentDidMount() {
    this.initMap()
  }
  // 百度地图
  initMap = async () => {
    const { BMap } = window
    // 创建地图实例
    var map = new BMap.Map("container")
    // 设置中心点坐标
    // var point = new BMap.Point(116.404, 39.915)
    // 地图初始化，同时设置地图展示级别
    // map.centerAndZoom(point, 15)

    const { value, label } = await getCurrcity()

    var myGeo = new BMap.Geocoder()
    // 将地址解析结果显示在地图上，并调整地图视野
    myGeo.getPoint(
      null,
      function (point) {
        if (point) {
          map.centerAndZoom(point, 16)
          map.addOverlay(new BMap.Marker(point))
          // 比例尺
          map.addControl(new BMap.ScaleControl())
          // 平移缩放控件
          map.addControl(new BMap.NavigationControl())

          // 添加文字标签
          var opts = {
            position: point, // 指定文本标注所在的地理位置
            offset: new BMap.Size(0, 0), //设置文本偏移量
          }
          var label = new BMap.Label(null, opts)
          label.setContent(
            `<div class="${styles.bubble}">
              <p class="${styles.bubbleName}">浦东新区</p>
              <p>388套</p>
            </div>`
          )

          // 去除默认样式
          label.setStyle({
            border: "none",
          })
          map.addOverlay(label)
        }
      },
      label
    )
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
      <div className={styles.mapBox}>
        {this.navbai()}
        <div id="container"></div>
      </div>
    )
  }
}

export default Map
