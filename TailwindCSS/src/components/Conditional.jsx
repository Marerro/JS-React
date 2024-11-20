import {useState} from "react";

function Conditional () {

    const [isLoggedIn, setLoggedIn] = useState(false);

    const Login = () => {
        setLoggedIn((prev) => !prev)
    }

    let buttonText
    let Text

    if(isLoggedIn) {
        buttonText = "Log out"
        Text = "Welcome user!"
    } else {
        buttonText = "Log in"
        Text = "Please log in"
    }

    return (
        <>
        <div className="container m-5">
        <button onClick={Login} className="rounded-full bg-cyan-400	p-1.5">{buttonText}</button>
        <p>{Text}</p>
        </div>
        </>
    )
}

export default Conditional;