import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
  title: string;
  desc: string;
  link: string;
  linkTitle: string;
}

export default function NoResult({ title, desc, link, linkTitle }: Props) {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center">
      {/* light mode Illustration */}
      <Image
        src="/assets/images/light-illustration.png"
        alt="No result illustration"
        width={270}
        height={200}
        className="block size-auto object-contain dark:hidden"
      />

      {/* dark mode Illustration */}
      <Image
        src="/assets/images/light-illustration.png"
        alt="No result illustration"
        width={270}
        height={200}
        className="hidden size-auto object-contain dark:flex"
      />

      <h2 className="h2-bold text-dark200_light900 mt-8">{title}</h2>
      <p className="body-regular text-dark500_light700 my-3.5 max-w-md text-center">{desc}</p>
      <Link href={link}>
        <Button className="paragraph-medium text-dark100_light900 mt-5 min-h-[46px] rounded-lg bg-primary-500 px-4 py-3">
          {linkTitle}
        </Button>
      </Link>
    </div>
  );
}
