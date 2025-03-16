"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/db";

export async function redirectTo() {
  redirect("/projects/create");
}

export async function createProjectForm(formData: FormData) {
    let name = formData.get("name") as string;
    if (!name) name = "Untitled";

    let description = formData.get("description") as string;
    if (!description) description = "...";

    let imgUrl = formData.get("imgUrl") as string;
    if (!imgUrl) imgUrl = "/placeholder.svg";

    createProject(name, description, imgUrl)

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
  
      revalidatePath("/projects");
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
}

export async function editProject(id: string, name: string, description: string, imgUrl: string) {
    await db.projectCard.update({
        where: { id },
        data: { name, description, imgUrl }
    });
}

export async function deleteProject(id: string) {
    await db.projectCard.delete({
        where: {id}
    });

    revalidatePath("/projects");
}

export async function deleteAllProjects() {
    await db.projectCard.deleteMany();

    revalidatePath("/projects");
}