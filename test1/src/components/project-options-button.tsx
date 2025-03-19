import React from "react";
import { deleteProject } from "@/actions";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

interface Props {
  projectid: string;
}

export default function ProjectOptionsButton({ projectid }: Props) {
  return (
    <Menu>
      <MenuButton>
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="M5 7h14M5 12h14M5 17h14"
          />
        </svg>
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-20 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <p className="block px-2 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
              Edit
            </p>
          </MenuItem>
          <MenuItem>
            <form action={deleteProject}>
              <input type="hidden" name="id" value={projectid} />
              <button
                className="block px-2 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                type="submit"
              >
                Delete
              </button>
            </form>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
