import { FC, useCallback, useMemo, useState } from "react";
import Masonry from "react-masonry-css";
import { GalleryItem } from "~/types";
import { Dialog } from "./dialog";

type Props = {
  items: GalleryItem[];
};

export const Gallery: FC<Props> = (props) => {
  const [carouselIndex, setCarouselIndex] = useState<number | null>(null);

  const isDialogOpen = useMemo(() => carouselIndex !== null, [carouselIndex]);
  const closeDialog = useCallback(() => setCarouselIndex(null), []);

  const currentImage = useMemo(
    () => (carouselIndex !== null ? props.items[carouselIndex] : null),
    [carouselIndex, props.items]
  );

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
      <Dialog open={isDialogOpen} onClose={closeDialog}>
        {currentImage !== null &&
          ((currentImage.type === "image" && (
            <img src={currentImage.data.src} alt={currentImage.data.alt} />
          )) ||
            (currentImage.type === "pdf" && (
              <embed src={currentImage.data.src} />
            )))}
      </Dialog>
    </>
  );
};
