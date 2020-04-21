import React from "react"

// 路由配置
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
// 一级路由
import Home from "./pages/Home/index.js"
import CityList from "./pages/CityList/index.js"
import Map from "./pages/Map/index.js"
import NotFound from "./pages/NotFound/index.js"

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* <Link to="/home">首页</Link>
              <Link to="/cityList">城市列表</Link>
              <Link to="/map">地图找房</Link> */}
        <Switch>
          {/* 一级路由 */}
          <Redirect exact from="/" to="/home"></Redirect>
          <Route path="/home" component={Home}></Route>
          <Route path="/cityList" component={CityList}></Route>
          <Route path="/map" component={Map}></Route>
          {/* 配置404页面 */}
          <Route component={NotFound}> </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
