import styled, { css } from "styled-components";

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

export const Navigation = styled.section`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 24px;

  ${({ isSticky }) =>
    isSticky &&
    css`
      position: sticky;
      bottom: 0;
      background-color: #fff;
      padding: 24px;
      box-shadow: 0 -3px 1px #f3eceb;
      margin-top: 0;
      margin-left: -24px;
      margin-right: -24px;
      z-index: 100;
      transition: position 5s ease-in 3s;
    `}

  .kembali-btn {
    margin-top: 10px !important;
  }

  @media only screen and (min-width: 768px) {
    position: relative;
    justify-content: center;
    flex-direction: row;
    padding: 0;
    margin-top: 24px;
    box-shadow: none;

    .kembali-btn {
      margin-right: 10px !important;
      margin-top: 0 !important;
    }

    > button {
      width: 240px !important;
    }
  }
`;
