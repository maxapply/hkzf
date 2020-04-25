import api from "../../axios.js"

// 获取房屋查询条件

export function getFilter(id) {
  return api.get("/houses/condition", {
    params: {
      id,
    },
  })
}
