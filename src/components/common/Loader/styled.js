import styled from "styled-components";

export const LoaderContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  z-index: 99;
  /* background: white; */
`;

export const Logo = styled.img`
  width: 40vw;
  max-width: 600px;
`;
