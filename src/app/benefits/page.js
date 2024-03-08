"use client";

import React, { useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCheck,
  faCheckCircle,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { jobs } from "../../../lib/globalData";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const BlackOutDiv = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  return (
    <div
      ref={scrollRef}
      className="bg-gradient-to-b from-black to-slate-900 text-white w-full h-[150vh] flex flex-col items-center"
    >
      <div className="sticky top-[100px] flex flex-col items-center h-[80vh] text-center w-full">
        <div className="lg:w-[85%] md:w-[90%] w-full px-4 absolute bottom-[70%] flex flex-col items-center">
          <p
            style={{ WebkitTextStroke: "1px white" }}
            className="absolute xl:text-8xl lg:text-7xl md:text-6xl text-5xl font-semibold text-white -z-10"
          >
            <motion.span
              style={{
                opacity: useTransform(scrollYProgress, [0.15, 0.2], [0, 1]),
              }}
            >
              Even when the world goes dark,
            </motion.span>
            <br />
            <motion.span
              style={{
                opacity: useTransform(scrollYProgress, [0.25, 0.3], [0, 1]),
              }}
            >
              VibeMagnet keeps the lights on.
            </motion.span>
          </p>
          <motion.div
            className="absolute p-36 bg-gradient-to-br from-amber-200 via-amber-100 to-amber-300 z-0 rounded-full left-1/2"
            style={{
              opacity: useTransform(scrollYProgress, [0.35, 0.4], [0, 1]),
              scale: useTransform(scrollYProgress, [0.35, 0.4], [1.5, 1]),
            }}
          />
          <p
            style={{ WebkitTextStroke: "1.5px black" }}
            className="absolute xl:text-8xl lg:text-7xl md:text-6xl text-5xl font-semibold text-transparent z-10"
          >
            <motion.span
              style={{
                opacity: useTransform(scrollYProgress, [0.15, 0.2], [0, 1]),
              }}
            >
              Even when the world goes dark,
            </motion.span>
            <br />
            <motion.span
              style={{
                opacity: useTransform(scrollYProgress, [0.25, 0.3], [0, 1]),
              }}
            >
              VibeMagnet keeps the lights on.
            </motion.span>
          </p>
        </div>

        <motion.div
          className="z-20 bg-gradient-to-b from-transparent via-black/90 backdrop-blur-sm h-[60vh] to-transparent absolute bottom-[20%] pt-12 w-full flex flex-col items-center justify-center text-center"
          style={{
            opacity: useTransform(scrollYProgress, [0.55, 0.6], [0, 1]),
            scale: useTransform(scrollYProgress, [0.55, 0.6], [0.9, 1]),
          }}
        >
          <p className="text-4xl leading-snug">
            Through pandemics, market crashes, and unstable economies,
            <br />
            VibeMagnet employees are guaranteed{" "}
            <span className="rounded-xl bg-gradient-to-r from-cyan-100 via-cyan-600 to-cyan-300 outline outline-2 outline-offset-2 outline-stone-600 p-[1px]">
              <span className="bg-black/80 rounded-xl px-3">
                <FontAwesomeIcon
                  icon={faLock}
                  className="text-cyan-500 text-xl mb-1.5"
                />{" "}
                job security.
              </span>
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default function BenefitsPage() {
  const [email, setEmail] = useState("");

  const benefits = [
    {
      name: "Diverse Experience",
      header:
        "Work in a company where you don't have to find your people -- everyone is.",
      desc: "VibeMagnet hires all kinds of people, from all kinds of places, for all kinds of professions. We're focused on helping other companies, so any talent is good talent to us.",
      img: "/benefits/diverse.jpg",
    },
    {
      name: "Work Ethic",
      header:
        "We don't have to work hard to finish hard work. We make things happen, quick and efficiently.",
      desc: "We believe in hard work and rigor at VibeMagnet, in a community where everyone's contributing towards common goals. And here, your hard work is rewarded with proper job benefits.",
      img: "/benefits/ethics.jpg",
    },
    {
      name: "Remote Work",
      header:
        "Creativity doesn't have to flourish in just the office -- it can happen right from your home.",
      desc: "VibeMagnet is flexible in the 21st century, and we adapt to our employee's needs -- not the other way around. Find a position that you like, and it's more than likely you'll be able to work it from home.",
      img: "/benefits/remotework.jpeg",
    },
    {
      name: "Salary",
      header:
        "We're in the Fortune 500 of companies. That's why our employees earn fortunes, yearly.",
      desc: "Of course, the world runs on money. VibeMagnet knows you're working hard as an employee, and we don't compromise on pay. Plus, terrific work is rewarded with promotions, earning you even more.",
      img: "/benefits/salary.jpeg",
    },
    {
      name: "Vacations",
      header:
        'As we always say: "Burn through your work. Don\'t burn out." We make sure that holds true.',
      desc: "Breaks are necessary no matter what. VibeMagnet ensures that our employees are maintaining positive mental healths by taking time to themselves. At VibeMagnet, we genuinely care about you.",
      img: "/benefits/vacation.jpeg",
    },
  ];

  return (
    <main className="flex flex-col items-center">
      <div className="border-b w-full flex flex-col items-center">
        <div className="lg:w-[85%] md:w-[90%] border-x border-stone-300 w-full px-8 py-16 flex justify-center lg:flex-row flex-col lg:space-x-16 items-center">
          <div className="flex-1">
            <p className="text-2xl uppercase text-stone-600 font-medium">
              Benefits
            </p>
            <p className="mt-2 text-5xl font-semibold">
              Jobs take <span className="text-indigo-500">~50%</span> of your
              day.
              <br />
              At VibeMagnet, that&apos;s 50%{" "}
              <span className="text-indigo-500">well-spent</span>.
            </p>

            <div className="mt-4">
              <p className="text-2xl font-medium">
                Perks of a VibeMagnet career
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-lg">
                {benefits.map((x, i) => {
                  return (
                    <div key={i} className="border border-stone-400 bg-stone-50 text-stone-600 rounded-lg p-1 px-2 shadow-md shadow-stone-100">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-emerald-500 mr-0.5"
                      />{" "}
                      {x.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex-1 lg:w-fit w-full lg:mt-0 mt-16 flex flex-wrap justify-center gap-4">
            <img
              src="/benefits/familysleeping.jpg"
              className="rounded-lg w-[45%]"
              alt={'Family Sleeping'}
            />
            <img src="/benefits/working.jpg" className="rounded-lg w-[45%]" alt={'Working'} />
          </div>
        </div>
      </div>

      <div className="border-x border-stone-300 bg-gradient-to-br from-stone-800 via-indigo-800 to-purple-900 w-full bg-fixed">
        <div className="flex flex-col items-center justify-center text-center py-16 px-8 bg-gradient-to-br from-white/5 to-rose-500/10">
          <p className="text-2xl text-indigo-300 font-medium">
            Why Choose VibeMagnet?
          </p>
          <p className="mt-2 text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-stone-100 via-indigo-200 to-slate-50">
            VibeMagnet has everything
            <br />
            you need to be successful.
          </p>
        </div>
      </div>

      <div className="border-x border-stone-300 bg-gradient-to-br from-white via-rose-50/75 to-teal-50/75 lg:w-[85%] md:w-[90%] w-full py-8 px-8">
        <div className="mt-8 flex flex-col items-center space-y-8">
          {benefits.map((x, i) => {
            return (
              <div key={i} className="p-2 lg:w-[80%]">
                <div className="flex lg:flex-row md:flex-row flex-col items-center lg:space-x-8 md:space-x-8 lg:space-y-0 md:space-y-0 space-y-8">
                  <div>
                    <p className="font-medium text-indigo-500 text-lg">
                      {x.name}
                    </p>
                    <p className="text-3xl font-medium">{x.header}</p>
                    <p className="mt-1 text-xl">{x.desc}</p>
                  </div>
                  <div>
                    <img src={x.img} width={1000} height={500} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="border-x border-t border-stone-300 lg:w-[85%] md:w-[90%] w-full py-8 px-8">
        <div className="w-full h-full flex xl:flex-row flex-col xl:space-x-4">
          <div className="flex-1 xl:sticky top-[100px] h-fit">
            <div className="flex items-center">
              <div className="">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-emerald-500 text-7xl"
                />
              </div>
              <div className="ml-5 border-l border-dashed border-stone-300 pl-5 flex items-center -space-x-3">
                {jobs.slice(0, 5).map((x, i) => {
                  return (
                    <Image
                      src={x.quote.image}
                      alt={x.quote.text}
                      width={70}
                      height={70}
                      key={i}
                      className="rounded-full outline outline-4 outline-white border border-stone-200"
                    />
                  );
                })}
              </div>
            </div>
            <p className="mt-4 xl:text-7xl lg:text-6xl text-5xl uppercase text-black font-semibold">
              Success stories from employees, that proves that
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-indigo-500 to-rose-500">
                our work
                <br />
                actually works
              </span>
              .
            </p>
            <p></p>
          </div>

          <div className="xl:mt-0 mt-12 flex flex-col xl:space-y-8 space-y-4 flex-1">
            {jobs.slice(0, 5).map((x, i) => {
              return (
                <div key={i}>
                  <div className="bg-[conic-gradient(#6366f1,#a855f7,#f43f5e)] rounded-t-2xl">
                    <div className="rounded-t-2xl backdrop-blur-3xl p-6 h-full bg-gradient-to-br from-white/30 via-transparent to-white/10 text-white">
                      <div className="flex lg:flex-row md:flex-row flex-col items-start lg:space-x-6 md:space-x-6 space-y-4">
                        <Image
                          src={x.quote.image}
                          alt={x.quote.text}
                          width={100}
                          height={100}
                          className="lg:w-[100px] w-[70px] rounded-full outline outline-2 outline-white border border-stone-200"
                        />
                        <div>
                          <p className="lg:text-2xl md:text-2xl text-xl lg:font-medium md:font-medium font-normal">
                            &quot;{x.quote.text}&quot;
                          </p>
                          <p className="mt-2 font-light text-lg text-white/70">
                            - <span className="text-white">{x.quote.by}</span>{" "}
                            with us since{" "}
                            <span className="text-white">
                              {x.quote.withUsSince}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 py-4 rounded-b-xl border border-stone-300 text-sm">
                    <p>
                      {x.quote.by} is working as a{" "}
                      <span className="font-medium">{x.name}</span> at
                      VibeMagnet.
                      <br />
                      Interested?{" "}
                      <Link
                        href={`/offers/${x.name
                          .split(" ")
                          .join("-")
                          .toLowerCase()}`}
                      >
                        <span className="text-sky-500 underline">
                          Apply now!
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <BlackOutDiv />

      <div className="border-t border-stone-300 py-12 lg:w-[85%] w-full px-4">
        <div className="flex lg:flex-row flex-col lg:items-center md:items-center lg:space-x-12 lg:space-y-0 space-y-8">
          <div>
            <p className="uppercase text-stone-600 text-xl">
              VibeMagnet Careers
            </p>
            <p className="mt-2 text-4xl font-medium">
              Love how VibeMagnet sounds?
              <br />
              Join our company today.
            </p>
          </div>
          <div className="flex-1">
            <div className="border border-rose-500 lg:text-4xl text-3xl flex items-center space-x-1 p-1 rounded-full">
              <input
                className="flex-1 rounded-full focus:outline-sky-400 px-5 py-2 h-[60px] font-light placeholder:text-stone-400"
                placeholder="Enter your email to apply now."
                onChange={(e) => setEmail(e.target.value)}
              />
              <Link href={`/apply?email="${email}"`}>
                <div className="px-4 py-2 bg-rose-500 rounded-full text-white font-medium text-2xl h-[60px] flex items-center">
                  Apply <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
