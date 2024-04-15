import { NavLink } from "@remix-run/react";
import { FC, PropsWithChildren } from "react";
import { $path } from "remix-routes";
import { Container } from "./container";

export const Navbar: FC = () => {
  return (
    <div className="sticky top-0 py-8 z-50 bg-bg/95 backdrop-blur-lg">
      <Container>
        <div className="flex justify-between items-center">
          <NavLink to={$path("/")} className="text-2xl">
            {({ isActive }) =>
              isActive ? (
                <div className="bg-bg-contrast w-4 aspect-square" />
              ) : (
                "Jonathan Chaffer"
              )
            }
          </NavLink>
          <div className="flex gap-4">
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
        `px-4 py-2 border ${
          isActive ? "border-bg-contrast" : "border-transparent"
        }`
      }
    >
      {props.children}
    </NavLink>
  );
};
