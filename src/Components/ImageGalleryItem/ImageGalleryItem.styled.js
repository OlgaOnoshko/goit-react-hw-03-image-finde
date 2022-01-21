import styled from "@emotion/styled";

export const Picture = styled.img`
  width: 100%;
  height: 260px;

  object-fit: cover;

  overflow: hidden;
  border: 1px solid gray;
  border-radius: 10px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
