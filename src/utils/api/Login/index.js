import api from "../../axios.js"

// 登录接口
export function getLogin(body) {
  return api.post("/user/login", body)
}
