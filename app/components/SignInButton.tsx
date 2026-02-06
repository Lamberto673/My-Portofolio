import { Login, LoginGoogle } from "../lib/actions/auth";

const SignInButton = async () => {
  return (
    <form action={Login}>
      <button className="cursor-pointer text-center" type="submit">
        Sign In with github
      </button>
    </form>
  );
};
const SignInButtonGoogle = async () => {
  return (
    <form action={LoginGoogle}>
      <button className="cursor-pointer text-center text-black" type="submit">
        Sign In with google
      </button>
    </form>
  );
};

export { SignInButton, SignInButtonGoogle };
