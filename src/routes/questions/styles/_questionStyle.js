import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 20px;

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

export const QuestionWrapper = styled.div`
  display: flex;
  margin: 15px 0;

  div:nth-child(1) {
    margin-right: 10px;
  }
`;

export const Answers = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Option = styled.div`
  width: 100%;
  padding: 4px;
  cursor: pointer;
  color: ${({ isSelected }) => (isSelected ? "#fff" : "#000000DE")};
  background-color: ${({ isSelected }) => (isSelected ? "#06283D" : "#fff")};
  border: 1px solid #BCBCBC;

  &:hover {
    background-color: #06283D;
    color: #fff;
  }
`;
