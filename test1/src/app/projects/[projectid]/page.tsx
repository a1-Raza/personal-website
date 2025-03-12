import React from "react";
import { db } from "@/db";
import { usePathname } from "next/navigation";
import ProjectCard from "@/components/project-card";

export default async function page({ params }: { params: { id: string } }) {
  const projectDetails = await db.projectCard.findUnique({
    where: { id: params.id },
  });

  const renderedDetails = projectDetails?.id;

  return <div>{renderedDetails}</div>;
}
