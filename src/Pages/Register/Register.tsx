import { useState } from "react";

type props = {
  handleInputs: (
    e: React.MouseEvent<HTMLButtonElement>,
    email: string,
    password: string,
    existingAcc: boolean
  ) => void;
};

const RegisterPage = (props: props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmail = (input: string) => {
    setEmail(input);
  };

  const handlePassword = (input: string) => {
    setPassword(input);
  };

  const buttonDisabled = () => email.trim().length === 0 || password.trim().length === 0;
  const missingIputs = () => alert("YOU FORGOT SOMETHING")

  return (
    <div className="container mx-auto px-4">
      <h2 className="">REGISTER TO THE WEBSITE</h2>
      <div className="form-control grid gap-4 grid-cols-1 grid-rows-3">
        <div>
          <label className="label">
            <span className="label-text">What is your e-mail?</span>
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
            <span className="label-text">Choose your password.</span>
          </label>
          <input
            type="password"
            placeholder="Type your password here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => handlePassword(e.target.value)}
          />
        </div>
        <div>
          <button className="btn btn-primary" 
          disabled={buttonDisabled()}
          onClick={(e) => email && password ? props.handleInputs(e, email, password, false) : missingIputs()}
          >SIGN UP</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
