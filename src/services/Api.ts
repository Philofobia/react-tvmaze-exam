import { searchMovieBool, searchMovieByName } from "./models";

const URL_API = "https://api.tvmaze.com";

export const getShowsByname = async (
  query: string
): Promise<searchMovieBool[]> => {
  query = query.trim();
  if (query.length === 0) {
    return [];
  }

  const res = await fetch(`${URL_API}/search/shows?q=${query}`);
  const data: searchMovieByName[] = await res.json();
  const mappedData: searchMovieBool[] = data.map((el) => ({
    ...el,
    favourite: false,
  }));
  return mappedData;
};
