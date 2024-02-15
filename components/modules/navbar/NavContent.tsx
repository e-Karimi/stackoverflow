"use client";

import React from "react";
import { usePathname } from "next/dist/client/components/navigation";
import Link from "next/link";
import Image from "next/image";
import { SheetClose } from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";

export default function NavContent() {
  const pathname = usePathname();
  return (
    <section className="flex h-full flex-col gap-x-1 gap-y-2 pt-6">
      {sidebarLinks.map((item) => {
        const isActive = (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route;

        return (
          <SheetClose asChild key={item.route}>
            <Link
              href={item.route}
              className={`${
                isActive ? "primary-gradient rounded-lg text-light-900" : "text-dark300_light900"
              } flex items-center justify-start gap-x-2 bg-transparent p-2`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={16}
                height={16}
                className={`${isActive ? "" : "invert-colors"}`}
            />
              <span className={`${isActive ? "text-sm font-bold" : "text-sm"}`}>{item.label}</span>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
}
