"use client";

import {
  faAngleDown,
  faAngleUp,
  faArrowRight,
  faCode,
  faDotCircle,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useState } from "react";
import Image from "next/image";

export default function Citations() {
  const researchSources = [
    {
      name: "What Is A Digital Media Agency?",
      url: "https://www.sprinklesmedia.com/confectionary/what-is-a-digital-media-agency",
    },
    {
      name: "What is SEO?",
      url: "https://searchengineland.com/guide/what-is-seo",
    },
    {
      name: "Digital Marketing Agency Website",
      url: "https://www.digitalmarketingagency.com/",
    },
    {
      name: "What Does a Digital Marketing Agency Do?",
      url: "https://www.yokellocal.com/blog/what-does-a-digital-marketing-agency-do",
    },
    {
      name: "How to Prepare for Account Executive Agency Interview",
      url: "https://work.chron.com/prepare-account-executive-agency-interview-17515.html",
    },
    {
      name: "CXR Marketing Agency",
      url: "https://cxr.agency/",
    },
    {
      name: "Bright Edge Marketing Agency",
      url: "https://www.brightedge.com/",
    },
  ];

  const imageCitations = [
    {
      path: "/benefits/diverse.jpg",
      from: "https://www.rapid7.com/blog/post/2022/10/27/from-churn-to-cherry-on-top/",
    },
    {
      path: "/benefits/ethics.jpg",
      from: "https://www.ilbigi.org/membership/associate-membership",
    },
    {
      path: "/benefits/familysleeping.jpg",
      from: "https://www.pexels.com/photo/tranquil-multiethnic-family-sleeping-on-bed-in-morning-6392925/",
    },
    {
      path: "/benefits/remotework.jpeg",
      from: "https://www.safetystratus.com/blog/addressing-ergonomic-concerns-in-the-office/",
    },
    {
      path: "/benefits/salary.jpeg",
      from: "https://houstonsmallbusinessmarketing.com/services/seo-houston/how-can-i-make-my-business-more-profitable/",
    },
    {
      path: "/benefits/vacation.jpeg",
      from: "https://terraintrends.com/blog/vacations-with-teens/",
    },
    {
      path: "/benefits/working.jpg",
      from: "https://www.dean.edu/news-events/dean-college-blog/story/executive-training-customized-team/",
    },
    {
      path: "/blog/usher.webp",
      from: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS5pFScZ9zK3k_Yno2E3Y6Ns1_LtJuBTUNTQDbD9wjRVgxzOTdP",
    },
    {
      path: "/blog/visionpro.jpg",
      from: "https://www.bloomberg.com/news/articles/2023-06-05/apple-wwdc-2023-vision-pro-headset-new-macs-ios-17-and-other-key-takeaways",
    },
    {
      path: "/blog/yeat.png",
      from: "https://twitter.com/BobthePoppop/status/1758513215246676006",
    },
    {
      path: "/homepage/9to5.png",
      from: "https://chapters-eg.com/blog/digital-marketing-agency/",
    },
    {
      path: "/homepage/500.png",
      from: "https://www.skopenow.com/link-analysis-demo-request",
    },
    {
      path: "/homepage/damelio.jpg",
      from: "https://www.mensxp.com/special-features/features/82755-lesser-known-facts-about-charli-damelio.html",
    },
    {
      path: "/homepage/earth.jpeg",
      from: "https://www.theatlantic.com/photo/2021/06/photos-beauty-earth-orbit/619218/",
    },
    {
      path: "/homepage/jamescharles.jpeg",
      from: "https://minecraft-monday.fandom.com/wiki/James_Charles",
    },
    {
      path: "/homepage/prayag.png",
      from: "https://www.tiktok.com/@444pray/video/7291107103396154630",
    },
    {
      path: "/homepage/redcarpet.jpg",
      from: "https://www.backstage.com/magazine/article/ways-make-red-carpet-work-7393/",
    },
    {
      path: "/logos/apple.png",
      from: "https://www.muraldecal.com/en/stickers/product/apple-731/apple-logo-17580",
    },
    {
      path: "/logos/facebook.png",
      from: "https://tenor.com/view/fb-facebook-logo-blue-gif-17350282",
    },
    {
      path: "/logos/google.png",
      from: "https://happypawshousecall.com/testimonials",
    },
    {
      path: "/logos/insta.png",
      from: "https://twitter.com/Issossy/status/1763128542693347348",
    },
    {
      path: "/logos/linkedin.png",
      from: "https://en.m.wikipedia.org/wiki/File:LinkedIn_icon.svg",
    },
    {
      path: "/logos/starkindustries.png",
      from: "https://en.wikipedia.org/wiki/File:Stark_Industries_Logo.png",
    },
    {
      path: "/logos/tiktok.png",
      from: "https://www.facebook.com/thetallentedguy123/",
    },
    {
      path: "/logos/x.png",
      from: "https://twitter.com/KarstenW/status/1730654444772266351",
    },
    {
      path: "/logos/yt.png",
      from: "https://www.extremetech.com/internet/333013-google-adds-almost-4000-free-tv-episodes-to-youtube",
    },
    {
      path: "/offerspage/peoplegathered.jpeg",
      from: "https://blog.kurby.ai/strategies-for-managing-properties-with-a-cafe-or-restaurant/",
    },
    {
      path: "/people/ajaydevgn.png",
      from: "https://images.dawn.com/news/1183285",
    },
    {
      path: "/people/alexandermajor.png",
      from: "https://kchistory.org/week-kansas-city-history/majors-efforts",
    },
    {
      path: "/people/bradpitt.png",
      from: "https://twitter.com/mislead/status/1685430893391876096",
    },
    {
      path: "/people/drake.png",
      from: "https://www.outlookindia.com/art-entertainment/drake-pays-tribute-to-sidhu-moosewala-plays-latter-s-hit-songs-on-his-radio-show-news-203135",
    },
    {
      path: "/people/elizabeth.webp",
      from: "https://www.thecut.com/2023/07/elizabeth-holmes-theranos-prison-sentence.html",
    },
    {
      path: "/people/gordon.jpg",
      from: "https://www.biography.com/movies-tv/gordon-ramsay",
    },
    {
      path: "/people/gpt.png",
      from: "https://www.cxnetwork.com/artificial-intelligence/articles/one-year-of-chatgpt-how-has-it-changed-customer-experience",
    },
    {
      path: "/people/itsybitsyspider.png",
      from: "https://creator.nightcafe.studio/creation/YvwDt8c12HIFCHVCKVI0",
    },
    {
      path: "/people/jamescharles.jpg",
      from: "https://creator.nightcafe.studio/creation/YvwDt8c12HIFCHVCKVI0",
    },
    {
      path: "/people/jordan.png",
      from: "https://www.etonline.com/people/michael-jordan",
    },
    {
      path: "/people/minion.webp",
      from: "https://www.ebay.com/itm/325281900917",
    },
    {
      path: "/people/northwest.png",
      from: "https://www.thecut.com/2023/12/north-west-rap-vultures-kanye.html",
    },
    {
      path: "/people/prayag.jpg",
      from: "https://www.famousbirthdays.com/people/prayag-mishra.html",
    },
    {
      path: "/people/tecca.jpg",
      from: "https://www.nytimes.com/2019/11/07/learning/film-club-how-a-teen-rapper-with-braces-took-over-the-streaming-world.html",
    },
    {
      path: "/people/timcook.png",
      from: "https://www.macrumors.com/2015/02/10/cook-goldman-sachs-conference-2015/",
    },
    {
      path: "/people/tonystark.png",
      from: "https://www.macrumors.com/2015/02/10/cook-goldman-sachs-conference-2015/",
    },
  ];

  const codingTools = [
    {
      name: "Next.js",
      url: "https://nextjs.org/",
      desc: "Next.js was our framework of choice to build this website. Next.js is what actually allows us to build a website, including every single page and all the backend logic related to handling data.",
    },
    {
      name: "React",
      url: "http://react.dev/",
      desc: "React is a component-based frontend library that we employed to build our UI components and design our pages. It works seamlessly with Next.js, allowing for neat and functional code.",
    },
    {
      name: "TailwindCSS",
      url: "https://tailwindcss.com/",
      desc: "TailwindCSS is the library behind all the colors, fonts, shadows, gradients, UI design, and styling that you see on VibeMagnet. With Tailwind, we can write CSS directly in our HTML with 'utility classes' instead of having to make separate files and classes for our CSS.",
    },
    {
      name: "Nodemailer",
      url: "https://www.nodemailer.com/",
      desc: "Nodemailer allows us to send users emails for things like account sign-ups and confirming a submitted application. We use a Gmail SMTP server to send the emails, and Nodemailer lets us contact the server.",
    },
    {
      name: "Prisma",
      url: "https://prisma.io/",
      desc: "Prisma is an ORM that allows us to lay out the data structure of our database, and easily make changes to our database too. With Prisma, we can create sign-up systems and job application features.",
    },
  ];

  return (
    <main className="flex flex-col items-center">
      <div className="px-8 py-16 lg:w-[85%] md:w-[90%] w-full border-x border-stone-300">
        <p className="lg:text-2xl text-xl uppercase text-stone-600 font-medium">
          Citations (For FBLA Judges Only)
        </p>
        <p className="mt-2 lg:text-5xl md:text-4xl text-3xl font-semibold">
          Hello, judges! Listed below are all the sources and technologies we
          used to create this website.
        </p>
        <p className="mt-4 lg:text-3xl md:text-2xl text-xl">
          We&apos;ve divided our sources into three categories, each marked with
          their respective colors: our{" "}
          <span className="w-fit inline-block items-center text-red-500 border border-red-500 bg-red-100 px-1.5 py-0.5 rounded outline outline-red-500 outline-offset-2">
            <FontAwesomeIcon icon={faDotCircle} className="mr-1 text-red-500" />{" "}
            <span>Research sources,</span>
          </span>{" "}
          our{" "}
          <span className="w-fit inline-block items-center text-amber-500 border border-amber-500 bg-amber-100 px-1.5 py-0.5 rounded outline outline-amber-500 outline-offset-2">
            <FontAwesomeIcon icon={faImage} className="mr-1 text-amber-500" />{" "}
            <span>Image citations,</span>
          </span>{" "}
          and our{" "}
          <span className="w-fit inline-block items-center text-sky-500 border border-sky-500 bg-sky-100 px-1.5 py-0.5 rounded outline outline-sky-500 outline-offset-2">
            <FontAwesomeIcon icon={faCode} className="mr-1 text-sky-500" />{" "}
            <span>Coding tools.</span>
          </span>
        </p>
      </div>
      <div className="px-8 border border-red-500 bg-red-100 py-6 lg:w-[85%] md:w-[90%] w-full">
        <p className="font-medium text-red-500 lg:text-2xl md:text-xl text-lg">
          Research sources
        </p>
        <div className="mt-4 overflow-auto flex flex-nowrap border-r border-red-500">
          <div className="items-start flex flex-nowrap lg:gap-6 md:gap-5 gap-4 p-2">
            {researchSources.map((x, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col bg-white p-2 border border-stone-300 rounded-xl lg:min-w-[320px] md:min-w-[350px] min-w-[400px] outline outline-offset-2 outline-red-500 shadow-xl shadow-red-200 group"
                >
                  <p className="font-medium text-lg">{x.name}</p>
                  <p className="mt-2">
                    From:{" "}
                    <Link href={x.url} target="_blank">
                      <span className="break-all font-medium text-sky-500">
                        {x.url}
                      </span>
                    </Link>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="px-8 border border-yellow-500 bg-yellow-100 py-6 lg:w-[85%] md:w-[90%] w-full">
        <p className="font-medium text-yellow-500 lg:text-2xl md:text-xl text-lg">
          Image citations
        </p>
        <div className="mt-4 overflow-auto flex flex-nowrap border-r border-yellow-500">
          <div className="flex items-start flex-nowrap lg:gap-6 md:gap-5 gap-4 p-2">
            {imageCitations.map((x, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col bg-white p-2 border border-stone-300 rounded-xl lg:w-[320px] md:w-[350px] w-[400px] outline outline-offset-2 outline-yellow-500 shadow-xl shadow-yellow-200 group"
                >
                  <p className="flex items-center">
                    <span className="flex-1">
                      <span className="font-mono bg-stone-200 px-1 rounded w-fit">
                        {x.path}
                      </span>
                    </span>{" "}
                  </p>
                  <p className="mt-2">
                    From:{" "}
                    <Link href={x.from} target="_blank">
                      <span className="break-all font-medium text-sky-500">
                        {x.from}
                      </span>
                    </Link>
                  </p>
                  <div className="flex flex-col items-center border-t border-stone-300 mt-2 pt-2">
                    <Image
                      src={x.path}
                      width={150}
                      height={50}
                      alt={x.path}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="px-8 border border-sky-500 bg-sky-100 py-6 lg:w-[85%] md:w-[90%] w-full">
        <p className="font-medium text-sky-500 lg:text-2xl md:text-xl text-lg">
          Coding tools
        </p>
        <div className="mt-4 overflow-auto flex flex-nowrap border-r border-sky-500">
          <div className="flex flex-nowrap lg:gap-6 md:gap-5 gap-4 p-2">
            {codingTools.map((x, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col bg-white p-2 border border-stone-300 rounded-xl lg:w-[320px] md:w-[350px] w-[400px] outline outline-offset-2 outline-sky-500 shadow-xl shadow-sky-200"
                >
                  <p className="text-lg font-medium">{x.name}</p>
                  <p className="text-sm flex-1">{x.desc}</p>
                  <Link href={x.url}>
                    <p className="mt-1 font-medium text-sky-500 hover:text-sky-700 transition">
                      Check it out{" "}
                      <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
