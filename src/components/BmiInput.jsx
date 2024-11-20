import { useState } from "react";

export const BmiInput = ({ onAddUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    weight: "",
    height: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "weight" || name === "height" ? Number(value) : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.name && formData.weight > 0 && formData.height > 0) {
      onAddUser(formData); // Add the user input to the list
      setFormData({ name: "", weight: "", height: "" }); // Clear form
    }
  }

  return (
    <>
      <h1 className="center">BMI Calculator</h1>
      <section id="user-input">
        <form onSubmit={handleSubmit}>
          <p>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
            />
          </p>
          <p>
            <label htmlFor="weight">Weight (kg)</label>
            <input
              type="number"
              name="weight"
              required
              value={formData.weight}
              onChange={handleInputChange}
            />
          </p>
          <p>
            <label htmlFor="height">Height (m)</label>
            <input
              type="number"
              name="height"
              required
              value={formData.height}
              onChange={handleInputChange}
            />
          </p>
          <button type="submit" className="button">
            Add BMI
          </button>
        </form>
      </section>
    </>
  );
};
