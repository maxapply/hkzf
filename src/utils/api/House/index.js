import api from "../../axios.js"

// 获取房屋查询条件

export function getFilter(id) {
  return api.get("/houses/condition", {
    params: {
      id,
    },
  })
}

// 根据条件查询房屋
export function getHouses(cityId, filters, start, end) {
  return api.get("/houses", {
    params: {
      cityId,
      ...filters,
      start,
      end,
    },
  })
}
