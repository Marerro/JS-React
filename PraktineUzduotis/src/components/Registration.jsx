import {useState} from "react"
import {useForm} from "react-hook-form"

function Registration() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    bloodGroup: "",
  })

  const {register, reset, handleSubmit} = useForm();

  const postData = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/donors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        alert("Donor successfully registered!");
        reset();
      } else {
        throw new Error("Failed to save data");
      }
    } catch (error) {
      alert("Įvyko klaida. Bandykite dar kartą");
      console.error("Error:", error);
    }
  };

  return (
    <div className="p-8 w-2/4 m-auto">
      <h1 className="text-2xl font-bold">Registration Page</h1>
      <form onSubmit={handleSubmit(postData)} className="mt-4">
        <label>
          Name:
          <input
            type="text"
            className="border border-gray-300 rounded px-2 py-1 w-full"
            placeholder="Enter your name"
            {...register("firstName", {required: "Vardas yra privalomas!"})}
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            className="border border-gray-300 rounded px-2 py-1 w-full"
            placeholder="Enter your last name"
            {...register("lastName", {required: "Pavardė yra privaloma!"})}
          />
        </label>
        <label>
          Age:
          <input
            type="text"
            className="border border-gray-300 rounded px-2 py-1 w-full"
            placeholder="Enter your age"
            {...register("age", {required: "Metai yra privalomi!"})}
          />
        </label>

        <label>
          Gender
          <br></br>
          <input type="radio" id="male" name="fav_language" value="male"
          {...register("gender")}
          />
          <label className="p-2" htmlFor="male">
            Male
          </label>
        </label>

        <br></br>

        <input type="radio" id="female" name="fav_language" value="female"
        {...register("gender")}
        />
        <label className="p-2" htmlFor="female">
          Female
        </label>

        <br></br>

        <label>
          Blood group:
          <br></br>
          <input type="radio" id="A" name="fav_language" value="A" 
          {...register("bloodGroup")}
          />
          <label className="p-2" htmlFor="A">
            A-
          </label>
        </label>

        <br></br>

        <input type="radio" id="B" name="fav_language" value="B"
        {...register("bloodGroup")} />
        <label className="p-2" htmlFor="B">
          B+
        </label>

      <br></br>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex justify-center">Save</button>
      </form>
    </div>
  );
}

export default Registration;
