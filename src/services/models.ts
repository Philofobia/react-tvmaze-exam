import { MouseEventHandler } from "react";

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
  handleShow: (
    event: React.MouseEvent<HTMLButtonElement>,
    show: searchMovieBool
  ) => void;
}

//FIREBASE DB GET
export interface firebaseDbMovie {
  [key: string]: searchMovieBool;
}

//SHOW DETAILS
export interface showDetailsApi {
  id: number;
  name: string;
  language: string;
  genres: string[];
  premiered: string;
  ended: string;
  rating: {
    average: number;
  };
  image: {
    original: string;
  };
  summary: string;
}

export interface showDetails {
  id: number;
  title: string;
  language: string;
  genres: string[];
  start: string;
  end: string;
  rating: number;
  image: string;
  summary: string;
}
