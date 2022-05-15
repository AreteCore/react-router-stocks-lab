import {Link} from "react-router-dom"

export default function Nav() {
    <div className="nav">
        <Link to={"/"}><div>My Portfolio</div></Link>
        <Link to={"/home"}><div>Home Page</div></Link>
        <Link to={"/about"}><div>About Page</div></Link>
    </div>
}