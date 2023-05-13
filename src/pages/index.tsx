import { NextPageWithLayout } from "@/lib/next/types";
import { User } from "@/features/user";
import { createGetLayoutWithFooter } from "@/features/layouts/BasicLayout";
import { useEffect, useState } from "react";
import { createFirebaseApp } from "@/lib/firebase/clientApp";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { User as UserType } from "@/types/types";
import { Home } from "@/features/home";
const Page: NextPageWithLayout = () => {
  const [users, setUsers] = useState<UserType[]>([]);
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
          const data = docSnap.data() as Omit<UserType, "uid">;
          const { subUserIdList } = data;
          setUsers([{ uid: uid, ...data }]);
          const subUserIdPromise = subUserIdList.map((subUserId) => {
            const docRef = doc(getFirestore(), "KoudaisaiUser", subUserId);
            return getDoc(docRef);
          });
          const subUserList = await Promise.all(subUserIdPromise);
          const subUserListData = subUserList.map((subUser, i) => {
            const data = subUser.data();
            return { uid: subUserIdList[i], ...data } as UserType;
          });
          setUsers((users) => [...users, ...subUserListData]);
        }
      } catch (error) {
        console.log(JSON.stringify(error));
      }
    });
    return () => unsubscriber();
  }, []);
  return (
    <>
      {/* {users.length >= 1 && <User users={users} />} */}
      {users.length <= 0 && <Home />}
    </>
  );
};
Page.getLayout = createGetLayoutWithFooter({ title: "第60回工大祭" });
export default Page;
