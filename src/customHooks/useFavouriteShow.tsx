import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../firebase";
import { firebaseDbMovie } from "../services/models";

const useFavouriteShows = (userId: string | null | undefined) => {
  const [favouriteShows, setFavourite] = useState<firebaseDbMovie>();

  useEffect(() => {
    if (userId) {
      const userShow = ref(database, "users/" + userId + "/favShows");
      onValue(userShow, (snapshot) => {
        const data = snapshot.val();
        setFavourite(data);
      });
    } else return;
  }, [userId]);

  return favouriteShows;
};

export default useFavouriteShows;
