import React, { Component } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { Backdrop, ModalWindow } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Backdrop onClick={this.handleBackdropClick}>
        <ModalWindow>{this.props.children}</ModalWindow>
      </Backdrop>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Modal;
