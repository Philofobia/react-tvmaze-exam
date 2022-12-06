import { database } from "../firebase";
import { update, remove, ref } from "firebase/database";
import { searchMovieBool } from "./models";

export const setUserShows = async (userId: string, show: searchMovieBool) => {
  await update(ref(database, "users/" + userId + "/favShows"), {
    [show.show.id]: show,
  });
};

export const deleteUserShow = async (userId: string, show: searchMovieBool) => {
  await remove(ref(database, "users/" + userId + "/favShows/" + show.show.id));
};