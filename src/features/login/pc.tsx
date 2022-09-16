import React from "react"
import "./pc.scss"
import FormLogin from "./Form"

const LoginIndex = () => {
  return (
    <div className="page-login-pc">
      <div className="banner"></div>
      <div className="form-wrap">
        <h1>DIGITALYCHEE</h1>
        <FormLogin></FormLogin>
        <div className="other">
          <a href="#">其他方式登录</a>
        </div>
      </div>
    </div>
  )
}

export default LoginIndex
