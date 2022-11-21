import CardComponent from "../../shared/Card";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { CurrentUserConsumer } from "../../context/AuthContext";
import { getUsersShows } from "../../services/firebase.db";
import { useEffect } from "react";
import { getShows } from "../../redux/reducers/favourite.slice";

const FavouritePage = () => {
  const { currentUser } = CurrentUserConsumer();
  const favShows = useSelector((state: RootState) => {
    return state.favShow;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      const favShows = getUsersShows(currentUser!.uid);
      console.log(favShows)
     /*  dispatch(getShows(favShows)) */
    }
  });

  return (
    <>
      <h2 className="font-title text-2xl antialiasing my-5 text-center">
        MY FAV SHOWS
      </h2>
      <div className="flex flex-col flex-wrap md:flex-row">
        {/*         {favShows &&
          favShows.map((show, index: number) => (
            <CardComponent show={show} key={index} />
          ))} */}
      </div>
    </>
  );
};

export default FavouritePage;
