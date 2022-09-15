import request from "@/utils/request"
const domain =
  window.location.host.indexOf("localhost") > -1
    ? "http://192.168.11.188:1803"
    : "http://nav.zsmicroelec.com"
const url = {
  login: domain + "/web/user/login",
  reg: domain + "/web/user/reg",
}

const baseParams: any = {
  method: "POST",
  mode: "cors",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({}),
}

const login = async (data: object) => {
  const params = Object.assign({}, baseParams, { body: JSON.stringify(data) })
  // request.post(url.login, params)

  const res = await fetch(url.login, params)
  const json = await res.json()
  return json
}

const reg = async (data: object) => {
  const params = Object.assign({}, baseParams, { body: JSON.stringify(data) })
  const res = await fetch(url.reg, params)
  const json = await res.json()
  return json
}

export { login, reg }
