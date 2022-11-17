import { Link } from "react-router-dom";
import { useState } from "react";
import { CurrentUserConsumer } from "../../context/AuthContext";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { currentUser, signIn, signingInWithGoogle, signingOut } =
    CurrentUserConsumer();

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

  const handleSignOut = () => {
    try {
      signingOut();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const buttonDisabled = () =>
    email.trim().length === 0 || password.trim().length === 0;

  return (
    <div className="container mx-auto px-4">
      <h2 className="font-title text-4xl antialiasing my-12 text-center">MOVIE LOVE</h2>
      <div className="form-control grid gap-4 grid-cols-1 grid-rows-3">
        <div className="font-body text-xl antialiasing">
          <label className="label">
            <span className="label-text">Type your e-mail.</span>
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
            <span className="label-text">Type your password.</span>
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
            className="btn btn-primary mr-5"
            disabled={buttonDisabled()}
            onClick={handleSignIn}
          >
            SIGN IN
          </button>
          {currentUser !== null && (
            <button className="btn btn-primary" onClick={handleSignOut}>
              SIGN OUT
            </button>
          )}
        </div>
      </div>
      <button className="btn btn-primary mr-5" onClick={handleSignInWithGoogle}>
        GOOGLE
      </button>
      <Link
        to="/authentication/register"
        className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
      >
        Register
      </Link>
      <Link
        to="/home"
        className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
      >
        Home
      </Link>
    </div>
  );
};

export default LoginPage;
