import { FC, useEffect, useMemo, useRef, useState } from "react";
import Masonry from "react-masonry-css";
import { GalleryItem } from "~/types";

type Props = {
  items: GalleryItem[];
};

export const Gallery: FC<Props> = (props) => {
  const [carouselIndex, setCarouselIndex] = useState<number | null>(null);

  const isDialogOpen = useMemo(() => carouselIndex !== null, [carouselIndex]);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const currentImage = useMemo(
    () => (carouselIndex !== null ? props.items[carouselIndex] : null),
    [carouselIndex, props.items]
  );

  useEffect(() => {
    if (isDialogOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isDialogOpen]);

  return (
    <>
      <Masonry
        className="masonry"
        columnClassName="masonry-column"
        breakpointCols={{ default: 3, 600: 2 }}
      >
        {props.items.map((item, index) => (
          <button
            className="mb-4 border border-bg-contrast"
            key={index}
            onClick={() => setCarouselIndex(index)}
          >
            {item.type === "image" && (
              <img src={item.data.src} alt={item.data.alt} />
            )}
            {item.type === "pdf" && (
              <img src={item.data.thumbnailSrc} alt={item.data.thumbnailAlt} />
            )}
          </button>
        ))}
      </Masonry>
      <dialog ref={dialogRef} className="p-4 flex flex-col gap-4">
        <button className="self-end" onClick={() => setCarouselIndex(null)}>
          Close
        </button>
        {currentImage !== null &&
          ((currentImage.type === "image" && (
            <img src={currentImage.data.src} alt={currentImage.data.alt} />
          )) ||
            (currentImage.type === "pdf" && (
              <embed src={currentImage.data.src} />
            )))}
      </dialog>
    </>
  );
};
