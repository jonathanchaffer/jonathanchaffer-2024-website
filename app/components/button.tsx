import { ButtonHTMLAttributes, FC } from "react";
import { LinkStyler, Props as LinkStylerProps } from "./link-styler";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & LinkStylerProps;

export const Button: FC<Props> = (props) => {
  return (
    <button {...props}>
      <LinkStyler {...props}>{props.children}</LinkStyler>
    </button>
  );
};
