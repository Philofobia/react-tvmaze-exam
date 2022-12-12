import CardComponent from "../../shared/Components/Card/Card";
import { CurrentUserConsumer } from "../../context/AuthContext";
import HeaderComponent from "../../shared/Header/Header";
import useFavouriteShows from "../../customHooks/useFavouriteShow";
import useWatchingShows from "../../customHooks/useWatchingShow";

const FavouritePage = () => {
  const { currentUser } = CurrentUserConsumer();
  const showsFav = useFavouriteShows(currentUser?.uid);
  const showWatch = useWatchingShows(currentUser?.uid);

  return (
    <>
      <HeaderComponent />
      <h2 className="font-title text-2xl antialiasing my-5 text-center">
        MY FAVAVOURITE SHOWS
      </h2>
      <div className="flex flex-wrap justify-center">
        {showsFav &&
          Object.keys(showsFav).map((key, index) => (
            <CardComponent show={showsFav[key]} key={index} />
          ))}
      </div>
      <hr />
      <h2 className="font-title text-2xl antialiasing my-5 text-center">
        CURRENTLY WATCHING
      </h2>
      <div className="flex flex-wrap justify-center">
        {showWatch &&
          Object.keys(showWatch).map((key) => (
              <CardComponent show={showWatch[key]} key={key} />
          ))}
      </div>
    </>
  );
};

export default FavouritePage;
