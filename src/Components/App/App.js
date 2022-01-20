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
    // if (images.length === 0) {
    //   alert("Nothing found on request")
    // }

    // fetch(`https://pixabay.com/api/?q=${this.state.searchField}&page=${this.state.page}&key=24374201-4895b5a995aed977e23a40374&image_type=photo&orientation=horizontal&per_page=12`)
    //   .then(result => result.json())
    //   .then(data => data.hits)
    //   .then(hits => this.setState(prevState => ({ images: [...prevState.images, ...hits], page: prevState.page + 1 })))
    //     .finally(this.setState({ loading: false }))
  };

  handleFormSubmit = (searchField) => {
    this.setState({ searchField });
  };

  onOpenModal = (e) => {
    console.log(e.target);
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  onLoadMore = () => {
    this.fetchPictures();
    // this.setState(prevState => ({ page: prevState.page + 1 }))
  };

  render() {
    const { images, showModal, modalImage } = this.state;
    const handleFormSubmit = this.handleFormSubmit;
    const toggleModal = this.toggleModal;
    const onLoadMore = this.onLoadMore;

    return (
      <div>
        <Searchbar onSubmit={handleFormSubmit} />
        {this.state.loading && <p>Loading...</p>}
        {this.state.images.length > 0 && (
          <ImageGallery onClick={this.onOpenModal} images={images} />
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

        {showModal && <Modal onClose={toggleModal}>img src="" alt=""</Modal>}
      </div>
    );
  }
}

export default App;
