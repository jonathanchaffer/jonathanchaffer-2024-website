import { NavLink } from "@remix-run/react";
import { FC, PropsWithChildren } from "react";
import { $path } from "remix-routes";
import { strs } from "~/content/strings";
import { Container } from "./container";

export const Navbar: FC = () => {
  return (
    <div className="sticky top-0 py-8 z-50 bg-bg/95 backdrop-blur-lg">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-x-8 gap-y-2">
          <NavLink to={$path("/")} className="text-2xl whitespace-nowrap">
            {({ isActive }) =>
              isActive ? (
                <>
                  <div className="bg-bg-contrast w-4 aspect-square hidden sm:block" />
                  <span className="sm:hidden">{strs.JONATHAN_CHAFFER}</span>
                </>
              ) : (
                <span>{strs.JONATHAN_CHAFFER}</span>
              )
            }
          </NavLink>
          <div className="flex gap-2 md:gap-4">
            <NavbarLink to={$path("/work")}>Work</NavbarLink>
            <NavbarLink to={$path("/resume")}>Resume</NavbarLink>
            <NavbarLink to={$path("/contact")}>Contact</NavbarLink>
          </div>
        </div>
      </Container>
    </div>
  );
};

const NavbarLink: FC<PropsWithChildren<{ to: string }>> = (props) => {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) =>
        `px-2 sm:px-4 py-2 border text-xs md:text-base ${
          isActive ? "border-bg-contrast" : "border-transparent"
        }`
      }
    >
      {props.children}
    </NavLink>
  );
};
