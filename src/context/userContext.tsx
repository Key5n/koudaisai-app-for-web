import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { createFirebaseApp } from "lib/clientApp";
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { User, UserContextType } from "types/types";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export default function UserContextComp({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    const app = createFirebaseApp();
    const auth = getAuth(app);
    const unsubscriber = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          const { uid } = user;
          const docRef = doc(getFirestore(), "KoudaisaiUser", uid);
          const docSnap = await getDoc(docRef);
          if (!docSnap.exists()) {
            return;
          }
          setUser({ uid, ...docSnap.data() } as User);
          console.log("userをセットしました");
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
