import React, { Suspense } from "react";
import ProjectCard from "@/components/project-card";
import Link from "next/link";
import * as actions from "@/actions";
import { db } from "@/db";
import { notFound } from "next/navigation";

export default async function ProjectsPage() {
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

        <div className="pt-3 d-flex justify-content-center">
          <form action={actions.redirectTo}>
            <button
              className="p-1 bg-sky-500 rounded text-white font-medium m-2"
              type="submit"
            >
              Create New
            </button>
          </form>
          <form action={actions.createProjectTemplate}>
            <button
              className="p-1 bg-sky-500 rounded text-white font-medium m-2"
              type="submit"
            >
              Create Template
            </button>
          </form>
          <form action={actions.deleteAllProjects}>
            <button
              className="p-1 bg-sky-500 rounded text-white font-medium m-2"
              type="submit"
            >
              Delete All
            </button>
          </form>
        </div>
      </div>

      <div
        className="d-flex flex-wrap justify-content-center mt-4 m-auto"
        style={{ maxWidth: "1250px" }}
      >
        <Suspense fallback={Placeholder("Loading...", "Loading...")}>
          {LoadedProjects()}
        </Suspense>
      </div>
    </>
  );
}

async function LoadedProjects() {
  const projectCards = await db.projectCard.findMany();
  if (!projectCards) return notFound();
  if (!projectCards.length)
    return Placeholder(
      "No Projects Available",
      "This user doesn't have projects yet. Check back another time!"
    );

  const renderedProjectCards = projectCards.map((projectCard) => {
    return (
      <ProjectCard
        key={projectCard.id}
        id={projectCard.id}
        imgUrl={projectCard.imgUrl}
        header={projectCard.name}
        href={`/projects/${projectCard.id}`}
      >
        {projectCard.description}
      </ProjectCard>
    );
  });

  return renderedProjectCards;
}

function Placeholder(header: string, desc: string) {
  return (
    <ProjectCard key="" id="" header={header} href={`/projects/`}>
      {desc}
    </ProjectCard>
  );
}
