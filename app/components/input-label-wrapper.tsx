import { FC, PropsWithChildren } from "react";

type Props = {
  label: string;
};

export const InputLabelWrapper: FC<PropsWithChildren<Props>> = (props) => {
  return (
    <div className="flex flex-col gap-y-1 w-full">
      <label className="text-sm">{props.label}</label>
      {props.children}
    </div>
  );
};
