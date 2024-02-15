"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

export default function GlobalSearch() {
  const [value, setValue] = useState("");

  return (
    <div className="relative w-full max-w-[600px] max-lg:hidden">
      <div className="background-light800_dark300 relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
        <Image
          src="/assets/icons/search.svg"
          alt="search"
          width={24}
          height={24}
          className="mr-1 cursor-pointer"
        />
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Search Globally..."
          className="no-focus placeholder text-dark400_light700 background-light800_dark400 border-none shadow-none outline-none"
        />
      </div>
    </div>
  );
}
