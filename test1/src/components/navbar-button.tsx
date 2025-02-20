import React from "react";
import Link from "next/link";

interface NavbarButtonProps {
  children: string;
  href: string;
}

export default function NavbarButton({ children, href }: NavbarButtonProps) {
  return (
    <Link className="nav-link" href={href}>
      {children}
    </Link>
  );
}
