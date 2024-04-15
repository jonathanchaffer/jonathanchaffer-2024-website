import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@remix-run/react";
import { FC } from "react";
import { Container } from "./container";

export const Footer: FC = () => {
  return (
    <footer>
      <Container>
        <div className="py-8 justify-center md:items-end items-center flex-col md:flex-row md:justify-between flex text-xs gap-y-8">
          <div className="flex gap-8">
            <SocialIcon
              href="https://github.com/jonathanchaffer"
              icon={faGithub}
            />
            <SocialIcon
              href="https://twitter.com/jonathanchaffer"
              icon={faTwitter}
            />
            <SocialIcon
              href="https://www.linkedin.com/in/jonathan-chaffer/"
              icon={faLinkedin}
            />
          </div>
          <span>© 2020—{new Date().getFullYear()} Jonathan Chaffer</span>
        </div>
      </Container>
    </footer>
  );
};

const SocialIcon: FC<{ href: string; icon: IconProp }> = ({ href, icon }) => {
  return (
    <Link to={href} target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={icon} size="2xl" />
    </Link>
  );
};
