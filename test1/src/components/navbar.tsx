import { ReactNode } from "react";

interface NavbarProps {
  imgUrl?: string;
  children?: ReactNode | ReactNode[];
}

export default function Navbar({ imgUrl, children }: NavbarProps) {
  const navbarImg = () => {
    if (!imgUrl) return <></>;
    return (
      <div className="flex shrink-0 items-center">
        <a href="/">
          <img className="h-6 pr-6 w-auto" src={imgUrl} alt="Logo" />
        </a>
      </div>
    );
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid pl-20">
        {navbarImg()}
        {/*<a className="navbar-brand" href="/">
          Navbar
        </a>
        /*<button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>*/}
        <div className="navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">{children}</div>
        </div>
      </div>
    </nav>
  );
}
