import { createContext, useState, useEffect, useContext } from "react";
import { auth } from "../firebase";
//USER STATUS
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";

interface UserContextProviderProps {
  children: React.ReactNode;
}

interface UseAuthContext {
  currentUser: User | null;
  signIn: (email: string, password: string) => void;
  signingOut: () => void;
  createUser: (email: string, password: string) => void;
}
export const UserContext = createContext<UseAuthContext>({
  currentUser: null,
  signIn: async () => {},
  signingOut: async () => {},
  createUser: async () => {},
});

export const AuthContextProvider = ({ children }: UserContextProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

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

  const signIn = async (email: string, password: string): Promise<void> => {
    return await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        //const user = userCredential.user;
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
      } else {
        setCurrentUser(null);
      }
      localStorage.setItem("user", JSON.stringify(user));
      return () => unsubscribe();
    });
  }, []);

  return (
    <UserContext.Provider
      value={{ currentUser, signIn, signingOut, createUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const CurrentUserConsumer = () => {
  return useContext(UserContext);
};
