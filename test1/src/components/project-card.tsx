import React, { ReactNode } from "react";

interface ProjectCardProps {
  imgUrl?: string;
  href?: string;
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
    <div className="card mb-3" style={{ width: "500px" }}>
      <img src={imgUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <a href={href} className="link-body-emphasis text-decoration-underline">
          <p className="card-title h5">{header}</p>
        </a>
        <p className="card-text">{children}</p>
      </div>
    </div>
  );
}
