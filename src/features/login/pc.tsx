import React from "react"
import "./pc.scss"
import useDeviceDetect from "../../hook/useDeviceDetect"

const LoginIndex = () => {
  const { isMobile } = useDeviceDetect()

  return (
    <div className="page-login-pc">
      <div className="banner"></div>
      <div className="form-wrap">
        <h1>DIGITALYCHEE</h1>
        <div className="form"></div>
        <div className="other">
          <a href="#">其他方式登录</a>
        </div>
      </div>
    </div>
  )
}

export default LoginIndex
