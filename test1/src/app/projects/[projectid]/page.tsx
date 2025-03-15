import React, { Suspense } from "react";
import { db } from "@/db";
import { notFound } from "next/navigation";
import ProjectPageComponent from "@/components/project-page/project-page";

interface Props {
  params: Promise<{ projectid: string }>;
}

export default async function page({ params }: Props) {
  const { projectid } = await params;

  return (
    <Suspense fallback={Placeholder()}>{ProjectDetails(projectid)}</Suspense>
  );
}

async function ProjectDetails(projectid: string) {
  const projectDetails = await db.projectCard.findFirst({
    where: { id: projectid },
  });

  if (!projectDetails) return notFound();
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
}

function Placeholder() {
  return (
    <div className="animate-pulse p-4">
      <div className="h-48 bg-gray-300 rounded-md mb-4"></div>
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
  );
}
