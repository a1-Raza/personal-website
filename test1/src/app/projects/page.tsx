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
        {projectCard.description} {projectCard.id}
      </ProjectCard>
    );
  });

  return renderedProjectCards;
}

function Placeholder(header: string, desc: string) {
  return (
    <ProjectCard
      key=""
      id=""
      imgUrl="/placeholder.svg"
      header={header}
      href={`/projects/`}
    >
      {desc}
    </ProjectCard>
  );
}

function ExampleProjects() {
  return (
    <>
      <ProjectCard
        key="000"
        id="000"
        imgUrl="/vr-setup.png"
        header="name"
        href={`/projects/000`}
      >
        description
      </ProjectCard>
      <ProjectCard
        key="001"
        id="001"
        imgUrl="/placeholder.svg"
        header="name"
        href={`/projects/001`}
      >
        description
      </ProjectCard>
    </>
  );
}
