import { database } from "../firebase";
import { update, remove, ref, onValue } from "firebase/database";
import { searchMovieBool } from "./models";
import { getShowsByname } from "./Api";
import { useDispatch } from "react-redux";
import { User } from "firebase/auth";



export const getUsersShows = async (userId: string) => {
  const userShow = ref(database, "users/" + userId + "/favShows");
  const realData = onValue(userShow, (snapshot) => {
    const data = snapshot.val();
    return data;
  });
  return realData
};

export const setUserShows = async (userId: string, show: searchMovieBool) => {
  await update(ref(database, "users/" + userId + "/favShows"), {
    [show.show.id]: show,
  });
};

export const deleteUserShow = async (userId: string, show: searchMovieBool) => {
  await remove(ref(database, "users/" + userId + "/favShows/" + show.show.id));
};
