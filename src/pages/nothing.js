import React from "react";
import { useTranslation } from "react-i18next";

const Nothing = () => {
  const { t } = useTranslation();
  return <p>{t("not found")}</p>;
};

export default Nothing;
