import { useDispatch, useSelector } from "react-redux";
import { addShow, removeShow } from "../../redux/reducers/favourite.slice";
import { RootState } from "../../redux/store/store";
import CardComponent from "../../shared/Card";

import { CurrentUserConsumer } from "../../context/AuthContext";
import { getUserShows } from "../../services/firebase.db";

const FavouritePage = () => {
  const { currentUser } = CurrentUserConsumer();
  const favShows = useSelector((state: RootState) => {
    return state.favShow;
  });
  const dispatch = useDispatch();

  const handleUserShow = () => {
    if (currentUser) {
      getUserShows(currentUser.uid, (Math.random())*10);
    }
  };

  return (
    <>
      <h2 className="font-title text-2xl antialiasing my-5 text-center">
        MY FAV SHOWS
      </h2>
      <button className="btn" onClick={handleUserShow}>
        SI
      </button>
      <button className="btn" onClick={() => dispatch(addShow)}>
        NO
      </button>
      <div className="flex flex-col flex-wrap md:flex-row">
        {favShows &&
          favShows.map((show, index) => (
            <CardComponent show={show} key={index} />
          ))}
      </div>
    </>
  );
};

export default FavouritePage;
