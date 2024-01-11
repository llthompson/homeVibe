import React from "react";
import Navigation from "./Navigation";
// import { NavBar } from "./navigation/desktop/nav-bar";
// import { MobileNavBar } from "./navigation/mobile/mobile-nav-bar";
// import { PageFooter } from "./page-footer";

interface Props {
  children: JSX.Element;
}

export const PageLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="page-layout">
      <Navigation />
      <div className="page-layout__content">{children}</div>
    </div>
  );
};