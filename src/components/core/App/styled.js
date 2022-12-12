import styled from "styled-components";

export const Container = styled.div`
  margin: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    margin: 0px auto;
  }
`;
