import { FC, PropsWithChildren } from "react";

type Props = {
  noMargin?: boolean;
};

export const PageHeader: FC<PropsWithChildren<Props>> = (props) => {
  return (
    <h1
      className={`text-3xl sm:text-4xl md:text-6xl lg:text-8xl ${
        !props.noMargin && "mb-8"
      }`}
    >
      {props.children}
    </h1>
  );
};
