import { useState } from "react";
import { CurrentUserConsumer } from "../../context/AuthContext";

const HomePage = () => {
  const [error, setError] = useState();
  const { signingOut } = CurrentUserConsumer();
  const handleSignOut = () => {
    try {
      signingOut();
    } catch (err: any) {
      setError(err.message);
    }
  };

  return <button className="btn" onClick={handleSignOut}>EXIT</button>;
};

export default HomePage;
