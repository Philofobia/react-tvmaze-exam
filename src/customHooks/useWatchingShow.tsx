import { useEffect, useState } from "react";
import { ref, onValue, off } from "firebase/database";
import { database } from "../firebase";
import { firebaseDbMovie } from "../services/models";

const useWatchingShows = (userId: string | null | undefined) => {
  const [watchingShows, setwatching] = useState<firebaseDbMovie>();

  useEffect(() => {
    if (userId) {
      const userShow = ref(database, "users/" + userId + "/watchingShow");
      onValue(userShow, (snapshot) => {
        const data = snapshot.val();
        setwatching(data);
        console.log(data)
      });
    } else return;
  }, [userId]);

  return watchingShows;
};

export default useWatchingShows;
