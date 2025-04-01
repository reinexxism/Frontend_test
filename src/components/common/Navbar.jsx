import React from "react";
import {
  NavbarContainer,
  NavbarTop,
  CurrentTime,
  NavbarBottom,
  CurrentStateContainer,
} from "../../styles/NavbarStyle";
import CategoryTab from "../CategoryTab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { faSignal } from "@fortawesome/free-solid-svg-icons";
import { faBatteryFull } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <NavbarContainer>
      <NavbarTop>
        <CurrentTime>09:12</CurrentTime>
        <CurrentStateContainer>
          <FontAwesomeIcon icon={faSignal} color="#fff" />
          <FontAwesomeIcon icon={faWifi} color="#fff" />
          <FontAwesomeIcon icon={faBatteryFull} color="#fff" />
        </CurrentStateContainer>
      </NavbarTop>
      <NavbarBottom>
        <CategoryTab />
      </NavbarBottom>
    </NavbarContainer>
  );
}
