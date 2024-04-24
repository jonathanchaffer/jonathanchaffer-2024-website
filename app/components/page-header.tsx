import { FC, PropsWithChildren } from "react";

type Props = {
  noMargin?: boolean;
};

export const PageHeader: FC<PropsWithChildren<Props>> = (props) => {
  return (
    <h1
      className={`text-2xl sm:text-4xl md:text-6xl lg:text-8xl whitespace-nowrap ${
        !props.noMargin && "mb-8"
      }`}
    >
      {props.children}
    </h1>
  );
};
