"use client";

import Tippy from "@tippyjs/react";
import "tippy.js/animations/shift-away-subtle.css";
import { navbarLinks } from "../../../lib/navbarLinks";
import Link from "next/link";

export default function LinksMenu() {
  return (
    <Tippy
      content={
        <div>
          <div className="py-2 p-3 rounded-t-lg bg-stone-100 border-b border-stone-300">
            <p className="font-mono text-stone-600">Links</p>
          </div>
          <div className='py-2 p-3'>
            {navbarLinks.map((x, i) => {
                return <Link href={x.link} key={i}>
                    <p className='text-lg py-2 hover:text-indigo-500 transition'>{x.name}</p>
                </Link>
            })}
          </div>
        </div>
      }
      animation="shift-away-subtle"
      placement="bottom-end"
      delay={[0, 0]}
      className="border border-stone-300 bg-white/90 backdrop-blur rounded-lg w-[200px] shadow-lg"
      trigger="click"
      interactive={true}
    >
      <div className="rotate-90 border border-stone-400 hover:border-indigo-500 hover:text-indigo-500 transition hover:cursor-pointer p-1 pb-1.5 pr-1.5 rounded flex">
        {new Array(3).fill("|").map((x, i) => {
          return (
            <p key={i} className="ml-0.5">
              {x}
            </p>
          );
        })}
      </div>
    </Tippy>
  );
}
