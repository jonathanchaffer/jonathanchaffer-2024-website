import {
  FC,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

type TransitionStage = "entering" | "exiting";

export const Fade: FC<PropsWithChildren> = (props) => {
  const [displayedChildren, setDisplayedChildren] = useState<ReactNode>(
    props.children
  );

  const [transitionStage, setTransitionStage] =
    useState<TransitionStage>("entering");

  const isClient = typeof window !== "undefined";
  const scrollY = isClient ? window.scrollY : 0;
  const scrollX = isClient ? window.scrollX : 0;

  useLayoutEffect(() => {
    if (!isClient) return;
    window.scrollTo(scrollX, scrollY);
  });

  useEffect(() => {
    if (props.children !== displayedChildren) {
      setTransitionStage("exiting");
    }
  }, [props.children, displayedChildren]);

  const handleTransitionEnd = useCallback(() => {
    if (transitionStage === "exiting") {
      setDisplayedChildren(props.children);
      setTransitionStage("entering");
      if (isClient) {
        window.scrollTo(0, 0);
      }
    }
  }, [isClient, props.children, transitionStage]);

  return (
    <div
      className={`${
        transitionStage === "exiting"
          ? "opacity-0 translate-y-2"
          : "opacity-100 translate-y-0"
      } transition-all`}
      onTransitionEnd={handleTransitionEnd}
    >
      {displayedChildren}
    </div>
  );
};
