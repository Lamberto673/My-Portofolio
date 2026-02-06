"use server";

import { signIn, signOut } from "@/auth";

export const Login = async () => {
  await signIn("github", { redirectTo: "/portofolio" });
};
export const LoginGoogle = async () => {
  await signIn("google", { redirectTo: "/portofolio" });
};

export const Logout = async () => {
  await signOut({ redirectTo: "/" });
};
