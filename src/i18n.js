import en from "./translations/en.json";
import kr from "./translations/kr.json";
import { createI18n } from "vue-i18n";

var i18n = createI18n({
  locale: localStorage.getItem('lang'),
  messages: {
    en: en,
    kr: kr,
  },
  fallbackLocale: "kr",
});

export default i18n;
