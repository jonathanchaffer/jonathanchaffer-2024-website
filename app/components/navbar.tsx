import { NavLink } from "@remix-run/react";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import { $path } from "remix-routes";
import { strs } from "~/content/strings";
import { Container } from "./container";

export const Navbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full top-0 z-50 border-b transition-all ${
        isScrolled
          ? "py-4 border-bg-contrast backdrop-blur-xl bg-bg/75 shadow-md"
          : "py-8 border-transparent bg-bg"
      }`}
    >
      <Container>
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-x-8 gap-y-2">
          <NavLink to={$path("/")} className="text-2xl whitespace-nowrap">
            {({ isActive }) =>
              isActive ? (
                <>
                  <div className="bg-bg-contrast w-4 aspect-square hidden md:block" />
                  <span className="sm:hidden">{strs.JONATHAN_CHAFFER}</span>
                </>
              ) : (
                <span>{strs.JONATHAN_CHAFFER}</span>
              )
            }
          </NavLink>
          <div className="flex gap-4 md:gap-4">
            <NavbarLink to={$path("/")}>{strs.HOME}</NavbarLink>
            <NavbarLink to={$path("/work")}>{strs.WORK}</NavbarLink>
            <NavbarLink to={"/resume.pdf"} openInNewTab>
              Resume
            </NavbarLink>
            <NavbarLink to={$path("/contact")}>{strs.CONTACT}</NavbarLink>
          </div>
        </div>
      </Container>
    </div>
  );
};

const NavbarLink: FC<
  PropsWithChildren<{ to: string; openInNewTab?: boolean }>
> = (props) => {
  return (
    <NavLink
      to={props.to}
      target={props.openInNewTab ? "_blank" : undefined}
      rel={props.openInNewTab ? "noopener noreferrer" : undefined}
      className={({ isActive }) =>
        `md:px-4 py-2 border text-xs md:text-base ${
          isActive ? "border-bg-contrast px-2" : "border-transparent"
        }`
      }
    >
      {props.children}
    </NavLink>
  );
};
