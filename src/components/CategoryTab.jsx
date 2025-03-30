import React from "react";
import { CategoryTabContainer, StyledLink } from "../styles/CategoryTabStyle";

export default function CategoryTab() {
  return (
    <CategoryTabContainer>
      <StyledLink to="/">차트</StyledLink>
      <StyledLink to="/whookpage">Whook</StyledLink>
      <StyledLink to="/eventpage">이벤트</StyledLink>
      <StyledLink to="/newspage">뉴스</StyledLink>
      <StyledLink to="/storepage">스토어</StyledLink>
      <StyledLink to="/chargepage">충전소</StyledLink>
    </CategoryTabContainer>
  );
}
