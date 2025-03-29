import React from "react";
import Navbar from "./common/Navbar";
import { Container, ContentArea } from "../styles/EntireContainerStyle";
import Footer from "./common/Footer";
import AppRouter from "../router/AppRouter";

export default function EntireContainer() {
  return (
    <Container>
      <Navbar />
      <ContentArea>
        <AppRouter />
      </ContentArea>
      <Footer />
    </Container>
  );
}
