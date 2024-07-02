import { Link as RemixLink } from "@remix-run/react";
import { FC, PropsWithChildren } from "react";

type Props = {
  to: string;
  openInNewTab?: boolean;
  direction?: "left" | "right";
};

export const Link: FC<PropsWithChildren<Props>> = (props) => {
  return (
    <RemixLink
      to={props.to}
      className="underline decoration-primary underline-offset-4 hover:decoration-bg-contrast transition-colors"
      target={props.openInNewTab ? "_blank" : undefined}
      rel={props.openInNewTab ? "noopener noreferrer" : undefined}
    >
      {props.direction === "left" && <>← </>}
      {props.children}
      {(props.direction === "right" || props.direction === undefined) && (
        <> →</>
      )}
    </RemixLink>
  );
};
