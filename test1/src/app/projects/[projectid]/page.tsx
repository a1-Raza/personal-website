import React from "react";
import { db } from "@/db";
import { usePathname } from "next/navigation";
import ProjectCard from "@/components/project-card";
import { notFound } from "next/navigation";
import ProjectPageComponent from "@/components/project-page/project-page";

interface Props {
  params: {
    projectid: string;
  };
}

export default async function page({ params }: Props) {
  const id = await params.projectid;
  const projectDetails = await db.projectCard.findFirst({
    where: { id },
  });

  const renderedDetails = () => {
    if (!projectDetails) {
      return notFound();
    }
    return (
      <>
        <ProjectPageComponent
          key={projectDetails.id}
          id={projectDetails.id}
          imgUrl={projectDetails.imgUrl}
          header={projectDetails.name}
          href={`/projects/${projectDetails.id}`}
        >
          {projectDetails.description}
        </ProjectPageComponent>
      </>
    );
  };

  return <div>{renderedDetails()}</div>;
}
