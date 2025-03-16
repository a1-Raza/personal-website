import React, { ReactNode } from "react";
import Link from "next/link";
import { Url } from "url";
import Image from "next/image";

interface ProjectCardProps {
  id: string;
  imgUrl?: string;
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
  const image = () => {
    if (!imgUrl) {
      return <></>;
    }
    return (
      <>
        <Image
          src={imgUrl}
          className="card-img-top w-auto h-auto"
          width={500}
          height={200}
          alt="..."
        />
      </>
    );
  };

  return (
    <div className="card m-3" style={{ width: "500px" }}>
      {image()}
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
