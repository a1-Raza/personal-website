export const dynamic = "force-dynamic";

import React from "react";
import ProjectCard from "@/components/project-card";
import Link from "next/link";
import * as actions from "@/actions";
import { db } from "@/db";

export default async function ProjectsPage() {
  const projectCards = await db.projectCard.findMany();

  const renderedProjectCards = projectCards.map((projectCard) => {
    return (
      <ProjectCard
        id={projectCard.id}
        imgUrl={projectCard.imgUrl}
        header={projectCard.name}
        href={`/projects/${projectCard.id}`}
      >
        {projectCard.description} {projectCard.id}
      </ProjectCard>
    );
  });

  return (
    <>
      <div className="flex-column mt-20 text-center">
        <p className="h1">Projects</p>
        <p>
          All can be viewed on my{" "}
          <Link
            href="https://github.com/a1-Raza"
            className="link-primary"
            target="_blank"
          >
            GitHub
          </Link>{" "}
          profile!
        </p>

        {
          <div>
            for debug:
            <form action={actions.createProjectTemplate}>
              <button type="submit">create projects</button>
            </form>
            <form action={actions.deleteAllProjects}>
              <button type="submit">delete projects</button>
            </form>
          </div>
        }
      </div>

      <div
        className="d-flex flex-wrap justify-content-center mt-5 m-auto"
        style={{ maxWidth: "1250px" }}
      >
        {renderedProjectCards}
      </div>
    </>
  );
}
