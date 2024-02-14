import { I18n } from "i18n-js";
import {en,es} from './locales'
const i18n = new I18n({
    es:es,
    en: en,
  });
i18n.locale="en"  
export default i18n;  