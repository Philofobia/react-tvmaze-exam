import { database } from "../firebase";
import { update, remove, ref, onValue } from "firebase/database";
import { firebaseDbMovie, searchMovieBool } from "./models";

export const getUsersShows = async (userId: string) => {
  let data: firebaseDbMovie = {};
  const userShow = ref(database, "users/" + userId + "/favShows");
  onValue(userShow, (snapshot) => {
    data = snapshot.val();
  });
  return data;
};

export const setUserShows = async (userId: string, show: searchMovieBool) => {
  await update(ref(database, "users/" + userId + "/favShows"), {
    [show.show.id]: show,
  });
};

export const deleteUserShow = async (userId: string, show: searchMovieBool) => {
  await remove(ref(database, "users/" + userId + "/favShows/" + show.show.id));
};
