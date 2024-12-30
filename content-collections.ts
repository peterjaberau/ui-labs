import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode, { type Options } from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { codeImport } from "remark-code-import";
import remarkGfm from "remark-gfm";
import { createHighlighter } from "shiki";
import { visit } from "unist-util-visit";


const prettyCodeOptions: Options = {
  theme: "github-dark",
  getHighlighter: (options) =>
    createHighlighter({
      ...options,
    }),
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and allow empty
    // lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node) {
    if (!node.properties.className) {
      node.properties.className = [];
    }
    node.properties.className.push("line--highlighted");
  },
  onVisitHighlightedChars(node) {
    if (!node.properties.className) {
      node.properties.className = [];
    }
    node.properties.className = ["word--highlighted"];
  },
};



const previews = defineCollection({
  name: "preview",
  directory: "app/content/preview",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    href: z.string(),
    affiliation: z.string(),
    featured: z.boolean().optional().default(false),
  }),
  transform: async (document, context) => {
    const body = await compileMDX(context, document, {
      remarkPlugins: [codeImport, remarkGfm] as any,
    });
    return {
      ...document,
      slug: `/preview/${document._meta.path}`,
      slugAsParams: document._meta.path,
      body: {
        raw: document.content,
        code: body,
      },
    };
  },
});

const docs = defineCollection({
  name: "docs",
  directory: "app/content/docs",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    href: z.string(),
    affiliation: z.string(),
    featured: z.boolean().optional().default(false),
  }),
  transform: async (document, context) => {
    const body = await compileMDX(context, document, {
      remarkPlugins: [codeImport, remarkGfm] as any,
    });
    return {
      ...document,
      slug: `/doc/${document._meta.path}`,
      slugAsParams: document._meta.path,
      body: {
        raw: document.content,
        code: body,
      },
    };
  },
});


export default defineConfig({
  collections: [previews, docs],
});
