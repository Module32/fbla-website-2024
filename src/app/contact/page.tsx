"use client";

import react, { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  faAngleDown,
  faAngleUp,
  faBuilding,
  faEnvelope,
  faLaptop,
  faMapLocation,
  faPhone,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";

const Builder = ({
  scrollRef,
  scrollYProgress,
  header,
  children,
  icon,
}: {
  scrollRef: any;
  scrollYProgress: any;
  header: String;
  children: any;
  icon: any;
}) => {
  return (
    <div
      ref={scrollRef}
      className="w-screen lg:px-16 md:px-8 px-4 h-[150vh] pb-12 flex flex-col items-center py-12"
      style={{ overflow: 'clip' }}
      id={header.split(" ").join("-").toLowerCase()}
    >
      <motion.div
        className="sticky top-1/2 -translate-y-[30%] flex flex-col justify-center"
        style={{ opacity: useTransform(scrollYProgress, [0.25, 0.35], [0, 1]) }}
      >
        <motion.p
          className="w-full animate-pulse fixed whitespace-nowrap -z-10 lg:text-[30vw] md:text-[40vw] text-[50vw] text-transparent"
          style={{
            translateX: useTransform(
              scrollYProgress,
              [0, 1],
              ["200%", "-200%"]
            ),
            WebkitTextStroke: "1px #d97706",
          }}
        >
          {header}
        </motion.p>
        <div className="bg-gradient-to-r from-transparent via-white to-transparent flex lg:flex-row md:flex-row flex-col">
          <div className="border-r-2 border-indigo-500 border-dashed pr-16 flex flex-col items-center justify-center">
            <motion.div
              style={{
                rotate: useTransform(scrollYProgress, [0.3, 0.7], [0, 20]),
              }}
              className="lg:text-[10vw] md:text-[15vw] lg:flex md:flex hidden"
            >
              <FontAwesomeIcon icon={icon} />
            </motion.div>
          </div>
          <div className="lg:pl-16 md:pl-16 flex flex-col justify-center lg:text-3xl md:text-3xl text-2xl font-light lg:text-left md:text-left text-center">
            <p className="text-6xl font-semibold">{header}</p>
            {children}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

function ContactUsHeaderDiv() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });
  const [showSources, setShowSources] = useState(false);

  // useTransform(scrollYProgress, [0, 0.5], [0.5, 1.1])

  return (
    <div
      ref={scrollRef}
      className="bg-gradient-to-br from-white via-indigo-100 to-white w-full lg:px-16 md:px-8 px-4 h-[150vh] pb-12 flex flex-col items-center"
    >
      <div className="sticky top-1/2 -translate-y-[40%] flex flex-col items-center inversion">
        <motion.div
          className="fixed p-16 bg-gradient-to-br from-indigo-400 to-rose-400 top-[40%] -z-10 rounded-3xl"
          animate={{ rotate: 360, scale: [1, 3, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.p
          className="inversion text-stone-500 mt-12 font-bold text-center xl:text-8xl lg:text-7xl md:text-6xl text-5xl"
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 0.5 }}
        >
          At VibeMagnet, your feedback{" "}
          <span className="border-b-8 border-[#0bcba1] text-[#0bcba1]">
            matters to us
          </span>
          . Reach out today.
        </motion.p>

        <motion.p
          className="mt-12 text-stone-700 text-center xl:text-3xl lg:text-2xl text-xl lg:w-1/2"
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 0.5 }}
        >
          You can get to us with any way possible. Email, snail mail, hitting up
          our phone number, hitting up our building -- heck, hit us up whenever.
        </motion.p>
      </div>
    </div>
  );
}

function EmailDiv() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  // useTransform(scrollYProgress, [0, 0.5], [0.5, 1.1])

  return (
    <Builder
      scrollRef={scrollRef}
      scrollYProgress={scrollYProgress}
      header={"Email us"}
      icon={faLaptop}
    >
      <p className="mt-2 p-1 bg-stone-100 border border-stone-300 font-mono rounded-lg">
        vibemagnetmarketing@gmail.com
      </p>
      <hr className="my-8 border-stone-300" />
      <p className="font-light">
        You can also email us through the
        <br />
        Job Portal for career-specific questions.
      </p>
    </Builder>
  );
}

function MailDiv() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  // useTransform(scrollYProgress, [0, 0.5], [0.5, 1.1])

  return (
    <Builder
      scrollRef={scrollRef}
      scrollYProgress={scrollYProgress}
      header={"Mail us"}
      icon={faEnvelope}
    >
      <p className="mt-2 font-light">Our postal information is below.</p>
      <div className="mt-4 text-xl p-2 border border-red-400 rounded-lg backdrop-blur-sm bg-red-50/50">
        <p className="font-medium">
          <FontAwesomeIcon icon={faMapLocation} className="text-red-500 mr-4" />
          Snail mail&apos;s slow, but we&apos;ll still reply fast.
        </p>
        <div className="mt-2 flex flex-col space-y-1 text-base">
          {[
            {
              header: "Recipient Name",
              data: "VibeMagnet Marketing Inc.",
            },
            {
              header: "Street Address",
              data: "1 Business Avenue",
            },
            {
              header: "City",
              data: "Edison",
            },
            {
              header: "State",
              data: "New Jersey",
            },
            {
              header: "Zip Code",
              data: "08837",
            },
          ].map((x, i) => {
            return (
              <p key={i}>
                {x.header}: <span className="font-medium">{x.data}</span>
              </p>
            );
          })}
        </div>
      </div>
    </Builder>
  );
}

