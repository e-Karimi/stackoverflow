"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

interface LocalSearchbarProps {
  imgSrc: string;
  route: string;
  iconPosition: string;
  placeholder: string;
  otherClasses: string;
}

export default function LocalSearchbar(props: LocalSearchbarProps) {
  const [value, setValue] = useState("");
  // eslint-disable-next-line no-unused-vars
  const { imgSrc, route, iconPosition, placeholder, otherClasses } = props;

  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      {iconPosition === "left" && (
        <Image src={imgSrc} alt="search" width={24} height={24} className="mr-1 cursor-pointer" />
      )}
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder={placeholder}
        className="no-focus placeholder text-dark400_light700 background-light800_dark400 border-none shadow-none outline-none"
      />

      {iconPosition === "right" && (
        <Image src={imgSrc} alt="search" width={24} height={24} className="mr-1 cursor-pointer" />
      )}
    </div>
  );
}
