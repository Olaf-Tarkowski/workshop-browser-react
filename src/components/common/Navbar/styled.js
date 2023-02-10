import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Section = styled.section`
`;

export const Nav = styled.nav`
  margin: auto;
  padding: 20px 0;
  display: flex;
  align-items: center;
`;

export const StyledList = styled.ul`
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 50px;
  color: ${({ theme }) => theme.color.black};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
`;

export const StyledNavLink = styled(NavLink)`
  transition: 0.8s;
  padding: 0 35px;
  font-size: 20px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};
  &.active {
    font-weight: 700;
    color: ${({ theme }) => theme.color.black};
  }
  &:hover {
    color: ${({ theme }) => theme.color.black};
  }
`;

export const Logo = styled.img`
  height:47px;
`;
