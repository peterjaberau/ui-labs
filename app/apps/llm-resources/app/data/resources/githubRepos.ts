import { getFaviconUrl } from "~/apps/llm-resources/app/utils/getFaviconUrl";

export const githubRepos = [
  {
    id: 1,
    name: "LangChain",
    link: "https://github.com/langchain-ai/langchain",
    description:
      "Building applications with LLMs through composable components",
  },
  {
    id: 2,
    name: "vLLM",
    link: "https://github.com/vllm-project/vllm",
    description: "High-throughput and memory-efficient inference engine",
  },
  {
    id: 3,
    name: "llama.cpp",
    link: "https://github.com/ggerganov/llama.cpp",
    description: "Port of Facebook's LLaMA model in C/C++",
  },
  {
    id: 4,
    name: "text-generation-webui",
    link: "https://github.com/oobabooga/text-generation-webui",
    description: "Gradio web UI for running Large Language Models",
  },
  {
    id: 5,
    name: "FastChat",
    link: "https://github.com/lm-sys/FastChat",
    description: "Training and serving LLM chatbots",
  },
  {
    id: 6,
    name: "LocalAI",
    link: "https://github.com/go-skynet/LocalAI",
    description: "Self-hosted, community-driven LLM solution",
  },
  {
    id: 7,
    name: "LlamaIndex",
    link: "https://github.com/jerryjliu/llama_index",
    description: "Data framework for LLM applications",
  },
  {
    id: 8,
    name: "ExLlama",
    link: "https://github.com/turboderp/exllama",
    description: "Optimized inference for LLaMA models",
  },
  {
    id: 9,
    name: "PEFT",
    link: "https://github.com/huggingface/peft",
    description: "Parameter-Efficient Fine-Tuning methods",
  },
  {
    id: 10,
    name: "Transformers",
    link: "https://github.com/huggingface/transformers",
    description: "State-of-the-art Machine Learning for PyTorch and TensorFlow",
  },
  {
    id: 11,
    name: "GPT4All",
    link: "https://github.com/nomic-ai/gpt4all",
    description: "Run open-source LLMs locally on CPU",
  },
  {
    id: 12,
    name: "Axolotl",
    link: "https://github.com/OpenAccess-AI-Collective/axolotl",
    description: "Easy-to-use LLM fine-tuning framework",
  },
  {
    id: 13,
    name: "OpenLLM",
    link: "https://github.com/bentoml/OpenLLM",
    description: "Operating LLMs in production",
  },
  {
    id: 14,
    name: "lit-llama",
    link: "https://github.com/Lightning-AI/lit-llama",
    description: "Implementation of LLaMA in PyTorch Lightning",
  },
  {
    id: 15,
    name: "CTranslate2",
    link: "https://github.com/OpenNMT/CTranslate2",
    description: "Fast inference engine for Transformer models",
  },
  {
    id: 16,
    name: "DeepSpeed",
    link: "https://github.com/microsoft/DeepSpeed",
    description: "Deep learning optimization library",
  },
  {
    id: 17,
    name: "AutoGPT",
    link: "https://github.com/Significant-Gravitas/Auto-GPT",
    description: "Autonomous GPT-4 experiment framework",
  },
  {
    id: 18,
    name: "MLC-LLM",
    link: "https://github.com/mlc-ai/mlc-llm",
    description: "Universal LLM deployment across devices",
  },
  {
    id: 19,
    name: "LMFlow",
    link: "https://github.com/OptimalScale/LMFlow",
    description: "Toolbox for LLM fine-tuning and inference",
  },
  {
    id: 20,
    name: "LLaMA Factory",
    link: "https://github.com/hiyouga/LLaMA-Factory",
    description: "Fine-tuning framework for LLaMA models",
  },
  {
    id: 21,
    name: "Language Modeling is Compression",
    link: "https://github.com/google-deepmind/language_modeling_is_compression?tab=readme-ov-file",
    description:
      "Implementation of the ICLR 2024 paper on language modeling as compression.",
  },
  {
    id: 22,
    name: "ML For Beginners",
    link: "https://github.com/microsoft/ML-For-Beginners?WT.mc_id=academic-113596-abartolo",
    description: "A comprehensive introduction to machine learning concepts.",
  },
  {
    id: 23,
    name: "Generative AI for Beginners",
    link: "https://github.com/microsoft/generative-ai-for-beginners",
    description: "Learn the basics of generative AI and its applications.",
  },
  {
    id: 24,
    name: "AI For Beginners",
    link: "https://github.com/microsoft/AI-For-Beginners/",
    description: "An introductory guide to AI concepts and technologies.",
  },
  {
    id: 25,
    name: "LLM Discussions",
    link: "https://github.com/karpathy/llm.c/discussions/481",
    description: "Community discussions on large language models.",
  },
  {
    id: 26,
    name: "Spreadsheets Are All You Need",
    link: "https://github.com/ianand/spreadsheets-are-all-you-need?tab=readme-ov-file",
    description: "Exploring the power of spreadsheets in data analysis.",
  },
  {
    id: 27,
    name: "Deep Dive Into AI With MLX PyTorch",
    link: "https://github.com/neobundy/Deep-Dive-Into-AI-With-MLX-PyTorch",
    description: "In-depth exploration of AI concepts using PyTorch.",
  },
].map((resource) => ({ ...resource, favicon: getFaviconUrl(resource.link) }));
