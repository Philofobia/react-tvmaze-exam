import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { CurrentUserConsumer } from "../context/AuthContext";
import { database } from "../firebase";

const useWatchingChek = (idShow: number) => {
    const { currentUser } = CurrentUserConsumer();
    const [ watching, setWatching ] = useState<boolean>(false);

    useEffect(() => {
        if(!currentUser) return
        const userShowWatch = ref(database, "users/"+currentUser.uid + "/watchingShow/" + idShow);
        onValue(userShowWatch, (snapshot) => {
            const data = snapshot.val();
            setWatching(!!data)
        })
    }, [currentUser]);

    return watching;
}

export default useWatchingChek;