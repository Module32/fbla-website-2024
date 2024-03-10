import Link from "next/link";
import "../globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBoltLightning,
  faEnvelope,
  faGripLinesVertical,
  faMagnet,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import LinksMenu from "@/components/navbar/LinksMenu";
import { navbarLinks } from "../../lib/navbarLinks";
import Image from "next/image";
import {
  faFacebook,
  faInstagram,
  faProductHunt,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { jobs } from "../../lib/globalData";

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
        <div className="z-[100] sticky top-0 w-full">
          <div className="backdrop-blur-xl w-full py-2 bg-gradient-to-r from-indigo-300/75 to-purple-300/75 text-stone-800 uppercase font-medium italic overflow-x-hidden flex space-x-4">
            <div className="py-1 animate-marquee whitespace-nowrap flex space-x-4">
              {new Array(10).fill("").map((x, i) => {
                return (
                  <div key={i} className="flex space-x-4">
                    <div key={i}>
                      <p>💼 We&apos;re hiring</p>
                    </div>
                    <div key={i}>
                      <p>💵 Jobs available</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="py-1 animate-marquee2 whitespace-nowrap flex space-x-4 absolute">
              {new Array(10).fill("").map((x, i) => {
                return (
                  <div key={i} className="flex space-x-4">
                    <div key={i}>
                      <p>💼 We&apos;re hiring</p>
                    </div>
                    <div key={i}>
                      <p>💵 Jobs available</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white py-5 w-full lg:px-[10vw] md:px-[5vw] px-4 flex items-center border-b border-stone-300">
            <div className="flex-1 flex items-center space-x-2">
              <Link href="/">
                <div className="flex items-center space-x-2 group">
                  <Image
                    src={`/logo.png`}
                    className="group-hover:rotate-[-45deg] transition"
                    width={30}
                    height={30}
                    alt="logo"
                  />
                  <p className="text-lg font-medium group-hover:underline lg:flex flex-col hidden -space-y-2 whitespace-nowrap">
                    <span>VibeMagnet</span>
                    <span className="font-normal text-stone-500 text-sm">
                      Attract attention.
                    </span>
                  </p>
                </div>
              </Link>
            </div>

            <div className="ml-8 text-sm space-x-4 flex items-center text-stone-400">
              <div className="lg:flex items-center space-x-4 hidden whitespace-nowrap">
                {navbarLinks.map((x, i) => {
                  return (
                    <Link href={x.link} key={i}>
                      <p className="hover:text-indigo-500 transition">
                        {x.name}
                      </p>
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
        </div>

        {children}

        <footer>
          <div className="border-t border-slate-300 bg-gradient-to-b from-white to-indigo-50">
            <div className="lg:px-[10vw] md:px-[5vw] px-4 py-16">
              <div className="flex lg:flex-row md:flex-row flex-col gap-4">
                <div className="flex-1">
                  <p className="lg:text-7xl md:text-6xl text-5xl font-semibold">
                    Vibe{" "}
                    <FontAwesomeIcon
                      icon={faBoltLightning}
                      className="text-amber-500 ml-1"
                    />
                    <br />
                    <FontAwesomeIcon
                      icon={faMagnet}
                      className="text-stone-600 rotate-45 mr-2"
                    />{" "}
                    Magnet
                  </p>
                  <p className="mt-4 text-4xl text-stone-700 italic uppercase">
                    Attract attention.
                  </p>
                </div>
                <div className="flex-1 flex items-center md:justify-end -space-x-4">
                  {jobs.slice(5, 11).map((x, i) => {
                    return (
                      <Image
                        src={x.quote.image}
                        alt={x.quote.text}
                        width={70}
                        height={70}
                        key={i}
                        className="grayscale xl:w-[110px] lg:w-[80px] md:w-[70px] w-[55px] rounded-full"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:text-3xl md:text-2xl text-xl uppercase lg:px-[10vw] md:px-[5vw] px-4 py-8 bg-black font-light text-white font-spacegrotesk">
            <div className="flex items-start lg:flex-row flex-col lg:space-x-16 lg:space-y-0 space-y-8">
              <div className="flex-1 text-white/75">
                <input
                  className="bg-transparent w-full focus:outline-none border-b border-white/50 focus:border-sky-500 pb-2 uppercase placeholder:text-white/75"
                  placeholder="Subscribe to our newsletter"
                />
                <Link href="/contact">
                  <p className="mt-6 border-transparent hover:underline hover:border-white decoration-[1px] underline-offset-8 mb-2">
                    Contact us{" "}
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                  </p>
                </Link>

                <Link href="/termsofservice">
                  <p className="border-transparent hover:underline hover:border-white decoration-[1px] underline-offset-8 mb-2">
                    Terms of Service{" "}
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                  </p>
                </Link>
                <p className="mt-6">
                  {new Date().getFullYear()} VibeMagnet Inc. Created for FBLA.
                  <br />
                  This is not a real business.
                </p>
                <div className="mt-4 flex flex-wrap gap-4">
                  {[
                    faYoutube,
                    faTiktok,
                    faInstagram,
                    faFacebook,
                    faProductHunt,
                  ].map((x, i) => {
                    return (
                      <div key={i}>
                        <Link href="" key={i}>
                          <div className="hover:text-white/50">
                            <FontAwesomeIcon icon={x} />
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-end lg:text-right">
                <p className="underline decoration-[1px] underline-offset-8 mb-2">
                  Go to
                </p>
                <Link href="/benefits">
                  <p className="border-transparent hover:underline hover:border-white decoration-[1px] underline-offset-8 mb-2">
                    Benefits
                  </p>
                </Link>
                <Link href="/services">
                  <p className="border-transparent hover:underline hover:border-white decoration-[1px] underline-offset-8 mb-2">
                    Services
                  </p>
                </Link>
                <Link href="/jobs">
                  <p className="border-transparent hover:underline hover:border-white decoration-[1px] underline-offset-8 mb-2">
                    Job Offers
                  </p>
                </Link>
                <Link href="/application">
                  <p className="border-transparent hover:underline hover:border-white decoration-[1px] underline-offset-8 mb-2">
                    Job Application
                  </p>
                </Link>
                <Link href="/contact">
                  <p className="border-transparent hover:underline hover:border-white decoration-[1px] underline-offset-8 mb-2">
                    Contact Us
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:text-xl md:text-lg text-base uppercase lg:px-[10vw] md:px-[5vw] px-4 py-4 bg-gradient-to-r from-indigo-950 via-fuchsia-950 to-rose-950 font-light text-white font-spacegrotesk">
            <p>Made by Ekya Dogra & Alexander Poon.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
