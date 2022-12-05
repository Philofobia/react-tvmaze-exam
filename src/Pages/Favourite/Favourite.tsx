import CardComponent from "../../shared/Card/Card";
import { useEffect, useState } from "react";
import { firebaseDbMovie } from "../../services/models";
import { searchMovieBool } from "../../services/models";
import { CurrentUserConsumer } from "../../context/AuthContext";
import {
  setUserShows,
  deleteUserShow,
  getUsersShows,
} from "../../services/firebase.db";
import HeaderComponent from "../../shared/Header/Header";

const FavouritePage = () => {
  const [shows, setShow] = useState<firebaseDbMovie>();
  const { currentUser } = CurrentUserConsumer();

  const handleShowFav = (show: searchMovieBool) => {
    if (show.favourite === false) {
      show.favourite = true;
      setUserShows(currentUser!.uid, show);
    } else {
      show.favourite = false;
      deleteUserShow(currentUser!.uid, show);
    }
  };

  useEffect(() => {
    getUsersShows(currentUser!.uid).then((res) => setShow(res));
  }, [currentUser?.uid]);

  return (
    <>
      <HeaderComponent />
      <h2 className="font-title text-2xl antialiasing my-5 text-center">
        MY FAV SHOWS
      </h2>
      <div className="flex flex-col flex-wrap md:flex-row">
        {shows &&
          Object.keys(shows).map((key, index) => (
            <CardComponent
              handleShow={(event, show) => handleShowFav(show)}
              show={shows[key]}
              key={index}
            />
          ))}
      </div>
    </>
  );
};

export default FavouritePage;
