import React from "react"
import "./index.scss"

import useDeviceDetect from "../../hook/useDeviceDetect"

const LoginIndex = () => {
  const { isMobile } = useDeviceDetect()

  return (
    <div className="page-login">
      <h1>Login</h1>
      <p>isMobile: {isMobile ? 1 : 0}</p>
    </div>
  )
}

export default LoginIndex
