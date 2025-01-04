import type { LoaderFunction } from "react-router";
import { gethandData$ } from "~/__mock__/health/hand";

import { lastValueFrom } from "rxjs";

export const loader: LoaderFunction = async () => {
  const data: any = await lastValueFrom(gethandData$());
  return data;
};
