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
  /* background: ${props => props.isLight ? colors.lightGrey : colors.darkGrey}; */
  z-index: 9999;
`;

export const Logo = styled.img`
  width: 40vw;
  max-width: 600px;
`;
