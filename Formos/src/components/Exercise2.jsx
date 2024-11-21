import { useState } from "react";

function Exercise2() {
  const [checkedItems, setCheckedItems] = useState("");
  const [error, setError] = useState("");

  const handleChange = (checkedItems) => {
    const emailRegex = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;
    if (!emailRegex.test(checkedItems)) {
      throw new Error("Invalid email format");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      handleChange(checkedItems);
      setError("");
      alert("Email subbmited successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Email:</label>
        <input
          type="text"
          value={checkedItems}
          onChange={(e) => setCheckedItems(e.target.value)}
        />
      </form>
      <button type="submit">Submit</button>
      <div>{error && <p style={{ color: "red" }}>{error}</p>}</div>
    </>
  );
}

export default Exercise2;
