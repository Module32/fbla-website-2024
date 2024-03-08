import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Custom404() {
  return (
    <main>
      <div className="h-[90vh] flex flex-col items-center justify-center p-4 text-center">
        <p className='font-mono text-stone-700'>Error 404: Page Not Found</p>
        <p className='mt-1 font-medium text-3xl'>
          We&apos;re not getting any<br />good vibes from here.
        </p>
        <p className='mt-3 text-xl font-medium'>
          Looks like you&apos;ve landed in a weird place.<br />
          <Link href='/'>
            <span className='text-sky-500'>Let&apos;s get you back home. <FontAwesomeIcon icon={faArrowRight} className='mr-2' /></span>
          </Link>
        </p>
      </div>
    </main>
  );
}
