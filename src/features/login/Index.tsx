import React from "react"
import "./index.scss"
import useDeviceDetect from "../../hook/useDeviceDetect"
import PC from "./pc"
import Mobile from "./mobile"

const LoginIndex = () => {
  const { isMobile } = useDeviceDetect()

  return isMobile ? <Mobile></Mobile> : <PC></PC>
}

export default LoginIndex
