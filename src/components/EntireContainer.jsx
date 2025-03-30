import React from "react";
import Navbar from "./common/Navbar";
import { Container, ContentArea } from "../styles/EntireContainerStyle";
import Footer from "./common/Footer";
import AppRouter from "../router/AppRouter";
import { useNavigate, useLocation } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

const pages = [
  "/",
  "/whookpage",
  "/eventpage",
  "/newspage",
  "/storepage",
  "/chargepage",
];

export default function EntireContainer() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentIndex = pages.indexOf(location.pathname);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < pages.length - 1) navigate(pages[currentIndex + 1]);
    },
    onSwipedRight: () => {
      if (currentIndex > 0) navigate(pages[currentIndex - 1]);
    },
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <Container>
      <Navbar />
      <ContentArea {...handlers}>
        <AppRouter />
      </ContentArea>
      <Footer />
    </Container>
  );
}
