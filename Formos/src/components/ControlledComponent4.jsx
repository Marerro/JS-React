import { useState } from "react";

const EmailValidationForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    // Regular expression for a valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Invalid email format");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    try {
      validateEmail(email); // Validate email
      setError(""); // Clear any previous errors
      alert("Email submitted successfully!");
    } catch (err) {
      setError(err.message); // Set the error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default EmailValidationForm;
