import { FC, PropsWithChildren } from "react";

export const Container: FC<PropsWithChildren> = (props) => {
  return (
    <div className="w-full flex justify-center px-4 sm:px-8 md:px-16">
      <div className="max-w-screen-xl w-full">{props.children}</div>
    </div>
  );
};
