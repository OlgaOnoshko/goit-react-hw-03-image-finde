import React from "react";
import { Oval } from "react-loader-spinner";
import { Spinner } from "./Loader.styled";

const Loader = () => {
  return (
    <Spinner>
      <Oval heigth="100" width="100" color="orange" ariaLabel="loading" />
    </Spinner>
  );
};

export default Loader;
