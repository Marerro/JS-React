import {useState} from "react";

function Conditional2() {

    const [isLoggedIn, setLoggedIn] = useState(false);

    const logIn = () => setLoggedIn((prev) => !prev);

    let content
    let buttonText

    if(isLoggedIn) {
        content = <button className="rounded-full bg-cyan-400 p-1.5">Profile</button>
        buttonText = "Log out";
    } else {
        buttonText = "Log in";
        content = (
        <>
        <button className="rounded-full bg-cyan-400	p-1.5">Sign up</button>
        </>
        )
    }

    return (
        <>
    <div className="p-5 flex-1">{content}</div>
    <button onClick={logIn} className="rounded-full bg-cyan-400	p-1.5">{buttonText}</button>
        </>
    )

}

export default Conditional2;