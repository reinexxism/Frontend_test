import React from "react";
import ContentList from "../components/ContentList";
import { ChartPageContainer } from "../styles/PageContainerStyle";
import SliderArea from "../components/SliderArea";

export default function ChartPage() {
  return (
    <ChartPageContainer>
      <SliderArea />
      <ContentList />
    </ChartPageContainer>
  );
}
