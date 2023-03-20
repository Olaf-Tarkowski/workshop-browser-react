import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Section = styled.section`
`;

export const Nav = styled.nav`
  margin: auto;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavSection = styled.section`
  display: flex;
  align-items: center;
  gap: 70px;

  @media (max-width: 1000px) {
    position: absolute;
    padding: 87px 55px;
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
    top: 0;
    left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    background-color: #ffffff;
    color: #000000;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in-out;
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-weight: 700;
  font-size: 20px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};
  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.black};
  }
  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.black};
  }
`;

export const Logo = styled.img`
  height:47px;
`;

export const HamburgerMenuContainer = styled.div`
  @media (min-width: 1000px) {
    display: none;
  }
`;