import { propsMovieCard } from "../../../services/models";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import { CurrentUserConsumer } from "../../../context/AuthContext";
import {
  setUserShows,
  deleteUserShow,
  setUserWatchingShow,
  deleteUserWatchingShow,
} from "../../../services/firebase.db";
import { searchMovieBool } from "../../../services/models";
import useFavoruiteCheck from "../../../customHooks/useFavouriteCheck";
import posterPlaceholder from "../../../assets/posterPlaceholder.png";
import useWatchingChek from "../../../customHooks/useWatchingCheck";

const CardComponent = (props: propsMovieCard) => {
  const { currentUser } = CurrentUserConsumer();
  const favourite = useFavoruiteCheck(props.show.show.id);
  const watchingCheck = useWatchingChek(props.show.show.id);

  const handleShowFav = (show: searchMovieBool) => {
    if (show.favourite === false) {
      props.show.favourite = true;
      setUserShows(currentUser!.uid, show);
    } else {
      props.show.favourite = false;
      deleteUserShow(currentUser!.uid, show);
    }
  };

  const handleShowWatch = (show: searchMovieBool) => {
    if (watchingCheck === false) {
      deleteUserWatchingShow(currentUser!.uid);
      setUserWatchingShow(currentUser!.uid, show);
    } else {
      deleteUserWatchingShow(currentUser!.uid);
    }
  };

  return (
    <div className="card w-72 bg-base-100 shadow-xl m-3 sm:w-96">
      <figure className="max-h-32 sm:max-h-64">
        <img
          src={props.show.show.image?.medium || posterPlaceholder}
          alt={props.show.show.name}
          className="w-full"
        />
      </figure>
      <div className="card-body">
        <div className="card-title">
          <h3 className="font-title text-xl antialiasing">
            {props.show.show.name}
          </h3>
          <div className="font-body badge badge-secondary ml-auto">
            {props.show.show.language}
          </div>
          <div className="hidden max-h-14 w-36 sm:inline-block">
            <button
              className="btn w-12 ml-3"
              onClick={() => handleShowFav(props.show)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={favourite ? "black" : "none"}
                viewBox="2 2 20 20"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
            <button
              className="btn w-12 ml-3 align-bottom"
              onClick={() => handleShowWatch(props.show)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={watchingCheck ? "black" : "none"}
                viewBox="1 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="card-title mx-auto sm:hidden">
          <button
            className="btn w-12"
            style={{ width: 50, marginLeft: 10 }}
            onClick={() => handleShowFav(props.show)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={favourite ? "black" : "none"}
              viewBox="2 2 20 20"
              stroke="black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <button
            className="btn w-12"
            style={{ width: 50, marginLeft: 10 }}
            onClick={() => handleShowWatch(props.show)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={watchingCheck ? "black" : "none"}
              viewBox="1 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
              />
            </svg>
          </button>
        </div>
        <Link to={"/details/" + props.show.show.id} className="btn w-full">
          READ MORE
        </Link>
        <div
          className="font-body antialiasing p-1 max-h-32 hidden sm:inline-block"
          style={{ overflow: "hidden" }}
        >
          {props.show.show.summary
            ? parse(`${props.show.show.summary}`)
            : "NO INFO"}
        </div>
        <div className="font-body card-actions justify-center sm:justify-end">
          {props.show.show.genres?.map((genre, i) => (
            <div className="badge badge-outline" key={i}>
              {genre}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
