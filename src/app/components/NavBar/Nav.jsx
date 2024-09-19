import React from "react";
import { NavContainer, NavItem } from "./styles";

const NavData = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "Video",
    path: "/vid",
  },
  {
    text: "Zoom",
    path: "/zoom",
  },
];

export const NavBar = () => {
  return (
    <NavContainer>
      {NavData.map((item, index) => (
        <NavItem key={index}>
          <a href={item.path}>{item.text}</a>
        </NavItem>
      ))}
    </NavContainer>
  );
};
