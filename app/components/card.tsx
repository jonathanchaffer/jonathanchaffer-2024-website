import { FC, PropsWithChildren } from "react";

export const Card: FC<PropsWithChildren> = (props) => {
  return (
    <div className="bg-bg border border-bg-contrast p-4 relative mb-4 mr-4">
      {props.children}
      <div className="-z-40 bg-bg border border-bg-contrast absolute w-full h-full top-4 left-4"></div>
    </div>
  );
};
