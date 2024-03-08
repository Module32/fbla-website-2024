"use client";

import SideBar from "@/components/SideBar";
import {
  faArrowLeft,
  faArrowRight,
  faAt,
  faBriefcase,
  faCalendar,
  faCircleDot,
  faHashtag,
  faXmark,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function JobPortal() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [emailContent, setEmailContent] = useState("");

  const exampleApps = [
    {
      jobPos: "Content Marketing Manager",
      firstName: "Brinmeet",
      lastName: "Soin",
      submittedAt: "January 12, 2024",
      status: "Rejected",
    },
    {
      jobPos: "Digital Marketing Specialist",
      firstName: "Brinmeet",
      lastName: "Soin",
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
            <p className="text-3xl font-medium">Home</p>
            <p className="text-xl mt-2 text-stone-500">
              Get an overview of everything, including job applications.
            </p>
          </div>

          <div className="overflow-auto z-[50] px-6 border-b flex items-center space-x-4 whitespace-nowrap font-medium sticky top-[71px] bg-white">
            {[
              {
                name: "Applications",
                goto: "#applications",
              },
              {
                name: "Opportunities",
                goto: "#opportunities",
              },
              {
                name: "Connect With Us",
                goto: "#connectwithus",
              },
              {
                name: "Socials & Connections",
                goto: "#socials",
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
            <div id="applications">
              <p className="text-xl font-medium">Your Applications</p>
              <div className="mt-4 md:block hidden">
                <table className="text-left w-full border-collapse">
                  <tbody>
                    <tr className="border border-stone-300 bg-stone-100">
                      <th className="p-2">Position</th>
                      <th className="p-2">Applicant Name</th>
                      <th className="p-2">Submission Time</th>
                      <th className="p-2">Current Status</th>
                    </tr>
                    {exampleApps.map((x, i) => {
                      return (
                        <tr className="" key={i}>
                          <td className="p-2 border border-stone-300">
                            <p className="border border-indigo-500 p-1 rounded bg-indigo-100 text-indigo-500 w-fit font-medium">
                              {x.jobPos}
                            </p>
                          </td>
                          <td className="p-2 border border-stone-300">
                            <p className="text-sky-500 flex items-center space-x-1">
                              <FontAwesomeIcon icon={faAt} />
                              <span></span>
                              {x.firstName} {x.lastName} <i>(You)</i>
                            </p>
                          </td>
                          <td className="p-2 border border-stone-300">
                            <p className="p-1 rounded bg-stone-200 border border-stone-300 w-fit font-mono flex items-center space-x-2">
                              <FontAwesomeIcon
                                icon={faCalendar}
                                className="text-red-500"
                              />
                              <span>{x.submittedAt}</span>
                            </p>
                          </td>
                          <td
                            className={`p-2 border border-stone-300 ${
                              x.status === "Pending review" && "text-amber-500"
                            }
                          ${x.status === "Rejected" && "text-red-500"}
                          `}
                          >
                            <FontAwesomeIcon
                              icon={
                                x.status === "Pending review"
                                  ? faCircleDot
                                  : x.status === "Rejected"
                                  ? faXmark
                                  : faQuestionCircle
                              }
                              className={`mr-2`}
                            />
                            <span className="font-medium italic">
                              {x.status}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 md:hidden flex flex-col space-y-3">
                {exampleApps.map((x, i) => {
                  return (
                    <div key={i} className="border border-stone-300 p-3 rounded flex flex-col space-y-2 shadow">
                      <p className="space-x-2 flex flex-wrap items-center">
                        <span className="font-medium">Position:</span>
                        <span className="border border-indigo-500 p-1 rounded bg-indigo-100 text-indigo-500 w-fit font-medium">
                          {x.jobPos}
                        </span>
                      </p>

                      <p className="space-x-2 flex flex-wrap items-center">
                        <span className="font-medium">Applicant Name:</span>
                        <span className="text-sky-500 flex flex-wrap items-center gap-1">
                          <FontAwesomeIcon icon={faAt} />
                          {x.firstName} {x.lastName} <i>(You)</i>
                        </span>
                      </p>

                      <p className="space-x-2 flex flex-wrap items-center">
                        <span className="font-medium">Submission Time:</span>
                        <span className="p-1 rounded bg-stone-200 border border-stone-300 w-fit font-mono flex flex-wrap items-center gap-2">
                          <FontAwesomeIcon
                            icon={faCalendar}
                            className="text-red-500"
                          />
                          <span>{x.submittedAt}</span>
                        </span>
                      </p>

                      <p className="space-x-2 flex flex-wrap items-center">
                        <span className="font-medium">Current Status:</span>
                        <span
                          className={`p-2 py-1 border border-stone-300 rounded flex flex-wrap items-center gap-2 ${
                            x.status === "Pending review" && "text-amber-500"
                          }
                          ${x.status === "Rejected" && "text-red-500"}
                          `}
                        >
                          <FontAwesomeIcon
                            icon={
                              x.status === "Pending review"
                                ? faCircleDot
                                : x.status === "Rejected"
                                ? faXmark
                                : faQuestionCircle
                            }
                          />
                          <span className="font-medium italic">{x.status}</span>
                        </span>
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div id="opportunities" className="mt-4">
              <p className="text-xl font-medium">
                Latest Opportunities at VibeMagnet,{" "}
                <span className="text-indigo-500">from our blog</span>
              </p>
              <div className="mt-4">
                <div className="flex flex-wrap gap-4">
                  {blogPosts.map((x, i) => {
                    return (
                      <div key={i} className="flex flex-col w-[400px] shadow-sm hover:scale-[.98] transition hover:cursor-pointer">
                        <div
                          className={`rounded-t-xl h-[200px] overflow-hidden flex flex-col justify-center border`}
                        >
                          <img src={x.image} alt={x.title} />
                        </div>
                        <div className="border border-stone-300 p-3 rounded-b-xl border-t-0">
                          <p className="font-mono text-xs text-stone-500">
                            {x.date} • 5 minute read
                          </p>
                          <p className="text-lg font-medium">{x.title}</p>
                          <p className="text-stone-700">
                            {x.content.split(".")[0] + "."}
                          </p>
                          <div className="mt-2 flex items-center space-x-2">
                            <Image
                              src={x.author.pfp}
                              width={30}
                              height={30}
                              alt={x.author.name}
                              className="rounded-full"
                            />{" "}
                            <p>
                              By{" "}
                              <span className="text-sky-500">
                                {x.author.name}
                              </span>
                            </p>
                          </div>
                          <div className="mt-3">
                            <p className="uppercase text-stone-600 text-xs font-medium">
                              Tags
                            </p>
                            <div className="mt-2 flex flex-wrap gap-1 text-sm">
                              {x.tags.map((x, i) => {
                                return (
                                  <div
                                    key={i}
                                    className={`flex items-center space-x-1 border border-stone-300 bg-gradient-to-br from-sky-100 via-stone-50 to-blue-100 p-1 px-2 rounded italic`}
                                  >
                                    <FontAwesomeIcon
                                      icon={faHashtag}
                                      className="text-sky-500"
                                    />
                                    <p>{x}</p>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div id="connectwithus" className="mt-4">
              <p className="text-xl font-medium">Connect With Us</p>
              <div className="mt-2 w-fit">
                <div className="bg-[conic-gradient(#020617,#1e1b4b,#4c0519)] rounded-2xl">
                  <div className="backdrop-blur-xl p-4 rounded-2xl text-white bg-gradient-to-tr from-indigo-500/20 via-transparent to-fuchsia-400/20">
                    <p className="text-2xl font-medium">
                      Connect with us today!
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {[
                        {
                          icon: faTwitter,
                          data: "@VibeMagnetMarketing",
                        },
                        {
                          icon: faYoutube,
                          data: "VibeMagnet Marketing",
                        },
                        {
                          icon: faLinkedin,
                          data: "VibeMagnet Marketing",
                        },
                      ].map((x, i) => {
                        return (
                          <div
                            key={i}
                            className="bg-slate-950/50 border border-slate-500/50 p-1 px-2 rounded-lg"
                          >
                            <p className="flex items-center space-x-2">
                              <FontAwesomeIcon icon={x.icon} />
                              <span>{x.data}</span>
                            </p>
                          </div>
                        );
                      })}
                    </div>
                    <p className="mt-4 font-medium">Reach out to us</p>
                    <p className="text-white/50">
                      Fields marked with <span className="text-red-500">*</span>{" "}
                      are required.
                    </p>
                    <div className="mt-2 flex items-center space-x-2">
                      <input
                        className="w-1/2 bg-slate-950/40 border border-slate-500/50 rounded-lg p-2 px-3 placeholder:text-white/50 shadow-md"
                        placeholder="First Name"
                        onClick={(e) =>
                          setFirstName((e.target as HTMLInputElement).value)
                        }
                      />
                      <input
                        className="w-1/2 bg-slate-950/40 border border-slate-500/50 rounded-lg p-2 px-3 placeholder:text-white/50 shadow-md"
                        placeholder="Last Name"
                        onClick={(e) =>
                          setLastName((e.target as HTMLInputElement).value)
                        }
                      />
                    </div>
                    <input
                      className="mt-2 w-full bg-slate-950/40 border border-slate-500/50 rounded-lg p-2 px-3 placeholder:text-white/50 shadow-md"
                      placeholder="Email Subject*"
                      onClick={(e) =>
                        setEmailSubject((e.target as HTMLInputElement).value)
                      }
                    />
                    <textarea
                      className="resize-none mt-2 w-full bg-slate-950/40 border border-slate-500/50 rounded-lg p-2 px-3 placeholder:text-white/50 shadow-md"
                      placeholder="Email Content*"
                      onClick={(e) =>
                        setEmailContent((e.target as HTMLInputElement).value)
                      }
                    />
                    <MailTo
                      email={`vibemagnetmarketing@gmail.com`}
                      subject={emailSubject}
                      body={`${emailContent}${
                        firstName ||
                        (lastName && `\n\nSent by ${firstName} ${lastName}`)
                      }`}
                    >
                      <input
                        className="hover:cursor-pointer resize-none mt-2 w-full bg-white text-black rounded-lg p-2 px-3 shadow-md font-medium"
                        type="submit"
                        value="Shoot us an email"
                      />
                    </MailTo>
                  </div>
                </div>
              </div>

              <div id="socials" className="mt-4">
                <p className="mt-4 text-xl font-medium">
                  Your Socials & Connections
                </p>
                <div className="mt-2 w-fit">
                  <div className="bg-[conic-gradient(#f0f9ff,#c7d2fe,#ecfeff)] rounded-2xl border border-sky-200">
                    <div className="backdrop-blur-xl p-4 rounded-2xl bg-gradient-to-tr from-sky-300/20 via-transparent to-fuchsia-400/20">
                      <p className="text-2xl font-medium">
                        It&apos;s great to know you, Ekya. Here are your
                        socials.
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
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
                            icon: faGithub,
                            color: "text-black",
                            data: "Module32",
                          },
                          {
                            icon: faBriefcase,
                            color: "text-stone-500",
                            data: "https://ekya.rai",
                          },
                        ].map((x, i) => {
                          return (
                            <div key={i} className="bg-white/30 border border-indigo-400/50 p-1 px-2 rounded-lg flex items-center space-x-2">
                              <FontAwesomeIcon
                                icon={x.icon}
                                className={`${x.color}`}
                              />
                              <p className="font-mono bg-clip-text text-transparent bg-gradient-to-br from-black to-indigo-700">
                                {x.data}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 p-4 py-3 rounded-xl border border-stone-300 text-stone-600 text-sm">
                    <p>
                      You can edit your socials in{" "}
                      <Link href="/jobportal/settings#socials">
                        <span className="text-sky-500 underline">settings</span>
                      </Link>
                      . Let us know more about you!
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
