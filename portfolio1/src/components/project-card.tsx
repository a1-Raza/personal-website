import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  imgUrl?: string;
  href: string;
  header: ReactNode;
  children?: ReactNode | ReactNode[];
}

export default function ProjectCard({
  imgUrl,
  href,
  header,
  children,
}: ProjectCardProps) {
  return (
    <div className="bg-white shadow-sm rounded-xl overflow-hidden w-[500px] m-3">
      {imgUrl && (
        <Link href={href}>
          <Image
            src={imgUrl}
            className="w-full h-auto object-cover"
            width={500}
            height={200}
            alt="Project Image"
          />
        </Link>
      )}
      <div className="p-5">
        <Link
          href={href}
          className="text-xl font-semibold text-gray-700 underline"
        >
          {header}
        </Link>
        <p className="mt-2 text-gray-500">{children}</p>
      </div>
    </div>
  );
}
