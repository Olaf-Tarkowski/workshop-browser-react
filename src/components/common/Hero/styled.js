import styled from "styled-components";

export const LogoContainer = styled.div`
  position: absolute;
  display: flex;
  z-index: 99;
`;

export const Logo = styled.img`
  max-width: 1600px;
`;

export const Section = styled.section`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
`;

export const ImgAbove = styled.div`
  display: flex;
`;
export const FirstLine = styled.div`
  display: flex;
  position: relative;
  height: 240px;
`;
export const SecondLine = styled.div`
  display: flex;
  position: relative;
  height: 240px;
`;
export const ThirdLine = styled.div`
  display: flex;
`;

export const StyledImg = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 300px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
`;

export const Img = styled.img`
  width: 650px;
  height: 100%;
`;
