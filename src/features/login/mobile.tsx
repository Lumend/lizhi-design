import React, { useEffect, useMemo, useReducer, useState } from "react"
import "./mobile.scss"
import request from "../../utils/request"
import RoundLoading from "../../components/loading/Round"

const LoginIndex = () => {
  const [toast, setToast] = useState("")
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [info, setInfo] = useReducer(
    (state: any, newState: any) => {
      return { ...state, ...newState }
    },
    {
      username: "",
      password: "",
      tfa: "",
    }
  )

  const tips = useMemo(() => {
    let res = {
      username: "",
      password: "",
      tfa: "",
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

    if (info.tfa === "") {
      res.tfa = ""
    } else {
      let regExp2fa = new RegExp(/^[0-9]{6}$/g)
      res.tfa = regExp2fa.test(info.tfa) ? "" : "2fa验证码错误，请重新输入"
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
    if (invalided || loading) {
      return
    }
    setLoading(true)
    request
      .post("login.php?phase=1", {
        username: info.username,
        password: info.password,
      })
      .then((resp: any) => {
        if (resp.status !== 0) {
          showToast(resp.message)
        } else {
          localStorage.setItem("token", resp.data.token)
          request.defaults.headers["Authorization"] =
            "Bearer " + resp.data.token
          setStep(2)
        }
        setLoading(false)
      })
  }

  const handleSubmit2fa = () => {
    if (info.tfa == "" || tips.tfa || loading) {
      return
    }
    setLoading(true)
    request
      .post("login.php?phase=2", {
        tfa: info.tfa,
      })
      .then((resp: any) => {
        if (resp.status !== 0) {
          showToast(resp.message)
        } else {
          window.location.href = "https://www.lizhi.io"
        }
        setLoading(false)
      })
  }

  const renderStep1 = () => {
    return (
      <div className={step == 2 ? "step-1 dn" : "step-1"}>
        <div className="item">
          <i className="email"></i>
          <input
            type="text"
            placeholder="请输入用户名"
            name="username"
            onChange={handleInputChange}
            autoComplete="off"
            maxLength={16}
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
          />
          <p className="tips">{tips.password}</p>
        </div>
        <div className="item">
          <button
            className={invalided || loading ? "next disable" : "next"}
            onClick={handleSubmit}
          >
            <span className={loading ? "icon" : "icon dn"}>
              <RoundLoading />
            </span>
            <span>下一步</span>
          </button>
        </div>
      </div>
    )
  }

  const renderStep2 = () => {
    return (
      <div className={step == 1 ? "step-2  dn" : "step-2"}>
        <div className="item">
          <p className="thumb"></p>
        </div>
        <div className="item">
          <i className="pwd"></i>
          <input
            type="text"
            placeholder="请输入你的两步认证验证码"
            name="tfa"
            onChange={handleInputChange}
            autoComplete="off"
            maxLength={6}
            defaultValue=""
          />
          <p className="tips">{tips.tfa}</p>
        </div>
        <div className="item">
          <button
            className={
              info.tfa == "" || tips.tfa || loading ? "next disable" : "next"
            }
            onClick={handleSubmit2fa}
          >
            <span className={loading ? "icon" : "icon dn"}>
              <RoundLoading />
            </span>
            <span>下一步</span>
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="page-login-mobile">
      <div className="title">
        <h2>登录</h2>
      </div>
      <div className="form-wrap">
        <h1>DIGITALYCHEE</h1>
        <div className="form">
          {renderStep1()}
          {renderStep2()}
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
