import { database } from "../firebase";
import { update, remove, ref, onValue } from "firebase/database";
import { firebaseDbMovie, searchMovieBool } from "./models";

export const setUserShows = async (userId: string, show: searchMovieBool) => {
  await update(ref(database, "users/" + userId + "/favShows"), {
    [show.show.id]: show,
  });
  await update(ref(database, "users/" + userId + "/favShowsId"), {
    [show.show.id]: show.show.id,
  });
};

export const deleteUserShow = async (userId: string, show: searchMovieBool) => {
  await remove(ref(database, "users/" + userId + "/favShows/" + show.show.id));
  await remove(
    ref(database, "users/" + userId + "/favShowsId/" + show.show.id)
  );
};

export const setUserWatchingShow = async (
  userId: string,
  show: searchMovieBool
) => {
  await update(ref(database, "users/" + userId + "/watchingShow"), {
    [show.show.id]: show,
  });
};

export const deleteUserWatchingShow = async (userId: string) => {
  await remove(ref(database, "users/" + userId + "/watchingShow/"));
};