"use client";

import {
  faAngleRight,
  faArrowRight,
  faArrowTrendUp,
  faCircleDot,
  faEnvelope,
  faExclamationTriangle,
  faFlag,
  faGlobe,
  faGreaterThan,
  faHandPointer,
  faStopwatch,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Services() {
  const [search, setSearch] = useState("");
  const pathname = usePathname();

  const services = [
    {
      name: "Search Engine Optimization (SEO)",
      desc: "Optimizing website content and structure to improve organic search engine rankings, increase visibility, and attract more visitors.",
      img: "/benefits/diverse.jpg",
    },
    {
      name: "Search Engine Marketing (SEM)",
      desc: "Creating and managing paid advertising campaigns on search engines like Google and Bing to drive targeted traffic to a website.",
      img: "/benefits/ethics.jpg",
    },
    {
      name: "Social Media Marketing (SMM)",
      desc: "Developing and implementing strategies to promote brands, products, or services on popular social media platforms like Facebook, Instagram, Twitter, LinkedIn, and others.",
      img: "/benefits/remotework.jpeg",
    },
    {
      name: "Content Marketing",
      desc: "Creating and distributing valuable, relevant, and consistent content to attract and engage a target audience. This can include blog posts, articles, videos, infographics, and more.",
      img: "/benefits/salary.jpeg",
    },
    {
      name: "Email Marketing",
      desc: "Designing and executing email campaigns to nurture leads, retain customers, and promote products or services.",
      img: "/benefits/vacation.jpeg",
    },
    {
      name: "Influencer Marketing",
      desc: "Collaborating with influencers in the industry or niche to leverage their audience and promote products or services.",
      img: "/benefits/diverse.jpg",
    },
    {
      name: "Online Reputation Management (ORM)",
      desc: "Monitoring and managing a brand's online reputation, addressing customer reviews, and ensuring a positive public perception.",
      img: "/benefits/diverse.jpg",
    },
    {
      name: "Web Design and Development",
      desc: "Creating and optimizing websites for user experience, functionality, and performance to support overall digital marketing efforts.",
      img: "/benefits/diverse.jpg",
    },
    {
      name: "Analytics and Data Analysis",
      desc: "Utilizing tools like Google Analytics to track and analyze website and campaign performance, providing insights for continuous improvement.",
      img: "/benefits/diverse.jpg",
    },
    {
      name: "Conversion Rate Optimization (CRO)",
      desc: "Improving the efficiency of a website or landing page to increase the percentage of visitors who take desired actions, such as making a purchase or filling out a form.",
      img: "/benefits/diverse.jpg",
    },
    {
      name: "Video Marketing",
      desc: "Creating and promoting video content across various platforms, including YouTube and social media, to engage audiences and convey messages effectively.",
      img: "/benefits/diverse.jpg",
    },
    {
      name: "Mobile Marketing",
      desc: "Optimizing strategies and campaigns for mobile devices, considering the growing use of smartphones and tablets.",
      img: "/benefits/diverse.jpg",
    },
  ];

  const openPositions = [
    {
      service: "Search Engine Optimization (SEO)",
      pos: "SEO Specialist",
    },
    {
      service: "Search Engine Marketing (SEM)",
      pos: "Digital Marketing Specialist",
    },
    {
      service: "Social Media Marketing (SMM)",
      pos: "Social Media Manager",
    },
    {
      service: "Content Marketing",
      pos: "Content Marketing Manager",
    },
    {
      service: "Email Marketing",
      pos: "Email Marketing Specialist",
    },
    {
      service: "Influencer Marketing",
      pos: "Influencer Marketing Manager",
    },
    {
      service: "Web Design and Development",
      pos: "Web Developer",
    },
    {
      service: "Analytics and Data Analysis",
      pos: "Analytics Specialist",
    },
  ];

  return (
    <main className="flex flex-col items-center">
      <div className="border-x border-stone-300 lg:w-[85%] md:w-[90%] w-full py-16 px-8">
        <div className="flex items-center lg:flex-row flex-col lg:space-x-16">
          <div className="flex-1">
            <p className="lg:text-2xl text-xl uppercase text-stone-600 font-medium">
              Services
            </p>
            <p className="mt-2 lg:text-5xl md:text-4xl text-3xl font-semibold">
              VibeMagnet employs{" "}
              <span className="text-amber-500">modern solutions</span>, for{" "}
              <span className="text-amber-500">modern companies</span>.
            </p>
            <div className="lg:space-y-0 space-y-1 lg:h-[50px] lg:text-2xl md:text-xl text-lg mt-4 p-1 border border-amber-500 lg:rounded-full rounded-xl flex lg:flex-row flex-col items-center lg:space-x-1">
              <input
                className="w-full h-full focus:outline-sky-400 lg:px-4 px-2 py-2 lg:rounded-full rounded-t-xl font-mono"
                placeholder="What solution are you looking for?"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="lg:w-fit w-full bg-amber-500 hover:bg-amber-600 transition hover:cursor-pointer text-white lg:rounded-full rounded-b-xl lg:py-0 py-2 h-full px-4 flex items-center justify-center">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>

            <div className="rounded-2xl mt-4 border border-stone-300 p-4 shadow shadow-slate-100">
              {search.length === 0 ? (
                <div>
                  <p className="text-xl font-medium">
                    Popular with our clients
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {services.slice(6).map((x, i) => {
                      return (
                        <button
                          key={i}
                          className="text-left hover:scale-[.97] transition border border-sky-500 bg-sky-100 text-sky-600 rounded-lg p-1 px-2 shadow-md shadow-sky-100"
                          onClick={() => setSearch(x.name)}
                        >
                          {x.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div>
                  <p className="text-xl font-medium">
                    Searching for &quot;{search}&quot;...
                  </p>
                  <p className="mt-1">Check below to see matching results!</p>
                </div>
              )}
            </div>
          </div>
          <div className="lg:flex md:flex hidden flex-1 lg:w-fit w-full lg:mt-0 mt-16">
            <div className="border border-amber-500 outline outline-1 outline-offset-4 outline-stone-300 rounded-lg p-2 px-4">
              <div className="border-b border-stone-300 py-3">
                <div className="flex items-center flex-wrap gap-2">
                  <Image
                    src={"/logos/google.png"}
                    alt="google"
                    width={25}
                    height={25}
                  />
                  <p className="text-lg font-medium flex flex-wrap gap-2 items-center">
                    <span>Google Adsense</span>
                  </p>
                </div>

                <p className="mt-2 text-lg font-medium flex flex-wrap gap-2 items-center">
                  <span className="px-2 rounded-xl border border-amber-500 bg-amber-100 text-amber-600 flex items-center space-x-2 w-fit">
                    <FontAwesomeIcon icon={faUsers} className="text-sm" />
                    <span>6.7k viewers</span>
                  </span>

                  <span className="px-2 rounded-xl border border-emerald-500 bg-emerald-100 text-emerald-600 flex items-center space-x-2 w-fit">
                    <FontAwesomeIcon
                      icon={faArrowTrendUp}
                      className="text-sm"
                    />
                    <span>42% growth</span>
                  </span>

                  <span className="px-2 rounded-xl border border-stone-500 bg-stone-100 text-stone-600 flex items-center space-x-2 w-fit">
                    <FontAwesomeIcon
                      icon={faHandPointer}
                      className="text-sm rotate-45"
                    />
                    <span>67% clicked</span>
                  </span>
                </p>
              </div>

              <div className="border-b border-stone-300 py-3">
                <div className="flex items-center flex-wrap gap-2">
                  <div className="w-[30px] h-[30px] text-sky-500 flex flex-col justify-center items-center">
                    <FontAwesomeIcon icon={faGlobe} className="text-2xl" />
                  </div>
                  <p className="text-lg font-medium flex flex-wrap gap-2 items-center">
                    <span>Business Website</span>
                  </p>
                </div>

                <p className="mt-2 text-lg font-medium flex flex-wrap gap-2 items-center">
                  <span className="px-2 rounded-xl border border-amber-500 bg-amber-100 text-amber-600 flex items-center space-x-2 w-fit">
                    <FontAwesomeIcon icon={faUsers} className="text-sm" />
                    <span>3.6k viewers</span>
                  </span>

                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="text-stone-500"
                  />

                  <span className="px-2 rounded-xl border border-stone-500 bg-stone-100 text-stone-600 flex items-center space-x-2 w-fit">
                    <FontAwesomeIcon icon={faUsers} className="text-sm" />
                    <span>3.1k interested</span>
                  </span>

                  <span className="px-2 rounded-xl border border-emerald-500 bg-emerald-100 text-emerald-600 flex items-center space-x-2 w-fit">
                    <FontAwesomeIcon icon={faCircleDot} className="text-sm" />
                    <span>Online</span>
                  </span>

                  <span className="px-2 rounded-xl border border-sky-500 bg-sky-100 text-sky-600 flex items-center space-x-2 w-fit">
                    <Image
                      src={"/logos/google.png"}
                      alt="google"
                      width={18}
                      height={18}
                    />

                    <span>Search engine optimized</span>
                  </span>
                </p>
              </div>

              <div className="border-b border-stone-300 py-3">
                <div className="flex items-center flex-wrap gap-2">
                  <div className="w-[30px] h-[30px] text-sky-500 flex flex-col justify-center items-center">
                    <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
                  </div>
                  <p className="text-lg font-medium flex flex-wrap gap-2 items-center">
                    <span>Email Marketing</span>
                  </p>
                </div>

                <p className="mt-2 text-lg font-medium flex flex-wrap gap-2 items-center">
                  <span className="px-2 rounded-xl border border-amber-500 bg-amber-100 text-amber-600 flex items-center space-x-2 w-fit">
                    <FontAwesomeIcon icon={faUsers} className="text-sm" />
                    <span>5.4k recipients</span>
                  </span>

                  <span className="px-2 rounded-xl border border-red-500 bg-red-100 text-red-600 flex items-center space-x-2 w-fit">
                    <FontAwesomeIcon
                      icon={faExclamationTriangle}
                      className="text-sm"
                    />
                    <span>500 marked as spam</span>
                  </span>

                  <span className="px-2 rounded-xl border border-stone-500 bg-stone-100 text-stone-600 flex items-center space-x-2 w-fit">
                    <FontAwesomeIcon icon={faStopwatch} className="text-sm" />
                    <span>Interested for 10 secs</span>
                  </span>
                </p>
              </div>

              <div className="py-3">
                <div className="flex items-center flex-wrap gap-2">
                  <Image src={"/logos/yt.png"} alt="google" width={25} height={25} />
                  <p className="text-lg font-medium flex flex-wrap gap-2 items-center">
                    <span>YouTube Marketing</span>
                  </p>
                </div>

                <p className="mt-2 text-lg font-medium flex flex-wrap gap-2 items-center">
                  <span className="px-2 rounded-xl border border-amber-500 bg-amber-100 text-amber-600 flex items-center space-x-2 w-fit">
                    <FontAwesomeIcon icon={faUsers} className="text-sm" />
                    <span>301k viewers</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[85%] md:w-[90%] w-full bg-stone-100 border-t border-x border-stone-300 flex flex-col justify-center items-center">
        <div className="w-full backdrop-blur-3xl flex flex-wrap">
          {(search.length <= 0
            ? services
            : services.filter((x) => {
                return x.name.toLowerCase().includes(search.toLowerCase());
              })
          ).map((x, i) => {
            return (
              <div
                key={i}
                className={`group/main px-8 py-8 border-b border-stone-300 lg:w-1/2 w-full hover:bg-stone-200 transition hover:shadow-inner ${
                  i % 2 === 0 && "lg:border-r"
                }
                ${
                  pathname.includes(`#${x.name.split(" ").join("-")}`) &&
                  `outline outline-2 outline-amber-500`
                }`}
                id={`${x.name.split("-").join("-")}`}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <div className="bg-stone-300 w-[25px] h-[25px] rounded-lg -rotate-45 group-hover/main:scale-[1.05] group-hover/main:bg-indigo-500 text-center font-light group-hover/main:text-white transition">
                    {x.name[0]}
                  </div>
                  <p className="text-xl font-medium">{x.name}</p>
                </div>
                <p className="mt-3">{x.desc}</p>
                <p className="mt-4 font-medium text-stone-400 text-transparent bg-clip-text bg-stone-400 group-hover/main:bg-gradient-to-r from-indigo-500 via-rose-500 to-rose-500">
                  VibeMagnet specializes in {x.name}.
                </p>
                {openPositions
                  .map((x) => {
                    return x.service;
                  })
                  .includes(x.name) && (
                  <Link
                    href={`/offers/${openPositions
                      .find((_x) => {
                        return _x.service === x.name;
                      })
                      ?.pos.split(" ")
                      .join("-")}`}
                    target="_blank"
                  >
                    <p className="mt-3 font-medium border border-red-500 text-red-500 group-hover/main:scale-[1.05] transition hover:bg-red-500 hover:text-white w-fit px-2 rounded py-1 text-sm">
                      <FontAwesomeIcon icon={faFlag} className="mr-2" />
                      Jobs are open for {x.name}!
                    </p>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="lg:w-[85%] md:w-[90%] w-full bg-[conic-gradient(#cbd5e1,#c7d2fe,#fecdd3)] text-white flex flex-col justify-center items-center">
        <div className="w-full backdrop-blur-xl px-8 py-12">
          <div className="flex md:flex-row flex-col items-center md:space-x-8 md:space-y-0 space-y-8 justify-center">
            <div className="flex-none">
              <div className="h-[200px] w-[200px] relative">
                <Image
                  src={"/logo.png"}
                  alt="logo"
                  layout="fill"
                  objectFit="cover"
                  className=""
                />
              </div>
            </div>
            
            <div className='lg:text-left lg:items-start text-center flex flex-col items-center'>
              <p className="text-3xl font-medium text-stone-800">
                VibeMagnet is the industry&apos;s leading marketing firm.
                <br />
                Discover how we can make you stand out,
                <br />
                in your own industry.
              </p>
              <div className="w-fit">
                <Link href="/contact">
                  <div className="shadow-xl hover:shadow-lg mt-4 hover:scale-[.97] transition bg-white text-indigo-500 outline outline-2 outline-offset-2 outline-white text-xl px-3 py-2 rounded-full w-fit font-medium">
                    <p>
                      Get in touch{" "}
                      <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
