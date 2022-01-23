import { Component } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Modal from "../Modal/Modal";
import Searchbar from "../Searchbar/Searchbar";
import getImages from "../../service-api/getImages";
import LoadMoreBtn from "../Button/Button";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";

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
      this.setState({ images: [], page: 1 });
      this.fetchPictures();
    }
    if (prevState.page !== this.state.page) {
      this.fetchPictures();
    }
  }

  fetchPictures = () => {
    const { searchField, page } = this.state;
    this.setState({ loading: true });
    getImages(searchField, page)
      .then((res) => {
        const images = res.data.hits.map(
          ({ id, tags, webformatURL, largeImageURL }) => {
            return {
              id,
              tags,
              webformatURL,
              largeImageURL,
            };
          }
        );
        if (searchField.trim().length) {
          this.setState((prevState) => ({
            images: [...prevState.images, ...images],
          }));
          this.scrollDown();
        }
        if (images.length === 0) {
          alert(`Nothing found on request`);
        }
      })
      .catch((err) => {
        return Promise.reject(err(`Nothing found on request`));
      })
      .then(() => {
        this.setState({ loading: false });
      });
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

  onLoadMore = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  scrollDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  render() {
    const { images, showModal, modalImage, alt } = this.state;
    const { handleFormSubmit, setModalImage, toggleModal, onLoadMore } = this;

    return (
      <div>
        <Searchbar onSubmit={handleFormSubmit} />

        {this.state.images.length > 0 && (
          <ImageGallery setModalImage={setModalImage} images={images} />
        )}

        {this.state.loading ? (
          <Loader />
        ) : (
          this.state.images.length > 0 &&
          this.state.images.length % 12 === 0 && (
            <LoadMoreBtn onClick={onLoadMore} />
          )
        )}

        {showModal && (
          <Modal onClose={toggleModal}>
            <img src={modalImage} alt={alt} />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
