import { useForm } from "react-hook-form";
import { postdata } from "../helpers/post";
import { useState } from "react";

function Form({ setUpdate }) {
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmitHandler = async (data) => {
    try {
      await postdata({ ...data, likes: 0 });
      setUpdate((prev) => prev + 1);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(formSubmitHandler)} noValidate>
        <div>
          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            id="userName"
            {...register("userName", {
              required: "User Name is required",
            })}
          />
          <div className="error">{errors.userName?.message}</div>
        </div>

        <div>
          <label htmlFor="email">User Email:</label>
          <input
            type="text"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Ivalid email adress format",
              },
              validate: {
                notAdmin: (fieldValue) => {
                  return (
                    fieldValue !== "admin@gmail.com" ||
                    "Enter different email address"
                  );
                },
                notBlackListed: (fieldValue) => {
                  return (
                    !fieldValue.endsWith("bademail.com") ||
                    "This email is not valid"
                  );
                },
              },
            })}
          />
          <div className="error">{errors.email?.message}</div>
        </div>

        <div>
          <label htmlFor="channel">Favourite channel:</label>
          <input type="text" id="channel" {...register("channel")} />
        </div>

        <input type="submit" value="Submit" className="bg-red-300 p-3" />
      </form>
      {error && <p className="text-red-700">{error}</p>}
    </>
  );
}

export default Form;
