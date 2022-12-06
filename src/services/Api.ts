import { firebaseDbMovie, searchMovieBool, searchMovieByName, showDetails, showDetailsApi } from "./models";

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

export const getShowDetails = async (id: string) => {
  const res = await fetch (`${URL_API}/shows/${id}`);
  const data: showDetailsApi = await res.json();
  const objData: showDetails = {
    id: data.id,
    title: data.name,
    language: data.language,
    genres: data.genres,
    start: data.premiered,
    end: data.ended,
    rating: data.rating.average,
    image: data.image?.original,
    summary: data.summary
  };
  return objData;
}