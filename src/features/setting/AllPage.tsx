import { Link } from "react-router-dom"

const msg = 'HomeIndex'

const HomeIndex = () => {
  return (
    <div>
      <h1>所有页面</h1>
      <Link to="/">Back Home</Link>
    </div>
  )
}

export default HomeIndex;
