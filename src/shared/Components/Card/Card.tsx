import { propsMovieCard } from "../../../services/models";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import { CurrentUserConsumer } from "../../../context/AuthContext";
import { setUserShows, deleteUserShow } from "../../../services/firebase.db";
import { searchMovieBool } from "../../../services/models";
import useFavoruiteCheck from "../../../customHooks/useFavouriteCheck";
import { useEffect } from "react";

const CardComponent = (props: propsMovieCard) => {
  const { currentUser } = CurrentUserConsumer();
  const favourite = useFavoruiteCheck(props.show.show.id);

  const handleShowFav = (show: searchMovieBool) => {
    if (show.favourite === false) {
      props.show.favourite = true;
      setUserShows(currentUser!.uid, show);
    } else {
      props.show.favourite = false;
      deleteUserShow(currentUser!.uid, show);
    }
  };
  useEffect(()=> {}, [favourite])

  return (
    <div className="card w-96 bg-base-100 shadow-xl m-3">
      <figure className="max-h-64">
        <img
          src={props.show.show.image?.medium}
          alt={props.show.show.name}
          className="w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {props.show.show.name}
          <div className="badge badge-secondary">
            {props.show.show.language}
          </div>
          <button
            className="btn"
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
        </h2>
        <div className="p-1 max-h-32" style={{ overflow: "hidden" }}>
          {props.show.show.summary
            ? parse(`${props.show.show.summary}`)
            : "NO INFO"}
        </div>
        <div className="card-actions justify-end">
          {props.show.show.genres?.map((genre, i) => (
            <div className="badge badge-outline" key={i}>
              {genre}
            </div>
          ))}
        </div>
        <Link to={"/details/" + props.show.show.id}>
          <button className="btn">READ MORE</button>
        </Link>
      </div>
    </div>
  );
};

export default CardComponent;
