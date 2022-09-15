import { Link } from "react-router-dom"
const msg = 'Setting Index'

function SettingIndex() {
    return (<div>
        <h1>{ msg }---</h1>
        <Link to="/">Back Home</Link>
    </div>)
}

export default SettingIndex