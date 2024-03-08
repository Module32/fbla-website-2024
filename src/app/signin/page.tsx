import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function JobPortal() {
  return (
    <main>
      <div className="bg-[conic-gradient(#fafaf9,#e0e7ff,#ffe4e6)] h-[90vh]">
        <div className="backdrop-blur-2xl px-4 h-full flex flex-col items-center justify-center">
          <div className="xl:w-1/3 lg:w-1/2 w-full bg-[conic-gradient(#020617,#1e1b4b,#4c0519)] rounded-2xl">
            <div className="backdrop-blur-xl p-8 rounded-2xl text-white text-center bg-gradient-to-tr from-indigo-500/20 via-transparent to-fuchsia-400/20">
              <p className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-rose-700 font-medium">
                VibeMagnet Account
              </p>
              <p className="text-2xl font-medium">
                Welcome back. Sign in to continue.
              </p>
              <div className="text-left">
                <div className="mt-4">
                  <p className="text-white font-medium">Email</p>
                  <input
                    className="mt-2 bg-slate-950/50 border border-slate-500/50 w-full rounded-lg p-1 px-2 placeholder:text-white/30 shadow-md"
                    placeholder="john.doe@gmail.com"
                  />
                </div>

                <div className="mt-4">
                  <p className="text-white font-medium">Password</p>
                  <input
                    className="mt-2 bg-slate-950/50 border border-slate-500/50 w-full rounded-lg p-1 px-2 placeholder:text-white/30 shadow-md"
                    type="password"
                    placeholder="••••••••"
                  />
                  <Link href="">
                    <p className="text-white/50 mt-2 text-sm hover:underline">
                      Forgot password?
                    </p>
                  </Link>
                </div>

                <div className="mt-8">
                  <button className="bg-white text-black p-2 rounded-lg w-full font-medium">
                    <p>Continue</p>
                  </button>
                  <p className="mt-4 text-white/50 text-sm text-center">
                    By signing in, you agree to our Terms of Service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
