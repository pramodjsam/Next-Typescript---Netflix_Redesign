import { CheckIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import useAuth from "../hooks/useAuth";

function Plans() {
  const { logOut } = useAuth();

  return (
    <div>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="border-b border-white/10 bg-[#141414]">
        <Link href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix"
            width={150}
            height={90}
            className="cursor-pointer object-contain"
          />
        </Link>
        <button
          className="text-lg font-medium hover:underline"
          onClick={logOut}
        >
          Sign Out
        </button>
      </header>
      <main className="pt-28 px-5 max-w-5xl pb-12 transition-all md:px-10">
        <h1 className="mb-3 text-3xl font-medium">
          Choose the plan that's right for you
        </h1>
        <ul>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Watch all you want.
            Ad-free.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Recommendations
            just for you.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Change or cancel
            your plan anytime.
          </li>
        </ul>
        <div className="flex flex-col mt-4 space-y-4">
          <div
            className="flex w-full items-center self-end
          md:w-3/5"
          >
            <div className="planBox">Standard</div>
            <div className="planBox">Standard</div>
            <div className="planBox">Standard</div>
          </div>

          <button>Subscribe</button>
        </div>
      </main>
    </div>
  );
}

export default Plans;
