// rxjs
import { from } from "rxjs";
// i18n
import i18n from "~/libs/i18n/i18next.server";

/**
 * Get the translation function based on params.lang
 * @param params
 * @returns
 */
export const createT$ = (params: any) => {
  return from(i18n.getFixedT(params.lang));
};
