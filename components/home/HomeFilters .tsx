"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";

interface HomeFiltersProps {
  otherClasses?: string;
  containerClasses?: string;
  items: { name: string; value: string }[];
}

export default function HomeFilters({ items }: HomeFiltersProps) {
  const [active, setActive] = useState("newest");

  const handleFilter = (value: string) => {
    setActive(value);
  };

  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {items.map((item) => (
        <Button
          key={item.name}
          onClick={() => handleFilter(item.value)}
          className={`body-medium cursor-pointer rounded-lg px-6 py-3 capitalize shadow-none ${
            active === item.value
              ? "bg-primary-100 text-primary-500"
              : "bg-light-800 text-light-500  hover:bg-light-700 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-400"
          }`}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
}
