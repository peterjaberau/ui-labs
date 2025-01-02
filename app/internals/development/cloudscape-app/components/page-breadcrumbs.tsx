import * as React from "react";
import { BreadcrumbGroup } from "@cloudscape-design/components";
import { useParams } from "@remix-run/react";

export const PageBreadcrumbs = () => {
  const params = useParams();
  const [breadcrumbItems, setBreadcrumbItems] = React.useState([]);

  React.useEffect(() => {
    const generateBreadcrumbItems: any = () => {
      const items = [];
      let path = "";
      for (const [key, value] of Object.entries(params)) {
        path += `/${value}`;
        items.push({ text: value, href: path });
      }
      return items;
    };

    setBreadcrumbItems(generateBreadcrumbItems());
  }, [params]);

  return (
    <BreadcrumbGroup
      items={breadcrumbItems as any}
      ariaLabel="Breadcrumbs"
    />
  );
};
