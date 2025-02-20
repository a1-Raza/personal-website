import React from "react";
import { ReactNode } from "react";
import Link from "next/link";

interface NavbarProps {
  imgUrl?: string;
  children?: ReactNode | ReactNode[];
}

export default function Navbar({ imgUrl, children }: NavbarProps) {
  const navbarImg = () => {
    if (!imgUrl) return <></>;
    return (
      <div className="flex shrink-0 items-center">
        <Link href="/">
          <img className="h-8 w-auto" src={imgUrl} alt="Logo" />
        </Link>
      </div>
    );
  };

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            {navbarImg()}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">{children}</div>
            </div>
          </div>
        </div>
      </div>

      {/*<!-- Mobile menu, show/hide based on menu state. -->*/}
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {/*<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->*/}
          {children}
        </div>
      </div>
    </nav>
  );
}
