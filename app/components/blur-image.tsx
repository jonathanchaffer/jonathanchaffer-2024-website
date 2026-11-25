import { useState, type CSSProperties, type ImgHTMLAttributes } from "react";
import type { ImageSource } from "~/image-source";

type Props = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "srcSet" | "width" | "height" | "alt"
> & {
  image: ImageSource;
  alt: string;
};

export function BlurImage({ image, ...props }: Props) {
  // A new source gets fresh loading state, including when React reuses a card.
  return <LoadingImage key={image.src} image={image} {...props} />;
}

function LoadingImage({
  image,
  alt,
  className = "",
  style,
  onLoad,
  onError,
  ...props
}: Props) {
  const [settled, setSettled] = useState(false);
  const frameStyle: CSSProperties = {
    aspectRatio: `${image.width} / ${image.height}`,
    ...style,
  };

  return (
    <span
      className={`relative inline-block overflow-hidden align-middle bg-bg-alt ${className}`}
      style={frameStyle}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 scale-110 blur-lg transition-opacity duration-300 motion-reduce:transition-none"
        style={{
          backgroundImage: `url("${image.placeholder}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: settled ? 0 : 1,
        }}
      />
      <noscript>
        <img
          src={image.src}
          alt={alt}
          width={image.width}
          height={image.height}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </noscript>
      <img
        {...props}
        ref={(element) => {
          // Cached images can finish before hydration attaches onLoad.
          if (element?.complete) setSettled(true);
        }}
        src={image.src}
        alt={alt}
        width={image.width}
        height={image.height}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 motion-reduce:transition-none ${
          settled ? "opacity-100" : "opacity-0"
        }`}
        onLoad={(event) => {
          setSettled(true);
          onLoad?.(event);
        }}
        onError={(event) => {
          // Reveal the native alt text if the full image fails to load.
          setSettled(true);
          onError?.(event);
        }}
      />
    </span>
  );
}
