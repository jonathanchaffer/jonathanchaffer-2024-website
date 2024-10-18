import { FC, PropsWithChildren } from "react";

export type Props = {
  direction?: "left" | "right";
  size?: "regular" | "large";
};

export const LinkStyler: FC<PropsWithChildren<Props>> = (props) => {
  return (
    <span
      className={`underline decoration-primary underline-offset-4 hover:decoration-bg-contrast transition-colors ${
        props.size === "large" ? "text-xl md:text-2xl lg:text-4xl" : ""
      }`}
    >
      {props.direction === "left" && <>← </>}
      {props.children}
      {(props.direction === "right" || props.direction === undefined) && (
        <> →</>
      )}
    </span>
  );
};
