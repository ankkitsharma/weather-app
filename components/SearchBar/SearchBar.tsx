"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function SearchBar({ locationSet }: { locationSet: boolean }) {
  return (
    <div className={twMerge("text-center mt-5 flex justify-center")}>
      <form>
        {!locationSet && (
          <label
            className={twMerge(
              " mb-3 text-4xl text-gray-900 flex items-center animate-slide-in"
            )}
          >
            Type the city you want to search{" "}
            <Image
              width="30"
              height="30"
              src="https://img.icons8.com/ios-filled/50/long-arrow-down.png"
              alt="long-arrow-down"
              className="ml-4 motion-safe:animate-bounce transform"
            />
          </label>
        )}
        <input
          type="search"
          placeholder="Search..."
          name="search"
          className=" h-10 hover:border-2 hover:border-gray-900 focus:border-2 focus-within:border-gray-900 focus:outline-none rounded-lg p-2  w-[20rem] sm:w-[35rem] md:w-[45rem] lg:w-[55rem] bg-gray-100 dark:bg-gray-600 bg-opacity-50 dark:bg-opacity-50 backdrop-blur-md backdrop-filter placeholder-slate-700"
        ></input>
      </form>
    </div>
  );
}
