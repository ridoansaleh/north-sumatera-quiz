import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 48px);
  padding: 24px;

  > button {
    margin-top: 24px !important;
  }

  @media only screen and (min-width: 768px) {
    margin: auto;
    width: 720px;
  }
`;

export const Time = styled.section`
  border: 2.5px solid #fc806f;
  padding: 10px;
  margin-bottom: 24px;
  text-align: center;

  span {
    font-weight: bold;
  }

  @media only screen and (min-width: 768px) {
    width: 320px;
    margin: 0 auto 48px;
  }
`;
