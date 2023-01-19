import styled from "styled-components";

export const InvitationContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 99;
  background: #e7e7e7;
  opacity: ${(props) => (props.logoDisplayed ? 0 : 1)};
  transition: opacity 1.5s ease-out;
`;

export const Logo = styled.img`
  max-width: 800px;
  opacity: ${(props) => (props.logoDisplayed ? 0 : 1)};
  transition: opacity 1.5s ease-out;
`;