function CallDiv() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  // useTransform(scrollYProgress, [0, 0.5], [0.5, 1.1])

  return (
    <Builder
      scrollRef={scrollRef}
      scrollYProgress={scrollYProgress}
      header={"Call us"}
      icon={faPhone}
    >
      <p>Customer support that actually helps.</p>
      <p className="mt-4">
        {["🇺🇸", "732", "207", "0712"].map((x, i) => {
          return (
            <span className="text-stone-500 font-light" key={i}>
              <span
                className={`border ${
                  i === 0
                    ? "bg-stone-100 border-stone-500"
                    : "bg-blue-100 border-blue-500"
                } shadow text-black px-1.5 rounded-lg font-medium`}
              >
                {x}
              </span>
              {i !== 3 && (i === 0 ? <span className="pr-4" /> : " - ")}
            </span>
          );
        })}
      </p>
      <div className="text-lg text-stone-500 mt-4">
        <p>
          We&apos;re situated in America 🇺🇸, so please keep this in mind when
          calling us.
        </p>
        <p>Call rates may apply for international calls or text messages.</p>
      </div>
    </Builder>
  );
}

function VisitDiv() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  // useTransform(scrollYProgress, [0, 0.5], [0.5, 1.1])

  return (
    <Builder
      scrollRef={scrollRef}
      scrollYProgress={scrollYProgress}
      header={"Visit us"}
      icon={faBuilding}
    >
      <p className="mt-2">Our address:</p>

      <div className="flex items-center">
        <div className="shadow-xl flex items-start space-x-2 mt-4 uppercase text-5xl font-normal font-oswald bg-[#308446] border-2 border-white outline outline-2 outline-[#308446] rounded-lg text-white w-fit">
          <div className="px-4 py-2 bg-gradient-to-br from-green-800 via-transparent via-60% to-white/20 rounded-lg flex items-start space-x-2.5">
            <span>1 Business</span> <span className="text-2xl">Ave</span>
          </div>
        </div>
      </div>
    </Builder>
  );
}

function JobPortalDiv() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });
  const [showSources, setShowSources] = useState(false);

  // useTransform(scrollYProgress, [0, 0.5], [0.5, 1.1])

  return (
    <div className="py-12 w-full bg-gradient-to-br from-white via-indigo-200 via-60% to-rose-100 bg-cover bg-center border-t border-stone-300">
      <div className="lg:px-16 md:px-8 px-4 py-12 w-full h-full flex flex-col justify-center">
        <div className="">
          <div className="h-[2px] bg-rose-500 xl:w-[75%] rounded-full flex items-center">
            <div className="py-1 px-2 rounded-lg text-white font-medium bg-rose-500 ml-4 ">
              VibeMagnet Marketing
            </div>
          </div>

          <p className="mt-8 xl:text-8xl lg:text-7xl md:text-6xl text-5xl font-semibold">
            Get in touch with us today.
            <br />
            <span className="text-indigo-500">
              Learn why we have five{" "}
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-500 -rotate-[20deg]"
              />
              s in customer support.
            </span>
          </p>

          <p className="mt-8 xl:text-3xl lg:text-2xl md:text-xl text-lg text-stone-500 font-light">
            {new Date().getFullYear()}© VibeMagnet Marketing Inc.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  // useTransform(scrollYProgress, [0, 0.5], [0.5, 1.1])

  return (
    <>
      <motion.div
        ref={scrollRef}
        className=" w-screen bg-gradient-to-t from-transparent to-white fixed z-10"
      >
        <motion.div
          className="py-4 flex lg:space-x-16 md:space-x-12 space-x-6 items-center justify-center"
          style={{ scale: useTransform(scrollYProgress, [0.6, 1], [1, 0.6]) }}
        >
          {[
            {
              icon: faLaptop,
              id: "email-us",
            }, // email
            {
              icon: faEnvelope,
              id: "mail-us",
            }, // snail mail
            {
              icon: faPhone,
              id: "call-us",
            }, // phone call
            {
              icon: faBuilding,
              id: "visit-us",
            }, // building
          ].map((x, i) => {
            return (
              <Link href={`/contact#${x.id}`} key={i}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i / 10 }}
                  key={i}
                  className="lg:text-6xl md:text-5xl text-4xl bg-gradient-to-br from-indigo-100 to-indigo-300 border-2 border-indigo-500 text-indigo-500 lg:w-28 lg:h-28 md:w-24 md:h-24 w-20 h-20 flex items-center justify-center rounded-full"
                >
                  <FontAwesomeIcon icon={x.icon} />
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </motion.div>
      
      <ContactUsHeaderDiv />
      <EmailDiv />
      <MailDiv />
      <CallDiv />
      <VisitDiv />
      <JobPortalDiv />
    </>
  );
}
