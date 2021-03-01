import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 24px;
  text-align: center;
`;

export const Warning = styled.div`
  margin-top: 40px;
  background-color: #fc806f;
  padding: 15px 25px;
  color: #fff;

  @media only screen and (min-width: 768px) {
    padding: 15px 75px;
  }
`;
