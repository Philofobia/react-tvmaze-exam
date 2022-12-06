import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { CurrentUserConsumer } from "../context/AuthContext";
import { database } from "../firebase";

const useFavoruiteCheck = (idShow: number) => {
  const { currentUser } = CurrentUserConsumer();
  const [favourite, setFavourite] = useState<boolean>(false);

  useEffect(() => {
    if (!currentUser) return;
    const userShowId = ref(
      database,
      "users/" + currentUser.uid + "/favShowsId/" + idShow
    );
    onValue(userShowId, (snapshot) => {
      const data = snapshot.val();
      setFavourite(!!data);
    });
  }, [currentUser]);
  return favourite;
};

export default useFavoruiteCheck;
