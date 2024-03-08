"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faArrowRight,
  faDollarSign,
  faEarth,
  faEarthAfrica,
  faFistRaised,
  faForwardStep,
  faGlobeAmericas,
  faHeadphones,
  faPeopleGroup,
  faQuoteLeft,
  faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

function StartDiv() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  return (
    <div className="h-[100vh] bg-[conic-gradient(#020617,#1e1b4b,#4c0519)] rounded-2xl text-white">
      <div className="h-full bg-gradient-to-bl from-indigo-500/20 via-transparent to-white/10 backdrop-blur-3xl flex flex-col items-center justify-center">
        <motion.div
          className="md:flex hidden absolute h-full lg:w-[85%] w-full -z-50 p-8 grayscale flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 0.05 }}
            transition={{ delay: 3.25 }}
          >
            <Image
              src={`/homepage/prayag.png`}
              width={200}
              height={50}
              alt={"Prayag"}
              className="absolute left-8 top-16 rounded-3xl"
            />

            <Image
              src={`/homepage/damelio.jpg`}
              width={300}
              height={50}
              alt={"D'amelio"}
              className="rounded-3xl absolute right-8 bottom-[10%]"
            />

            <Image
              src={`/homepage/jamescharles.jpeg`}
              width={300}
              height={50}
              alt={"James Charles"}
              className="rounded-3xl absolute bottom-[30%] left-[40%]"
            />
          </motion.div>

          <motion.div
            className="absolute h-full w-full flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.25, duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 0.05 }}
              transition={{ delay: 4.75 }}
            >
              <Image
                src={`/homepage/500.png`}
                width={500}
                height={50}
                alt={"500"}
                className="invert brightness-200"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute h-full w-full flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.75, duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0.25 }}
              animate={{ opacity: 0.05 }}
              transition={{ delay: 6.25 }}
            >
              <Image
                src={`/homepage/redcarpet.jpg`}
                width={800}
                height={50}
                alt={"Red Carpet"}
                className="-rotate-[15deg]"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="px-4">
          <AnimatePresence>
            <motion.p
              style={{ WebkitTextStroke: "1px white" }}
              animate={{ opacity: 1, translateY: 0 }}
              initial={{ opacity: 0, translateY: 20 }}
            >
              <motion.span
                className="font-medium text-5xl"
                animate={{ color: "transparent" }}
                transition={{ color: { delay: 1.5 } }}
              >
                At VibeMagnet, we&apos;ve gotten...
              </motion.span>
            </motion.p>

            <motion.p
              style={{ WebkitTextStroke: "1px #ef4444" }}
              animate={{ opacity: 1, translateY: 0 }}
              initial={{ opacity: 0, translateY: 20 }}
              transition={{ delay: 1.5 }}
              className="text-red-500"
            >
              <motion.span
                className="font-medium text-5xl"
                animate={{ color: "transparent" }}
                transition={{ color: { delay: 3.25 } }}
              >
                faces on billboards,
              </motion.span>
            </motion.p>

            <motion.p
              style={{ WebkitTextStroke: "1px #f59e0b" }}
              animate={{ opacity: 1, translateY: 0 }}
              initial={{ opacity: 0, translateY: 20 }}
              transition={{ delay: 3.25 }}
              className="text-amber-500"
            >
              <motion.span
                className="font-medium text-5xl"
                animate={{ color: "transparent" }}
                transition={{ color: { delay: 4.75 } }}
              >
                companies in the Fortune 500,
              </motion.span>
            </motion.p>

            <motion.p
              style={{ WebkitTextStroke: "1px #8b5cf6" }}
              animate={{ opacity: 1, translateY: 0 }}
              initial={{ opacity: 0, translateY: 20 }}
              transition={{ delay: 4.75 }}
              className="text-violet-500"
            >
              <motion.span className="font-medium text-5xl">
                and influencers on the red carpet.
              </motion.span>
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.div
          className="absolute h-[100vh] w-full bg-[conic-gradient(#020617,#1e1b4b,#4c0519)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 7.75, duration: 0.5 }}
        >
          <div className="w-full h-full p-8 flex flex-col items-center justify-center backdrop-blur-3xl bg-gradient-to-bl from-indigo-500/20 via-transparent to-white/10">
            <motion.p
              initial={{ rotate: 30 }}
              animate={{ rotate: 0 }}
              transition={{ delay: 6.4 }}
              className="bg-white xl:text-6xl lg:text-5xl md:text-4xl text-3xl p-3 rounded-full"
            >
              👋
            </motion.p>

            <div className="xl:text-8xl lg:text-7xl md:text-6xl text-5xl font-bold text-center">
              <div className="mt-4 flex flex-wrap items-center justify-center text-center space-x-5">
                <p
                  className="text-transparent"
                  style={{ WebkitTextStroke: "1px white" }}
                >
                  You need
                </p>
                <p className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-slate-300 to-rose-300">
                  marketers
                </p>
                <p
                  className="text-transparent"
                  style={{ WebkitTextStroke: "1px white" }}
                >
                  to stand out
                </p>
                <p className="py-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-slate-300 to-rose-300">
                  in the market.
                </p>
              </div>
              <p
                className="pb-4 bg-clip-text text-transparent bg-gradient-to-r text-white"
                style={{ textShadow: "0px 0px 15px #6366f1" }}
              >
                VibeMagnet&apos;s here for you.
              </p>

              <p className="font-medium xl:text-3xl lg:text-2xl text-xl">
                We&apos;ve gotten faces on billboards, companies in the Fortune
                500, and influencers on the red carpet.
                <br />
                Our marketing works — because <i>only 8%</i> of our
                clients&apos; viewers hit{" "}
                <span className="bg-black/75 border border-stone-700 p-1 px-3 rounded-lg shadow-md font-light whitespace-nowrap">
                  Skip Ad{" "}
                  <FontAwesomeIcon icon={faForwardStep} className="ml-2" />
                </span>{" "}
                on them.
              </p>

              <div className="mt-12 w-full justify-center flex flex-wrap items-center space-x-2 md:text-3xl text-2xl font-medium">
                <Link href="/offers">
                  <div className="rounded-xl bg-gradient-to-r from-indigo-800 to-rose-800 shadow-md outline outline-1 outline-offset-4 outline-white/30 p-2 px-3 hover:scale-[.97] transition">
                    <p>👋 We&apos;re hiring! Check out job offers</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function PresentMomentDiv() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  return (
    <div
      ref={scrollRef}
      className="w-full border-t border-stone-300 px-8 py-12"
    >
      <div className="flex lg:flex-row md:flex-row flex-col space-y-8 items-center">
        <p className="font-bold lg:w-1/2 md:w-1/2 w-full lg:text-[4vw] md:text-[4.5vw] text-6xl leading-none">
          We get people in the present moment,
          <br />
          <span className="text-maroon-flush">
            to make their presence known.
          </span>
        </p>

        <motion.div
          className="inversion p-32 bg-black rounded-full absolute"
          style={{ scale: useTransform(scrollYProgress, [0, 1], [0.5, 1.1]) }}
        />

        <p className="lg:text-right md:text-right text-left ml-auto lg:w-1/2 md:w-1/2 w-full lg:text-[1.75vw] md:text-[2vw] leading-none text-4xl text-stone-600 font-extralight">
          No matter what our clients are creating — a new product, company, or
          their own brand image — they need the right advertising.
          <br />
          <span className="text-stone-900 font-normal">
            VibeMagnet™ gets them on front pages of social media, newspapers,
            and magazines.
            <br />
            <br />
            Join us, on our mission to market anyone.
          </span>
        </p>
      </div>
    </div>
  );
}

