import { Component } from "react";
import PropTypes from "prop-types";
// import { nanoid } from 'nanoid';

class Searchbar extends Component {
  state = {
    searchField: "",
  };

  handleSearch = (event) => {
    this.setState({ searchField: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.searchField.trim() === "") {
      alert("Enter search term");
      return;
    }

    this.props.onSubmit(this.state.searchField);
    this.setState({ searchField: "" });
  };

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchField}
            onChange={this.handleSearch}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
