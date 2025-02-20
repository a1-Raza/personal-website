import React from "react";

interface NavbarButtonProps {
  children: string;
  href: string;
}

export default function NavbarButton({ children, href }: NavbarButtonProps) {
  return (
    <a
      href={href}
      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
    >
      {children}
    </a>
  );
}
