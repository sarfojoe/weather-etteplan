import styled from "styled-components";
import React from "react";
import loader from "../assets/loader.gif";

const PreloaderComponent = () => {
  return (
    <PreloaderWrapper>
      <PreloaderContainer>
        <PreloaderImage src={loader} alt="loading" />
      </PreloaderContainer>
    </PreloaderWrapper>
  );
};

const PreloaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const PreloaderContainer = styled.div`
  width: 100px;
`;

const PreloaderImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export default PreloaderComponent;
