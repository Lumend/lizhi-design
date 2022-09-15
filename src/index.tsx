import React from "react"
import ReactDOM from "react-dom/client"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import App from "./App"
import Login from "./features/login/Index"
import NotFound from "./features/setting/NotFound"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

const renderRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Login />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

root.render(renderRouter())
