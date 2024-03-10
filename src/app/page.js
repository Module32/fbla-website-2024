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
    <div className="lg:h-[100vh] md:h-[90vh] h-[100vh] bg-[conic-gradient(#020617,#1e1b4b,#4c0519)] rounded-2xl text-white">
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
              initial={{ opacity: 0.15 }}
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
          className="absolute h-full w-full bg-[conic-gradient(#020617,#1e1b4b,#4c0519)]"
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
              <div className="mt-4 items-center justify-center text-center">
                <p
                  className="text-transparent"
                  style={{ WebkitTextStroke: "1px white" }}
                >
                  You need{" "}
                  <span
                    className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-slate-300 to-rose-300"
                    style={{ WebkitTextStroke: "0px transparent" }}
                  >
                    marketers
                  </span>{" "}
                  to stand out{" "}
                  <span
                    className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-slate-300 to-rose-300"
                    style={{ WebkitTextStroke: "0px transparent" }}
                  >
                    in the market.
                  </span>
                </p>
              </div>
              <p
                className="pb-4 bg-clip-text text-transparent bg-gradient-to-r text-white"
                style={{ textShadow: "0px 0px 15px #6366f1" }}
              >
                VibeMagnet&apos;s here for you.
              </p>

              <p className="font-normal xl:text-3xl lg:text-2xl text-xl">
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

              <div className="md:mt-12 mt-8 w-full justify-center flex flex-wrap items-center space-x-2 lg:text-3xl md:text-2xl text-xl font-medium">
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
      className="w-full border-t border-stone-300 px-8 py-12 bg-white"
    >
      <div className="flex lg:flex-row md:flex-row flex-col space-y-8 items-center">
        <p className="font-bold lg:w-1/2 md:w-1/2 w-full lg:text-[4vw] md:text-[4.5vw] text-5xl leading-none">
          We get people in the present moment,
          <br />
          <span className="text-maroon-flush-700">
            to make their presence known.
          </span>
        </p>

        <motion.div
          className="inversion p-32 bg-black rounded-full absolute"
          style={{ scale: useTransform(scrollYProgress, [0, 1], [0.5, 1.1]) }}
        />

        <p className="lg:text-right md:text-right text-left ml-auto lg:w-1/2 md:w-1/2 w-full lg:text-[1.75vw] md:text-[2vw] leading-none text-2xl text-stone-600 font-extralight">
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

  useEffect(() => {
    const interval = setInterval(() => {
      if (selected === "Vacations") {
        setTimer(0);
      } else {
        setTimer(timer + 1);
      }
    }, 10000);

    return () => clearInterval(interval);
  });

  useEffect(() => {
    if (!jobBenefitsArr[timer]) {
      setSelected("Community");
      setTimer(0);
    } else {
      setSelected(jobBenefitsArr[timer].name);
    }
  }, [timer]);

  useEffect(() => {
    const arr = jobBenefitsArr.map((x) => {
      return x.name;
    });
    setTimer(arr.indexOf(selected));
  }, [selected]);

  return (
    <div
      ref={scrollRef}
      className="bg-white backdrop-blur-lg w-full border-t border-stone-300 px-8 py-12 flex flex-col items-center justify-center text-center"
    >
      <p className="md:text-2xl text-xl font-medium text-stone-500">
        Working at our company feels less like{" "}
        <span class="md:inline-block hidden before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-500 relative">
          <span class="relative text-white">work,</span>
        </span>
        <span className="md:hidden inline-block text-red-500">work,</span> and
        more like{" "}
        <span class="md:inline-block hidden before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-emerald-500 relative">
          <span class="relative text-white">play.</span>
        </span>
        <span className="md:hidden inline-block text-emerald-500 relative">
          play
        </span>
        .
      </p>
      <p className="lg:text-5xl md:text-4xl text-3xl font-semibold my-4">
        Job Benefits at VibeMagnet
      </p>
      <div className="flex flex-wrap lg:gap-4 md:gap-3 gap-2 justify-center text-xl md:pb-0 pb-4 md:border-b-0 border-b border-stone-300">
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
          delay: 0.15,
        }}
        key={selected}
        className="mt-8 flex flex-col items-center"
      >
        <div className="flex items-center justify-center text-left gap-16">
          <img
            src={
              selected === "Community"
                ? "/benefits/diverse.jpg"
                : selected === "Ethic"
                ? "/benefits/ethics.jpg"
                : selected === "Remote Work"
                ? "/benefits/remotework.jpeg"
                : selected === "Salary"
                ? "/benefits/salary.jpeg"
                : selected === "Vacations"
                ? "/benefits/vacation.jpeg"
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
            <p className="lg:text-3xl md:text-2xl text-xl">
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

      <div className="mt-8 lg:w-1/2 md:w-3/4 w-full flex items-center space-x-4">
        <div className="bg-stone-300 w-full rounded-full">
          <motion.div
            className="p-0.5 bg-emerald-500 rounded-full"
            key={selected}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>
        <p className="font-mono text-emerald-500">{timer + 1}/5</p>
      </div>
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
      className="w-full border-t border-stone-300 px-8 lg:h-[90vh] md:h-[90vh] h-[80vh] flex flex-col items-center justify-center text-center"
    >
      <div className="flex items-center lg:space-x-16 md:space-x-8 space-x-4 mb-[130px]">
        <motion.div
          style={{
            translateY: useTransform(scrollYProgress, [0, 1], [200, -200]),
          }}
          className={`flex -z-50`}
        >
          <Image
            src={"/logos/insta.png"}
            alt="media"
            width="200"
            height="200"
          />
        </motion.div>

        <motion.div
          style={{
            translateY: useTransform(scrollYProgress, [0, 1], [0, 200]),
          }}
          className={`flex -z-50`}
        >
          <Image src={"/logos/tiktok.png"} width="200" height="200" />
        </motion.div>

        <motion.div
          style={{
            translateY: useTransform(scrollYProgress, [0, 1], [200, -200]),
          }}
          className={`flex -z-50`}
        >
          <Image src={"/logos/x.png"} alt="media" width="200" height="200" />
        </motion.div>

        <motion.div
          style={{
            translateY: useTransform(scrollYProgress, [0, 1], [0, 200]),
          }}
          className={`md:flex hidden`}
        >
          <Image
            src={"/logos/facebook.png"}
            alt="media"
            width="200"
            height="200"
          />
        </motion.div>

        <motion.div
          style={{
            translateY: useTransform(scrollYProgress, [0, 1], [200, -200]),
          }}
          className={`md:flex hidden`}
        >
          <Image
            src={"/logos/linkedin.png"}
            alt="media"
            width="200"
            height="200"
          />
        </motion.div>
      </div>
      <motion.p
        className="font-medium text-stone-400 lg:text-[2vw] md:text-[2.5vw] text-lg"
        style={{
          opacity: useTransform(scrollYProgress, [0.3, 0.4], [0, 1]),
          scale: useTransform(scrollYProgress, [0.3, 0.4], [0.95, 1]),
        }}
      >
        Yeah, we&apos;re up-to-date
      </motion.p>
      <motion.p
        className="lg:mt-4 md:mt-3 mt-2 lg:text-[4.5vw] md:text-[4.5vw] text-3xl leading-none font-bold text-transparent bg-clip-text bg-gradient-to-br from-stone-700 to-black"
        style={{
          opacity: useTransform(scrollYProgress, [0.4, 0.5], [0, 1]),
          scale: useTransform(scrollYProgress, [0.4, 0.5], [0.95, 1]),
        }}
      >
        We work with the most popular platforms on the{" "}
        <span className="text-sky-600">
          planet <FontAwesomeIcon icon={faEarth} />
        </span>
        .
      </motion.p>
      <motion.p
        className="pb-2 lg:mt-6 md:mt-4 mt-2 lg:text-[3vw] md:text-[4.5vw] text-xl leading-none font-semibold text-transparent bg-clip-text bg-gradient-to-br from-stone-700 to-stone-500 lg:w-3/4"
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
      className="w-full border-t border-stone-300 bg-[url('/homepage/9to5.png')] h-[80vh] bg-cover bg-fixed"
    >
      <p className="absolute m-8 z-[1] lg:text-6xl md:text-4xl text-3xl font-bold text-stone-800">
        You don&apos;t have to
        <br />
        work mundane jobs..
        <br />
        like this one.
      </p>
      <div className="absolute w-full h-[80vh] bg-gradient-to-br from-indigo-500 via-fuchsia-500/30 to-rose-500">
        <div className="absolute w-full h-[80vh] bg-gradient-to-b from-white via-transparent to-black"></div>
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
    <div
      ref={scrollRef}
      className="border-t border-stone-300 bg-black text-white"
    >
      <div className="bg-[url('/homepage/earth.jpeg')] bg-fixed bg-cover bg-center">
        <div className="px-8 py-12 font-spacegrotesk font-light bg-gradient-to-b from-black via-black/50 to-transparent">
          <p className="pt-8 lg:text-6xl md:text-5xl text-4xl leading-none z-[1]">
            With a VibeMagnet job, you can connect with the rest of the world --
            from any part of the world.
          </p>

          <div className="mt-6">
            {[
              {
                location: "North America",
                jobs: [
                  "Digital Marketing Specialist",
                  "Content Marketing Manager",
                ],
                plus: "5",
              },
              {
                location: "South America",
                jobs: ["Graphic Designer", "Copywriter"],
                plus: "10",
              },
              {
                location: "Europe",
                jobs: ["Project Manager", "PR Specialist"],
                plus: "3",
              },
              {
                location: "Asia",
                jobs: [
                  "Client Services Manager",
                  "Market Automation Specialist",
                ],
                plus: "7",
              },
              {
                location: "Africa",
                jobs: ["SEO Specialist", "Social Media Manager"],
                plus: "5",
              },
              {
                location: "Oceania",
                jobs: ["Web Developer", "Analytics Specialist"],
                plus: "8",
              },
            ].map((x, i) => {
              return (
                <div
                  key={i}
                  className="border-b border-white/50 lg:py-8 md:py-6 py-4 w-full lg:text-4xl md:text-3xl text-2xl"
                >
                  <div className="flex flex-wrap items-center lg:gap-4 md:gap-3 gap-2">
                    <p className="uppercase">{x.location}</p>
                    {x.jobs.map((_x, i) => {
                      return (
                        <div key={i}>
                          <Link
                            href={`/offers/${_x.split(" ").join("-")}`}
                            key={i}
                          >
                            <p
                              key={i}
                              className="lg:text-3xl md:text-2xl text-xl bg-black/50 px-4 py-1 rounded-full border border-sky-300/40 shadow-md hover:scale-[.97] transition"
                            >
                              {_x}
                            </p>
                          </Link>
                        </div>
                      );
                    })}
                    <p className="text-white/60">+{x.plus} more</p>
                  </div>
                </div>
              );
            })}
          </div>
          {/*<div className="gap-4 px-8 py-8">
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
            </div>*/}
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
        image: "/people/ajaydevgn.png",
      },
      company: {
        name: "@askvijay",
        image: "/logos/yt.png",
        width: 40,
      },
    },
    {
      text: "I am Iron Man. But without VibeMagnet Marketing, no one would have known that. VibeMagnet helped me go from zero to a hero -- quite literally.",
      author: {
        name: "Tony Stark",
        image: "/people/tonystark.png",
      },
      company: {
        name: "Stark Industries",
        image: "/logos/starkindustries.png",
        width: 120,
      },
    },
    {
      text: "Just to be clear, VibeMagnet didn't market us. We marketed VibeMagnet, when it was a startup. But VibeMagnet has grown so much, that we trust them 200%.",
      author: {
        name: "Tim Cook",
        image: "/people/timcook.png",
      },
      company: {
        name: "Apple",
        image: "/logos/apple.png",
        width: 40,
      },
    },
  ];

  return (
    <div className="border-t border-stone-300 lg:h-[70vh] md:h-[80vh] bg-gradient-to-br from-fuchsia-100 to-rose-50 flex justify-center items-center">
      <div
        className="px-4 text-purple-500 h-full flex items-center hover:cursor-pointer bg-gradient-to-r from-white/75 hover:text-purple-700 transition"
        onClick={() =>
          page === 0 ? setPage(tests.length - 1) : setPage(page - 1)
        }
      >
        <FontAwesomeIcon
          icon={faAngleLeft}
          className="lg:text-5xl md:text-4xl text-3xl"
        />
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
          <Image
            src={tests[page].author.image}
            width={75}
            height={75}
            className="rounded-full md:hidden flex mb-4"
            alt={tests[page].name}
          />

          <p className="lg:text-5xl md:text-4xl text-xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-fuchsia-900 to-indigo-900">
            &quot;{tests[page].text}&quot;
          </p>
          <p className="mt-4 text-2xl">
            <span className="text-fuchsia-800 font-medium">
              {tests[page].author.name}
            </span>
          </p>
          <div className="mt-8 text-lg text-stone-500 flex flex-wrap items-center gap-4 grayscale">
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
        <FontAwesomeIcon
          icon={faAngleRight}
          className="lg:text-5xl md:text-4xl text-3xl"
        />
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
