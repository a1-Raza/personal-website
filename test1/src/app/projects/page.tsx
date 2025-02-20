import React from "react";
import ProjectCard from "@/components/project-card";
import Link from "next/link";

export default function ProjectsPage() {
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
      </div>

      <div className="d-flex justify-content-center pt-5 ">
        <ProjectCard
          imgUrl="/vr-setup.png"
          header="Project 1"
          href="/projects/sadasd"
        >
          This is a sample project. Click to open a separate page that has more
          details on the project itself.
        </ProjectCard>
        <ProjectCard
          imgUrl="/vr-setup.png"
          header="Project 2"
          href="/projects/sadasd"
        >
          This is a sample project. Click to open a separate page that has more
          details on the project itself.
        </ProjectCard>
        <ProjectCard
          imgUrl="/vr-setup.png"
          header="Project 3"
          href="/projects/sadasd"
        >
          This is a sample project. Click to open a separate page that has more
          details on the project itself.
        </ProjectCard>
        <ProjectCard
          imgUrl="/vr-setup.png"
          header="Project 4"
          href="/projects/sadasd"
        >
          This is a sample project. Click to open a separate page that has more
          details on the project itself.
        </ProjectCard>
      </div>
    </>
  );
}
