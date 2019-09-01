import React from "react";
import { useTranslation } from "react-i18next";

const Welcome = () => {
  const { t } = useTranslation();

  return <div>{t("Using i18next")}</div>;
};

export default Welcome;
