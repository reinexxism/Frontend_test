import React from "react";
import {
  LeftSection,
  ListContentContainer,
  RightSection,
} from "../styles/ListContentStyle";

export default function ListContent({ item }) {
  return (
    <ListContentContainer>
      <LeftSection />
      <RightSection>{item.description}</RightSection>
    </ListContentContainer>
  );
}
