import React from "react";
import { Picture } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({ image, setModalImage }) => {
  const { webformatURL, largeImageURL, tags, id } = image;

  return (
    <li key={id} onClick={() => setModalImage(largeImageURL)}>
      <Picture src={webformatURL} alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;
