import React from "react";
import Image from "next/image";
import ProjectCard from "@/components/project-card";

const links = [
  { name: "About", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Resume", href: "#" },
];

export default function page() {
  return (
    <>
      <div className="relative bg-gray-300">
        <div className="flex justify-center pt-10">
          <Image src="/azazel.png" alt="..." width={200} height={200} />
          <div className="mx-auto max-w-2xl lg:mx-0 pl-10">
            <h2 className="text-5xl font-semibold tracking-tight text-gray-700 sm:text-6xl">
              Abdurrahman Raza
            </h2>
            <p className="mt-5 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat.
            </p>
          </div>
        </div>
        <div className="flex justify-center mx-auto mt-10 pb-5">
          <div className="grid grid-cols-1 gap-x-15 text-white md:flex">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                <p className="font-semibold text-pretty text-gray-700 text-lg">
                  <u>{link.name}</u>
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <ProjectCard href="#" header="fsgaa">
          aaa
        </ProjectCard>
        <ProjectCard href="#" header="fsgaa">
          aaa
        </ProjectCard>
        <ProjectCard href="#" header="fsgaa">
          aaa
        </ProjectCard>
        <ProjectCard href="#" header="fsgaa">
          aaa
        </ProjectCard>
        <ProjectCard href="#" header="fsgaa">
          aaa
        </ProjectCard>
      </div>
    </>
  );
}
