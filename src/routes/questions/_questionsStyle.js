import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 24px;

  > button {
    margin-top: 24px !important;
  }

  @media only screen and (min-width: 768px) {
    margin: auto;
    width: 720px;
  }
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 24px;

  .kembali-btn {
    margin-top: 10px !important;
  }

  @media only screen and (min-width: 768px) {
    justify-content: center;
    flex-direction: row;

    .kembali-btn {
      margin-right: 10px !important;
      margin-top: 0 !important;
    }

    > button {
      width: 240px !important;
    }
  }
`;
