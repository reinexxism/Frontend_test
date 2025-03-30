import React from "react";
import Slider from "../components/Slider";
import ContentList from "../components/ContentList";
import { ChartPageContainer } from "../styles/PageContainerStyle";

export default function ChartPage() {
  return (
    <ChartPageContainer>
      <Slider />
      <ContentList />
    </ChartPageContainer>
  );
}
