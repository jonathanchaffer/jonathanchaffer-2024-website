import { FC, PropsWithChildren } from "react";

export const Card: FC<PropsWithChildren> = (props) => {
  return (
    <div className="bg-bg border border-bg-contrast relative mb-2 mr-2 md:mb-4 md:mr-4">
      {props.children}
      <div className="-z-40 bg-bg border border-bg-contrast absolute w-full h-full top-2 left-2 md:top-4 md:left-4"></div>
    </div>
  );
};
