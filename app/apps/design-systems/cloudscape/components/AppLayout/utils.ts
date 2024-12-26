import { matchPath } from "@remix-run/react";

export const getBreadcrumbs = (pathName: string, search: string, defaultBreadcrumb: string, availableRoutes?: string[]) => {
    const segments = [defaultBreadcrumb, ...pathName.split('/').filter((segment) => segment !== '')];

    return segments.map((segment, i) => {
        const href =
            i === 0
                ? '/'
                : `/${segments
                    .slice(1, i + 1)
                    .join('/')
                    .replace('//', '/')}`;

        const matched = !availableRoutes || availableRoutes.find((r) => matchPath(r, href));

        return {
            // If there is not availableRoutes,
            // or there is a matched route in availableRoutes return href,
            // otherwise return # so the page is not reloaded.
            href: matched ? `${href}${search}` : '#',
            text: segment,
        };
    });
};

