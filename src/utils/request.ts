import { message } from "antd"
import axios from "axios"

const instance = axios.create({
  baseURL:
    window.location.host.indexOf("localhost") > -1
      ? "http://192.168.11.188:1801"
      : "http://nav.zsmicroelec.com",
  timeout: 5000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    token: localStorage.getItem("token") || "",
  },
})

instance.interceptors.request.use(
  function (config: any) {
    config.token = localStorage.getItem("token") || ""
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  function (response) {
    if (response.status == 200 && response.data) {
      if (response.data.code == 500 && response.data.message) {
        message.error(response.data.message)
      }
      if (response.data.code == 401 && response.data.message) {
        message.error(response.data.message)
        window.location.href = "/user/login"
      }
      return response.data
    }

    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

const asyncRequest = async () => {
  return new Promise((resolve: any) => {
    resolve()
  })
}

export default instance
