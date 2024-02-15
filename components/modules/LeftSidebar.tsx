"use client";

import React from "react";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "../ui/button";

export default function LeftSidebar() {
  const pathname = usePathname();

  return (
    <section className="background-light900_dark200 light-border border-r shadow-light-400 dark:shadow-none max-sm:hidden sm:w-[65px] lg:w-[266px]">
      <div className="custom-scrollbar sticky left-0 top-0 h-screen overflow-y-auto pt-28 lg:pt-32">
        <div className="flex flex-1 flex-col gap-y-6  lg:gap-x-3">
          {sidebarLinks.map((item) => {
            const isActive =
              (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route;

            return (
              <Link
                key={item.label}
                href={item.route}
                className={`${
                  isActive ? "primary-gradient rounded-lg text-light-900" : "text-dark300_light900"
                }  flex  items-center justify-start bg-transparent p-2  sm:m-auto lg:mx-3`}
              >
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  width={20}
                  height={20}
                  className={`${isActive ? "" : "invert-colors"} lg:mr-3`}
                />
                <span className={`max-lg:hidden ${isActive ? "text-sm font-bold" : "text-sm"}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}

          {/* Not logged User */}
          <SignedOut>
            {/* Log in */}
            <Link
              href="/sign-in"
              className=" text-dark300_light900 flex items-center justify-start rounded-lg bg-zinc-200 dark:bg-zinc-800 sm:mx-auto lg:mx-3"
            >
              <Button className="text-center  lg:min-h-[41px] lg:w-full">
                <Image
                  src="/assets/icons/account.svg"
                  alt="sign-in"
                  width={20}
                  height={20}
                  className="invert-colors lg:hidden"
                />
                <span className="primary-text-gradient inline-block max-lg:hidden">Log In</span>
              </Button>
            </Link>
            {/* Sign up */}
            <Link
              href="/sign-up"
              className=" text-dark300_light900 flex items-center justify-start rounded-lg bg-gray-200 dark:bg-gray-800 sm:mx-auto lg:mx-3"
            >
              <Button className="text-center  lg:min-h-[41px] lg:w-full">
                <Image
                  src="/assets/icons/sign-up.svg"
                  alt="sign-up"
                  width={20}
                  height={20}
                  className="invert-colors lg:hidden"
                />
                <span className="primary-text-gradient inline-block max-lg:hidden">Sign In</span>
              </Button>
            </Link>
          </SignedOut>
        </div>
      </div>
    </section>
  );
}
