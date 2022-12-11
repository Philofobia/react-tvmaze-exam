import { Link } from "react-router-dom";
import { useState } from "react";
import { CurrentUserConsumer } from "../../context/AuthContext";
import ThemeButton from "../../shared/Components/ThemeButton/ThemeButton";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { signIn, signingInWithGoogle } = CurrentUserConsumer();

  const handleInput = (input: string, handle: boolean) => {
    if (handle) setEmail(input);
    else setPassword(input);
  };

  const handleSignIn = () => {
    try {
      signIn(email, password);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleSignInWithGoogle = () => {
    try {
      signingInWithGoogle();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const buttonDisabled = () =>
    email.trim().length === 0 || password.trim().length === 0;

  return (
    <div className="container w-full mx-auto bg-base-100">
      <div className="absolute bottom-5 right-5">
        <ThemeButton />
      </div>
      <h2 className="font-title text-4xl antialiasing h-20 pt-8 mb-10 text-center">
        MOVIE RECORDER
      </h2>
      <div className="form-control grid gap-3 grid-cols-1 m-auto p-3 card w-full sm:shadow-xl rounded sm:border sm:w-96">
        <div className="font-body text-xl antialiasing">
          <label className="label">
            <span className="label-text ">Type your e-mail.</span>
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
            <span className="label-text">Type your password.</span>
          </label>
          <input
            type="password"
            placeholder="Type your password here"
            className="input input-bordered w-full"
            onChange={(e) => handleInput(e.target.value, false)}
          />
        </div>
        <button
          className="btn w-full"
          disabled={buttonDisabled()}
          onClick={handleSignIn}
        >
          SIGN IN
        </button>
        <button
          className="btn"
          id="google-btn"
          onClick={handleSignInWithGoogle}
        >
          <img
            src="https://img.icons8.com/color/16/000000/google-logo.png"
            alt="google"
            className="mr-5"
          />
          Sign with Google
        </button>
        <div>
          <p className="text-center mb-3">You dont have an account?</p>
          <Link to="/authentication/register" className="btn w-full">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
