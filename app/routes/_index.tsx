import type { MetaFunction } from "@remix-run/node";
import { SearchProvider } from "~/apps/llm-resources/app/context/SearchContext";
import { CategoryProvider } from "~/apps/llm-resources/app/context/CategoryContext";
import SearchBar from "~/apps/llm-resources/app/components/SearchBar";
import CategoryFilter from "~/apps/llm-resources/app/components/CategoryFilter";
import ResourceGrid from "~/apps/llm-resources/app/components/ResourceGrid";
import ContactSection from "~/apps/llm-resources/app/components/ContactSection";
import { getPageMetadata } from "../data/metadata";

// Meta function to define the metadata for the page, including SEO properties
export const meta: MetaFunction = () => {
  return getPageMetadata("index");
};

// Main component for the index route
export default function Index() {
  return (
    <CategoryProvider>
      <SearchProvider>
        <div className="min-h-screen bg-[#1A1A1A] relative overflow-hidden">
          {/* Background effects for visual enhancement */}
          <div className="absolute inset-0 bg-gradient-to-b from-doreturn-gold/5 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-doreturn-gold/10 via-transparent to-transparent opacity-50 pointer-events-none" />

          <main className="container mx-auto px-4 py-8 relative">
            <section className="text-center mt-8 sm:mt-12 md:mt-16 lg:mt-24 mb-8 sm:mb-12 md:mb-16 space-y-4 sm:space-y-6 md:space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/20">
                Welcome to the MemoryView AI Resources Hub
              </h1>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Your one-stop destination for all the resources you need to
                excel in your LLM journey.
              </p>
            </section>

            <div className="relative z-10">
              <SearchBar /> {/* Search bar for querying resources */}
            </div>

            <div className="mt-12">
              <CategoryFilter />{" "}
              {/* Filter component for selecting categories */}
            </div>

            <div className="mt-12">
              <ResourceGrid />{" "}
              {/* Grid displaying resources based on selected filters */}
            </div>

            <div className="mt-16">
              <ContactSection /> {/* Section for user contact information */}
            </div>
          </main>
        </div>
      </SearchProvider>
    </CategoryProvider>
  );
}
