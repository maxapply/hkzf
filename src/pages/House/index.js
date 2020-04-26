import React from "react"

import { Flex } from "antd-mobile"

import Filter from "./components/Filter"
// 导入样式
import styles from "./index.module.css"
import { getHouses } from "../../utils/api/House"
import { getCurrcity } from "../../utils"

// list渲染
import { List, AutoSizer } from "react-virtualized"
import HouseItem from "../../components/HouseItem"
import { BASE_URL } from "../../utils/axios"

export default class HouseList extends React.Component {
  state = {
    // 房屋列表数据
    list: [],
  }
  async componentDidMount() {
    const { value } = await getCurrcity()
    this.cityId = value
    this.getHouseList()
  }

  onFliter = (filters) => {
    this.filters = filters
    this.getHouseList()
  }
  getHouseList = async () => {
    const {
      status,
      body: { list },
    } = await getHouses(this.cityId, this.filters, 1, 20)
    if (status === 200) {
      this.setState({
        list: list,
      })
    }
  }

  // 渲染列表项方法
  renderHouseItem = ({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style, // Style object to be applied to row (to position it)
  }) => {
    // 获取数组
    const { list } = this.state
    // 获取当前项的列表数据
    const item = list[index]
    // 处理图片地址
    item.src = `${BASE_URL}${item.houseImg}`
    // console.log(item)

    return <HouseItem {...item} key={key} style={style} />
  }
  render() {
    return (
      <div className={styles.root}>
        {/* 条件筛选栏 */}
        <Filter onFliter={this.onFliter} />
        {/* 列表 */}
        <AutoSizer>
          {({ height, width }) => (
            <List
              className={styles.houseList}
              height={height}
              rowCount={this.state.list.length}
              rowHeight={130}
              rowRenderer={this.renderHouseItem}
              width={width}
            />
          )}
        </AutoSizer>
      </div>
    )
  }
}
