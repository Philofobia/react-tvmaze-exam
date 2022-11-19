// API SEARCH SHOWS
export interface searchMovieByName {
  show: {
    id: number;
    name: string;
    language: string;
    genres: string[];
    rating: { average: number };
    image: { medium: string };
    summary: string;
  };
}

export interface searchMovieBool extends searchMovieByName {
  favourite: boolean;
}

// SHOWS CARDS
export interface propsMovieCard {
  show: searchMovieBool;
}
