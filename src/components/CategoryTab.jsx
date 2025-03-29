import React from "react";
import { CategoryTabContainer } from "../styles/CategoryTabStyle";
import { Link } from "react-router-dom";

export default function CategoryTab() {
  return (
    <CategoryTabContainer>
      <Link to="/">차트</Link>
      <Link to="/whookpage">Whook</Link>
      <Link to="/eventpage">이벤트</Link>
      <Link to="/newspage">뉴스</Link>
      <Link to="/storepage">스토어</Link>
      <Link to="/chargepage">충전소</Link>
    </CategoryTabContainer>
  );
}
