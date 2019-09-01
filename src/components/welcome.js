import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { LocaleContext } from "../layouts";

const Welcome = () => {
  const { locale } = useContext(LocaleContext);
  const { t, i18n } = useTranslation();

  i18n.changeLanguage(locale);

  return <div>{t("Using i18next")}</div>;
};

export default Welcome;
