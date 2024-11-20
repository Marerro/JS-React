import {useState} from "react";
import AdminPrivileges from "./Adminprivileges";
import Userprivileges from "./Userprivileges";
import Guestpage from "./Guestpage";

function Conditional3 () {

    const [userRole, setUserRole] = useState("");

    let jsx;

    switch(userRole) {
        case "admin":
            jsx = <AdminPrivileges />;
        break;
        case "user":
            jsx = <Userprivileges />;
        break;
        case "guest":
            jsx = <Guestpage />;
        break;
        default:
            jsx = <Guestpage />;
        break;
    };

    return (
        <>
        <div className="p-5">{jsx}</div>
        <button className="p-5" onClick={() => setUserRole("admin")}>Set Admin Role</button>
        <button className="p-5" onClick={() => setUserRole("user")}>Set User Role</button>
        <button onClick={() => setUserRole("guest")}>Back to Guest</button>
        </>
    )

}

export default Conditional3