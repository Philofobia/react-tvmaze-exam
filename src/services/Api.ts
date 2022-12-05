import { firebaseDbMovie, searchMovieBool, searchMovieByName } from "./models";

const URL_API = "https://api.tvmaze.com";

export const getShowsByname = async (
  query: string
): Promise<firebaseDbMovie> => {
  query = query.trim();
  if (query.length === 0) {
    return {};
  }

  const res = await fetch(`${URL_API}/search/shows?q=${query}`);
  const data: searchMovieByName[] = await res.json();
  const mappedData: searchMovieBool[] = data.map((el) => ({
    ...el,
    favourite: false,
  }));
  const objData: firebaseDbMovie = {};
  mappedData.forEach((element) => {
    objData[element.show.id] = element;
  })
  return objData;
};
