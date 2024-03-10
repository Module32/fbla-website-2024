"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faBriefcase,
  faEarthAmericas,
  faHouseLaptop,
  faMoneyBillWave,
  faPlane,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { jobs, continents } from "../../../../lib/globalData";

export default function Home() {
  const params = useParams();
  const jobName = params.job;
  const job = jobs.find((x) => {
    return x.name === jobName.replace(/-/g, " ");
  });

  return (
    <main className="flex flex-col items-center">
      {job && (
        <div className="lg:w-[85%] md:w-[90%] w-full">
          <div className="z-10 sticky top-[129px] py-2 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-600 text-white uppercase font-normal italic overflow-x-hidden flex space-x-4">
            <div className="py-1 animate-marquee whitespace-nowrap flex space-x-4">
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

            <div className="py-1 animate-marquee2 whitespace-nowrap flex space-x-4 absolute">
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
          </div>

          <div className="">
            <div className="flex lg:flex-row flex-col">
              <div className="lg:basis-3/4 border-x border-stone-300">
                <div className="py-8 px-8">
                  <div className="w-fit">
                    <Link href="/offers">
                      <p className="text-sky-500 flex items-center space-x-2">
                        <FontAwesomeIcon icon={faArrowLeft} />{" "}
                        <span className="text-2xl">Back to open positions</span>
                      </p>
                    </Link>
                  </div>
                  <div className="flex lg:flex-row md:flex-row flex-col lg:items-center md:items-center">
                    <p className="mt-4 text-black font-bold lg:text-5xl text-4xl flex-1">
                      {job.name}
                    </p>
                    <div className="w-fit">
                      <Link href={`/apply?pos=${job.name.split(' ').join('-')}`}>
                        <div className="mt-4 hover:scale-[.95] transition duration-300 bg-gradient-to-r from-[#FF85A7] via-[#FF3E41] to-[#DE2B76] p-2 px-4 text-white font-medium rounded-lg flex items-center space-x-2 w-fit text-2xl">
                          <p>Apply today.</p>
                          <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                      </Link>
                    </div>
                  </div>

                  <hr className="my-6 border-stone-300" />

                  <p className="font-medium lg:text-3xl text-2xl">Summary</p>
                  <p className="mt-4 text-stone-600 lg:text-2xl text-xl font-light lg:w-[90%]">
                    {job.desc}
                  </p>

                  <hr className="my-6 border-stone-300" />

                  <p className="font-medium lg:text-3xl text-2xl">Requirements</p>
                  <ul className="mt-4 flex flex-col space-y-2 list-disc list-inside">
                    {job.requirements.map((x, i) => {
                      return (
                        <li key={i} className="text-stone-600 lg:text-2xl text-xl font-light">
                          {x}
                        </li>
                      );
                    })}
                  </ul>

                  <hr className="my-6 border-stone-300" />

                  <p className="font-medium lg:text-3xl text-2xl">Available in...</p>
                  <div className="mt-4 flex flex-wrap lg:gap-4 md:gap-3 gap-2">
                    {continents.map((x, i) => {
                      return (
                        <p
                          className="lg:text-2xl text-xl font-light bg-sky-500 text-white px-1.5 py-1 rounded flex items-center"
                          key={i}
                        >
                          <FontAwesomeIcon
                            icon={x.icon}
                            className="text-sky-100 mr-2"
                          />
                          {x.name}
                        </p>
                      );
                    })}
                  </div>

                  <hr className="my-6 border-stone-300" />

                  <div className="bg-[radial-gradient(#e0e7ff_0%,#f3e8ff_40%,rgba(255,255,255,0.00)_80%)]">
                    <p className="font-medium lg:text-3xl text-2xl">
                      Don&apos;t take our word!
                    </p>
                    <p className="lg:w-[90%] mt-4 lg:text-2xl text-xl bg-clip-text text-transparent bg-gradient-to-br from-stone-900 to-slate-500">
                      <span className="lg:text-4xl text-3xl font-bold italic mr-2.5 text-indigo-500">
                        &quot;
                      </span>
                      {job.quote.text}
                      <span className="text-indigo-500 font-bold">&quot;</span>
                    </p>
                    <div className="mt-4 flex items-center space-x-3">
                      <Image
                        src={job.quote.image}
                        width={40}
                        alt={job.quote.text}
                        height={40}
                        className="rounded-full"
                      />
                      <p className="font-medium text-stone-600">
                        {job.quote.by}{" "}
                        <span className="font-light">VibeMagnet employee</span>
                        <br />
                        <span className="text-xs font-light">
                          With us since {job.quote.withUsSince}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[url('/bgs/svg1.svg')] bg-cover bg-center border-t border-stone-300">
                  <div className="py-8 px-8 bg-white/50">
                    <p className="font-semibold text-3xl">
                      Love how this job sounds?
                      <br />
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF85A7] via-[#FF3E41] to-[#DE2B76]">
                        It&apos;ll be even better once you have it.
                      </span>
                    </p>
                    <div className="w-fit">
                      <Link href="/apply">
                        <div className="mt-4 hover:scale-[.95] transition duration-300 bg-gradient-to-r from-[#FF85A7] via-[#FF3E41] to-[#DE2B76] p-2 px-4 text-white font-medium rounded-lg flex items-center space-x-2 w-fit text-2xl">
                          <p>Apply today.</p>
                          <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:basis-1/4 border-x lg:border-l-0 lg:border-t-0 border-t border-stone-300 py-8 px-8 bg-stone-50">
                <div className="sticky top-[200px]">
                  <p className="mt-4 text-3xl font-medium text-twine-500">
                    Perks with every job.
                    <br />
                    That&apos;s our guarantee.
                  </p>
                  <div className="mt-4 flex flex-col space-y-3">
                    {[
                      {
                        name: "Amazing community of coworkers and staff",
                        icon: faUsers,
                      },
                      {
                        name: "Driven work ethic rewarded with success",
                        icon: faBriefcase,
                      },
                      {
                        name: "Flexibility for working at home or in our offices",
                        icon: faHouseLaptop,
                      },
                      {
                        name: "Sweet, sweet salaries paying six figures",
                        icon: faMoneyBillWave,
                      },
                      {
                        name: "Guaranteed vacation and rest days",
                        icon: faPlane,
                      },
                    ].map((x, i) => {
                      return (
                        <div
                          key={i}
                          className="text-twine-500 flex items-center space-x-2"
                        >
                          <FontAwesomeIcon icon={x.icon} />
                          <p>{x.name}</p>
                        </div>
                      );
                    })}
                  </div>
                  <p className="mt-4 text-stone-400 text-xl font-light">
                    <span className="font-medium">VibeMagnet</span>
                    <br />
                    Attract attention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
