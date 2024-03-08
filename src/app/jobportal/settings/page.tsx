"use client";

import SideBar from "@/components/SideBar";
import {
  faAngleDown,
  faArrowLeft,
  faArrowRight,
  faAt,
  faBriefcase,
  faCalendar,
  faCircleDot,
  faExclamationTriangle,
  faHashtag,
  faPlus,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGitlab,
  faLinkedin,
  faSnapchat,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/animations/shift-away-subtle.css";
import { benefits, countryList, jobs } from "../../../../lib/globalData";

export default function JobPortal() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [emailContent, setEmailContent] = useState("");

  const exampleApps = [
    {
      jobPos: "Digital Marketing Specialist",
      firstName: "Ekya",
      lastName: "Dogra",
      submittedAt: "February 9, 2024",
      status: "Pending review",
    },
    {
      jobPos: "Digital Marketing Specialist",
      firstName: "Ekya",
      lastName: "Dogra",
      submittedAt: "February 9, 2024",
      status: "Pending review",
    },
  ];

  const blogPosts = [
    {
      image:
        "https://images.genius.com/13982da7e2d5a31c47f43728144abe40.1000x1000x1.png",
      title: "VibeMagnet Partners with Yeat for New Album Release",
      content:
        "Yeat has returned with a completely new album, and a completely new sound: 2093.",
      author: {
        pfp: "/alex.png",
        name: "Alexander Poon",
      },
      date: "February 15, 2024",
      tags: ["Music", "Advertisement", "Yeat", "2093"],
    },
    {
      image:
        "https://www.apple.com/newsroom/videos/media/eyesight/posters/Apple-WWCD23-Vision-Pro-EyeSight-230605.jpg.large_2x.jpg",
      title: "Apple Vision Pro Sales Boosted by VibeMagnet Advertising",
      content:
        "The Apple Vision Pro is the next big thing for Apple since the iPhone.",
      author: {
        pfp: "/ekya.png",
        name: "Ekya Dogra",
      },
      date: "February 2, 2024",
      tags: ["Tech", "Advertisement", "Apple"],
    },
    {
      image:
        "https://images.popbuzz.com/images/633134?crop=16_9&width=660&relax=1&format=webp&signature=ZZqfGnKGDwNelEHjvP4K4_RKQEA=",
      title: "How We Got Usher All Over TikTok",
      content:
        "The Super Bowl, intense sweating, and a little moment with Alicia Keys -- all to boost his career even more.",
      author: {
        pfp: "/yash.png",
        name: "Yashasvi Pabbisetty",
      },
      date: "February 11, 2024",
      tags: ["Usher", "Super Bowl", "LVIII"],
    },
  ];

  const MailTo = ({
    email,
    subject,
    body,
    children,
  }: {
    email: any;
    subject: any;
    body: any;
    children: any;
  }) => {
    return (
      <a
        href={`mailto:${email}?subject=${
          encodeURIComponent(subject) || ""
        }&body=${encodeURIComponent(body) || ""}`}
      >
        {children}
      </a>
    );
  };

  return (
    <main>
      <div className="flex lg:flex-row flex-col">
        <SideBar />

        <div className="flex-1">
          <div className="p-6 bg-gradient-to-br from-indigo-500/10 to-rose-500/10 border-b border-stone-300">
            <p className="text-3xl font-medium">Settings</p>
          </div>

          <div className="px-6 border-b flex items-center space-x-4 font-medium sticky top-[71px] bg-white">
            {[
              {
                name: "Personal Information",
                goto: "#personalinfo",
              },
              {
                name: "Socials",
                goto: "#socials",
              },
              {
                name: "Danger",
                goto: "#danger",
              },
            ].map((x, i) => {
              return (
                <Link href={x.goto} key={i}>
                  <div className="py-2 px-1 border-b-2 border-stone-300 hover:border-red-400 transition">
                    <p>{x.name}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="p-6">
            <div id="personalinfo" className="">
              <p className="text-xl font-medium">Your Personal Information</p>
              <div className="mt-2 flex flex-wrap gap-3 w-full">
                <div className="">
                  <p className="font-medium">First Name</p>
                  <input
                    className="mt-2 w-fit bg-stone-50 border border-stone-300 rounded-lg p-2 px-3 placeholder:text-stone-400 shadow-inner"
                    placeholder="First Name"
                    defaultValue={"Ekya"}
                  />
                </div>

                <div className="">
                  <p className="font-medium">Last Name</p>
                  <input
                    className="mt-2 w-fit bg-stone-50 border border-stone-300 rounded-lg p-2 px-3 placeholder:text-stone-400 shadow-inner"
                    placeholder="Last Name"
                    defaultValue={"Dogra"}
                  />
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <div>
                  <p className="font-medium">Email</p>
                  <input
                    className="mt-2 bg-stone-50 border border-stone-300 rounded-lg p-2 px-3 placeholder:text-stone-400 shadow-inner"
                    placeholder="Last Name"
                    defaultValue={"dograekya@gmail.com"}
                  />
                </div>
                <div>
                  <p className="font-medium">Phone Number</p>
                  <input
                    className="mt-2 bg-stone-50 border border-stone-300 rounded-lg p-2 px-3 placeholder:text-stone-400 shadow-inner"
                    placeholder="Last Name"
                    defaultValue={"000-000-0000"}
                  />
                </div>
                <div>
                  <p className="font-medium">Country</p>
                  <Tippy
                    content={
                      <div>
                        <div className="flex flex-col">
                          {countryList.map((x, i) => {
                            return (
                              <p
                                key={i}
                                className="p-3 py-2 hover:bg-stone-200 transition hover:cursor-pointer"
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
                    <div className="mt-2 flex items-center hover:cursor-pointer bg-stone-50 shadow-inner p-2 rounded-lg border border-stone-300 placeholder:text-stone-400 w-fit">
                      <p className={``}>United States of America</p>
                      <FontAwesomeIcon icon={faAngleDown} className="ml-2" />
                    </div>
                  </Tippy>
                </div>
              </div>
            </div>

            <div id="socials" className="mt-6">
              <p className="text-xl font-medium">Socials</p>
              <p className="text-xl text-stone-500">
                Link your social media accounts, and VibeMagnet interviewers
                will be able to see them
                <br />
                when reviewing your applications. Automatic bonus points!
              </p>
              <div className="mt-4 xl:w-1/3 lg:w-1/2 w-full flex flex-col space-y-2">
                {[
                  {
                    icon: faLinkedin,
                    color: "text-blue-500",
                    data: "Ekya Dogra",
                  },
                  {
                    icon: faYoutube,
                    color: "text-red-500",
                    data: "Dogra Man",
                  },
                  {
                    icon: faTwitter,
                    color: "text-sky-500",
                    data: "EkyaRai",
                  },
                  {
                    icon: faSnapchat,
                    color: "text-yellow-600",
                    data: "",
                  },
                  {
                    icon: faGithub,
                    color: "text-black",
                    data: "Module32",
                  },
                  {
                    icon: faGitlab,
                    color: "text-orange-500",
                    data: "",
                  },
                  {
                    icon: faBriefcase,
                    color: "text-stone-500",
                    data: "https://ekya.rai",
                  },
                ].map((x, i) => {
                  return (
                    <div
                      key={i}
                      className="bg-white rounded-lg border border-stone-300 shadow-sm"
                    >
                      <div className="flex items-center">
                        <div className="py-2 w-[50px] flex justify-center items-center border-r border-stone-300">
                          <FontAwesomeIcon
                            icon={x.icon}
                            className={`${x.color} text-xl`}
                          />
                        </div>
                        <input
                          className="bg-stone-100 p-2 flex-1 rounded-r-lg font-mono"
                          defaultValue={x.data}
                          placeholder="Enter a name, tag, link, etc..."
                        />
                      </div>
                    </div>
                  );
                })}

                <button className="bg-white rounded-lg border border-stone-300 shadow-sm hover:scale-[.97] transition">
                  <div className="flex items-center justify-center space-x-2 p-2 font-mono">
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="text-indigo-500"
                    />
                    <p>Add another social</p>
                  </div>
                </button>
              </div>
            </div>

            <div id="danger" className="mt-6">
              <p className="text-xl font-medium">Danger Settings</p>
              <div className="xl:w-[40%] lg:w-1/2 md:w-3/4 w-full outline outline-2 outline-offset-4 rounded-xl outline-red-500">
                <div className="mt-4 border border-stone-300 p-3 rounded-t-xl">
                  <p className="text-lg font-medium">
                    <FontAwesomeIcon
                      icon={faExclamationTriangle}
                      className="text-red-500 mr-2"
                    />
                    Delete your account
                  </p>
                  <p className="text-stone-700">
                    You&apos;ll lose all your job applications, social media
                    collections, and pretty much all your data on VibeMagnet.
                    Proceed with caution!
                  </p>
                </div>

                <div className="border border-t-0 border-stone-300 bg-stone-100 p-3 rounded-b-xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <button className="bg-red-500 rounded-lg p-2 px-3 text-white font-medium hover:scale-[.97] transition">
                      Begin deletion
                    </button>
                    <p className='italic text-stone-600 text-sm'>
                        This action is irreversible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
