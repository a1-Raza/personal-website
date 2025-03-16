import React from "react";
import * as actions from "@/actions";

export default function page() {
  return (
    <form action={actions.createProjectForm}>
      <h3 className="font-bold m-3">Project Creator</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12">Name</label>
          <input name="name" className="border rounded p-2 w-full" id="name" />
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
          Create Project
        </button>
      </div>
    </form>
  );
}
