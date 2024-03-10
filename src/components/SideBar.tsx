import {
  faArrowRight,
  faLightbulb,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function SideBar() {
  const links = [
    {
      name: "Home",
      link: "/jobportal",
    },
    {
      name: "Settings",
      link: "/jobportal/settings",
    },
  ];
  return (
    <div className="xl:w-1/6 lg:w-1/5 w-full lg:border-b-0 border-b bg-stone-100 border-r border-stone-300 flex flex-col">
      <div className="sticky top-[129px] flex flex-col">
        <div className="bg-[conic-gradient(#020617,#1e1b4b,#4c0519)]">
          <div className="backdrop-blur-xl p-6 lg:py-6 py-4 font-medium text-white bg-gradient-to-tr from-indigo-500/20 via-transparent to-fuchsia-400/20">
            <p className="text-xl">VibeMagnet Job Portal</p>
            <p className="mt-2 font-light lg:flex hidden">
              Your personal dashboard, for career opportunities and latest news.
            </p>
          </div>
        </div>
        <div className="p-4 lg:py-4 py-1 flex-1">
          <p className="mt-2 text-stone-400 px-2 lg:flex hidden">Navigate to</p>
          <div className="lg:mt-2 text-lg flex lg:flex-col flex-row whitespace-nowrap overflow-auto">
            {links.map((x, i) => {
              return (
                <Link href={x.link} key={i}>
                  <div
                    key={i}
                    className="flex items-center p-2 rounded border border-transparent hover:bg-stone-200 hover:border-stone-300 transition hover:cursor-pointer font-medium"
                  >
                    <span>{x.name}</span>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="lg:ml-auto ml-3 text-indigo-500"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
          <div className='lg:flex flex-col space-y-2 mt-2 hidden'>
            <div className="bg-white border border-stone-300 p-2 rounded shadow">
              <p className="text-sky-500 font-medium">
                <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
                Your Applications
              </p>
              <p className="mt-1 font-medium">1 pending, 1 rejected.</p>
            </div>
            <div className="bg-white border border-stone-300 p-2 rounded shadow">
              <p className="text-amber-500 font-medium">
                <FontAwesomeIcon icon={faLightbulb} className="mr-2" />
                VibeMagnet Tip
              </p>
              <p className="mt-1 font-medium text-lg">
                Stay in tune with our blog posts for job opportunities!
              </p>
              <hr className="my-2.5" />
              <p>
                We post about our latest work on the VibeMagnet blog. You might
                find an interesting opportunity from it!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
