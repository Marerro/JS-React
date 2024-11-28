import {Link, NavLink} from "react-router";

function HomePage() {
    return (
    <>
    <h1>Welcome to HomePage!</h1>
    <nav>
        <NavLink to="/blog">Blog</NavLink>
        <Link to="/about">About</Link>
    </nav>
    </>
    )
}

export default HomePage;