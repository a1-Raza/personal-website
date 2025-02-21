"use server";

import { redirect } from "next/navigation";
import { db } from "@/db";

export async function createProjectForm(formData: FormData) {
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const imgUrl = formData.get("imgUrl") as string;

    const projectCard = await db.projectCard.create({
        data: {
          name,
          description,
          imgUrl,
        },
      });
      console.log(projectCard);
  
      redirect("/projects");
}

export async function createProjectTemplate() {
    const projectCard = await db.projectCard.create({
        data: {
          name: "Test Project DB",
          description: "test description",
          imgUrl: "/vr-setup.png",
        },
      });
      console.log(projectCard);
  
      redirect("/projects");
}

export async function createProject(name: string, description: string, imgUrl: string) {
    const projectCard = await db.projectCard.create({
      data: {
        name,
        description,
        imgUrl,
      },
    });
    console.log(projectCard);

    redirect("/projects");
}

export async function editProject(id: string, name: string, description: string, imgUrl: string) {
    await db.projectCard.update({
        where: { id },
        data: { name, description, imgUrl }
    });

    redirect("/projects");
}

export async function deleteProject(id: string) {
    await db.projectCard.delete({
        where: {id}
    });

    redirect("/projects");
}

export async function deleteAllProjects() {
    await db.projectCard.deleteMany();

    redirect("/projects");
}