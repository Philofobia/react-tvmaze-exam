import { useState } from "react";
import { Link } from "react-router-dom";
import { CurrentUserConsumer } from "../../context/AuthContext";
import ThemeButton from "../Components/ThemeButton/ThemeButton";

const HeaderComponent = () => {
  const { signingOut } = CurrentUserConsumer();
  const [error, setError] = useState();

  const handleSignOut = () => {
    try {
      signingOut();
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <header className="navbar bg-base-100 shadow-xl">
      <div className="navbar-start sm:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/favourites">Favourites</Link>
            </li>
            <hr className="my-2" />
            <li>
              <button className="btn" onClick={handleSignOut}>
                LOG OUT
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-start hidden sm:inline-block">
        <Link to="/home" className="mr-5 font-title antialiasing text-xl350 hover:text-primary">Home</Link>
        <Link to="/favourites" className="font-title antialiasing text-xl350 hover:text-primary">Favourites</Link>
      </div>
      <div className="navbar-center">
        <h2 className="font-title antialiasing text-2xl">MOVIES APP</h2>
      </div>
      <div className="navbar-end">
        <button
          className="btn hidden sm:inline-block sm:mr-5"
          onClick={handleSignOut}
        >
          LOG OUT
        </button>
        <ThemeButton />
      </div>
    </header>
  );
};

export default HeaderComponent;
