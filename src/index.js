import React from "react"
import ReactDOM from "react-dom"
// 全局样式
import "./index.css"
// 组件库样式
import "antd-mobile/dist/antd-mobile.css"

import App from "./App"
import * as serviceWorker from "./serviceWorker"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

serviceWorker.unregister()
