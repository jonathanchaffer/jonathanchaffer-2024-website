import { FC } from "react";

export const TexturedBg: FC = () => {
  return (
    <div
      className="absolute w-full top-0 bottom-0 bg-gradient-to-b from-bg to-bg-alt -z-50"
      style={{ maskImage: 'url("/texture.svg")' }}
    />
  );
};
