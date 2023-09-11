import * as React from "react";

import { Link } from "gatsby";
import Logo from "../content/assets/svgs/logo.svg";

const navRef = React.createRef();

export function Header() {
  const [isSolid, setIsSolid] = React.useState(false);

  const makeSolidNavbarHandler = React.useCallback((e) => {
    e.preventDefault();

    if (window.scrollY >= navRef.current.clientHeight + 50) {
      setIsSolid(true);
    } else {
      setIsSolid(false);
    }
  }, []);

  React.useEffect(() => {
    window.document.addEventListener("scroll", makeSolidNavbarHandler);

    return () =>
      window.document.removeEventListener("scroll", makeSolidNavbarHandler);
  }, [makeSolidNavbarHandler]);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 ${
        isSolid ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="py-5 px-2 max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/">
          <Logo
            aria-label="Main Logo of Website"
            className={`${isSolid ? "text-black" : "text-white"}`}
          />
        </Link>
        <ul className="flex justify-end items-center">
          <NavLink href="/#!" isSolid={isSolid} label="CORPORATE EVENTS" />
          <NavLink href="/#!" isSolid={isSolid} label="GIFTS" />
          <NavLink href="/#!" isSolid={isSolid} label="FAQ" />
          <NavLink href="/#!" isSolid={isSolid} label="CONTACT" isLastNavLink />
        </ul>
      </div>
    </nav>
  );
}

const NavLink = ({ isSolid, label, href, isLastNavLink }) => {
  return (
    <li
      className={`font-semibold text-sm drop-shadow-sm hover:underline ${
        !isLastNavLink && "mr-8"
      } ${isSolid ? "text-black" : "text-white"}`}
    >
      <Link to={href}>{label}</Link>
    </li>
  );
};
