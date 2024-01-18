// frontend/src/components/Page-Layout.tsx

import React from "react";
import Navigation from "./Navigation";


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