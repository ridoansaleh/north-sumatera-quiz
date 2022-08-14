import styled from "styled-components";

interface OptionProps {
  isSelected: boolean
}

export const Container = styled.section`
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

export const QuestionWrapper = styled.p`
  display: flex;
  margin: 15px 0;
  font-weight: bold;
  font-size: 18px;

  span:nth-child(1) {
    margin-right: 10px;
  }
`;

export const Answers = styled.ul`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr;
  padding: 0;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Option = styled.li<OptionProps>`
  width: 100%;
  padding: 8px;
  cursor: pointer;
  color: ${({ isSelected }) => (isSelected ? "#fff" : "#000000DE")};
  background-color: ${({ isSelected }) => (isSelected ? "#06283D" : "#fff")};
  border: 1px solid #BCBCBC;
  list-style: none;
  font-size: 16px;

  &:hover {
    background-color: #06283D;
    color: #fff;
  }
`;
