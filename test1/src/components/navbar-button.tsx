import React from "react";

interface NavbarButtonProps {
  children: string;
  href: string;
}

export default function NavbarButton({ children, href }: NavbarButtonProps) {
  return (
    <a className="nav-link" href={href}>
      {children}
    </a>
  );
}
