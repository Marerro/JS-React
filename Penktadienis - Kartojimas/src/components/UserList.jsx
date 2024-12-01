import {useState} from "react";
import {useForm} from "react-hook-form";

function UserList () {

    const [user, setUser] = useState([
       { 
        nickname: "Jonas",
        email: "kuneckisj@gmail.com",
       }
    ])

    const { nickname, email } = user[0];

    const {register,reset} = useForm();
    const [open, setOpen] = useState(false);
    const [newNickname, setNewNickname] = useState("");
    const [newEmail, setNewEmail] = useState("");

    const handleUpdate = (e) => {
        e.preventDefault();
        setUser((prev) => [{
            ...prev[0],
             nickname: newNickname,
            email:newEmail
         }]);
         reset();
         setOpen(false);
    } 


    return (
        <>
        <form>
            <div className="bg-neutral-500 p-3">
            <h1 className="text-center">User UI</h1>
            <div className="text-center text-teal-500">
            <p>Current name: {nickname}</p>
            <p>Current email: {email}</p>
            </div>
            <div className="flex justify-center">
                <button type="button" className="" onClick={() => setOpen(!open)}>Edit profile</button>
               {open && (
                    <div className="flex justify-center text-center">
                    <input type="text"
                    placeholder="Enter new nickname"
                    {...register("name", {required: "Įrašykite savo nauja slapyvardį!"})}
                    onChange={(e) => setNewNickname(e.target.value)}
                    />
                    <input type="text"
                    placeholder="Enter new email"
                    {...register("email", {required: "Įrašykite savo nauja el.paštą!"})}
                    onChange={(e) => setNewEmail(e.target.value)}
                    />
                    <button type="submit" onClick={handleUpdate}>Save</button>
                    </div>
               )}
               </div>
            </div>
        </form>
        </>
    )

    }

export default UserList;