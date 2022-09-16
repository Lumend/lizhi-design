import React, { useEffect, useMemo, useReducer, useState } from "react"
import "./mobile.scss"
import FormLogin from "./Form"

const LoginIndex = () => {
  return (
    <div className="page-login-mobile">
      <div className="title">
        <h2>登录</h2>
      </div>
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
