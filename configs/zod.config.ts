import i18next from "i18next";
import { z } from "zod";
import { zodI18nMap } from "zod-i18n-map";
import translation from "zod-i18n-map/locales/fr/zod.json";

i18next.init({
  lng: "fr",
  resources: {
    fr: { zod: translation },
  },
});

z.setErrorMap(zodI18nMap);

export { z }