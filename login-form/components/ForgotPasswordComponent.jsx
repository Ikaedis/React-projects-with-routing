import { useState } from "react";

function ForgotPasswordForm() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("We have sent you a verification code to your email");
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="recovery-email">enter your recovery email</label>
      <br />
      <input type="email" id="recovery-email" required />
      <br />
      <input type="submit" />
      <br />
      <p>
        Go back to
        <a href="#"> sign in</a>
        <br />
        or if you dont have an account <a href="#">sign up</a>
      </p>
    </form>
  );
}

export default ForgotPasswordForm;
