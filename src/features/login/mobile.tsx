import React, { useEffect, useMemo, useReducer, useState } from "react"
import "./mobile.scss"
import request from "../../utils/request"

const LoginIndex = () => {
  const [toast, setToast] = useState("")
  const [info, setInfo] = useReducer(
    (state: any, newState: any) => {
      return { ...state, ...newState }
    },
    {
      username: "user09",
      password: "OpenSesame",
    }
  )

  const tips = useMemo(() => {
    let res = {
      username: "",
      password: "",
    }

    if (info.username === "") {
      res.username = ""
    } else {
      const regExpUN = new RegExp(/^[a-zA-Z0-9]{4,16}$/g)
      res.username = regExpUN.test(info.username)
        ? ""
        : "用户名格式错误，请重新输入"
    }

    if (info.password === "") {
      res.password = ""
    } else {
      let regExpPWD = new RegExp(/^\S{8,32}$/g)
      res.password = regExpPWD.test(info.password)
        ? ""
        : "密码格式错误，请重新输入"
    }

    return res
  }, [info])

  const invalided = useMemo(() => {
    return (
      info.username === "" ||
      info.password === "" ||
      tips.username ||
      tips.password
    )
  }, [info, tips])

  const showToast = (msg: string) => {
    setToast(msg)
    setTimeout(() => {
      setToast("")
    }, 3000)
  }

  const handleInputChange = (event: any) => {
    const { name, value } = event.target
    setInfo({ [name]: value })
  }

  const handleSubmit = () => {
    console.log("---info", info)
    if (invalided) {
      return
    }
    request.post("login.php?phase=1", info).then((resp: any) => {
      console.log("---resp", resp)
      if (resp.status !== 0) {
        showToast(resp.message)
      } else {
        localStorage.setItem("token", resp.data.token)
        request.defaults.headers["Authorization"] = "Bearer " + resp.data.token
      }
    })
  }

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
            <input
              type="text"
              placeholder="请输入用户名"
              name="username"
              onChange={handleInputChange}
              autoComplete="off"
              maxLength={16}
              value="user09"
            />
            <p className="tips">{tips.username}</p>
          </div>
          <div className="item">
            <i className="pwd"></i>
            <input
              type="password"
              placeholder="请输入密码"
              name="password"
              onChange={handleInputChange}
              autoComplete="off"
              value="OpenSesame"
            />
            <p className="tips">{tips.password}</p>
          </div>
          <div className="item">
            <button
              className={invalided ? "next disable" : "next"}
              onClick={handleSubmit}
            >
              下一步
            </button>
          </div>
          {toast && (
            <div className="toast">
              <p>{toast}</p>
            </div>
          )}
        </div>
        <div className="other">
          <a href="#">其他方式登录</a>
        </div>
      </div>
    </div>
  )
}

export default LoginIndex
