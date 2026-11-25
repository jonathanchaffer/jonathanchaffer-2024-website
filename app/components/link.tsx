import { Link as RouterLink } from "react-router";
import { FC, PropsWithChildren } from "react";
import { LinkStyler, Props as LinkStylerProps } from "./link-styler";

type Props = {
  to: string;
  openInNewTab?: boolean;
} & LinkStylerProps;

export const Link: FC<PropsWithChildren<Props>> = (props) => {
  return (
    <RouterLink
      to={props.to}
      target={props.openInNewTab ? "_blank" : undefined}
      rel={props.openInNewTab ? "noopener noreferrer" : undefined}
    >
      <LinkStyler {...props}>{props.children}</LinkStyler>
    </RouterLink>
  );
};
