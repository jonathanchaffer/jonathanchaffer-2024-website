import { FC, PropsWithChildren, useEffect } from "react";
import { Card } from "./card";

type Props = {
  open: boolean;
  onClose: () => void;
};

export const Dialog: FC<PropsWithChildren<Props>> = (props) => {
  const { onClose } = props;

  useEffect(() => {
    const eventListener = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", eventListener);
    return () => document.removeEventListener("keydown", eventListener);
  }, [onClose]);

  return (
    <button
      className={`fixed inset-0 bg-bg bg-opacity-50 z-50 transition-opacity h-screen flex items-center justify-center ${
        props.open ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={props.onClose}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          props.onClose();
        }
      }}
    >
      <div className="max-h-full p-8">
        <Card>{props.children}</Card>
      </div>
    </button>
  );
};
