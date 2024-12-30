// Meta function to define the metadata for the page, including SEO properties
const pageMetadata: any = {
   index: [
     {
       title: "MemoryView AI Resources Hub - Your Ultimate LLM Resource Center",
     },
     {
       name: "description",
       content:
         "Discover the MemoryView AI Resources Hub, your premier destination for comprehensive Large Language Model (LLM) resources, expert tutorials, and innovative AI tools designed to enhance your learning and projects.",
     },
     {
       name: "keywords",
       content:
         "LLM, Large Language Models, AI resources, Machine Learning tutorials, ChatGPT tutorials, AI courses, LLM Resources Hub, LLM Tools, LLM Tutorials, LLM Development, LLM Applications, AI learning, AI tools, educational resources",
     },
     {
       property: "og:title",
       content: "MemoryView AI Resources Hub - Explore LLM Resources",
     },
     {
       property: "og:description",
       content:
         "Join the MemoryView AI Resources Hub for unparalleled access to cutting-edge LLM resources, in-depth tutorials, and powerful AI tools to accelerate your learning journey.",
     },
     {
       property: "og:url",
       content: "https://memoryview.in",
     },
     {
       property: "og:image",
       content: "/featuredimage.png",
     },
     {
       property: "og:type",
       content: "website",
     },
     {
       property: "og:site_name",
       content: "MemoryView AI Resources Hub",
     },
     {
       property: "og:image:width",
       content: "1200",
     },
     {
       property: "og:image:height",
       content: "630",
     },
     {
       name: "robots",
       content: "index, follow",
     },
     {
       name: "googlebot",
       content: "index, follow",
     },
     {
       name: "bingbot",
       content: "index, follow",
     },
   ]
}



export const getPageMetadata = (page: string) => {
  return pageMetadata[page]
}
