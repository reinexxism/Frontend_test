import React from "react";
import Navbar from "./common/Navbar";
import { Container } from "../styles/EntireContentStyle";
import ChargePage from "../pages/ChargePage";
import Footer from "./common/Footer";

export default function EntireContent() {
  return (
    <Container>
      <Navbar />
      <ChargePage />
      <Footer />
    </Container>
  );
}
