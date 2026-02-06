import { auth } from "@/auth";
import Image from "next/image";
import React from "react";
import SignOutButton from "./SignOutButton";

const userInfo = async () => {
  const session = await auth();
  if (session?.user) {
    return (
      <div className="flex items-center">
        {session.user.image && (
          <Image
            src={session?.user?.image}
            width={40}
            height={40}
            className="rounded-full m-2"
            alt={session.user.name ?? "Avatar"}
          />
        )}
        <div className="flex-col items-center">
          <p className="text-sm">{session.user.name}</p>
          <SignOutButton />
        </div>
      </div>
    );
  }
  return (
    <div>
      <p>You are Not Signed In</p>
    </div>
  );
};

export default userInfo;
