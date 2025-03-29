import React from "react";
import { PageContainer } from "../styles/PageContainerStyle";
import Slider from "../components/Slider";
import ContentList from "../components/ContentList";

export default function ChartPage() {
  return (
    <PageContainer>
      <Slider />
      <ContentList />
    </PageContainer>
  );
}
