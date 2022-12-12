import styled from "styled-components";

export const LoaderContainer = styled.div`
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
`;

export const Logo = styled.img`
  max-width: 800px;
`;

export const Text = styled.div`
margin: 30px 0 0;
  font-family: "Unica One", cursive;
  font-size: 30px;
  color: black;
`;
