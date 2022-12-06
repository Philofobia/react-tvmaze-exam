import { useEffect, useState } from "react";
import { CurrentUserConsumer } from "../context/AuthContext";
import useFavouriteShows from "./useFavouriteShow";

const useFavoruiteCheck = (idShow: number) => {
  const { currentUser } = CurrentUserConsumer();
  const [favourite, setFavourite] = useState<boolean>(false);
  const shows = useFavouriteShows(currentUser?.uid);

  useEffect(() => {
    if (!shows) return;
   
    for(const key in shows) {
      console.log(key, idShow)

      if(+key === idShow) {
        setFavourite(true);
        return;
      }
    }

   /* Object.keys(shows).forEach((el) => {
      if (shows[el].show.id === idShow) {
        setFavourite(true);
        return;
      } else setFavourite(false);
    });*/
  }, [favourite, idShow, shows]);
  return favourite;
};

export default useFavoruiteCheck;
