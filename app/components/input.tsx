import { FC, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type Props =
  | ({
      as?: "input";
    } & InputHTMLAttributes<HTMLInputElement>)
  | ({
      as: "textarea";
    } & TextareaHTMLAttributes<HTMLTextAreaElement>);

export const Input: FC<Props> = (props) => {
  const className =
    "p-2 bg-bg border border-bg-contrast text-bg-contrast w-full";

  if (props.as === "textarea") {
    return <textarea className={className} {...props}></textarea>;
  } else {
    return <input className={className} {...props}></input>;
  }
};
