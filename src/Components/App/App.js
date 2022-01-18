import { Component } from "react";
import Modal from "../Modal/Modal";
import Searchbar from "../Searchbar/Searchbar";

class App extends Component {
  state = {
    searchField: "",
    showModal: true,
  };

  handleFormSubmit = (searchField) => {
    this.setState({ searchField });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;
    const handleFormSubmit = this.handleFormSubmit;
    const toggleModal = this.toggleModal;

    return (
      <div>
        <Searchbar onSubmit={handleFormSubmit} />
        {showModal && <Modal onClose={toggleModal}>img src="" alt=""</Modal>}
      </div>
    );
  }
}

export default App;
