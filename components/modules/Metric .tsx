import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  imgUrl: string;
  alt: string;
  value: string | number;
  title: string;
  href?: string;
  textStyle?: string;
  isAuthor?: boolean;
}

export default function Metric(props: Props) {
  const { imgUrl, alt, value, title, href, textStyle, isAuthor } = props;

  const metricContent = (
    <>
      <Image
        src={imgUrl}
        alt={alt}
        width={16}
        height={16}
        className={`object-contain ${href && "rounded-full bg-slate-500"}`} // h-auto w-auto
      />

      <p className={`flex items-center  ${textStyle}`}>
        <span className="mx-1 ">{value}</span>

        <span className={`small-regular line-clamp-1 ${isAuthor && "max-sm:hidden"}`}>{title}</span>
      </p>
    </>
  );

  /* Author is clickable */
  if (href) {
    return (
      <Link href={href} className="flex-center gap-1">
        {metricContent}
      </Link>
    );
  }

  return <div className="flex-center flex-wrap ">{metricContent}</div>;
}
