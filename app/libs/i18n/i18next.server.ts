import { resolve } from "node:path"

import Backend from "i18next-fs-backend"
import { RemixI18Next } from "remix-i18next/server"
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import i18nConfig from "./i18n"

const remixI18Next = i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ...i18nConfig,
    fallbackLng: i18nConfig.fallbackLng,
    backend: {
      loadPath: resolve("./public/locales/{{lng}}/{{ns}}.json"),
    },

    // no react
    /*
       interpolation: {
         escapeValue: false, // not needed for react!!
       },
   */

     // react i18next special options (optional)
     // override if needed - omit if ok with defaults
     /*
     react: {
       bindI18n: 'languageChanged',
       bindI18nStore: '',
       transEmptyNodeValue: '',
       transSupportBasicHtmlNodes: true,
       transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
       useSuspense: true,
     }
     */


    // hook if needed
    /*
    // detection: {
    //   order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag", "path", "subdomain"],
    //   caches: ["cookie"],
    // },
    */
  });

// i18n
//   .use(Backend)
//   .use(initReactI18next)
//   .init({
//     ...i18nConfig,
//     backend: {
//       loadPath: resolve("./public/locales/{{lng}}/{{ns}}.json"),
//     },
//     detection: {
//       supportedLanguages: i18nConfig.supportedLngs,
//       fallbackLanguage: i18nConfig.fallbackLng,
//     },
//   });



// const remixI18Next = new RemixI18Next({
//   detection: {
//     supportedLanguages: i18nConfig.supportedLngs,
//     fallbackLanguage: i18nConfig.fallbackLng,
//   },
//   i18next: {
//     ...i18nConfig,
//     backend: {
//       loadPath: resolve("./public/locales/{{lng}}/{{ns}}.json"),
//     },
//   },
//   plugins: [Backend],
// })

export default remixI18Next
