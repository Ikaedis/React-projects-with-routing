import { useState, useEffect } from "react";

function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    dateOfBirth: "",
  });

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    Object.values(formData).forEach((element) => {
      if (element === "") {
        alert();
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <br />
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <br />
      <label htmlFor="lastName">Last Name</label>
      <br />
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <br />
      <label htmlFor="email">E-mail</label>
      <br />
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input
        type="text" // Change to password
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <br />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <br />
      <input
        type="text" // Change to password
        id="confirmPassword"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />
      <br />
      <label htmlFor="phoneNumber">Phone Number</label>
      <br />
      <input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        required
      />
      <br />
      <label htmlFor="dateOfBirth">Date of Birth</label>
      <br />
      <input
        type="date"
        id="dateOfBirth"
        name="dateOfBirth"
        value={formData.dateOfBirth}
        onChange={handleChange}
        max={new Date().toISOString().split("T")[0]} // Restricting to past dates
        required
      />
      <br />
      <input type="submit" value="Sign Up" />
    </form>
  );
}

export default SignUpForm;
