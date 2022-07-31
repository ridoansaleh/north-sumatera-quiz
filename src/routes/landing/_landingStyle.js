import styled, { keyframes } from "styled-components";

const glowingAnimation = keyframes`
  0% {
    background-color: #ff5d5d;
    opacity: 0.4;
    box-shadow: 0 0 5px #ff5d5d;
  }
  50% {
    opacity: 0.7;
    box-shadow: 0 0 20px #2185d0;
  }
  100% {
    opacity: 1;
    box-shadow: 0 0 5px #2185d0;
  }
`;

export const Container = styled.div`
  position: relative;
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
    animation: ${glowingAnimation} 2000ms infinite;
  }

  @media only screen and (min-width: 768px) {
    width: 720px;
    align-items: center;
    margin: auto;

    > button {
      width: 240px !important;
      margin-top: 60px !important;
    }
  }
`;

export const Image = styled.img`
  max-height: 400px;

  @media only screen and (min-width: 768px) {
    max-height: 600px;
  }
`;

export const Version = styled.div`
  position: absolute;
  bottom: 24px;
  text-align: center;
  width: calc(100% - 48px);
  font-size: 13px;

  @media only screen and (min-width: 768px) {
    position: relative;
    top: 40px;
    bottom: 24px;
  }
`;
