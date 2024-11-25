import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function RegisterForm() {

    const { register, control, watch, handleSubmit, setValue, formState: { errors } } = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: "",
            passwdR: "",
        }
    })

    const formSubmitHandler = (data) => {
        console.log(data)
        const { username, email, password, passwdR } = data;
        alert(`${username}, ${email}, ${password}, ${passwdR}`);
        setValue("username", "");
        setValue("email", "");
        setValue("password", "");
        setValue("passwdR", "");
    }

    return (
        <>
            <form onSubmit={handleSubmit(formSubmitHandler)}>
                <div className="p-3">
                <label htmlFor="fname"></label>
                <input type="text" id="Name" placeholder="Enter your Full name"
                {...register("username", { required: "This field is required" })}/>
                <p className="text-red-600">{errors.username?.message}</p>
                </div>
                <div className="p-3">
                <label htmlFor="fname"></label>
                <input type="text" id="Email" placeholder="Email"
                {...register("email", { required: "This field is required", 
                validate: {
                    validEmail: (fieldValue) => {
                        return (
                            fieldValue.endsWith("gmail.com") || "Email must be ended with @gmail.com"
                        )
                    }
                }})} />
                <p className="text-red-600">{errors.email?.message}</p>
                </div>
                <div className="p-3">
                <label htmlFor="fname"></label>
                <input type="text" id="password" placeholder="Password"
                {...register("password", { required: "This field is required",
                validate: {
                    passCharacter: (passValue) => {
                        return (
                            passValue.length > 8 || "Password must have more than 8 Characters."
                        )
                    }
                 }
                })}
                />
                <p className="text-red-600">{errors.password?.message}</p>
                </div>
                <div className="p-3">
                <label htmlFor="fname"></label>
                <input type="text" id="passwdR" placeholder="Repeat password"
                {...register("passwdR", {
                required: "This field is required",
                validate: (passw) =>
                passw === watch("password") || "Passwords do not match",
                })}
                />
                <p className="text-red-600">{errors.passwdR?.message}</p>
                </div>
                <input className="p-3" type="submit" value="Submit" />

            </form>
            <DevTool control={control} />
        </>
    )

}

export default RegisterForm;