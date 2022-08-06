import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 24px;
  text-align: center;

  .review-btn {
    margin-top: 24px !important;
  }
`;

export const UserStats = styled.div`
  margin-top: 10px;
  font-size: 17px;
  font-weight: bold;
  font-family: Lato;

  > div {
    margin-bottom: 10px;
  }
`;

export const Warning = styled.div`
  width: 100%;
  margin-top: 40px;
  background-color: #fc806f;
  padding: 15px 25px;
  color: #fff;

  @media only screen and (min-width: 768px) {
    padding: 15px 75px;
    width: 768px;
  }
`;

export const ShareContainer = styled.div`
  margin-top: 40px;
`;

export const SocialIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 125px;
`;
