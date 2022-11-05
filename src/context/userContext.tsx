import { Dispatch, SetStateAction, useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { createFirebaseApp } from "lib/clientApp";
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { User, UserContextType } from "types/types";

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export default function UserContextComp({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User>(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    const app = createFirebaseApp();
    const auth = getAuth(app);
    const unsubscriber = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          const { uid, email } = user;
          setUser({ uid, email });
        } else {
          setUser(null);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingUser(false);
      }
    });

    return () => unsubscriber();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loadingUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (typeof context === "undefined") {
    throw new Error("context is undefined");
  }
  return context;
};
