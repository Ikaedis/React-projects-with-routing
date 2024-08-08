import { useEffect, useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordShowing, setIsPasswordShowing] = useState(false);

  useEffect(() => {
    console.log(email);
  }, [email]);

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">email</label>
      <br />
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        required
      />
      <br />
      <label htmlFor="password">password</label>
      <br />
      <input
        type={isPasswordShowing ? "text" : "password"}
        id="password"
        name="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        required
      />
      <br />
      <input
        type="checkbox"
        id="show-password"
        name="show-password"
        checked={isPasswordShowing}
        onChange={() => {
          setIsPasswordShowing(!isPasswordShowing);
        }}
      />
      <label htmlFor="show-password">Show password</label>
      <br />
      <input type="submit" />
      <br />
      <a href="#">Forgot password?</a>
      <p>
        {" "}
        Dont have an account? <a href="#">Create one</a>
      </p>
    </form>
  );
}

export default LoginForm;
