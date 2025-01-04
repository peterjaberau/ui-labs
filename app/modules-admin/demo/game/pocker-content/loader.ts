import type { LoaderFunction } from "react-router";
import { getPockeraData$ } from "~/__mock__/game/pocker";
react-router
import { lastValueFrom } from "rxjs";

export const loader: LoaderFunction = async () => {
  const { hs } = await lastValueFrom(getPockeraData$());
  return json(hs);
};
