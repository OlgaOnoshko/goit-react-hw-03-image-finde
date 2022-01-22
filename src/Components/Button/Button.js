import React from "react";
import PropTypes from "prop-types";
import { Button } from "./Button.styled";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      Load more
    </Button>
  );
};

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
