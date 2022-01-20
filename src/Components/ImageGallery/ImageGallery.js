import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import { Gallery } from "./ImageGallery.styled";

const ImageGallery = ({ images, openModal }) => {
  return (
    <Gallery>
      {images.map((image) => (
        <ImageGalleryItem
          openModal={openModal}
          key={image.id}
          image={image}
          modalPic={image.largeImageURL}
        />
      ))}
    </Gallery>
  );
};

export default ImageGallery;
