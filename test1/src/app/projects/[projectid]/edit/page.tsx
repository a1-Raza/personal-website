import React from "react";
import * as actions from "@/actions";
import { Suspense } from "react";
import Link from "next/link";

interface Props {
  params: Promise<{ projectid: string }>; // getting from [projectid]
}

export default async function page({ params }: Props) {
  const { projectid } = await params;

  return (
    <>
      <Suspense fallback={Placeholder()}>
        <form action={actions.editProject}>
          <input type="hidden" name="id" value={projectid} />
          <h3 className="font-bold m-3">Project Creator</h3>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <label className="w-12">Name</label>
              <input
                name="name"
                className="border rounded p-2 w-full"
                id="name"
              />
            </div>

            <div className="flex gap-4">
              <label className="w-12">Desc.</label>
              <textarea
                name="description"
                className="border rounded p-2 w-full"
                id="description"
              />
            </div>

            <div className="flex gap-4">
              <label className="w-12">Img</label>
              <input
                name="imgUrl"
                className="border rounded p-2 w-full"
                id="imgUrl"
              />
            </div>

            <button
              type="submit"
              className="rounded p-2 bg-sky-500 text-white font-medium"
            >
              Update Project
            </button>
            <button
              type="button"
              className="rounded p-2 bg-sky-500 text-white font-medium"
            >
              <Link href="/projects">Cancel Edit</Link>
            </button>
          </div>
        </form>
      </Suspense>
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
