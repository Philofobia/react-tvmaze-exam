import CardComponent from "../../shared/Components/Card/Card";
import { CurrentUserConsumer } from "../../context/AuthContext";
import HeaderComponent from "../../shared/Header/Header";
import useFavouriteShows from "../../customHooks/useFavouriteShow";

const FavouritePage = () => {
  const { currentUser } = CurrentUserConsumer();
  const shows = useFavouriteShows(currentUser?.uid);

  return (
    <>
      <HeaderComponent />
      <h2 className="font-title text-2xl antialiasing my-5 text-center">
        MY FAV SHOWS
      </h2>
      <div className="flex flex-col flex-wrap md:flex-row">
        {shows &&
          Object.keys(shows).map((key, index) => (
            <CardComponent show={shows[key]} key={index} />
          ))}
      </div>
    </>
  );
};

export default FavouritePage;