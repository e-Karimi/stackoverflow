import React from "react";
import Link from "next/link";
import Image from "next/image";
import { hotQuestions, popularTags } from "@/constants/index";
import RenderTag from "@/components/modules/RenderTag";

export default function RightSidebar() {
  return (
    <section className="background-light900_dark200 light-border w-[300px] border-l border-slate-100 px-6 shadow-light-400  dark:shadow-none max-xl:hidden">
      <div className="custom-scrollbar sticky right-0 top-0 h-screen overflow-y-auto pt-28 lg:pt-32">
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col  gap-[30px]">
          {/* Top questions */}
          {hotQuestions.map((question) => (
            <Link
              href={`/question/${question._id}`}
              key={question._id}
              className="mr-1  flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">{question.title}</p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}

          {/* Popular tags */}
          <div className="mt-8">
            <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
            <div className="mt-7 flex flex-col gap-4">
              {popularTags.map((tag) => (
                <RenderTag key={tag._id} {...tag} showCount />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
