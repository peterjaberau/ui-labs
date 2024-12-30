import RouteWrapper from "~/apps/interactive-routing/components/wrappers/RouteWrapper";
import generateMeta from "~/apps/interactive-routing/utils/generateMeta";
import type { HandleCustom } from "~/apps/interactive-routing/components/Breadcrumbs";

export const handle: HandleCustom = {
  links: [{ label: "Movies", link: "", key: "movies" }],
};
export const meta = generateMeta("Movies");
const filePath = "routes/movies.$movieName.tsx";

export default function MoviesCommonMovienamePage() {
  return (
    <RouteWrapper filePath={filePath}>MoviesCommonMoviename Page</RouteWrapper>
  );
}
