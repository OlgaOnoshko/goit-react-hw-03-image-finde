import styled from "@emotion/styled";

export const Header = styled.header`
  z-index: 100;
  /* position: fixed; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: darkolivegreen;
  border-radius: 3px;
  overflow: hidden;
`;

export const Form = styled.form`
  position: relative;
  width: 400px;
  height: 40px;
  overflow: hidden;
  border-radius: 5px;
  background-color: white;
  font-size: 16px;
  font-weight: bold;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  height: 40px;
  padding-left: 20px;
  font-size: 20px;
`;