function BenefitsDiv() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });
  const [selected, setSelected] = useState("Community");
  const [timer, setTimer] = useState(0);

  const jobBenefitsArr = [
    {
      icon: faPeopleGroup,
      name: "Community",
    },
    {
      icon: faFistRaised,
      name: "Ethic",
    },
    {
      icon: faHeadphones,
      name: "Remote Work",
    },
    {
      icon: faDollarSign,
      name: "Salary",
    },
    {
      icon: faUmbrellaBeach,
      name: "Vacations",
    },
  ];

  return (
    <div
      ref={scrollRef}
      className="w-full border-t border-stone-300 px-8 py-12 flex flex-col items-center justify-center text-center"
    >
      <p className="text-2xl font-medium text-stone-500">
        Working at our company feels less like{" "}
        <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-500 relative inline-block">
          <span class="relative text-white">work,</span>
        </span>{" "}
        and more like{" "}
        <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-emerald-500 relative inline-block">
          <span class="relative text-white">play.</span>
        </span>
        .
      </p>
      <p className="text-5xl font-semibold my-4">Job Benefits at VibeMagnet</p>
      <div className="flex flex-wrap gap-4 justify-center text-xl">
        {jobBenefitsArr.map((x, i) => {
          return (
            <div
              className={`flex items-center space-x-2 font-medium p-1 px-1.5 rounded ${
                selected === x.name ? "bg-stone-200" : "hover:bg-stone-100"
              } hover:cursor-pointer`}
              key={i}
              onClick={() => setSelected(x.name)}
            >
              <FontAwesomeIcon icon={x.icon} className="text-emerald-600" />
              <p>{x.name}</p>
            </div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.2,
        }}
        key={selected}
        className="mt-8 flex flex-col items-center"
      >
        <div className="flex items-center justify-center text-left gap-16">
          <img
            src={
              selected === "Community"
                ? "https://media.istockphoto.com/id/1185622398/photo/young-business-people-in-office.jpg?s=612x612&w=0&k=20&c=GcuMGhAC5k7qTaWxjIdq3IXt7uEpE2MJ0BdWBoEWzxY="
                : selected === "Ethic"
                ? "https://media.istockphoto.com/id/639678734/photo/great-things-can-only-be-achieved-together.jpg?s=612x612&w=0&k=20&c=dSgR10o1E_LUYzWeUFbwfJO8YdmAFrEdTOBZcl_jZx4="
                : selected === "Remote Work"
                ? "https://images.pexels.com/photos/4974907/pexels-photo-4974907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                : selected === "Salary"
                ? "https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                : selected === "Vacations"
                ? "https://images.pexels.com/photos/914929/pexels-photo-914929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                : ""
            }
            alt={selected}
            className="w-1/3 grayscale lg:flex md:flex hidden"
          />
          <div className="lg:w-1/2 md:w-1/2">
            {jobBenefitsArr
              .filter((x) => {
                return x.name === selected;
              })
              .map((x, i) => {
                return (
                  <div
                    key={i}
                    className="text-2xl mb-2 flex items-center space-x-4 uppercase text-stone-400 font-medium"
                  >
                    <FontAwesomeIcon
                      icon={x.icon}
                      className="text-emerald-600"
                    />
                    <p>{x.name}</p>
                  </div>
                );
              })}
            <p className="text-3xl">
              {selected === "Community" &&
                "Work with people that love their job. We hire enthusiasts for everything — graphical design, photography, influencer marketing — so it's just like you're at home, with your people."}
              {selected === "Ethic" &&
                "We let our work's results do the talking for us. Join a company that believes in new ideas just as much as their creators do, and be one of the marketers to make those ideas rise."}
              {selected === "Remote Work" &&
                "Find and work with aspiring creators from around the world, at the comfort of your home. VibeMagnet employs modern solutions to keep remote and office employees on the same page."}
              {selected === "Salary" &&
                "We've marketed companies from the ground-up and helped them hit millions in profit. So, needless to say, we get paid quite well. Open job positions start from $100,000."}
              {selected === "Vacations" &&
                "We want you to burn through your work, not burn out. Take time to yourself whenever you need it. VibeMagnet offers paid day-offs — no questions asked — and even vacation packages."}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function SocialMediaDiv() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  return (
    <div
      ref={scrollRef}
      className="w-full border-t border-stone-300 px-8 lg:h-[90vh] md:h-[90vh] h-[70vh] flex flex-col items-center justify-center text-center"
    >
      <div className="flex items-center space-x-16 mb-[130px]">
        <motion.div
          style={{
            translateY: useTransform(
              scrollYProgress,
              [0, 1],
              [200, -200]
            ),
          }}
          className={`flex`}
        >
          <Image src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/640px-Instagram_logo_2022.svg.png'} alt='media' width="200" height="200" />
        </motion.div>

        <motion.div
          style={{
            translateY: useTransform(
              scrollYProgress,
              [0, 1],
              [0, 200]
            ),
          }}
          className={`flex`}
        >
          <Image src={'/tiktok.png'} width="200" height="200" />
        </motion.div>

        <motion.div
          style={{
            translateY: useTransform(
              scrollYProgress,
              [0, 1],
              [200, -200]
            ),
          }}
          className={`flex`}
        >
          <Image src={'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/640px-X_logo_2023.svg.png'} alt='media' width="200" height="200" />
        </motion.div>

        <motion.div
          style={{
            translateY: useTransform(
              scrollYProgress,
              [0, 1],
              [0, 200]
            ),
          }}
          className={`md:flex hidden`}
        >
          <Image src={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/640px-Facebook_f_logo_%282019%29.svg.png'} alt='media' width="200" height="200" />
        </motion.div>

        <motion.div
          style={{
            translateY: useTransform(
              scrollYProgress,
              [0, 1],
              [200, -200]
            ),
          }}
          className={`md:flex hidden`}
        >
          <Image src={'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/768px-LinkedIn_icon.svg.png'} alt='media' width="200" height="200" />
        </motion.div>
      </div>
      <motion.p
        className="font-medium text-stone-400 lg:text-[2vw] md:text-[2.5vw] text-xl mb-4"
        style={{
          opacity: useTransform(scrollYProgress, [0.3, 0.4], [0, 1]),
          scale: useTransform(scrollYProgress, [0.3, 0.4], [0.95, 1]),
        }}
      >
        Yeah, we&apos;re up-to-date
      </motion.p>
      <motion.p
        className="lg:text-[4.5vw] md:text-[4.5vw] text-3xl leading-none font-bold text-transparent bg-clip-text bg-gradient-to-br from-stone-700 to-black"
        style={{
          opacity: useTransform(scrollYProgress, [0.4, 0.5], [0, 1]),
          scale: useTransform(scrollYProgress, [0.4, 0.5], [0.95, 1]),
        }}
      >
        We work with the most popular platforms on the{" "}
        <span className="text-maroon-flush-500">
          planet <FontAwesomeIcon icon={faEarth} />
        </span>
        .
      </motion.p>
      <motion.p
        className="pb-2 mt-6 lg:text-[3vw] md:text-[4.5vw] text-3xl leading-none font-semibold text-transparent bg-clip-text bg-gradient-to-br from-stone-700 to-stone-500 lg:w-3/4"
        style={{
          opacity: useTransform(scrollYProgress, [0.5, 0.6], [0, 1]),
          scale: useTransform(scrollYProgress, [0.5, 0.6], [0.95, 1]),
        }}
      >
        So to all our Gen-Z applicants, <span className="italic">this</span> is
        the place you want to be working at.
      </motion.p>
    </div>
  );
}

function NineToFiveDiv() {
  const scrollRef = useRef(null);

  return (
    <div
      ref={scrollRef}
      className="w-full border-t border-stone-300 bg-[url('/9to5.png')] h-[80vh] bg-cover bg-fixed"
    >
      <p className="absolute m-8 z-[1] lg:text-6xl md:text-4xl text-3xl font-bold text-stone-800">
        You don&apos;t have to
        <br />
        work mundane jobs..
        <br />
        like this one.
      </p>
      <div className="absolute w-full h-[80vh] bg-gradient-to-br from-indigo-500 via-fuchsia-500/30 to-rose-500">
        <div className="absolute w-full h-[80vh] bg-gradient-to-b from-white via-transparent to-white"></div>
      </div>
    </div>
  );
}

function GetOutThereDiv() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const animationProgress = {
    start: 0.2,
    firstFadeIn: 0.25,
    secondFadeIn: 0.3,
    thirdFadeIn: 0.35,
    fourthFadeIn: 0.4,
    fifthFadeIn: 0.45,
    sixthFadeIn: 0.5,
  };

  return (
    <div ref={scrollRef} className="border-t border-stone-300">
      <div className="">
        <p className="lg:text-[4vw] md:text-[4.5vw] text-4xl leading-none font-bold z-[1] px-8 py-12 border-b border-stone-300">
          At VibeMagnet, you can get out{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-500">
            into the world
          </span>{" "}
          — from{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-rose-500">
            any part of the world
          </span>
          .
          <br />
          Find jobs near you, or work remotely with us.
        </p>
        <div className="gap-4 px-8 py-8">
          <div className="w-full flex flex-wrap overflow-auto gap-4">
            <motion.div
              className="border border-rose-600 rounded-xl lg:w-[300px] md:w-[350px] bg-[url('https://images.pexels.com/photos/4058226/pexels-photo-4058226.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover w-full h-[400px] flex flex-col items-start"
              style={{
                opacity: useTransform(
                  scrollYProgress,
                  [animationProgress.start, animationProgress.firstFadeIn],
                  [0, 1]
                ),
              }}
            >
              <div className="bg-rose-500 text-white p-4 w-full rounded-t-xl">
                <FontAwesomeIcon icon={faGlobeAmericas} className="text-3xl" />
                <p className="text-3xl font-medium mt-2">North America</p>
              </div>
              <div className="h-full w-full flex flex-col p-4 bg-white/80 backdrop-blur-sm rounded-b-xl">
                <div className="mt-auto text-stone-900">
                  <p className="text-lg font-medium">Available Positions</p>
                  <p className="">
                    Digital Marketing Specialist
                    <br />
                    Content Marketing Manager
                  </p>
                  <p className="text-stone-500">+ 5 more</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="border border-rose-600 rounded-xl lg:w-[300px] md:w-[350px] bg-[url('https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover w-full h-[400px] flex flex-col items-start"
              style={{
                opacity: useTransform(
                  scrollYProgress,
                  [
                    animationProgress.firstFadeIn,
                    animationProgress.secondFadeIn,
                  ],
                  [0, 1]
                ),
              }}
            >
              <div className="bg-rose-500 text-white p-4 w-full rounded-t-xl">
                <FontAwesomeIcon icon={faGlobeAmericas} className="text-3xl" />
                <p className="text-3xl font-medium mt-2">South America</p>
              </div>
              <div className="h-full w-full flex flex-col p-4 bg-white/80 backdrop-blur-sm rounded-b-xl">
                <div className="mt-auto text-stone-900">
                  <p className="text-lg font-medium">Available Positions</p>
                  <p className="">
                    Graphics Designer
                    <br />
                    Copywriter
                  </p>
                  <p className="text-stone-500">+ 10 more</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="border border-rose-600 rounded-xl lg:w-[300px] md:w-[350px] bg-[url('https://images.pexels.com/photos/3194524/pexels-photo-3194524.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover w-full h-[400px] flex flex-col items-start"
              style={{
                opacity: useTransform(
                  scrollYProgress,
                  [
                    animationProgress.secondFadeIn,
                    animationProgress.thirdFadeIn,
                  ],
                  [0, 1]
                ),
              }}
            >
              <div className="bg-rose-500 text-white p-4 w-full rounded-t-xl">
                <FontAwesomeIcon icon={faGlobeAmericas} className="text-3xl" />
                <p className="text-3xl font-medium mt-2">Europe</p>
              </div>
              <div className="h-full w-full flex flex-col p-4 bg-white/80 backdrop-blur-sm rounded-b-xl">
                <div className="mt-auto text-stone-900">
                  <p className="text-lg font-medium">Available Positions</p>
                  <p className="">
                    Project Manager
                    <br />
                    PR Specialist
                  </p>
                  <p className="text-stone-500">+ 3 more</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="border border-rose-600 rounded-xl lg:w-[300px] md:w-[350px] bg-[url('https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover w-full h-[400px] flex flex-col items-start"
              style={{
                opacity: useTransform(
                  scrollYProgress,
                  [
                    animationProgress.thirdFadeIn,
                    animationProgress.fourthFadeIn,
                  ],
                  [0, 1]
                ),
              }}
            >
              <div className="bg-rose-500 text-white p-4 w-full rounded-t-xl">
                <FontAwesomeIcon icon={faGlobeAmericas} className="text-3xl" />
                <p className="text-3xl font-medium mt-2">Asia</p>
              </div>
              <div className="h-full w-full flex flex-col p-4 bg-white/80 backdrop-blur-sm rounded-b-xl">
                <div className="mt-auto text-stone-900">
                  <p className="text-lg font-medium">Available Positions</p>
                  <p className="">
                    Client Services Manager
                    <br />
                    Market Automation Specialist
                  </p>
                  <p className="text-stone-500">+ 7 more</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="border border-rose-600 rounded-xl lg:w-[300px] md:w-[350px] bg-[url('https://images.pexels.com/photos/3810792/pexels-photo-3810792.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover w-full h-[400px] flex flex-col items-start"
              style={{
                opacity: useTransform(
                  scrollYProgress,
                  [
                    animationProgress.fourthFadeIn,
                    animationProgress.fifthFadeIn,
                  ],
                  [0, 1]
                ),
              }}
            >
              <div className="bg-rose-500 text-white p-4 w-full rounded-t-xl">
                <FontAwesomeIcon icon={faGlobeAmericas} className="text-3xl" />
                <p className="text-3xl font-medium mt-2">Africa</p>
              </div>
              <div className="h-full w-full flex flex-col p-4 bg-white/80 backdrop-blur-sm rounded-b-xl">
                <div className="mt-auto text-stone-900">
                  <p className="text-lg font-medium">Available Positions</p>
                  <p className="">
                    SEO Specialist
                    <br />
                    Social Media Manager
                  </p>
                  <p className="text-stone-500">+ 5 more</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="border border-rose-600 rounded-xl lg:w-[300px] md:w-[350px] bg-[url('https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover w-full h-[400px] flex flex-col items-start"
              style={{
                opacity: useTransform(
                  scrollYProgress,
                  [
                    animationProgress.fifthFadeIn,
                    animationProgress.sixthFadeIn,
                  ],
                  [0, 1]
                ),
              }}
            >
              <div className="bg-rose-500 text-white p-4 w-full rounded-t-xl">
                <FontAwesomeIcon icon={faGlobeAmericas} className="text-3xl" />
                <p className="text-3xl font-medium mt-2">Oceania</p>
              </div>
              <div className="h-full w-full flex flex-col p-4 bg-white/80 backdrop-blur-sm rounded-b-xl">
                <div className="mt-auto text-stone-900">
                  <p className="text-lg font-medium">Available Positions</p>
                  <p className="">
                    Web Developer
                    <br />
                    Analytics Specialist
                  </p>
                  <p className="text-stone-500">+ 2 more</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialsDiv() {
  const [page, setPage] = useState(0);

  const tests = [
    {
      text: "Before VibeMagnet, we were struggling to get even 1,000 views on our videos. Since getting connected with a VibeMagnet agent, we've been averaging 100,000 views per video.",
      author: {
        name: "Vijay Salgaonkar",
        image: "/ajaydevgn.png",
      },
      company: {
        name: "@askvijay",
        image: "/yt.png",
        width: 40,
      },
    },
    {
      text: "I am Iron Man. But without VibeMagnet Marketing, no one would have known that. VibeMagnet helped me go from zero to a hero -- quite literally.",
      author: {
        name: "Tony Stark",
        image: "/tonystark.png",
      },
      company: {
        name: "Stark Industries",
        image: "/starkindustries.png",
        width: 120,
      },
    },
    {
      text: "Just to be clear, VibeMagnet didn't market us. We marketed VibeMagnet, when it was a startup. But VibeMagnet has grown so much, that we trust them 200%.",
      author: {
        name: "Tim Cook",
        image: "/timcook.png",
      },
      company: {
        name: "Apple",
        image: "/apple.png",
        width: 40,
      },
    },
  ];

  return (
    <div className="border-t border-stone-300 h-[70vh] bg-gradient-to-br from-fuchsia-100 to-rose-50 flex justify-center items-center">
      <div
        className="px-4 text-purple-500 h-full flex items-center hover:cursor-pointer bg-gradient-to-r from-white/75 hover:text-purple-700 transition"
        onClick={() =>
          page === 0 ? setPage(tests.length - 1) : setPage(page - 1)
        }
      >
        <FontAwesomeIcon icon={faAngleLeft} className="text-5xl" />
      </div>
      <motion.div
        className="flex-1 flex items-start space-x-6 lg:px-24 md:px-16 px-4 py-12"
        key={page}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Image
          src={tests[page].author.image}
          width={100}
          height={100}
          className="rounded-full lg:flex md:flex hidden"
          alt={tests[page].name}
        />
        <div>
          <p className="lg:text-5xl md:text-4xl text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-fuchsia-900 to-indigo-900">
            &quot;{tests[page].text}&quot;
          </p>
          <p className="mt-4 text-2xl">
            <span className="text-fuchsia-800 font-medium">
              {tests[page].author.name}
            </span>
          </p>
          <div className="mt-8 text-lg text-stone-500 flex items-center space-x-2 grayscale">
            <Image
              src={tests[page].company.image}
              width={tests[page].company.width}
              height={30}
              className="opacity-50"
            />
            <p>{tests[page].company.name}</p>
          </div>
        </div>
      </motion.div>
      <div
        className="px-4 text-purple-500 h-full flex items-center hover:cursor-pointer bg-gradient-to-l from-white/75 hover:text-purple-700 transition"
        onClick={() =>
          page === tests.length - 1 ? setPage(0) : setPage(page + 1)
        }
      >
        <FontAwesomeIcon icon={faAngleRight} className="text-5xl" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="w-full">
        <StartDiv />
      </div>

      <div className="relative border-x border-stone-300 lg:w-[85%] md:w-[90%] w-full">
        {/*<div className="flex h-[90vh] bg-cover">
          <div className="px-8 py-8 flex flex-col justify-center backdrop-blur-sm b w-full bg-gradient-to-br from-indigo-100 via-white to-rose-100">
            <div className="">
              <motion.p
                animate={{
                  opacity: 1,
                  translateY: 0,
                }}
                initial={{
                  opacity: 0,
                  translateY: 20,
                }}
                transition={{
                  delay: 0,
                }}
                className="font-bold lg:text-[5vw] md:text-[6vw] text-6xl leading-none"
              >
                Your company needs{" "}
                <span className="text-indigo-500">marketing</span> to succeed{" "}
                <span className="text-rose-500">in the market</span>
                .
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-indigo-500 via-30% to-rose-500">
                  VibeMagnet&apos;s here for you.
                </span>
              </motion.p>
              <motion.p
                animate={{
                  opacity: 1,
                  translateY: 0,
                }}
                initial={{
                  opacity: 0,
                  translateY: 20,
                }}
                transition={{
                  delay: 0.4,
                }}
                className="lg:text-[2vw] md:text-[2.5vw] text-2xl leading-none mt-6 text-stone-700"
              >
                We&apos;ve put faces on billboards, companies in the Fortune
                500, and influencers on the red carpet. We advertise you in a
                way that makes people not want to skip.
              </motion.p>
              <motion.button
                animate={{
                  opacity: 1,
                  translateY: 0,
                }}
                initial={{
                  opacity: 0,
                  translateY: 20,
                }}
                transition={{
                  delay: 0.8,
                }}
              >
                <Link href="/offers">
                  <div className="py-4 lg:text-[2vw] md:text-[2.5vw] text-2xl mt-6 p-2 px-6 rounded-2xl border-2 text-rose-500 border-rose-500 hover:bg-rose-500 hover:text-white transition w-fit font-medium flex items-center">
                    Join our marketing team{" "}
                    <FontAwesomeIcon icon={faArrowRight} className="ml-4" />
                  </div>
                </Link>
              </motion.button>

              <motion.div
                animate={{
                  opacity: 1,
                  translateY: 0,
                }}
                initial={{
                  opacity: 0,
                  translateY: 20,
                }}
                transition={{
                  delay: 1.2,
                }}
                className="mt-6"
              >
                <p className="text-xl font-light text-stone-600">Trusted by</p>
                <div className="flex flex-wrap gap-6 mt-4">
                  {[
                    "apple.png",
                    "microsoft.png",
                    "nvidia.png",
                    "samsung.png",
                    "tesla.png",
                  ].map((x, i) => {
                    return (
                      <div className="max-h-[40px] max-w-[40px] flex items-center grayscale opacity-50">
                        <img key={i} src={`/logos/${x}`} />
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
            <div>
              <Image src="" />
            </div>
          </div>
        </div>*/}

        <PresentMomentDiv />

        <BenefitsDiv />

        <SocialMediaDiv />

        <NineToFiveDiv />

        <GetOutThereDiv />

        <TestimonialsDiv />
      </div>
    </main>
  );
}
