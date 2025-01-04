import type { LoaderFunction } from "react-router";
import { getDiseaseData$ } from "~/__mock__/health/anxiety-depression";

import { lastValueFrom } from "rxjs";

export const loader: LoaderFunction = async () => {
  const data: any = await lastValueFrom(getDiseaseData$());
  return data;
};
