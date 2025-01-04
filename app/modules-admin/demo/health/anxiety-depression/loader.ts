import type { LoaderFunction } from "react-router";
import { getDiseaseData$ } from "~/__mock__/health/anxiety-depression";
react-router
import { lastValueFrom } from "rxjs";

export const loader: LoaderFunction = async () => {
  const data = await lastValueFrom(getDiseaseData$());
  return json(data);
};
