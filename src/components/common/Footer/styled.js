import styled from "styled-components";

export const SectionFooter = styled.footer`
  margin-top: auto;
`;
export const Display = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Info = styled.div`
  padding: 10px 0;
  background: ${({ theme }) => theme.color.grayTransparent};
`;

export const Copyrights = styled.div`
  padding: 10px 0;
  background: ${({ theme }) => theme.color.gray};
`;

export const Logo = styled.img`
  height: 40px;
`;

export const Text = styled.div`
  /* color: white; */
  padding-left: 20px;
`;
