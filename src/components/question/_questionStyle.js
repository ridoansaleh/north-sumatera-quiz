import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 20px;

  p {
    margin-top: 15px;
  }

  img {
    width: 100%;
    height: 275px;
  }

  @media only screen and (min-width: 375px) {
    img {
      height: 320px;
    }
  }

  @media only screen and (min-width: 768px) {
    img {
      height: 400px;
    }
  }
`;

export const Answers = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    flex-direction: column;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;

    > div {
      width: 50%;
      flex-direction: column;
    }
  }
`;

export const Option = styled.div`
  width: 100%;
  padding: 2px;
  margin-bottom: 5px;
  cursor: pointer;
  color: ${({ isSelected }) => (isSelected ? "#fff" : "#000000DE")};
  background-color: ${({ isSelected }) => (isSelected ? "#6DF588" : "#fff")};

  &:hover {
    background-color: #6df588;
    color: #fff;
  }

  @media only screen and (min-width: 768px) {
    width: 50%;
    margin-bottom: 0;
  }
`;
