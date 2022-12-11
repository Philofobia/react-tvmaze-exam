import { useState } from "react";
import { Link } from "react-router-dom";
import { CurrentUserConsumer } from "../../context/AuthContext";
import ThemeButton from "../../shared/Components/ThemeButton/ThemeButton";

const RegisterPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { createUser } = CurrentUserConsumer();

  const handleInput = (input: string, handle: boolean) => {
    if (handle) setEmail(input);
    else setPassword(input);
  };

  const createAccount = () => {
    try {
      createUser(email, password);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const buttonDisabled = () =>
    email.trim().length === 0 || password.trim().length === 0;

  return (
    <div className="container mx-auto px-4">
      <div className="absolute bottom-5 right-5">
        <ThemeButton />
      </div>
      <h2 className="font-title text-4xl antialiasing h-20 pt-8 mb-16 text-center">
        Create your account
      </h2>
      <div className="form-control grid gap-4 grid-cols-1 grid-rows-4 m-auto p-3 card w-full sm:shadow-xl rounded sm:border sm:w-96">
        <div className="font-body text-xl antialiasing">
          <label className="label">
            <span className="label-text">What is your e-mail?</span>
          </label>
          <input
            type="email"
            placeholder="Type your email here"
            className="input input-bordered w-full"
            onChange={(e) => handleInput(e.target.value, true)}
          />
        </div>
        <div className="font-body text-xl antialiasing">
          <label className="label">
            <span className="label-text">Choose your password.</span>
          </label>
          <input
            type="password"
            placeholder="Type your password here"
            className="input input-bordered w-full"
            onChange={(e) => handleInput(e.target.value, false)}
          />
        </div>
        <div>
          <button
            className="btn w-full"
            disabled={buttonDisabled()}
            onClick={createAccount}
          >
            SIGN UP
          </button>
        </div>
        <div>
          <p className="font-body text-xl antialiasing text-center mb-2">
            You already have an account?
          </p>
          <Link className="btn w-full" to="/authentication/login">
            SIGN IN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
