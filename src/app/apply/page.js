"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faArrowRight,
  faCheck,
  faCheckSquare,
  faCircle,
  faFileCirclePlus,
  faHome,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/animations/shift-away-subtle.css";
import { benefits, countryList, jobs } from "../../../lib/globalData";
import { AnimatePresence, motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

export default function Application() {
  const searchParams = useSearchParams();
  const [page, setPage] = useState(1); // default: 1;

  const [country, setCountry] = useState("");
  const [page1Data, setPage1Data] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
  }); // default: nth

  const [jobPos, setJobPos] = useState(""); // default: empty string
  const [jobData, setJobData] = useState(); // default: empty

  const pos = searchParams.get("pos");
  const email = searchParams.get("email");
  const goToFinal = searchParams.get("page");

  useEffect(() => {
    if (email) {
      const data = { ...page1Data };
      data.email = email;
      setPage1Data(data);
    }
  }, [email]);

  useEffect(() => {
    if (goToFinal && goToFinal.length > 0) {
      setPage1Data({
        firstName: "Test",
        lastName: "User",
        email: "testemail@email.com",
        number: "000-000-0000",
      });
      setJobPos("Digital Media Specialist");
      setPage(4);
    }
  }, [goToFinal]);

  useEffect(() => {
    if (pos && pos.length > 0) setJobPos(pos.split("-").join(" "));
  }, [pos]);

  useEffect(() => {
    if (jobPos.length > 0) {
      setJobData(
        jobs.find((x) => {
          return x.name === jobPos;
        })
      );
    }
  }, [jobPos]);

  function page1submit(formData) {
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const date = formData.get("date");
    const number = formData.get("number");

    console.log(firstName, lastName, email, date, number);

    setPage1Data({ firstName, lastName, email, date, number });
    setPage(2);
  }

  function page2submit(formData) {
    const backgroundCheckYes = formData.get("backgroundCheckYes");
    const felonyYes = formData.get("felonyYes");
    const veteranYes = formData.get("veteranYes");

    console.log(backgroundCheckYes, felonyYes, veteranYes);

    setPage(3);
  }

  function page3submit(formData) {
    // TODO uploading resume stuff
    const desiredSalary = formData.get("desiredSalary");
    const startDate = formData.get("startDate");

    fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({
        subject: "We got your job application",
        data: {
          firstName: page1Data.firstName,
          lastName: page1Data.lastName,
          jobPos: jobPos,
        },
        user: {
          email: page1Data.email,
        },
      }),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });

    setPage(4);
  }

  return (
    <div className="">
      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-1/2 w-full lg:px-[10vw] md:px-[5vw] px-4 lg:py-24 py-8">
          <p className="text-lg text-stone-500">Job Application</p>
          <p className="mt-2 text-4xl font-medium">
            Hey there. It&apos;s so great to see you coming on board.
          </p>
          <p className="text-xl mt-8 leading-normal">
            VibeMagnet is the platform where{" "}
            <span className="text-sky-500">
              role models become high-paid models
            </span>
            ,{" "}
            <span className="text-amber-500">
              entrepeneurs become big-shot CEOs
            </span>
            , and{" "}
            <span className="text-red-500">
              today&apos;s underdogs become tomorrow&apos;s big dogs.
            </span>
            <br />
            <br />
            There&apos;s a reason why so many companies come to us for
            advertising, and why we approach so many companies. We look for
            people with <u>potential</u> -- and today, we&apos;re searching for
            potential like you. The world is brimming with new marketing
            opportunities,{" "}
            <span className="font-medium">
              and we need talent like yours to market talent around the globe.
            </span>
            <br />
            <br />
            We hope to see you soon. Cheers!
          </p>
          <div className="mt-4 flex items-center space-x-3">
            <Image
              src={`/people/ekya.png`}
              alt={"Ekya"}
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="font-medium text-stone-600">
              Ekya Dogra{" "}
              <span className="font-light">Co-CEO of VibeMagnet</span>
            </p>
          </div>
          <div className="mt-6">
            <Link href="">
              <span className="text-sky-500 hover:underline">
                See available job listings{" "}
                <FontAwesomeIcon icon={faArrowRight} className="-rotate-45" />
              </span>
            </Link>
          </div>
          <div className="mt-10 p-4 border rounded-xl border-stone-300 bg-gradient-to-br from-rose-50 via-sky-50 to-teal-50">
            <p className="uppercase text-stone-500 font-medium">
              Job perks and benefits
            </p>
            <p className="text-xl font-medium mt-1">
              You&apos;ll love working at{" "}
              <span className="text-red-500">Vibe</span>
              <span className="text-sky-500">Magnet</span>
            </p>
            <div className="mt-2 space-y-2">
              {[
                "Amazing community of coworkers and staff",
                "Driven work ethic rewarded with success",
                "Flexibility for working at home or in our offices",
                "Sweet, sweet salaries paying six figures",
                "Guaranteed vacation and rest days",
              ].map((x, i) => {
                return (
                  <div key={i} className="flex items-center space-x-2">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-emerald-500"
                    />
                    <p>{x}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-6">
            <p className="text-3xl font-medium bg-clip-text text-transparent bg-gradient-to-br from-stone-900 to-slate-500">
              <span className="text-6xl font-bold italic mr-2.5 text-indigo-500">
                &quot;
              </span>
              VibeMagnet has one of the most positive working environments
              I&apos;ve ever been in. The sheer dedication of your coworkers and
              your managers really gets you excited, that you have an
              opportunity to make things the next big thing.
              <span className="text-indigo-500 font-bold">&quot;</span>
            </p>
            <div className="mt-4 flex items-center space-x-3">
              <Image
                src={`/people/yash.png`}
                alt={"Yash"}
                width={40}
                height={40}
                className="rounded-full"
              />
              <p className="font-medium text-stone-600">
                Yashasvi Pabbisetty{" "}
                <span className="font-light">VibeMagnet employee</span>
                <br />
                <span className="text-xs font-light">
                  Image courtesy of Srujana Paaji
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full bg-stone-100 border-l lg:border-t-0 border-t border-stone-200 lg:px-[10vw] md:px-[5vw] px-4 lg:py-24 py-8">
          {pos && pos.length > 0 && (
            <div className="mb-4 rounded-lg p-2 border border-indigo-500 bg-indigo-100 text-indigo-500">
              <p className="font-medium">
                You&apos;re filling out this application for{" "}
                <span className="italic">{pos.split("-").join(" ")}</span>.
              </p>
              <p className="text-sm text-indigo-400">
                If you&apos;d like to apply for a different position, click{" "}
                <Link href="/apply">
                  <u className="text-indigo-500">here</u>
                </Link>
                .
              </p>
            </div>
          )}
          <div className="mb-4 rounded-lg p-2 border border-sky-500 bg-sky-100 text-sky-500">
            <p className="font-medium">Are you judging our website for FBLA?</p>
            <p className="text-sm text-sky-400">
              <Link href="/apply?page='final'">
                <u className="text-sky-500">
                  Click here for an example page of what happens when your
                  application is submitted!
                </u>
              </Link>
              .
            </p>
          </div>
          <AnimatePresence mode="wait">
            {page === 1 && (
              <motion.div
                key={page}
                initial={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: 20 }}
                className="sticky top-[175px]"
              >
                <form className="sticky top-[175px]" action={page1submit}>
                  <p className="text-xl font-medium">General Information</p>

                  <div className="mt-4 flex space-x-4">
                    <div className="w-1/2">
                      <p className="font-medium">First Name</p>
                      <input
                        name="firstName"
                        placeholder="John"
                        className="mt-2 w-full bg-white p-2 rounded-lg border border-stone-300 placeholder:text-stone-400"
                        required
                      />
                    </div>

                    <div className="w-1/2">
                      <p className="font-medium">Last Name</p>
                      <input
                        name="lastName"
                        placeholder="Doe"
                        className="mt-2 w-full bg-white p-2 rounded-lg border border-stone-300 placeholder:text-stone-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="font-medium">Email</p>
                    <input
                      name="email"
                      type="email"
                      defaultValue={email && email.split('"').join("")}
                      placeholder="john.doe@email.com"
                      className="mt-2 w-full bg-white p-2 rounded-lg border border-stone-300 placeholder:text-stone-400"
                      required
                    />
                  </div>

                  <div className="mt-4 flex items-center">
                    <p className="font-medium">Date of Birth (MM/DD/YY)</p>
                    <input
                      name="date"
                      type="date"
                      placeholder="john.doe@email.com"
                      className="ml-auto w-fit bg-white p-2 rounded-lg border border-stone-300 placeholder:text-stone-400"
                      required
                    />
                  </div>

                  <div className="mt-4 flex items-center">
                    <p className="font-medium">Phone Number</p>
                    <div className="ml-auto flex items-center space-x-1">
                      <input
                        name="number"
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full bg-white p-2 rounded-lg border border-stone-300 placeholder:text-stone-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="font-medium">Your location</p>
                    <p className="text-stone-700">
                      Please type your full address and town, the state you
                      reside in (if applicable), and country.
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <input
                        name="address"
                        placeholder="Street name and town"
                        className="bg-white p-2 rounded-lg border border-stone-300 placeholder:text-stone-400"
                        required
                      />
                      <input
                        name="state"
                        placeholder="State"
                        className="w-[75px] bg-white p-2 rounded-lg border border-stone-300 placeholder:text-stone-400"
                      />

                      <Tippy
                        content={
                          <div>
                            <div className="flex flex-col">
                              {countryList.map((x, i) => {
                                return (
                                  <p
                                    key={i}
                                    className="p-3 py-2 hover:bg-stone-200 transition hover:cursor-pointer"
                                    onClick={() => setCountry(x)}
                                  >
                                    {x}
                                  </p>
                                );
                              })}
                            </div>
                          </div>
                        }
                        interactive={true}
                        trigger="click"
                        animation="shift-away-subtle"
                        placement="bottom"
                        delay={[0, 0]}
                        className="border border-stone-300 bg-white/75 backdrop-blur rounded-lg max-h-[400px] overflow-auto shadow-lg"
                      >
                        <div className="flex items-center hover:cursor-pointer bg-white p-2 rounded-lg border border-stone-300 placeholder:text-stone-400 w-fit">
                          <p
                            className={`${
                              country.length > 0 ? "" : "text-stone-400"
                            }`}
                          >
                            {country.length > 0 ? country : "Select a country"}
                          </p>
                          <FontAwesomeIcon
                            icon={faAngleDown}
                            className="ml-2"
                          />
                        </div>
                      </Tippy>
                    </div>
                  </div>

                  <input
                    type="submit"
                    value="Continue to questions"
                    className="mt-8 w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium p-2 rounded-lg border hover:cursor-pointer"
                    required
                  />
                </form>
              </motion.div>
            )}
            {page === 2 && (
              <motion.div
                key={page}
                initial={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: 20 }}
                className="sticky top-[175px]"
              >
                <form className="sticky top-[175px]" action={page2submit}>
                  <p className="text-xl font-medium">Just a few questions</p>

                  <div className="mt-4 space-y-3 flex flex-col">
                    {[
                      [
                        "Are you willing to submit a background check if selected for employement?",
                        "backgroundCheckYes",
                        "backgroundCheckNo",
                      ],
                      [
                        "Have you ever been convicted of a felony?",
                        "felonyYes",
                        "felonyNo",
                      ],
                      ["Are you a veteran?", "veteranYes", "veteranNo"],
                    ].map((x, i) => {
                      return (
                        <div
                          key={i}
                          className="bg-white shadow-sm border border-stone-300 p-2 rounded-lg flex items-center"
                        >
                          <p className="font-medium flex-1">{x[0]}</p>
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-1 ml-4">
                              <input
                                type="radio"
                                id={`${x[1]}-on`}
                                name={x[1]}
                              />
                              <p>Yes</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <input
                    type="submit"
                    value="Continue to positions"
                    className="mt-8 w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium p-2 rounded-lg border hover:cursor-pointer"
                    required
                  />
                </form>
              </motion.div>
            )}
            {page === 3 && (
              <motion.div
                key={page}
                initial={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: 20 }}
                className="sticky top-[175px]"
              >
                <form className="sticky top-[175px]" action={page3submit}>
                  <p className="text-xl font-medium">Job position</p>

                  <Tippy
                    content={
                      <div>
                        <div className="flex flex-col">
                          {jobs.map((x, i) => {
                            return (
                              <div
                                key={i}
                                className="w-full p-3 hover:bg-stone-200 transition hover:cursor-pointer"
                                onClick={() => setJobPos(x.name)}
                              >
                                <p className="font-medium">{x.name}</p>
                                <p className="text-sm text-stone-700">
                                  {x.desc}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    }
                    interactive={true}
                    trigger="click"
                    animation="shift-away-subtle"
                    placement="bottom-start"
                    delay={[0, 0]}
                    className="border border-stone-300 bg-white/75 backdrop-blur rounded-lg max-h-[400px] overflow-auto shadow-lg"
                  >
                    <div className="mt-2 flex items-center hover:cursor-pointer bg-white p-2 rounded-lg border border-stone-300 placeholder:text-stone-400 w-fit">
                      <p
                        className={`${
                          jobPos.length > 0 ? "" : "text-stone-600"
                        }`}
                      >
                        {jobPos.length > 0
                          ? jobPos
                          : "Please select a position..."}
                      </p>
                      <FontAwesomeIcon icon={faAngleDown} className="ml-2" />
                    </div>
                  </Tippy>

                  {jobPos.length > 0 && jobData && (
                    <motion.div
                      initial={{ opacity: 0, translateY: 20 }}
                      animate={{ opacity: 1, translateY: 0 }}
                    >
                      <div className="mt-4">
                        <div className="bg-gradient-to-br from-indigo-100 to-purple-200 text-indigo-500 p-3 rounded-t-lg border border-indigo-500">
                          <p className="text-xl font-medium">{jobData.name}</p>
                          <p>{jobData.desc}</p>
                        </div>
                        <div className="p-3 bg-white border border-stone-300 rounded-b-lg">
                          <p>
                            We&apos;re glad to see you applying! Below is some
                            important information regarding this position.
                          </p>
                          <p className="text-lg mt-2 font-medium">
                            Requirements
                          </p>
                          <div className="flex flex-col space-y-1">
                            {jobData.requirements.map((x, i) => {
                              return (
                                <div
                                  key={i}
                                  className="flex items-center space-x-2 text-stone-700"
                                >
                                  <FontAwesomeIcon
                                    icon={faCircle}
                                    className="text-stone-500 scale-[.5]"
                                  />
                                  <p>{x}</p>
                                </div>
                              );
                            })}
                          </div>

                          <p className="text-lg mt-2 font-medium">
                            Benefits & Perks
                          </p>
                          <div className="flex flex-col space-y-1">
                            {benefits.map((x, i) => {
                              return (
                                <div
                                  key={i}
                                  className="flex items-center space-x-2 text-stone-700"
                                >
                                  <FontAwesomeIcon
                                    icon={faCheck}
                                    className="text-emerald-500 scale-[]"
                                  />
                                  <p>{x}</p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      <div className="mt-4">
                        <p className="text-xl font-medium">
                          Let&apos;s wrap up your application
                        </p>

                        <div className="mt-4 flex items-center">
                          <p className="font-medium">Resume</p>
                          <label
                            htmlFor="upload-file"
                            className={`ml-auto w-fit bg-white p-2 rounded-lg border border-dashed border-stone-400 text-stone-600 placeholder:text-stone-400 font-medium hover:border-sky-500 hover:bg-sky-100 hover:text-sky-500 transition hover:cursor-pointer`}
                          >
                            <input type="file" id="upload-file" />
                            <FontAwesomeIcon
                              icon={faFileCirclePlus}
                              className="mr-1.5 text-sky-500"
                            />
                            Attach your resume
                          </label>
                        </div>

                        <div className="mt-4 flex space-x-4">
                          <div className="w-1/2">
                            <p className="font-medium">Desired Salary</p>
                            <input
                              name="desiredSalary"
                              placeholder="Desired Salary"
                              className="mt-2 w-full bg-white p-2 rounded-lg border border-stone-300 placeholder:text-stone-400"
                              required
                            />
                          </div>

                          <div className="w-1/2">
                            <p className="font-medium">Potential Start Date</p>
                            <input
                              name="startDate"
                              type="date"
                              placeholder="john.doe@email.com"
                              className="mt-2 w-full bg-white p-2 py-1.5 rounded-lg border border-stone-300 placeholder:text-stone-400"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <input
                        type="submit"
                        value="Submit my application"
                        className="mt-8 w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium p-2 rounded-lg border hover:cursor-pointer"
                        required
                      />
                    </motion.div>
                  )}
                </form>
              </motion.div>
            )}
            {page === 4 && (
              <motion.div
                initial={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                className="sticky top-[175px] h-[70vh] flex flex-col justify-center items-center text-center"
              >
                <div>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-emerald-500 text-5xl"
                  />
                  <p className="text-4xl mt-4 font-medium">
                    Your application has been submitted!
                  </p>
                </div>
              </motion.div>
            )}

            {page === 4 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="fixed top-0 left-0"
              >
                <div className="bg-black/50 w-screen h-screen fixed left-0 top-0 flex flex-col items-center justify-center">
                  <div className="bg-white rounded-2xl border border-stone-300">
                    <div className="p-6">
                      <p className="text-2xl flex items-center font-medium">
                        <FontAwesomeIcon
                          icon={faCheckSquare}
                          className="text-emerald-500 rounded mr-2 text-3xl"
                        />
                        <span>We got your application!</span>
                      </p>
                      <p className="mt-2 text-stone-700">
                        It&apos;s so great to hear from you,{" "}
                        {page1Data.firstName}! Here&apos;s some of the
                        information we got from you:
                      </p>

                      <div className="flex mt-2 space-x-8">
                        <div className="">
                          <p className="uppercase font-medium text-stone-600">
                            Name
                          </p>

                          <p className="mt-1 text-lg underline decoration-2 decoration-sky-500">
                            {page1Data.firstName} {page1Data.lastName}
                          </p>
                        </div>

                        <div className="flex-1">
                          <p className="uppercase font-medium text-stone-600">
                            Your contact info
                          </p>
                          <div className="mt-1 flex flex-col space-y-1">
                            {[page1Data.email, page1Data.number].map((x, i) => {
                              return (
                                <p
                                  className="text-lg font-mono text-stone-700 bg-stone-200 px-1 w-fit rounded-md shadow-sm border border-stone-300"
                                  key={i}
                                >
                                  {x}
                                </p>
                              );
                            })}
                          </div>
                        </div>

                        <div className="flex-1">
                          <p className="uppercase font-medium text-stone-600">
                            Job position
                          </p>
                          <p className="mt-1 text-lg bg-indigo-100 text-indigo-500 w-fit px-1 rounded-md border border-indigo-300">
                            {jobPos}
                          </p>
                        </div>
                      </div>

                      <p className="mt-4 text-stone-700">
                        Please continue to check our{" "}
                        <Link href="/jobportal">
                          <span className="underline text-sky-500">
                            Job Portal
                          </span>
                        </Link>{" "}
                        for details on your status and interview.
                        <br />
                        We also just sent you an email confirming your job
                        position.
                        <br />
                        We&apos;ll get in touch with you shortly, so also keep a
                        lookout for any emails or calls!
                      </p>

                      <div className="mt-4 flex items-center text-lg font-medium space-x-2">
                        <Link href="/">
                          <div className="bg-amber-100 text-amber-500 border border-amber-500 p-2 rounded-lg w-full flex items-center">
                            <FontAwesomeIcon icon={faHome} className="mr-1" />{" "}
                            <p>Return to homepage</p>
                          </div>
                        </Link>

                        <Link href="/jobportal">
                          <div className="bg-sky-100 text-sky-500 border border-sky-500 p-2 rounded-lg w-full flex items-center">
                            <FontAwesomeIcon
                              icon={faWandMagicSparkles}
                              className="mr-1"
                            />
                            <p>Job Portal</p>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="p-6 py-3 bg-stone-100 border-t border-stone-300 rounded-b-2xl text-stone-600 text-sm flex items-center">
                      <p className="flex-1">
                        {new Date().getFullYear()} VibeMagnet Marketing Inc.
                      </p>
                      <p>Attract attention.™</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
