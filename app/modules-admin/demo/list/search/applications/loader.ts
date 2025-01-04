import type { LoaderFunction, LoaderFunctionArgs } from "react-router";

import { getSearchProjectCardList$ } from "~/__mock__/list/search.projects";

import { lastValueFrom } from "rxjs";

export const loader: LoaderFunction = async ({
  request,
  params,
}: LoaderFunctionArgs) => {
  const _data: any = await lastValueFrom(getSearchProjectCardList$());
  return json({ data: _data });
};
