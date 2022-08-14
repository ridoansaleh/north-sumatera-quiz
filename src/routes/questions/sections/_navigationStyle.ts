import styled, { css } from "styled-components";

interface ContainerProps {
  isSticky: boolean
}

export const Container = styled.section<ContainerProps>`
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
