import { FC, PropsWithChildren } from "react";

export const Container: FC<PropsWithChildren> = (props) => {
  return (
    <div className="w-full flex justify-center px-4 md:px-8 lg:px-16">
      <div className="max-w-screen-xl w-full">{props.children}</div>
    </div>
  );
};
