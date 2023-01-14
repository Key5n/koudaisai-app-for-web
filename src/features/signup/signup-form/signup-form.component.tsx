import styles from "./styles.module.css";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { Button } from "@/features/ui/Button";
import { InputWithTitle } from "@/features/ui/InputWithTitle";
import { useSignup } from "./useSignup";

type Values = {
  name: string;
  email: string;
  phoneNumber: string;
  dayOneSelected: boolean;
  dayTwoSelected: boolean;
  password: string;
};

const defaultValues: Values = {
  name: "",
  email: "",
  phoneNumber: "",
  dayOneSelected: false,
  dayTwoSelected: false,
  password: "",
};

export const SignupForm = () => {
  const { onSubmit } = useSignup();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ mode: "onBlur", defaultValues: { ...defaultValues } });
  return (
    <form className={styles.module} onSubmit={handleSubmit(onSubmit)}>
      <InputWithTitle
        labelProps={{ children: "お名前" }}
        inputProps={{
          placeholder: "例: 名工太郎",
          ...register("name", {
            required: { message: "入力が必須の項目です。", value: true },
          }),
        }}
        error={errors.name?.message}
      />
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
        labelProps={{ children: "電話番号" }}
        inputProps={{
          placeholder: "例: 09012345678",
          ...register("phoneNumber", {
            required: {
              value: true,
              message: "入力が必須の項目です。",
            },
          }),
        }}
        error={errors.phoneNumber?.message}
      />
      <div className={styles.entryDate}>
        <span className={styles.title}>希望入場日</span>
        <Checkbox
          inputProps={{
            type: "checkbox",
            ...register("dayOneSelected", {
              validate: {
                hoge: (value) => {
                  return (
                    value === true ||
                    getValues("dayTwoSelected") === true ||
                    "どちらかの日付を選択して下さい。"
                  );
                },
              },
            }),
          }}
          labelProps={{ children: "11/19(土)" }}
        />
        <Checkbox
          inputProps={{
            type: "checkbox",
            ...register("dayTwoSelected", {
              validate: {
                hoge: (value) => {
                  return (
                    value === true ||
                    getValues("dayOneSelected") === true ||
                    "どちらかの日付を選択して下さい。"
                  );
                },
              },
            }),
          }}
          labelProps={{ children: "11/20(日)" }}
          error={errors.dayTwoSelected?.message}
        />
      </div>
      <InputWithTitle
        labelProps={{ children: "パスワード" }}
        inputProps={{
          type: "password",
          ...register("password", {
            required: {
              value: true,
              message: "入力が必須の項目です。",
            },
            pattern: {
              value: /(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-z0-9]{6,}/,
              message:
                "パスワードは6文字以上で数字と英文字で構成される必要があります。",
            },
          }),
        }}
        error={errors.password?.message}
        description="パスワードは6文字以上で数字または英文字で構成される必要があります。このパスワードは予約の削除に必要です。"
      />
      <Button className={styles.button} type="submit">
        次へ
      </Button>
    </form>
  );
};
