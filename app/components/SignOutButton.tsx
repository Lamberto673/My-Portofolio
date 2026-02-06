import { Logout } from "../lib/actions/auth";

const SignOutButton = async () => {
  return (
    <form action={Logout}>
      <button className="cursor-pointer text-red-400 text-sm" type="submit">
        Sign Out
      </button>
    </form>
  );
};

export default SignOutButton;
