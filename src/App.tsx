import React, { useEffect } from "react"
import { Outlet } from "react-router-dom"
import "./assets/style/index.scss"

function App() {
  // 全局初始化
  useEffect(() => {
    console.log("---app.tsx 全局初始化")
  }, [])

  return (
    <div className="app">
      <div className="layout-app-content">
        <Outlet />
      </div>
    </div>
  )
}

export default App
