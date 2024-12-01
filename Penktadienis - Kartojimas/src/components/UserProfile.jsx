import {useState} from "react";
import { useForm } from "react-hook-form";

function UserProfile () {

    const [user, setUser] = useState({
        nickname: "Marerro",
        email: "kuneckisj@gmail.com"
})

const { register, handleSubmit, reset, formState: {errors} }= useForm();

const { nickname, email } = user;

    const updateDetails = (data) => {
        console.log(data);
        setUser(data);
        reset();
    }


    return (
        <>
        <div className="bg-slate-700 text-center">
        <p className="text-cyan-500">Vartotojo vardas: {nickname}</p><br></br>
        <p className="text-cyan-500">El.paštas: {email}</p>

        <form onSubmit={handleSubmit(updateDetails)}>
            <input
            type="text"
            placeholder="Change your nickname:"
            {...register("nickname", {required:"Enter nickname to change it!"})}
             />
             {errors.nickname && <p className="text-red-700">{errors.nickname.message}</p>}
             <br></br>
             <input 
             className="m-5"
             type="text" 
             placeholder="Enter your new email:"
             {...register("email", {required:"Enter your new email to change!"})}
             />
             {errors.email && <p className="text-red-700">{errors.email.message}</p>}
             <br></br>
             <button type="submit" className="border-2 p-3 bg-orange-900">Change</button>
        </form>
        
        </div>
        </>
    )
}

export default UserProfile;