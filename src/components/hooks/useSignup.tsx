import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";

type Input = {
  name: string;
  email: string;
  phoneNumber: string;
  dayOneSelected: boolean;
  dayTwoSelected: boolean;
  password: string;
};

export const useSignup = (togglestate: () => void) => {
  const onSubmit = async ({
    dayOneSelected,
    dayTwoSelected,
    email,
    name,
    phoneNumber,
    password,
  }: Input): Promise<void> => {
    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const data = {
        dayOneSelected: dayOneSelected,
        dayTwoSelected: dayTwoSelected,
        dayOneVisited: false,
        dayTwoVisited: false,
        email: email,
        name: name,
        phoneNumber: phoneNumber,
        parentId: null,
        subUserList: null,
      };

      await setDoc(
        doc(getFirestore(), "KoudaisaiUser", userCredential.user.uid),
        data
      );
      togglestate();
    } catch (error) {
      console.log(error, "ユーザーの作成に失敗しました。");
    }
  };
  return { onSubmit: onSubmit };
};
