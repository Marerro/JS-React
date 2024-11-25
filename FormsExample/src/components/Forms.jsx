import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";


function Forms() {

    const { register, control, handleSubmit, setValue, watch, pattern, formState: { errors } } = useForm({
        mode: "onBlur",
        reValidateMode: "onChange",
        defaultValues: {
            username: "",
            email: "",
            channel: "",
            color: "",
            hobbies: "",
        }
    });

    const { username, email } = watch();

    const formSubmitHandler = (data) => {
        console.log(data);
        // reset();
        setValue("username", "");
        setValue("email", "");
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit(formSubmitHandler)} noValidate>
                    <div className="m-3">
                        <input type="text" id="username" placeholder="Enter username"
                            {...register("username", { required: "This field is required" })} />
                        <p className="text-red-600">{errors.username?.message}</p>
                    </div>
                    <div className="m-3">
                        <input type="email" id="email" placeholder="Enter email"
                            {...register("email", {
                                required: "This field is required",
                                pattern: { value: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim, message: "Invalid email address" },
                                validate: {
                                    notAdmin: (fieldValue) => {
                                        return (
                                            fieldValue !== "admin@gmail.com" || "Enter different email."
                                        )
                                    },

                                    emailFunction: (emailValue) => {
                                        return (
                                            (emailValue.endsWith("gmail.com") || "Email must be ended with @gmail.com")
                                        )
                                    }
                                }
                            })} />
                        <p className="text-red-600	">{errors.email?.message}</p>
                    </div>
                    <div className="m-3">
                        <h6>Favorite Channel:</h6>
                        <select id="channel" {...register("channel")}>
                            <option value="">Select a channel</option>
                            <option value="Code with ania Kubow">Code with ania Kubow</option>
                            <option value="Kevin Powel">Kevin Powel</option>
                            <option value="Net Ninja">Net Ninja</option>
                        </select>
                    </div>
                    <div className="m-3">
                        <h6>Choose your favorite color</h6>
                        <label className="block">
                            <input type="radio" value="green" {...register("color", { required: "Please select color!" })} /> Green
                        </label>
                        <label className="block">
                            <input type="radio" value="blue" {...register("color", { required: "Please select color!" })} /> Blue
                        </label>
                        <label className="block">
                            <input type="radio" value="red" {...register("color", { required: "Please select color!" })} /> Red
                        </label>
                    </div>

                    <div className="m-3">
                        <h6>Select Your Hobbies:</h6>
                        <label className="block">
                            <input type="checkbox" value="Reading" {...register("hobbies", { required: "Please select your hobby!" })} /> Reading
                        </label>
                        <label className="block">
                            <input type="checkbox" value="Traveling" {...register("hobbies", { required: "Please select your hobby!" })} /> Traveling
                        </label>
                        <label className="block">
                            <input type="checkbox" value="Cooking" {...register("hobbies", { required: "Please select your hobby!" })} /> Cooking
                        </label>
                    </div>

                    <input type="submit" value="Submit" />
                </form>
                <DevTool control={control} />
            </div>

            <div>
                <p>{username}</p>
                <p>{email}</p>
            </div>

        </>
    )
}

export default Forms;