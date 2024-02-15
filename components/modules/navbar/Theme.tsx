"use client";

import React from "react";
import useTheme from "@/hooks/useTheme";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { themes } from "@/constants";
import Image from "next/image";

export default function Theme() {
  const { mode, setMode } = useTheme();

  const handlechangeMode = (item: any) => {
    setMode(item.value);

    if (item.value !== "system") {
      localStorage.theme = item.value;
    } else {
      localStorage.removeItem("theme");
    }
  };

  return (
    <Menubar className="relative  border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
          {mode === "light" ? (
            <Image src="/assets/icons/sun.svg" alt="sun" height={20} width={20} className="active-theme" />
          ) : (
            <Image src="/assets/icons/moon.svg" alt="moon" height={20} width={20} className="active-theme" />
          )}
        </MenubarTrigger>
        <MenubarContent className="absolute right-[-3rem] z-50 mt-3 min-w-[120px] rounded border bg-white py-2 dark:border-dark-400 dark:bg-dark-300">
          {themes.map((item) => (
            <MenubarItem key={item.value} onClick={() => handlechangeMode(item)}>
              <Image
                src={item.icon}
                alt={item.value}
                height={16}
                width={16}
                className={`${mode === item.value && "active-theme"}`}
              />
              <p
                className={`body-semibold ml-2 text-light-500 ${
                  mode === item.value ? "text-primary-500" : "text-dark100_light900"
                }`}
              >
                {item.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
