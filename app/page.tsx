"use server";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { auth } from "@/auth";
import { SignInButton, SignInButtonGoogle } from "./components/SignInButton";

export default async function Home() {
  const session = await auth();

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Card */}
        <div className="bg-[#111116] border border-white/10 rounded-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-white mb-2">
              Welcome back
            </h1>
            <p className="text-zinc-400 text-sm">
              Sign in to access your portfolio
            </p>
          </div>

          {/* Auth buttons */}
          <div className="space-y-3">
            {/* GitHub */}
            <div className="flex items-center justify-center gap-3 w-full py-3 px-4 bg-[#1a1a1f] hover:bg-[#222228] border border-white/10 rounded-lg transition-colors cursor-pointer">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-lg text-white w-10"
              />
              <SignInButton />
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 my-4">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-zinc-500 text-xs uppercase tracking-wide">
                or
              </span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* Google */}
            <div className="flex items-center justify-center gap-3 w-full py-3 px-4 bg-gray-100 hover:bg-gray-300 rounded-lg transition-colors cursor-pointer">
              <FontAwesomeIcon
                icon={faGoogle}
                className="text-lg text-black w-10"
              />
              <SignInButtonGoogle />
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-zinc-500 text-xs mt-6">
          By signing in, you agree to our terms of service
        </p>
      </div>
    </div>
  );
}
