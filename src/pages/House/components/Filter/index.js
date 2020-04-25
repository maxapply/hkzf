import React, { Component } from "react"

// 过滤器的头部
import FilterTitle from "../FilterTitle"
// 条件渲染
import FilterPicker from "../FilterPicker"
// 更多筛选条件
import FilterMore from "../FilterMore"
// 组件局部样式
import styles from "./index.module.css"
import { getCurrcity } from "../../../../utils"
import { getFilter } from "../../../../utils/api/House"

// 标题高亮状态(默认值)
const titleSelectedStatus = {
  area: false,
  mode: false,
  price: false,
  more: false,
}

export default class Filter extends Component {
  state = {
    // 高亮显示
    titleSelectedStatus,
    // 显示picker
    openType: "",
  }

  componentDidMount() {
    this.getFilterData()
  }

  // 获取筛选条件的数据
  getFilterData = async () => {
    const { value } = await getCurrcity()
    const { status, body } = await getFilter(value)
    if (status === 200) {
      this.filterDatas = body
    }
  }

  // 提供高亮显示的方法
  onTitleClick = (type) => {
    // 拷贝一份新的高亮显示
    const news = { ...titleSelectedStatus, [type]: true }
    this.setState({
      titleSelectedStatus: news,
      openType: type,
    })
  }

  // 是否显示前三个picker
  isShowPicker = () => {
    const { openType } = this.state
    return openType === "area" || openType === "mode" || openType === "price"
  }

  // 点击确定
  onOk = () => {
    this.setState({
      openType: "",
    })
  }
  // 点击取消
  onCancle = () => {
    this.setState({
      openType: "",
    })
  }

  render() {
    return (
      <div className={styles.root}>
        {/* 前三个菜单的遮罩层 */}
        {this.isShowPicker() ? (
          <div onClick={this.onCancle} className={styles.mask} />
        ) : null}

        <div className={styles.content}>
          {/* 标题栏 */}
          <FilterTitle
            onTitleClick={this.onTitleClick}
            titleSelectedStatus={this.state.titleSelectedStatus}
          />

          {/* 前三个菜单对应的内容： */}
          {this.isShowPicker() ? (
            <FilterPicker onOk={this.onOk} onCancle={this.onCancle} />
          ) : null}

          {/* 最后一个菜单对应的内容： */}
          {/* <FilterMore /> */}
        </div>
      </div>
    )
  }
}
