import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@remix-run/react";
import { FC } from "react";
import { strs } from "~/content/strings";
import { Container } from "./container";

export const Footer: FC = () => {
  return (
    <footer>
      <Container>
        <div className="py-8 justify-center md:items-end items-center flex-col md:flex-row md:justify-between flex text-xs gap-y-8">
          <div className="flex gap-8">
            <SocialIcon href={strs.GITHUB_URL} icon={faGithub} />
            <SocialIcon href={strs.LINKEDIN_URL} icon={faLinkedin} />
          </div>
          <span>
            © {new Date().getFullYear()} {strs.JONATHAN_CHAFFER}
          </span>
        </div>
      </Container>
    </footer>
  );
};

const SocialIcon: FC<{ href: string; icon: IconProp }> = ({ href, icon }) => {
  return (
    <Link
      to={href}
      target="_blank"
      rel="noreferrer"
      className="hover:text-primary transition-colors"
    >
      <FontAwesomeIcon icon={icon} size="2xl" />
    </Link>
  );
};
