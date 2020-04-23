// 城市列表
import React, { Component } from "react"
import { getCityList } from "../../utils/api/City"

class CityList extends Component {
  componentDidMount() {
    this.getCityList()
  }

  // 获取城市列表的数据
  getCityList = async () => {
    const res = await getCityList()
    console.log(res)
  }
  render() {
    return <div>CityList</div>
  }
}

export default CityList
