import type * as tn from "react-router";
import * as us from "~/utils/server";

import { defaultLang } from "~/config";
import { redirect } from "react-router";

class L {
  static async loader(args: tn.LoaderFunctionArgs) {
    try {
      return L.loaderImpl(args);
    } catch (error) {
      return us.rfj();
    }
  }

  static async loaderImpl(args: tn.LoaderFunctionArgs) {
    const { lang = defaultLang } = args.params;
    if (!args?.params?.lang) {
      return redirect(`/${lang}/`);
    }
    return null;
  }
}

export const loader = L.loader;
