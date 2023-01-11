import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledList = styled.ul`
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 50px;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.gray};
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
`;
export const StyledNavLink = styled(NavLink)`
  transition: 0.8s;
  padding: 15px;
  text-decoration: none;
  color: white;
  &.active {
    font-weight: 700;
    color: ${({ theme }) => theme.color.pampas};
  }
  &:hover {
    color: ${({ theme }) => theme.color.black};
  }
`;
