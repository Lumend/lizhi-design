import React from "react"
import "./mobile.scss"
import useDeviceDetect from "../../hook/useDeviceDetect"

const LoginIndex = () => {
  const { isMobile } = useDeviceDetect()

  return (
    <div className="page-login-mobile">
      <div className="title">
        <h2>登录</h2>
      </div>
      <div className="form-wrap">
        <h1>DIGITALYCHEE</h1>
        <div className="form">
          <div className="item">
            <i className="email"></i>
            <input type="text" placeholder="请输入邮箱" />
            <p className="tips">邮箱格式错误，请重新输入</p>
          </div>
          <div className="item">
            <i className="pwd"></i>
            <input type="text" placeholder="请输入密码" />
          </div>
          <div className="item">
            <button className="next">下一步</button>
          </div>
          <div className="toast">
            <p>密码错误或邮箱与对应的密码不相符</p>
          </div>
        </div>
        <div className="other">
          <a href="#">其他方式登录</a>
        </div>
      </div>
    </div>
  )
}

export default LoginIndex
