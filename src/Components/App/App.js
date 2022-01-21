import { Component } from "react";
// import axios from 'axios';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Modal from "../Modal/Modal";
import Searchbar from "../Searchbar/Searchbar";
import getImages from "../../service-api/getImages";
import LoadMoreBtn from "../Button/Button";
import ImageGallery from "../ImageGallery/ImageGallery";
// import LoadMoreBtn from '../Button/Button'
// import { nanoid } from "nanoid";

class App extends Component {
  state = {
    searchField: "",
    images: [],
    showModal: false,
    page: 1,
    loading: false,
    modalImage: "",
    alt: "",
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchField !== this.state.searchField) {
      this.setState({ images: [] });
      this.fetchPictures();
    }
  }

  fetchPictures = () => {
    const { searchField, page, images } = this.state;
    this.setState({ loading: true });
    getImages(searchField, page)
      .then((res) => {
        const images = res.data.hits;
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }));
      })
      .catch((err) => {
        // console.log(`Nothing found on request`);
        return Promise.reject(err(`Nothing found on request`));
      });

    this.setState({ loading: false });
  };

  handleFormSubmit = (searchField) => {
    this.setState({ searchField });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  setModalImage = (largeImageURL) => {
    this.setState({ modalImage: largeImageURL });
    this.toggleModal();
  };

  // варіант причепитись до картинки
  // setModalImage = (e) => {
  //   console.log(e.target);
  // setState
  // };

  onLoadMore = () => {
    this.fetchPictures();
    // this.setState(prevState => ({ page: prevState.page + 1 }))
  };

  render() {
    const { images, showModal, modalImage, alt } = this.state;
    const { handleFormSubmit, setModalImage, toggleModal, onLoadMore } = this;

    return (
      <div>
        <Searchbar onSubmit={handleFormSubmit} />
        {this.state.loading && <p>Loading...</p>}
        {this.state.images.length > 0 && (
          <ImageGallery onClick={setModalImage} images={images} />
        )}
        {this.state.images.length === 0 && <p>Nothing found on request</p>}
        {this.state.images.length > 0 &&
          this.state.images.length % 12 === 0 && (
            <LoadMoreBtn onClick={onLoadMore} />
          )}
        {showModal && (
          <Modal onClose={toggleModal}>
            src={modalImage} alt={alt}
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
