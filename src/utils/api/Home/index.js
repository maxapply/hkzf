import api from "../../axios.js"

// home接口

export function getSwiper() {
  return api.get("/home/swiper")
}
