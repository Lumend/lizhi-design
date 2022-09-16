// import { message } from "antd"
import axios from "axios"

const instance = axios.create({
  baseURL: "https://gateway.lizhi.io/demo/",
  timeout: 5000,
  headers: {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
    Authorization: "Bearer " + localStorage.getItem("token") || "",
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
    if (response.status == 200) {
      // if (response.data.code == 500 && response.data.message) {
      //   // message.error(response.data.message)
      // }
      // if (response.data.code == 401 && response.data.message) {
      //   // message.error(response.data.message)
      //   window.location.href = "/user/login"
      // }
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
