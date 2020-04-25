import { getCityInfo } from "./api/City/index.js"

const CURR_CITY = "curr_city"

// 封装本地存储方法
// 添加本地存储
export const setLocal = (key, val) => {
  return window.sessionStorage.setItem(key, val)

  // return window.localStorage.setItem(key, val)
}
// 获取本地存储
export const getLocal = (key) => {
  return window.sessionStorage.getItem(key)

  // return window.localStorage.getItem(key)
}

// 删除本地存储
export const deLocal = (key) => {
  return window.sessionStorage.removeItem(key)

  // return window.localStorage.removeItem(key)
}

const getCityName = async () => {
  return new Promise((resolve, reject) => {
    // 根据ip获取城市定位信息
    let myCity = new window.BMap.LocalCity()
    // 调用获取定位城市实例
    myCity.get((res) => {
      // 调用接口获取城市详细信息
      resolve(res.name)
    })
  })
}

export async function getCurrcity() {
  // 从本地获取之前保存过的城市定位信息
  const curCity = JSON.parse(getLocal(CURR_CITY))
  // console.log(curCity)

  let res = await getCityName()
  let reslName = res.substr(0, 2)

  // console.log(reslName)

  if (!curCity) {
    // 如果没有
    // 获取定位信息，返回promise对象，resolve结果
    return new Promise(async (resolve, reject) => {
      // 调用接口获取城市详细信息
      const { status, body } = await getCityInfo(reslName)
      if (status === 200) {
        // 存储到本地
        setLocal(CURR_CITY, JSON.stringify(body))
        // console.log(body)

        // 传递数据
        resolve(body)
      } else {
        reject("error")
      }
    })
  } else {
    // 如果有，返回信息
    return Promise.resolve(curCity)
  }
}

export { CURR_CITY }