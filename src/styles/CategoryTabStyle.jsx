import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const CategoryTabContainer = styled.div`
  width: 425px;
  height: 100%;
  background-color: #ffb0b2;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ContentContainer = styled.div`
  width: 425px;
  height: 650px;
  background-color: #421e1e;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 18px;
  font-weight: bold;

  &.active {
    color: #fff;
  }
`;
