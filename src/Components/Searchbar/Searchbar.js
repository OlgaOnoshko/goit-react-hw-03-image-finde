import { Component } from "react";
import PropTypes from "prop-types";
import IconButton from "../IconButton/IconButton";
import { ReactComponent as SearchIcon } from "../IconButton/search.svg";
import { Form, Header, Input } from "./Searchbar.styled";

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
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <IconButton aria-label="search-button" onClick={this.handleSubmit}>
            <SearchIcon width="15" height="15" />
          </IconButton>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchField}
            onChange={this.handleSearch}
          />
        </Form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
