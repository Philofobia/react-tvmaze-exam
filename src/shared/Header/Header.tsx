import { useState } from "react";
import { Link } from "react-router-dom";
import { CurrentUserConsumer } from "../../context/AuthContext";
import AvatarImage from "../../empty_avatar.webp";

const HeaderComponent = () => {
  const { signingOut, currentUser } = CurrentUserConsumer();
  const [error, setError] = useState();

  const handleSignOut = () => {
    try {
      signingOut();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleTheme = () => {
    
  }
  return (
    <header className="pointer-events-auto">
      <nav className="navbar navbar-expand-lg shadow-md py-2 relative flex items-center w-full justify-between">
        <div>
          <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
            <li className="mx-3 nav-item">
              <Link to="/home">Home</Link>
            </li>
            <li className="mr-3 nav-item">
              <Link to="/favourites">Favourites</Link>
            </li>
          </ul>
        </div>
        <div className="absolute right-0">
          <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
            <li className="ml-3 nav-item">
              <button className="btn" onClick={handleSignOut}>
                LOG OUT
              </button>
            </li>
            <li className="ml-3 nav-item">
              <button className="btn" onClick={handleTheme}>
                THEME
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
