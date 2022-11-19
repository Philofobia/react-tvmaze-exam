import { useState } from "react";
import { CurrentUserConsumer } from "../../context/AuthContext";
import { getShowsByname } from "../../services/Api";
import { searchMovieBool } from "../../services/models";
import CardComponent from "../../shared/Card";

const HomePage = () => {
  const [error, setError] = useState();
  const [shows, setShows] = useState<searchMovieBool[]>();
  const [search, setSearch] = useState<string>("");
  const { signingOut } = CurrentUserConsumer();

  const handleSignOut = () => {
    try {
      signingOut();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleShowsSearch = () => {
    getShowsByname(search).then((res) => setShows(res));
  };

  return (
    <>
      <h1 className="font-title text-2xl antialiasing my-5 text-center">
        SEARCH YOUR FAVORITE MOVIE
      </h1>
      <div className="flex items-center mx-5">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-orange-500 dark:text-orange-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-orange-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            placeholder="Search a movie"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button
          id="btn-search"
          className="p-2.5 ml-2 text-sm rounded-lg border btn hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
          onClick={handleShowsSearch}
          disabled={search.length > 1 ? false : true}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
      <hr className="mx-5 my-5" />
      <div className="flex flex-col flex-wrap md:flex-row">
        {shows &&
          shows.map((show) => <CardComponent show={show} key={show.show.id} />)}
      </div>
    </>
  );
};

export default HomePage;
