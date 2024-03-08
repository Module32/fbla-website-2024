import Link from "next/link";
import "../globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGripLinesVertical,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import LinksMenu from "@/components/navbar/LinksMenu";
import { navbarLinks } from "../../lib/navbarLinks";
import Image from "next/image";

export const metadata = {
  openGraph: {
    title: "VibeMagnet ∙ Marketers to help you stand out in the market.",
    description:
      "VibeMagnet puts faces on billboards, companies in the Fortune 500, and influencers on the red carpet.\nOur marketing works. You focus on what you do best, and we'll do the rest.",
    url: "https://vibemagnet.vercel.app/",
    siteName: "VibeMagnet",
    images: {
      url: "/metadataimg.png",
      width: 838,
      height: 471,
      alt: "Image",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="z-[100] bg-white sticky top-0 py-5 w-full lg:px-[10vw] md:px-[5vw] px-4 flex items-center border-b border-stone-300">
          <div className="flex-1 flex items-center space-x-2">
            <Link href="/">
              <div className="flex items-center space-x-2">
                <Image src={`/logo.png`} width={30} height={30} alt="logo" />
                <p className="font-medium hover:underline">
                  VibeMagnet Marketing
                </p>
              </div>
            </Link>
          </div>

          <div className="ml-8 text-sm space-x-4 flex items-center text-stone-400">
            <div className="lg:flex items-center space-x-4 hidden">
              {navbarLinks.map((x, i) => {
                return (
                  <Link href={x.link} key={i}>
                    <p className="hover:text-indigo-500 transition">{x.name}</p>
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center space-x-4 text-base">
              <Link href="/signup">
                <div className="px-1.5 py-0.5 rounded border border-indigo-500 text-indigo-500 hover:border-indigo-700 hover:text-indigo-700 hover:scale-[0.97] transition">
                  Sign up
                </div>
              </Link>
              <Link href="/signin">
                <p className="text-stone-400 hover:text-indigo-500 transition">
                  Sign in
                </p>
              </Link>
              <div className="lg:hidden flex">
                <LinksMenu />
              </div>
            </div>
          </div>
        </div>

        {children}

        <footer>
          <div className="border-t border-slate-300 lg:px-[10vw] md:px-[5vw] px-4 py-16">
            <div className="flex lg:flex-row md:flex-row flex-col gap-4">
              <div className="flex-1">
                <p className="text-3xl font-medium">VibeMagnet Inc.</p>
                <p className="text-2xl text-stone-700">Attract attention.</p>
                <div className="mt-4 text-stone-500">
                  <p className="">
                    Get the insider info on how to attract outsiders. Join the
                    VibeMagnet newsletter today.
                  </p>
                  <div className="flex items-center my-3">
                    <input
                      className="border border-stone-500 rounded-l-lg placeholder:text-stone-400 p-2 focus:outline-none text-stone-700"
                      placeholder="john.doe@email.com"
                    />
                    <button className="bg-stone-500 text-white rounded-r-lg p-2 px-3 border border-transparent hover:bg-stone-600">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </button>
                  </div>
                  <p className="">
                    {new Date().getFullYear()}© VibeMagnet Marketing. All rights
                    reserved.
                  </p>
                  <br />
                  <p className="">
                    <Link href="">
                      <span className="underline">Terms of Service</span>
                    </Link>{" "}
                    •{" "}
                    <Link href="">
                      <span className="underline">Privacy Policy</span>
                    </Link>
                  </p>
                </div>
              </div>
              <div className="text-stone-600 text-lg">
                <p className="font-medium text-black">Links</p>
                <Link href="/benefits">
                  <p className="hover:underline">Benefits and Reasons</p>
                </Link>
                <Link href="/services">
                  <p className="hover:underline">Services</p>
                </Link>
                <Link href="/jobs">
                  <p className="hover:underline">Job Offers</p>
                </Link>
                <Link href="/application">
                  <p className="hover:underline">Job Application</p>
                </Link>
                <Link href="/contact">
                  <p className="hover:underline">Contact Us</p>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
