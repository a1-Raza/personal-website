import React, { ReactNode, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import ProjectOptionsButton from "./project-options-button";

interface ProjectCardProps {
  id: string;
  imgUrl?: string;
  href: string;
  header: ReactNode;
  children?: ReactNode | ReactNode[];
  isPlaceholder?: boolean;
}

export default function ProjectCard({
  id,
  imgUrl,
  href,
  header,
  children,
  isPlaceholder,
}: ProjectCardProps) {
  const image = () => {
    if (!imgUrl) {
      return <></>;
    }
    return (
      <>
        <Link href={href}>
          <Image
            src={imgUrl}
            className="card-img-top w-auto h-auto"
            width={500}
            height={200}
            alt="..."
          />
        </Link>
      </>
    );
  };

  async function projectButton() {
    if (isPlaceholder) return <></>;
    return (
      <>
        <Suspense fallback={<></>}>
          <ProjectOptionsButton projectid={id} />
        </Suspense>
      </>
    );
  }

  return (
    <div className="card m-3" style={{ width: "500px" }}>
      {image()}
      <div className="card-body">
        <div className="d-flex justify-content-between m-auto">
          <Link
            href={href}
            className="link-body-emphasis text-decoration-underline"
          >
            <p className="card-title h5">{header}</p>{" "}
          </Link>
          {projectButton()}
        </div>
        <p className="card-text">{children}</p>
      </div>
    </div>
  );
}
