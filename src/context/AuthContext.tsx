import { createContext, useState, useEffect, useContext } from "react";
import { auth } from "../firebase";
//USER STATUS
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
  GoogleAuthProvider,
  signInWithPopup,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

auth.languageCode = "it";
interface UserContextProviderProps {
  children: React.ReactNode;
}

interface UseAuthContext {
  currentUser?: User | null;
  signIn: (email: string, password: string) => void;
  signingOut: () => void;
  signingInWithGoogle: () => void;
  createUser: (email: string, password: string) => void;
  // savingPersistance: () => void;
}
export const UserContext = createContext<UseAuthContext>({
  currentUser: undefined,
  signIn: async () => {},
  signingOut: async () => {},
  signingInWithGoogle: async () => {},
  createUser: async () => {},
  //  savingPersistance: async () => {},
});

export const AuthContextProvider = ({ children }: UserContextProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>();

  const createUser = async (email: string, password: string) => {
    return await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        //console.log(userCredential.user)
      })
      .catch((error) => {
        //const errorMessage = error.message;
      });
  };
  const signingInWithGoogle = async () => {
    const google_provider = new GoogleAuthProvider();
    return await signInWithPopup(auth, google_provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        //const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(credential, errorCode, errorMessage);
      });
  };

  const signIn = async (email: string, password: string): Promise<void> => {
    return await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        //const user = userCredential.user;
        // ...
        //console.log(userCredential.user)
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const signingOut = async () => {
    return await signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  //track the status of the user in your application
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        savingPersistance();
      } else {
        setCurrentUser(null);
      }
      return () => unsubscribe();
    });
  }, []);

  const savingPersistance = async () => {
    return await setPersistence(auth, browserLocalPersistence)
      .then(() => {})
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <UserContext.Provider
      value={{
        currentUser,
        signIn,
        signingInWithGoogle,
        signingOut,
        createUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const CurrentUserConsumer = () => {
  return useContext(UserContext);
};
