import React from "react";

import "../global.css";

import Navigation from "../components/navigation";
import Welcome from "../components/welcome";

import withI18next from "../i18n/withI18next";

const Layout = ({ children }) => {
  return (
    <div className="global-wrapper">
      <header className="global-header">
        <Navigation />
      </header>
      <Welcome />
      <main>{children}</main>
    </div>
  );
};

export default withI18next()(Layout);
