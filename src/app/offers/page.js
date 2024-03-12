"use client";

import Image from "next/image";
import Link from "next/link";
import { jobs } from "../../../lib/globalData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faArrowRight,
  faDollarSign,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/animations/shift-away-subtle.css";

export default function Home() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    continent: "",
    payRange: { min: "", max: "" },
    location: "", // remote, in-person
  });

  const filteredJobs = jobs.filter((x) => {
    return x.name.toLowerCase().includes(search.toLowerCase());
  });

  const changeFilter = ({ key, val }) => {
    const data = { ...filters };

    if (key === "continent") {
      data.continent = val || "";
      setFilters(data);
    } else if (key === "payRange") {
      let changing = val.changing === "max" ? "max" : "min";
      data.payRange[`${changing}`] = val.data || "";
      setFilters(data);
    } else if (key === "location") {
      data.location = val || "";
      setFilters(data);
    }
  };

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  return (
    <main className="flex flex-col items-center">
      <div className="border-x border-stone-300 lg:w-[85%] md:w-[90%] w-full py-8 px-8">
        <div className="flex items-center">
          <div className="flex-1">
            <p className="lg:text-5xl text-4xl font-bold">
              <span className="text-stroke-black text-transparent">
                Job Listings
              </span>
              <br />
              Find a job that{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-600">
                attracts you
              </span>
              ,<br />
              so you can{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-600">
                attract attention
              </span>
              .
            </p>
            <p className="lg:text-2xl md:text-xl lg:flex md:flex hidden mt-4 text-stone-600">
              VibeMagnet is looking for good vibes to hire!
              <br />
              Interested? Check out our open positions below.
            </p>
          </div>

          <div className="ml-auto xl:flex lg:flex hidden">
            <Image
              src={`/offerspage/peoplegathered.jpeg`}
              className="grayscale"
              alt={"People Gathered"}
              width={400}
              height={200}
            />
          </div>
        </div>
      </div>

      <div className="lg:w-[85%] md:w-[90%] w-full backdrop-blur-xl py-2 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-600 text-white uppercase font-medium italic overflow-x-hidden flex space-x-4">
        <div className="py-1 animate-marquee whitespace-nowrap lg:flex hidden space-x-4">
          {new Array(5).fill("").map((x, i) => {
            return (
              <div key={i} className="flex space-x-4">
                <div key={i}>
                  <p>🤑 Good pay</p>
                </div>
                <div key={i}>
                  <p>🛳️ Guaranteed vacations</p>
                </div>
                <div key={i}>
                  <p>💼 Fun workspace</p>
                </div>
                <div key={i}>
                  <p>❤️ Actually have fun</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="py-1 animate-marquee2 whitespace-nowrap lg:flex hidden space-x-4 absolute">
          {new Array(5).fill("").map((x, i) => {
            return (
              <div key={i} className="flex space-x-4">
                <div key={i}>
                  <p>🤑 Good pay</p>
                </div>
                <div key={i}>
                  <p>🛳️ Guaranteed vacations</p>
                </div>
                <div key={i}>
                  <p>💼 Fun workspace</p>
                </div>
                <div key={i}>
                  <p>❤️ Actually have fun</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="whitespace-nowrap overflow-hidden lg:hidden flex space-x-4 w-full justify-center">
          <span>💼 We&apos;re hiring</span>
          <span>💵 Jobs available</span>
        </p>
      </div>

      <div className="bg-white border-x border-b sticky top-[129px] border-stone-300 lg:w-[85%] md:w-[90%] w-full py-3 px-8 h-full flex lg:flex-row md:flex-row flex-col lg:items-center md:items-center lg:space-x-2 md:space-x-2 lg:space-y-0 md:space-y-0 space-y-1 font-mono">
        <p className="">Looking for a specific position?</p>
        <input
          placeholder="Search for a position"
          className="focus:outline-none flex-1 lg:py-0 md:py-0 py-2"
          onChange={(e) => setSearch(e.target.value)}
        />
        <hr className="pb-4 border-stone-300 lg:hidden md:hidden flex" />
        <Tippy
          content={
            <div>
              <div className="flex flex-col space-y-3 p-3">
                <div>
                  <p className="font-mono text-stone-600 flex items-center">
                    <span className="flex-1">Continent</span>
                    <span
                      className="border border-red-500 px-2 rounded-full text-red-500 bg-red-100 hover:scale-[.95] transition hover:cursor-pointer"
                      onClick={() =>
                        changeFilter({ key: "continent", value: "" })
                      }
                    >
                      Clear
                    </span>
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {[
                      "North America",
                      "South America",
                      "Europe",
                      "Africa",
                      "Asia",
                      "Oceania",
                    ].map((x, i) => {
                      return (
                        <div
                          key={i}
                          className={`border font-medium rounded-full px-2 ${
                            filters.continent === x
                              ? "border-sky-600 bg-sky-500 text-white"
                              : "border-stone-400 bg-stone-200 text-stone-600"
                          }
                          hover:scale-[.95] transition hover:cursor-pointer`}
                          onClick={() =>
                            changeFilter({ key: "continent", val: x })
                          }
                        >
                          {x}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <p className="font-mono text-stone-600 flex items-center">
                    <span className="flex-1">Pay Range</span>
                    <span
                      className="border border-red-500 px-2 rounded-full text-red-500 bg-red-100 hover:scale-[.95] transition hover:cursor-pointer"
                      onClick={() => {
                        changeFilter({
                          key: "payRange",
                          val: { changing: "max", data: "" },
                        });
                        changeFilter({
                          key: "payRange",
                          val: { changing: "min", data: "" },
                        });
                      }}
                    >
                      Clear
                    </span>
                  </p>
                  <div className="mt-2">
                    <div className="flex items-center space-x-2">
                      <input
                        className="border border-stone-300 rounded-lg px-2 w-[100px] shadow-inner"
                        placeholder={`Min`}
                        value={filters.payRange.min}
                        onChange={(e) =>
                          changeFilter({
                            key: "payRange",
                            val: { changing: "min", data: e.target.value },
                          })
                        }
                      />
                      <span className="text-stone-600">-</span>
                      <input
                        className="border border-stone-300 rounded-lg px-2 w-[100px] shadow-inner"
                        placeholder={`Max`}
                        value={filters.payRange.max}
                        onChange={(e) =>
                          changeFilter({
                            key: "payRange",
                            val: { changing: "max", data: e.target.value },
                          })
                        }
                      />
                    </div>
                    <p className="mt-3 text-sm">
                      <FontAwesomeIcon
                        icon={faDollarSign}
                        className={`${
                          filters.payRange.min.length > 0 ||
                          filters.payRange.max.length > 0
                            ? "text-green-500"
                            : "text-stone-500"
                        } mr-2`}
                      />
                      {filters.payRange.min.length > 0 ||
                      filters.payRange.max.length > 0
                        ? `Filters applied.`
                        : "No filters applied."}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="font-mono text-stone-600 flex items-center">
                    <span className="flex-1">Location</span>
                    <span
                      className="border border-red-500 px-2 rounded-full text-red-500 bg-red-100 hover:scale-[.95] transition hover:cursor-pointer"
                      onClick={() =>
                        changeFilter({ key: "location", value: "" })
                      }
                    >
                      Clear
                    </span>
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {["Remote", "In-Person"].map((x, i) => {
                      return (
                        <div
                          key={i}
                          className={`border font-medium rounded-full px-2 ${
                            filters.location === x
                              ? "border-sky-600 bg-sky-500 text-white"
                              : "border-stone-400 bg-stone-200 text-stone-600"
                          }
                          hover:scale-[.95] transition hover:cursor-pointer`}
                          onClick={() =>
                            changeFilter({ key: "location", val: x })
                          }
                        >
                          {x}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          }
          interactive={true}
          trigger="click"
          animation="shift-away-subtle"
          placement="bottom-end"
          delay={[0, 0]}
          className="border border-stone-300 bg-white/90 backdrop-blur rounded-lg max-h-[400px] overflow-auto shadow-lg"
        >
          <div>
            <div className="flex items-center border border-stone-300 rounded px-2 py-1 hover:cursor-pointer hover:opacity-60 transition">
              <span>Filters</span>{" "}
              <FontAwesomeIcon
                icon={faAngleDown}
                className="lg:ml-1 md:ml-1 ml-auto"
              />
            </div>
          </div>
        </Tippy>
      </div>

      <div className="bg-gradient-to-br from-rose-50 via-sky-50 to-teal-50 border-x border-stone-300 lg:w-[85%] md:w-[90%] w-full py-8 px-8 h-full">
        {search.length > 0 && (
          <p className="mb-6 text-xl font-medium">
            Searching for{" "}
            <span className="border-b-2 border-sky-500 break-all">
              &quot;{search}&quot;
            </span>
          </p>
        )}

        {(filters.continent.length > 0 ||
          filters.payRange.min.length > 0 ||
          filters.payRange.max.length > 0 ||
          filters.location.length > 0) && (
          <p className="mb-6 text-xl font-medium bg-sky-500 text-white px-2 py-1 rounded-lg w-fit">
            <FontAwesomeIcon
              icon={faExclamation}
              className="ml-2 mr-3 pr-4 border-r border-sky-200"
            />
            Filters have been applied.
          </p>
        )}

        <div className="flex flex-wrap items-stretch gap-4">
          {filteredJobs.map((x, i) => {
            return (
              <div className="xl:w-[18%] lg:w-[23%] md:w-[40%] w-full" key={i}>
                <Link href={`/offers/${x.name.replace(/\s+/g, "-")}`}>
                  <div
                    key={i}
                    className="h-full p-4 border border-stone-300 bg-white hover:bg-indigo-100 hover:border-indigo-500 hover:text-indigo-500 group rounded-xl flex flex-col"
                  >
                    <p className="text-xl font-medium">{x.name}</p>
                    <p className="text-stone-500 group-hover:text-indigo-600 mt-1 flex-1">
                      {x.desc}
                    </p>
                    <div className="font-medium text-indigo-500 mt-2 space-x-2">
                      <p>Learn more</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
          {filteredJobs.length === 0 && (
            <p className="text-stone-700 font-normal">
              Sorry! We couldn&apos;t find any jobs with the search query{" "}
              <span className="border-b-2 border-sky-500 text-black font-medium break-all">
                &quot;{search}&quot;
              </span>
              .
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
