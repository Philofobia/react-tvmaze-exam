import { useState } from "react";
import { CurrentUserConsumer } from "../../context/AuthContext";

const RegisterPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { currentUser, createUser } = CurrentUserConsumer();

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
  if (!currentUser) {
    return (
      <div className="container mx-auto px-4">
        <h2 className="font-title text-2xl antialiasing my-10 text-center">
        Create your account
      </h2>
        <div className="form-control grid gap-4 grid-cols-1 grid-rows-3">
          <div className="font-body text-xl antialiasing">
            <label className="label">
              <span className="label-text">What is your e-mail?</span>
            </label>
            <input
              type="email"
              placeholder="Type your email here"
              className="input input-bordered w-full max-w-xs"
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
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => handleInput(e.target.value, false)}
            />
          </div>
          <div>
            <button
              className="btn btn-primary"
              disabled={buttonDisabled()}
              onClick={createAccount}
            >
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <h2>
        USER ALREADY EXISTS: <span>{currentUser?.email}</span>
      </h2>
    );
  }
};

export default RegisterPage;
