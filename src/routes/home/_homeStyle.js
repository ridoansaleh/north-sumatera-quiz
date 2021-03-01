import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 24px;

  > h2 {
    text-align: center;

    span {
      color: #fc806f;
    }
  }

  > button {
    margin-top: 24px !important;
  }

  @media only screen and (min-width: 768px) {
    width: 720px;
    align-items: center;
    margin: auto;

    > button {
      width: 240px !important;
    }
  }
`;
