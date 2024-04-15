import { FC } from "react";
import { Container } from "./container";

export const Footer: FC = () => {
  return (
    <footer>
      <Container>
        <div className="py-4 justify-center md:justify-end flex text-xs">
          <span>© 2020—{new Date().getFullYear()} Jonathan Chaffer</span>
        </div>
      </Container>
    </footer>
  );
};
