import { database } from "../firebase";
import { ref, set } from "firebase/database";

export const getUserShows = (userId: string, num: number) => {
    set(ref(database, "users/" + userId), {
    favShows: {
        name: "asd"
    },
  });
};
