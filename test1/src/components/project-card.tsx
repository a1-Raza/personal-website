import React, { ReactNode } from "react";
import Link from "next/link";
import { Url } from "url";
import Image from "next/image";

interface ProjectCardProps {
  id: string;
  imgUrl: string;
  href: string;
  header: ReactNode;
  children?: ReactNode | ReactNode[];
}

export default function ProjectCard({
  id,
  imgUrl,
  href,
  header,
  children,
}: ProjectCardProps) {
  return (
    <div className="card m-3" style={{ width: "500px" }}>
      <Image
        src={imgUrl}
        className="card-img-top w-auto h-auto"
        width={500}
        height={1000}
        alt="..."
      />
      <div className="card-body">
        <Link
          href={href}
          className="link-body-emphasis text-decoration-underline"
        >
          <p className="card-title h5">{header}</p>
        </Link>
        <p className="card-text">{children}</p>
      </div>
    </div>
  );
}
