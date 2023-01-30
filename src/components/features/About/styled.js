import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div`
  max-width: 600px;
  padding: 20px;
`;

export const SectionImg = styled.div`
  display: flex;
  flex-direction: column;
  height: 1060px;
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

export const StyledImgBelow = styled.div`
  position: relative;
  top: -62px;
  right: -140px;
`;

export const ImgBelow = styled.div`
  position: relative;
  top: -137px;
`;

export const Img = styled.img`
  width: 650px;
  height: 100%;
`;
