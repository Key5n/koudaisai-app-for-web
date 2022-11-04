import { LoginTemplate } from "components/templates/LoginTemplate";
import { useRouter } from "next/router";
import { useUser } from "context/userContext";

const Login = () => {
  const router = useRouter();
  const { user } = useUser();

  if (user) {
    router.push("/");
  }

  return (
    !user && (
      <>
        <LoginTemplate />
      </>
    )
  );
};

export default Login;
