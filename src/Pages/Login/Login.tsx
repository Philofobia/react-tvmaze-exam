import { Link } from "react-router-dom";
import { useState } from "react";

type props = {
  handleInputs: (
    e: React.MouseEvent<HTMLButtonElement>,
    email: string,
    password: string,
    existingAcc: boolean
  ) => void;
  handleLogOut: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const LoginPage = (props: props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmail = (input: string) => {
    setEmail(input);
  };

  const handlePassword = (input: string) => {
    setPassword(input);
  };

  const buttonDisabled = () =>
    email.trim().length === 0 || password.trim().length === 0;
  const missingIputs = () => alert("YOU FORGOT SOMETHING");

  return (
    <div className="container mx-auto px-4">
      <h2 className="">LOGIN TO THE WEBSITE</h2>
      <div className="form-control grid gap-4 grid-cols-1 grid-rows-3">
        <div>
          <label className="label">
            <span className="label-text">Type your e-mail.</span>
          </label>
          <input
            type="email"
            placeholder="Type your email here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => handleEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Type your password.</span>
          </label>
          <input
            type="password"
            placeholder="Type your password here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => handlePassword(e.target.value)}
          />
        </div>
        <div>
          <button
            className="btn btn-primary mr-5"
            disabled={buttonDisabled()}
            onClick={(e) =>
              email && password
                ? props.handleInputs(e, email, password, true)
                : missingIputs()
            }
          >
            SIGN IN
          </button>
          <button
            className="btn btn-primary"
            onClick={(e) => props.handleLogOut(e)}
          >
            SIGN OUT
          </button>
        </div>
      </div>
      <Link
        to="/authentication/register"
        className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
      >
        Register
      </Link>
    </div>
  );
};

export default LoginPage;
