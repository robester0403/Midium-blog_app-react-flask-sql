import React from "react";
import Header from "../views/Header";
import NavBar from "../views/NavBar";
import Articles from "../views/Articles";
import styled from "styled-components";

const MainPage = () => {
  return (
    <>
      <TempPhoneContainer>
        <LayoutContainer>
          <Header />
          <NavBar />
          <Articles />
        </LayoutContainer>
      </TempPhoneContainer>
    </>
  );
};

export default MainPage;

const TempPhoneContainer = styled.div`
  max-width: 480px;

  margin: 0 auto;
`;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;
