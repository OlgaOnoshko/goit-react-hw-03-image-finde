import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import { Gallery } from "./ImageGallery.styled";

const ImageGallery = ({ images, setModalImage }) => {
  return (
    <Gallery>
      {images.map((image) => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          setModalImage={setModalImage}
        />
      ))}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
  setModalImage: PropTypes.func.isRequired,
};

export default ImageGallery;
