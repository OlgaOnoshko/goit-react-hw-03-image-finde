import React from "react";
import { Picture } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({ image, openModal }) => {
  const { webformatURL, tags, id } = image;

  return (
    <li key={id} onClick={openModal}>
      <Picture src={webformatURL} alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;
