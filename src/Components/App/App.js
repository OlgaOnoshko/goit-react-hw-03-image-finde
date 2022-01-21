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

  // setModalImage = img => {
  //   this.setState({ modalImage: img });
  // }

  handleFormSubmit = (searchField) => {
    this.setState({ searchField });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
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
    const handleFormSubmit = this.handleFormSubmit;
    const toggleModal = this.toggleModal;
    const onLoadMore = this.onLoadMore;

    return (
      <div>
        <Searchbar onSubmit={handleFormSubmit} />
        {this.state.loading && <p>Loading...</p>}
        {this.state.images.length > 0 && (
          <ImageGallery onClick={this.toggleModal} images={images} />
        )}
        {/* {this.state.images.length > 0 && this.state.images.map(image => (<ul>
          <li key={image.id}>
            <img src={image.webformatURL} alt={image.tags} />
          </li>
        </ul>))} */}
        {this.state.images.length === 0 && <p>Nothing found on request</p>}
        {this.state.images.length > 0 &&
          this.state.images.length % 12 === 0 && (
            <LoadMoreBtn onClick={onLoadMore} />
          )}
        {/* //  onClick={ } */}

        {showModal && (
          <Modal onClose={toggleModal}>
            {" "}
            src={modalImage} alt={alt}
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
