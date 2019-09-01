import i18n from "i18next";

import resources from "./resources.json";

i18n.init({
  debug: process.env.NODE_ENV === "development",
  resources,
  fallbackLng: "en",
  keySeparator: false, // we do not use keys in form messages.welcome
  interpolation: {
    escapeValue: false // react already safes from xss
  }
});

export default i18n;
