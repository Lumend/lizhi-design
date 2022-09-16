import { Link } from "react-router-dom"
const msg = "404 Not Found"

function SettingIndex() {
  return (
    <div>
      <h1>izhi.io</h1>
      <p>{msg}</p>
      <Link to="https://www.lizhi.io">返回首页</Link>
    </div>
  )
}

export default SettingIndex
