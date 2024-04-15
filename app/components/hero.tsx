import { FC, PropsWithChildren } from "react";
import { TexturedBg } from "./textured-bg";

export const Hero: FC<PropsWithChildren> = (props) => {
  return (
    <div className="min-h-screen relative flex items-center">
      {props.children}
      <TexturedBg />
    </div>
  );
};
