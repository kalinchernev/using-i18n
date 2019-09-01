import React, { useEffect } from "react";
import { I18nextProvider } from "react-i18next";

import "../global.css";
import i18n from "../i18n";

import Navigation from "../components/navigation";
import Welcome from "../components/welcome";

const LocaleContext = React.createContext();

const Layout = ({ children, pageContext: { locale } }) => {
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale }}>
      <I18nextProvider i18n={i18n}>
        <div className="global-wrapper">
          <header className="global-header">
            <Navigation />
          </header>
          <Welcome />
          <main>{children}</main>
        </div>
      </I18nextProvider>
    </LocaleContext.Provider>
  );
};

export { Layout as default, LocaleContext };
