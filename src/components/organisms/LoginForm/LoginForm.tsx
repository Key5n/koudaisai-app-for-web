import styles from "./styles.module.css";
import { InputWithTitle } from "components/molecules/InputWithTitle/InputWithTitle";
import { Button } from "components/atoms/Button";
import { useForm } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";

type Values = {
  email: string;
  password: string;
};

const defaultValues: Values = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const router = useRouter();
  const onValid = async (data: Values) => {
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      router.push("/");
    } catch (err) {
      console.log("ログイン失敗");
    }
    console.log(data);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: { ...defaultValues },
  });

  return (
    <form className={styles.module} onSubmit={handleSubmit(onValid)}>
      <InputWithTitle
        labelProps={{ children: "メールアドレス" }}
        inputProps={{
          placeholder: "例: example@gmail.com",
          ...register("email", {
            required: {
              value: true,
              message: "入力が必須の項目です。",
            },
            pattern: {
              value:
                /[a-zA-Z0-9]+[a-zA-Z0-9\._-]*@[a-zA-Z0-9_-]+[a-zA-Z0-9\._-]+/,
              message: "入力形式がメールアドレスではありません。",
            },
          }),
        }}
        error={errors.email?.message}
      />
      <InputWithTitle
        labelProps={{ children: "パスワード" }}
        inputProps={{
          type: "password",
          ...register("password", {
            required: {
              value: true,
              message: "入力が必須の項目です。",
            },
          }),
        }}
        error={errors.password?.message}
        description="パスワードは6文字以上で数字または英文字で構成される必要があります。このパスワードは予約の削除に必要です。"
      />
      <Button className={styles.button} type="submit">
        ログイン
      </Button>
    </form>
  );
};
