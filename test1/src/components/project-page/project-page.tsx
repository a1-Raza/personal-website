import React from "react";
import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  imgUrl: string;
  href: string;
  header: ReactNode;
  children?: ReactNode | ReactNode[];
}

export default function ProjectPageComponent({
  id,
  imgUrl,
  href,
  header,
  children,
}: Props) {
  return (
    <div className="relative pl-0 pr-0">
      {/*image and text on top*/}
      <div className="absolute -z-10 inset-0">
        <img
          src={imgUrl}
          className="w-auto h-auto"
          style={{ width: "auto", height: "auto" }}
          alt="..."
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 opacity-90" />
      </div>
      <div className="pt-48 flex flex-col justify-center items-center">
        <h1 className="text-white text-6xl pb-10">{header}</h1>
        <p className="text-white text-xl">{children}</p>
      </div>
      {/*content*/}
    </div>
  );
}
