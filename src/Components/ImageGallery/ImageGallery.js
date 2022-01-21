import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import { Gallery } from "./ImageGallery.styled";

const ImageGallery = ({ images, setModalImage }) => {
  console.log(images);
  return (
    <Gallery>
      {images.map((image) => (
        <ImageGalleryItem
          key={image.id}
          alt={image.tags}
          image={image}
          largeImageURL={image.largeImageURL}
          setModalImage={setModalImage}

          // modalPic={image.largeImageURL}
        />
      ))}
    </Gallery>
  );
};

export default ImageGallery;
