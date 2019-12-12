import React, { useEffect } from "react";
import { useTranslation } from "react-i18next"
import "../global.css";

import Navigation from "../components/navigation";

import withI18next from "../i18n/withI18next";

const Layout = ({ children, location, pageContext: { locale }}) => {

  const { i18n } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage(locale)
  }, [location, i18n, locale])

  return (
    <div className="global-wrapper">
      <header className="global-header">
        <Navigation />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default withI18next()(Layout);
