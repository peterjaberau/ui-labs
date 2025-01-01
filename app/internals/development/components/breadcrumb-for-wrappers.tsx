import { useMemo } from "react";
import { ChevronRightIcon } from "lucide-react"


export type LinksArray = {
  label: string;
  link: string;
  key: string;
}[];

export type HandleCustom = {
  links: LinksArray;
};

export default function BreadcrumbForWrappers({ matches }: any) {
  const linkArray = useMemo<LinksArray>(() => {
    return matches
      .filter((i: any) => i.handle && Array.isArray(i.handle.links))
      .map((i: any) => i?.handle?.links)
      .reduce((acc:any, cur:any) => [...acc, ...cur], []);
  }, [matches]);

  if (!linkArray.length) {
    return null;
  }

  return (
    <div className="flex items-center space-x-1 px-4 py-2 rounded-md bg-gray-200 dark:bg-zinc-800">
      {linkArray.map(({ label, link, key }, index) => (
        <div className="inline-flex items-center space-x-1" key={key}>
          <div className=""> {label} </div>
          {index !== linkArray.length - 1 && (
            <ChevronRightIcon className="w-4 h-4" />
          )}
        </div>
      ))}
    </div>
  );
}
