import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 24px;
  text-align: center;

  > h2 {
    margin-bottom: 24px;
  }

  .answer {
    padding-left: 10px;
  }

  > div {
    text-align: left;
  }

  > button {
    width: 100% !important;
    margin-top: 40px !important;
  }

  @media only screen and (min-width: 768px) {
    width: 720px;
    margin: auto;

    > button {
      width: 240px !important;
    }
  }
`;
