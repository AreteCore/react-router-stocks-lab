import {Link} from "react-router-dom"

export default function Nav() {
   return <div className="nav">
        {/* <h3>Navigation</h3> */}
        <Link to={"/"}><div>Home/Portfolio</div></Link>
        {/* <Link to={"/stocks"}><div>My Portfolio</div></Link> */}
        <Link to={"/about"}><div>About Page</div></Link>
    </div>
}