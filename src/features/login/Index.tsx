import React from "react"
import "./index.scss"
import useDeviceDetect from "../../hook/useDeviceDetect"
import PC from "./Pc"
import Mobile from "./Mobile"

const LoginIndex = () => {
  const { isMobile } = useDeviceDetect()

  return isMobile ? <Mobile></Mobile> : <PC></PC>
}

export default LoginIndex
