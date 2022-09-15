// const domain = "http://nav.zsmicroelec.com"
// const domain = "http://192.168.11.188:8082"
const domain =
  window.location.host.indexOf("localhost") > 2
    ? "http://192.168.11.188:1803"
    : "http://nav.zsmicroelec.com"
const url = {
  add: domain + "/api/base/add",
  remove: domain + "/api/base/remove",
  update: domain + "/api/base/update",
  query: domain + "/api/base/query",
  sql: domain + "/api/base/sql",
}

const baseParams: any = {
  method: "POST",
  mode: "cors",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    token: localStorage.getItem("token") || "",
  },
  body: JSON.stringify({}),
}

const handleResp = (data: any) => {
  if (data.code == 401) {
    window.location.href = "/user/login"
  }
}

const add = async (data: object) => {
  const params = Object.assign({}, baseParams, { body: JSON.stringify(data) })
  const res = await fetch(url.add, params)
  const json = await res.json()
  handleResp(json)
  return json
}

const remove = async (data: object) => {
  const params = Object.assign({}, baseParams, { body: JSON.stringify(data) })
  const res = await fetch(url.remove, params)
  const json = await res.json()
  handleResp(json)
  return json
}

const update = async (data: object) => {
  const params = Object.assign({}, baseParams, { body: JSON.stringify(data) })
  const res = await fetch(url.update, params)
  const json = await res.json()
  handleResp(json)
  return json
}

const query = async (data: object) => {
  const params = Object.assign({}, baseParams, { body: JSON.stringify(data) })
  const res = await fetch(url.query, params)
  const json = await res.json()
  handleResp(json)
  return json
}

const post = async (url: string, data: object) => {
  const params = Object.assign({}, baseParams, { body: JSON.stringify(data) })
  const res = await fetch(domain + url, params)
  const json = await res.json()
  handleResp(json)
  return json
}

export { add, remove, update, query, post }
