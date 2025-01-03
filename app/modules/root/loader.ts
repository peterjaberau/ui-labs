import { rps } from "~/utils/server/response-json";
import { LoaderFunctionArgs } from "react-router"

export const loader = (args: LoaderFunctionArgs) => {
  return rps.rfj({
    lang: args.params.lang,
  });
};
