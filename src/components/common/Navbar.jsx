import React from "react";
import {
  NavbarContainer,
  NavbarTop,
  CurrentTime,
  CurrentState,
  NavbarBottom,
} from "../../styles/NavbarStyle";
import CategoryTab from "../CategoryTab";

export default function Navbar() {
  return (
    <div>
      <NavbarContainer>
        <NavbarTop>
          <CurrentTime>09:12</CurrentTime>
          <CurrentState>wifi data battery</CurrentState>
        </NavbarTop>
        <NavbarBottom>
          <CategoryTab />
        </NavbarBottom>
      </NavbarContainer>
    </div>
  );
}
