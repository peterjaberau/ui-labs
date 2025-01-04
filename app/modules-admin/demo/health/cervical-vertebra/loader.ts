import type { LoaderFunction } from "react-router";
import { getCervicalData$ } from "~/__mock__/health/cervical-vertebra";
react-router
import { lastValueFrom } from "rxjs";

export const loader: LoaderFunction = async () => {
  const data = await lastValueFrom(getCervicalData$());
  return json(data);
};
