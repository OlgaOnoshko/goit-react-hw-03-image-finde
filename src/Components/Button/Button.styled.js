import styled from "@emotion/styled";

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  width: 150px;
  height: 40px;
  background-color: darkolivegreen;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  &:hover {
    cursor: pointer;
    background-color: white;
    color: darkolivegreen;
    box-shadow: 0px 5px 8px 2px rgba(34, 60, 80, 0.2);
  }
`;
