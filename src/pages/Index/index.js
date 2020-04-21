import React, { Component } from "react"
import { Carousel, Flex } from "antd-mobile"  //轮播图组件
import { BASE_URL } from "../../utils/axios.js"  //自己封装的axios
import { getSwiper } from "../../utils/api/Home/index.js"  // home接口
import Navs from "../../utils/navConfig.js"  // 导航栏内容
import "./index.css"  // 导航样式
class Index extends Component {
  state = {
    // 轮播图的数据
    data: [],
    // 自动轮播
    autoplay: false,
    // 轮播图的高度
    imgHeight: 176,
  }

  // 获取轮播图数据
  getSwiper = async () => {
    const res = await getSwiper()
    // console.log(res)
    if (res.status === 200) {
      this.setState(
        {
          data: res.body,
        },
        () => {
          this.setState({
            autoplay: true,
          })
        }
      )
    }
  }

  // 渲染轮播图
  renderSwiper = () => {
    return (
      <Carousel
        autoplay={this.state.autoplay}
        infinite
        autoplayInterval={2000}
        // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        // afterChange={(index) => console.log("slide to", index)}
      >
        {this.state.data.map((val) => (
          <a
            key={val}
            href="http://www.itheima.com/"
            style={{
              display: "inline-block",
              width: "100%",
              height: this.state.imgHeight,
            }}
          >
            <img
              src={`${BASE_URL}${val.imgSrc}`}
              alt=""
              style={{
                width: "100%",
                verticalAlign: "top",
              }}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event("resize"))
                this.setState({
                  imgHeight: "auto",
                })
              }}
            />
          </a>
        ))}
      </Carousel>
    )
  }

  // 导航栏
  NavigationBar = () => {
    return (
      <Flex className="nav">
        {Navs.map((item) => {
          return (
            <Flex.Item
              key={item.id}
              onClick={() => {
                this.props.history.push(item.path)
              }}
            >
              <img src={item.img} />
              <p>{item.title}</p>
            </Flex.Item>
          )
        })}
      </Flex>
    )
  }

  // react挂载
  componentDidMount() {
    this.getSwiper()
  }


  render() {
    return (
      <div className="index">
        {
          //  轮播图
          this.renderSwiper()
        }
        {
          // 栏目导航
          this.NavigationBar()
        }
      </div>
    )
  }
}

export default Index
