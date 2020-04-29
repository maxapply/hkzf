import api from "../../axios.js"
import { getToken } from "../../index.js"

// 登录接口
export function getLogin(body) {
  return api.post("/user/login", body)
}

// 获取用户的信息资料

export function getUser(token) {
  return api.get("/user", {
    headers: {
      authorization: token,
    },
  })
}

//  用户登出接口

export function userLogout() {
  return api.post("/user/logout", null, {
    headers: {
      authorization: getToken(),
    },
  })
}
