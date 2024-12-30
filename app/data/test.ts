const data = [
  {
    "title": "Free Resources",
    "tag": "Learning Resources",
    "tag2": "Free Resources",
    "description": "Essential learning materials and tutorials to get started with LLMs",
    "resources": [
      {
        "id": 1,
        "name": "Hugging Face Course",
        "link": "https://huggingface.co/learn/nlp-course/chapter1/1",
        "description": "Comprehensive course covering transformers, NLP tasks, and practical implementation with real-world examples.",
        "description2": "This course provides a comprehensive introduction to natural language processing (NLP) using Hugging Face's libraries, including Transformers, Datasets, and Tokenizers. It covers key concepts and practical implementations, making it suitable for learners with a good knowledge of Python. The course is structured into chapters that guide you through the fundamentals of NLP, enabling you to tackle common problems and apply Transformer models to various tasks, including speech processing and computer vision.",
        "favicon": "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
        "parentId": 1
      },
      {
        "id": 2,
        "name": "Fast.ai Practical Deep Learning",
        "link": "https://course.fast.ai/",
        "description": "Top-down approach to deep learning, teaching practical applications before diving into theory.",
        "description2": "This free course is designed for people with some coding experience who want to learn how to apply deep learning and machine learning to practical problems. It covers building and training deep learning models for various applications, including computer vision and natural language processing, using PyTorch and fastai. The course is structured into lessons that guide you through the fundamentals, enabling you to deploy models without needing special hardware or extensive math knowledge.",
        "favicon": "https://www.google.com/s2/favicons?domain=course.fast.ai&sz=128",
        "parentId": 1
      },
      {
        "id": 3,
        "name": "Google Machine Learning Crash Course",
        "link": "https://developers.google.com/machine-learning/crash-course",
        "description": "Fast-paced introduction to ML fundamentals using TensorFlow, with hands-on exercises.",
        "favicon": "https://www.google.com/s2/favicons?domain=developers.google.com&sz=128",
        "parentId": 1
      },
      {
        "id": 4,
        "name": "TensorFlow Tutorials",
        "link": "https://www.tensorflow.org/tutorials",
        "description": "Official guides and tutorials for building ML models with TensorFlow, from basics to advanced topics.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.tensorflow.org&sz=128",
        "parentId": 1
      },
      {
        "id": 5,
        "name": "PyTorch Tutorials",
        "link": "https://pytorch.org/tutorials/",
        "description": "Step-by-step tutorials for deep learning with PyTorch, covering various model architectures.",
        "favicon": "https://www.google.com/s2/favicons?domain=pytorch.org&sz=128",
        "parentId": 1
      },
      {
        "id": 6,
        "name": "Deep Learning Specialization",
        "link": "https://www.coursera.org/specializations/deep-learning",
        "description": "Andrew Ng's renowned course series covering neural networks, optimization, and ML projects.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.coursera.org&sz=128",
        "parentId": 1
      },
      {
        "id": 7,
        "name": "ML YouTube Courses",
        "link": "https://github.com/dair-ai/ML-YouTube-Courses",
        "description": "Curated collection of high-quality machine learning courses available on YouTube.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 1
      },
      {
        "id": 8,
        "name": "Papers with Code",
        "link": "https://paperswithcode.com/",
        "description": "Browse state-of-the-art ML papers with their official and community code implementations.",
        "favicon": "https://www.google.com/s2/favicons?domain=paperswithcode.com&sz=128",
        "parentId": 1
      },
      {
        "id": 9,
        "name": "Kaggle Learn",
        "link": "https://www.kaggle.com/learn",
        "description": "Interactive tutorials on ML, deep learning, and data science with hands-on exercises.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.kaggle.com&sz=128",
        "parentId": 1
      },
      {
        "id": 10,
        "name": "OpenAI Tutorials",
        "link": "https://platform.openai.com/docs/tutorials",
        "description": "Official guides for using OpenAI's APIs and models effectively in applications.",
        "favicon": "https://www.google.com/s2/favicons?domain=platform.openai.com&sz=128",
        "parentId": 1
      },
      {
        "id": 11,
        "name": "ML From Scratch",
        "link": "https://github.com/eriklindernoren/ML-From-Scratch",
        "description": "Python implementations of ML algorithms and models from ground up for better understanding.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 1
      },
      {
        "id": 12,
        "name": "Deep Learning Book",
        "link": "https://www.deeplearningbook.org/",
        "description": "Comprehensive textbook on deep learning fundamentals by Goodfellow, Bengio, and Courville.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.deeplearningbook.org&sz=128",
        "parentId": 1
      },
      {
        "id": 13,
        "name": "DeepMind Learning Resources",
        "link": "https://deepmind.com/learning-resources",
        "description": "Educational materials and research papers from DeepMind's research team.",
        "favicon": "https://www.google.com/s2/favicons?domain=deepmind.com&sz=128",
        "parentId": 1
      },
      {
        "id": 14,
        "name": "UCL COMP M050: Reinforcement Learning",
        "link": "https://www.davidsilver.uk/teaching/",
        "description": "Comprehensive RL course by David Silver, covering fundamentals to advanced topics.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.davidsilver.uk&sz=128",
        "parentId": 1
      },
      {
        "id": 15,
        "name": "NYU Deep Learning",
        "link": "https://atcold.github.io/NYU-DLSP21/",
        "description": "Deep Learning course by Alfredo Canziani with PyTorch implementations.",
        "favicon": "https://www.google.com/s2/favicons?domain=atcold.github.io&sz=128",
        "parentId": 1
      },
      {
        "id": 16,
        "name": "UCF Computer Vision",
        "link": "https://www.crcv.ucf.edu/courses/",
        "description": "Computer Vision course by Mubarak Shah at University of Central Florida.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.crcv.ucf.edu&sz=128",
        "parentId": 1
      },
      {
        "id": 17,
        "name": "UWaterloo CS480/680: Intro to ML",
        "link": "https://cs.uwaterloo.ca/~ppoupart/teaching/cs480-spring19/",
        "description": "Introduction to Machine Learning by Pascal Poupart.",
        "favicon": "https://www.google.com/s2/favicons?domain=cs.uwaterloo.ca&sz=128",
        "parentId": 1
      },
      {
        "id": 18,
        "name": "UMass CS685: Advanced NLP",
        "link": "https://people.cs.umass.edu/~miyyer/cs685/",
        "description": "Advanced Natural Language Processing covering latest research and techniques.",
        "favicon": "https://www.google.com/s2/favicons?domain=people.cs.umass.edu&sz=128",
        "parentId": 1
      },
      {
        "id": 19,
        "name": "AMMI: Geometric Deep Learning",
        "link": "https://www.africamasters.uni-tuebingen.de/",
        "description": "African Master in Machine Intelligence by Michael M. Bronstein, Joan Bruna, Taco Cohen, and Petar Veličković.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.africamasters.uni-tuebingen.de&sz=128",
        "parentId": 1
      },
      {
        "id": 20,
        "name": "Cornell CS 5787: Applied ML",
        "link": "https://www.cs.cornell.edu/courses/cs5787/",
        "description": "Applied Machine Learning by Volodymyr Kuleshov focusing on practical applications.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.cs.cornell.edu&sz=128",
        "parentId": 1
      },
      {
        "id": 21,
        "name": "Full Stack Deep Learning",
        "link": "https://fullstackdeeplearning.com/",
        "description": "Production ML course by Sergey Karayev covering end-to-end implementation.",
        "favicon": "https://www.google.com/s2/favicons?domain=fullstackdeeplearning.com&sz=128",
        "parentId": 1
      },
      {
        "id": 22,
        "name": "Neural Networks: Zero to Hero",
        "link": "https://karpathy.ai/zero-to-hero.html",
        "description": "Neural Networks course by Andrej Karpathy, building from fundamentals.",
        "favicon": "https://www.google.com/s2/favicons?domain=karpathy.ai&sz=128",
        "parentId": 1
      },
      {
        "id": 23,
        "name": "What is ChatGPT Doing",
        "link": "https://www.youtube.com/watch?v=flXrLGPY3SU",
        "description": "Technical explanation of ChatGPT's inner workings and architecture.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.youtube.com&sz=128",
        "parentId": 1
      },
      {
        "id": 24,
        "name": "Cohere LLM University",
        "link": "https://docs.cohere.com/docs/llmu",
        "description": "Comprehensive course on LLMs covering theory, prompting, fine-tuning, and real-world applications by Cohere.",
        "favicon": "https://www.google.com/s2/favicons?domain=docs.cohere.com&sz=128",
        "parentId": 1
      },
      {
        "id": 25,
        "name": "Neural Networks by 3Blue1Brown",
        "link": "https://www.3blue1brown.com/topics/neural-networks",
        "description": "An engaging series of lessons covering the basics of neural networks and the math behind how they learn.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.3blue1brown.com&sz=128",
        "parentId": 1
      },
      {
        "id": 26,
        "name": "Transformer Explainer",
        "link": "https://poloclub.github.io/transformer-explainer/",
        "description": "Interactive visualization explaining transformer architecture and attention mechanisms.",
        "favicon": "https://www.google.com/s2/favicons?domain=poloclub.github.io&sz=128",
        "parentId": 1
      },
      {
        "id": 27,
        "name": "CNN Explainer",
        "link": "https://poloclub.github.io/cnn-explainer/",
        "description": "Visual and interactive explanation of Convolutional Neural Networks.",
        "favicon": "https://www.google.com/s2/favicons?domain=poloclub.github.io&sz=128",
        "parentId": 1
      },
      {
        "id": 28,
        "name": "LLM Visualization",
        "link": "https://bbycroft.net/llm",
        "description": "Interactive visualization of how large language models work internally.",
        "favicon": "https://www.google.com/s2/favicons?domain=bbycroft.net&sz=128",
        "parentId": 1
      },
      {
        "id": 29,
        "name": "Visual Analytics in Deep Learning",
        "link": "https://fredhohman.com/visual-analytics-in-deep-learning/",
        "description": "Comprehensive resource on visualizing and understanding deep learning systems.",
        "favicon": "https://www.google.com/s2/favicons?domain=fredhohman.com&sz=128",
        "parentId": 1
      },
      {
        "id": 30,
        "name": "What is ChatGPT Doing?",
        "link": "https://writings.stephenwolfram.com/2023/02/what-is-chatgpt-doing-and-why-does-it-work/",
        "description": "Stephen Wolfram's detailed explanation of ChatGPT's inner workings.",
        "favicon": "https://www.google.com/s2/favicons?domain=writings.stephenwolfram.com&sz=128",
        "parentId": 1
      },
      {
        "id": 31,
        "name": "FT Guide to Generative AI",
        "link": "https://ig.ft.com/generative-ai/",
        "description": "Financial Times' comprehensive visual guide to generative AI technology.",
        "favicon": "https://www.google.com/s2/favicons?domain=ig.ft.com&sz=128",
        "parentId": 1
      },
      {
        "id": 32,
        "name": "Knowing Machines",
        "link": "https://knowingmachines.org/models-all-the-way",
        "description": "Interactive exploration of AI models and their societal implications.",
        "favicon": "https://www.google.com/s2/favicons?domain=knowingmachines.org&sz=128",
        "parentId": 1
      },
      {
        "id": 33,
        "name": "Prompt Engineering Guide",
        "link": "https://www.promptingguide.ai/",
        "description": "Comprehensive resource on prompt engineering techniques for optimizing interactions with large language models.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.promptingguide.ai&sz=128",
        "parentId": 1
      },
      {
        "id": 34,
        "name": "AI Timeline",
        "link": "https://www.fabianmosele.com/ai-timeline",
        "description": "A comprehensive timeline detailing the history and evolution of AI projects and milestones.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.fabianmosele.com&sz=128",
        "parentId": 1
      }
    ],
    "id": 1,
    "slug": "free-resources"
  },
  {
    "title": "Video Tutorials",
    "tag": "Learning Resources",
    "tag2": "Video Tutorials",
    "description": "High-quality video content for visual learners, ordered from basics to advanced topics",
    "resources": [
      {
        "id": 1,
        "name": "3Blue1Brown Neural Networks",
        "link": "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi",
        "description": "Visual introduction to neural networks fundamentals with beautiful animations.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.youtube.com&sz=128",
        "parentId": 2
      },
      {
        "id": 2,
        "name": "StatQuest ML Basics",
        "link": "https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF",
        "description": "Clear explanations of machine learning fundamentals with simple examples.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.youtube.com&sz=128",
        "parentId": 2
      },
      {
        "id": 3,
        "name": "Andrej Karpathy: Neural Networks Zero to Hero",
        "link": "https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ",
        "description": "Comprehensive series building neural networks from scratch, leading to transformers.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.youtube.com&sz=128",
        "parentId": 2
      },
      {
        "id": 4,
        "name": "What are Large Language Models?",
        "link": "https://www.youtube.com/watch?v=5sLYAQS9sWQ",
        "description": "Google's accessible introduction to LLMs and their capabilities.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.youtube.com&sz=128",
        "parentId": 2
      },
      {
        "id": 5,
        "name": "How GPT Models Work",
        "link": "https://www.youtube.com/watch?v=VMj-3S1tku0",
        "description": "Clear explanation of GPT architecture and token prediction process.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.youtube.com&sz=128",
        "parentId": 2
      },
      {
        "id": 6,
        "name": "Attention Is All You Need - Paper Explained",
        "link": "https://www.youtube.com/watch?v=iDulhoQ2pro",
        "description": "Detailed walkthrough of the original transformer paper's architecture.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.youtube.com&sz=128",
        "parentId": 2
      },
      {
        "id": 7,
        "name": "Illustrated Guide to Transformers",
        "link": "https://www.youtube.com/watch?v=4Bdc55j80l8",
        "description": "Visual explanation of transformer architecture with animations.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.youtube.com&sz=128",
        "parentId": 2
      },
      {
        "id": 8,
        "name": "Building GPT from Scratch",
        "link": "https://www.youtube.com/watch?v=kCc8FmEb1nY",
        "description": "Andrej Karpathy's detailed implementation of GPT architecture in Python.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.youtube.com&sz=128",
        "parentId": 2
      },
      {
        "id": 9,
        "name": "Fine-tuning LLMs with PEFT",
        "link": "https://www.youtube.com/watch?v=Us5ZFp16PaU",
        "description": "Tutorial on efficient fine-tuning techniques for large language models.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.youtube.com&sz=128",
        "parentId": 2
      },
      {
        "id": 10,
        "name": "Yannic Kilcher LLM Paper Reviews",
        "link": "https://www.youtube.com/playlist?list=PL1v8zpldgH3pR7LPX-RQzeUomqMc_Xw4-",
        "description": "Technical breakdowns of latest LLM research papers and developments.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.youtube.com&sz=128",
        "parentId": 2
      },
      {
        "id": 11,
        "name": "Understanding RLHF",
        "link": "https://www.youtube.com/watch?v=2MBJOuVq380",
        "description": "Deep dive into Reinforcement Learning from Human Feedback for LLMs.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.youtube.com&sz=128",
        "parentId": 2
      },
      {
        "id": 12,
        "name": "Mixture of Experts Explained",
        "link": "https://www.youtube.com/watch?v=UNiK3RiVoHo",
        "description": "Technical explanation of MoE architecture used in modern LLMs.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.youtube.com&sz=128",
        "parentId": 2
      },
      {
        "id": 13,
        "name": "LangChain Crash Course",
        "link": "https://www.youtube.com/watch?v=LbT1yp6quS8",
        "description": "Quick introduction to building LLM applications with LangChain.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.youtube.com&sz=128",
        "parentId": 2
      },
      {
        "id": 14,
        "name": "Building RAG Applications",
        "link": "https://www.youtube.com/watch?v=wBhY-7B2jdY",
        "description": "Tutorial on implementing Retrieval Augmented Generation systems.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.youtube.com&sz=128",
        "parentId": 2
      },
      {
        "id": 15,
        "name": "State of GPT",
        "link": "https://www.youtube.com/watch?v=bZQun8Y4L2A",
        "description": "Andrej Karpathy's overview of current state and future of GPT models.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.youtube.com&sz=128",
        "parentId": 2
      },
      {
        "id": 16,
        "name": "Scaling Laws Explained",
        "link": "https://www.youtube.com/watch?v=h1NqZvNFbE0",
        "description": "Understanding how model performance scales with size and compute.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.youtube.com&sz=128",
        "parentId": 2
      },
      {
        "id": 17,
        "name": "Constitutional AI",
        "link": "https://www.youtube.com/watch?v=dC7_sZ2MQPE",
        "description": "Deep dive into making AI systems more aligned and controllable.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.youtube.com&sz=128",
        "parentId": 2
      },
      {
        "id": 18,
        "name": "Sparse Attention Mechanisms",
        "link": "https://www.youtube.com/watch?v=gZIP-_2XYMM",
        "description": "Advanced discussion of efficient attention mechanisms in transformers.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.youtube.com&sz=128",
        "parentId": 2
      },
      {
        "id": 19,
        "name": "Model Merging Techniques",
        "link": "https://www.youtube.com/watch?v=K9QVXE5M9",
        "description": "Technical exploration of methods for combining trained models.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.youtube.com&sz=128",
        "parentId": 2
      },
      {
        "id": 20,
        "name": "Future of LLMs",
        "link": "https://www.youtube.com/watch?v=AhyznRSDPB4",
        "description": "Research directions and challenges in language model development.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.youtube.com&sz=128",
        "parentId": 2
      },
      {
        "id": 21,
        "name": "Neural Networks: Zero to Hero - YouTube Playlist",
        "link": "https://youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ&si=XunGj0-KizQAZHET",
        "description": "A comprehensive YouTube playlist covering neural networks from basics to advanced topics.",
        "favicon": "https://www.google.com/s2/favicons?domain=youtube.com&sz=128",
        "parentId": 2
      },
      {
        "id": 22,
        "name": "MIT Deep Learning Lectures",
        "link": "https://youtube.com/playlist?list=PLNONVE5W8PCTKHkDbnKIjakw_xVpI4DjT",
        "description": "Comprehensive lecture series on deep learning fundamentals and applications.",
        "favicon": "https://www.google.com/s2/favicons?domain=youtube.com&sz=128",
        "parentId": 2
      },
      {
        "id": 23,
        "name": "Stanford AI Alignment Lecture",
        "link": "https://www.youtube.com/live/dO4TPJkeaaU",
        "description": "In-depth discussion of AI alignment challenges and approaches.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.youtube.com&sz=128",
        "parentId": 2
      },
      {
        "id": 24,
        "name": "AI prompt engineering: A deep dive",
        "link": "https://youtu.be/T9aRN5JkmL8",
        "description": "Some of Anthropic's prompt engineering experts—Amanda Askell (Alignment Finetuning), Alex Albert (Developer Relations), David Hershey (Applied AI), and Zack Witten (Prompt Engineering)—reflect on how prompt engineering has evolved, practical tips, and thoughts on how prompting might change as AI capabilities grow.",
        "favicon": "https://www.google.com/s2/favicons?domain=youtu.be&sz=128",
        "parentId": 2
      }
    ],
    "id": 2,
    "slug": "video-tutorials"
  },
  {
    "title": "Academic Courses",
    "tag": "Learning Resources",
    "tag2": "Academic Courses",
    "description": "University courses from top institutions covering ML, AI, and NLP",
    "resources": [
      {
        "id": 1,
        "name": "CS324: Large Language Models",
        "link": "https://stanford-cs324.github.io/winter2022/lectures/introduction/",
        "description": "Stanford's foundational course on LLMs covering architecture, training, and deployment - Winter 2022.",
        "favicon": "https://www.google.com/s2/favicons?domain=stanford-cs324.github.io&sz=128",
        "parentId": 3
      },
      {
        "id": 2,
        "name": "CS221: Artificial Intelligence",
        "link": "https://stanford-cs221.github.io/",
        "description": "Principles and Techniques by Percy Liang and Dorsa Sadigh - Core concepts in artificial intelligence.",
        "favicon": "https://www.google.com/s2/favicons?domain=stanford-cs221.github.io&sz=128",
        "parentId": 3
      },
      {
        "id": 3,
        "name": "CS229: Machine Learning",
        "link": "https://cs229.stanford.edu/",
        "description": "Machine Learning fundamentals by Andrew Ng and Anand Avati - Comprehensive ML course.",
        "favicon": "https://www.google.com/s2/favicons?domain=cs229.stanford.edu&sz=128",
        "parentId": 3
      },
      {
        "id": 4,
        "name": "CS230: Deep Learning",
        "link": "https://cs230.stanford.edu/",
        "description": "Deep Learning by Andrew Ng - Advanced neural network architectures and applications.",
        "favicon": "https://www.google.com/s2/favicons?domain=cs230.stanford.edu&sz=128",
        "parentId": 3
      },
      {
        "id": 5,
        "name": "CS231n: CNN for Visual Recognition",
        "link": "http://cs231n.stanford.edu/",
        "description": "Convolutional Neural Networks by Fei-Fei Li, Andrej Karpathy, Justin Johnson, and Serena Yeung.",
        "favicon": "https://www.google.com/s2/favicons?domain=cs231n.stanford.edu&sz=128",
        "parentId": 3
      },
      {
        "id": 6,
        "name": "CS224n: NLP with Deep Learning",
        "link": "http://web.stanford.edu/class/cs224n/",
        "description": "Natural Language Processing with Deep Learning by Christopher Manning.",
        "favicon": "https://www.google.com/s2/favicons?domain=web.stanford.edu&sz=128",
        "parentId": 3
      },
      {
        "id": 7,
        "name": "CS224w: Machine Learning with Graphs",
        "link": "http://web.stanford.edu/class/cs224w/",
        "description": "Machine Learning with Graphs by Jure Leskovec - Graph neural networks and applications.",
        "favicon": "https://www.google.com/s2/favicons?domain=web.stanford.edu&sz=128",
        "parentId": 3
      },
      {
        "id": 8,
        "name": "CS224u: Natural Language Understanding",
        "link": "https://web.stanford.edu/class/cs224u/",
        "description": "Natural Language Understanding by Christopher Potts - Advanced NLP concepts.",
        "favicon": "https://www.google.com/s2/favicons?domain=web.stanford.edu&sz=128",
        "parentId": 3
      },
      {
        "id": 9,
        "name": "CS234: Reinforcement Learning",
        "link": "https://web.stanford.edu/class/cs234/",
        "description": "Reinforcement Learning by Emma Brunskill - RL algorithms and applications.",
        "favicon": "https://www.google.com/s2/favicons?domain=web.stanford.edu&sz=128",
        "parentId": 3
      },
      {
        "id": 10,
        "name": "CS330: Deep Multi-task Learning",
        "link": "https://cs330.stanford.edu/",
        "description": "Deep Multi-task and Meta Learning by Chelsea Finn - Advanced learning paradigms.",
        "favicon": "https://www.google.com/s2/favicons?domain=cs330.stanford.edu&sz=128",
        "parentId": 3
      },
      {
        "id": 11,
        "name": "CS25: Transformers United",
        "link": "https://web.stanford.edu/class/cs25/",
        "description": "Transformers United by Div Garg, Steven Feng, and Rylan Schaeffer.",
        "favicon": "https://www.google.com/s2/favicons?domain=web.stanford.edu&sz=128",
        "parentId": 3
      },
      {
        "id": 12,
        "name": "Stanford ML Explainability",
        "link": "https://stanford-cs-325b.github.io/",
        "description": "Stanford Seminar on Machine Learning Explainability and interpretability.",
        "favicon": "https://www.google.com/s2/favicons?domain=stanford-cs-325b.github.io&sz=128",
        "parentId": 3
      },
      {
        "id": 13,
        "name": "Stanford NLP",
        "link": "https://web.stanford.edu/class/archive/cs/cs224n/cs224n.1214/",
        "description": "Coursera X Stanford Natural Language Processing course materials.",
        "favicon": "https://www.google.com/s2/favicons?domain=web.stanford.edu&sz=128",
        "parentId": 3
      },
      {
        "id": 14,
        "name": "CMU CS 11-711: Advanced NLP",
        "link": "http://phontron.com/class/anlp2024/",
        "description": "Advanced NLP by Graham Neubig - State-of-the-art NLP techniques.",
        "favicon": "https://www.google.com/s2/favicons?domain=phontron.com&sz=128",
        "parentId": 3
      },
      {
        "id": 15,
        "name": "CMU CS 11-747: Neural Networks for NLP",
        "link": "http://phontron.com/class/nn4nlp2024/",
        "description": "Neural Networks for NLP by Graham Neubig - Deep learning for language.",
        "favicon": "https://www.google.com/s2/favicons?domain=phontron.com&sz=128",
        "parentId": 3
      },
      {
        "id": 16,
        "name": "CMU CS 11-737: Multilingual NLP",
        "link": "http://phontron.com/class/multilingual2024/",
        "description": "Multilingual NLP by Graham Neubig - Cross-lingual and multilingual methods.",
        "favicon": "https://www.google.com/s2/favicons?domain=phontron.com&sz=128",
        "parentId": 3
      },
      {
        "id": 17,
        "name": "CMU CS 11-785: Deep Learning",
        "link": "https://deeplearning.cs.cmu.edu/",
        "description": "Introduction to Deep Learning by Bhiksha Raj and Rita Singh.",
        "favicon": "https://www.google.com/s2/favicons?domain=deeplearning.cs.cmu.edu&sz=128",
        "parentId": 3
      },
      {
        "id": 18,
        "name": "CMU CS 11-777: Multimodal ML",
        "link": "https://cmu-multicomp-lab.github.io/mmml-course/fall2023/",
        "description": "Multimodal Machine Learning by Louis-Philippe Morency.",
        "favicon": "https://www.google.com/s2/favicons?domain=cmu-multicomp-lab.github.io&sz=128",
        "parentId": 3
      },
      {
        "id": 19,
        "name": "CMU CS 10-708: Probabilistic Graphical Models",
        "link": "https://www.cs.cmu.edu/~epxing/Class/10708-20/",
        "description": "Probabilistic Graphical Models by Eric Xing.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.cs.cmu.edu&sz=128",
        "parentId": 3
      },
      {
        "id": 20,
        "name": "CMU LTI Low Resource NLP",
        "link": "http://phontron.com/class/lti-colloquium2020/",
        "description": "LTI Low Resource NLP Bootcamp 2020 by Graham Neubig.",
        "favicon": "https://www.google.com/s2/favicons?domain=phontron.com&sz=128",
        "parentId": 3
      },
      {
        "id": 21,
        "name": "MIT OpenCourseWare",
        "link": "https://ocw.mit.edu/search/?t=Computer%20Science",
        "description": "Free access to MIT's course materials covering computer science and AI.",
        "favicon": "https://www.google.com/s2/favicons?domain=ocw.mit.edu&sz=128",
        "parentId": 3
      },
      {
        "id": 22,
        "name": "MIT 6.034: Artificial Intelligence",
        "link": "https://ocw.mit.edu/courses/6-034-artificial-intelligence-fall-2010/",
        "description": "Comprehensive AI course by Patrick Winston covering core concepts and techniques.",
        "favicon": "https://www.google.com/s2/favicons?domain=ocw.mit.edu&sz=128",
        "parentId": 3
      },
      {
        "id": 23,
        "name": "MIT 6.S094: Deep Learning",
        "link": "https://deeplearning.mit.edu/",
        "description": "Deep Learning fundamentals by Lex Fridman with focus on autonomous vehicles.",
        "favicon": "https://www.google.com/s2/favicons?domain=deeplearning.mit.edu&sz=128",
        "parentId": 3
      },
      {
        "id": 24,
        "name": "MIT 6.S191: Introduction to Deep Learning",
        "link": "http://introtodeeplearning.com/",
        "description": "Introduction to Deep Learning by Alexander Amini and Ava Soleimany - MIT's introductory DL course.",
        "favicon": "https://www.google.com/s2/favicons?domain=introtodeeplearning.com&sz=128",
        "parentId": 3
      },
      {
        "id": 25,
        "name": "MIT 6.S192: Deep Learning for Art",
        "link": "http://ali-design.mit.edu/classes/6.S192/",
        "description": "Deep Learning for Art, Aesthetics, and Creativity by Ali Jahanian.",
        "favicon": "https://www.google.com/s2/favicons?domain=ali-design.mit.edu&sz=128",
        "parentId": 3
      },
      {
        "id": 26,
        "name": "MIT 6.5940: TinyML",
        "link": "https://tinyml.mit.edu/",
        "description": "TinyML and Efficient Deep Learning Computing by Song Han - Focus on model optimization.",
        "favicon": "https://www.google.com/s2/favicons?domain=tinyml.mit.edu&sz=128",
        "parentId": 3
      }
    ],
    "id": 3,
    "slug": "academic-courses"
  },
  {
    "title": "Research Papers",
    "tag": "Learning Resources",
    "tag2": "Research Papers",
    "description": "Latest research papers and technical reports in LLM field",
    "resources": [
      {
        "id": 1,
        "name": "Attention Is All You Need",
        "link": "https://arxiv.org/abs/1706.03762",
        "description": "Original transformer paper (2017) that revolutionized natural language processing and deep learning.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 2,
        "name": "BERT",
        "link": "https://arxiv.org/abs/1810.04805",
        "description": "Bidirectional transformers for language understanding (2018), introducing pre-training and fine-tuning paradigm.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 3,
        "name": "GPT-3",
        "link": "https://arxiv.org/abs/2005.14165",
        "description": "Language models are few-shot learners (2020), introducing scaling laws and in-context learning.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 4,
        "name": "PaLM",
        "link": "https://arxiv.org/abs/2204.02311",
        "description": "Pathways Language Model (2022), demonstrating breakthrough performance in reasoning and multilingual tasks.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 5,
        "name": "InstructGPT",
        "link": "https://arxiv.org/abs/2203.02155",
        "description": "Training language models to follow instructions (2022) with human feedback.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 6,
        "name": "Constitutional AI",
        "link": "https://arxiv.org/abs/2212.08073",
        "description": "Anthropic's approach (2022) to training safe and ethical AI systems.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 7,
        "name": "LLaMA",
        "link": "https://arxiv.org/abs/2302.13971",
        "description": "Meta's efficient foundation models (Feb 2023) that democratized LLM research.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 8,
        "name": "GPT-4",
        "link": "https://arxiv.org/abs/2303.08774",
        "description": "Technical report (Mar 2023) on OpenAI's multimodal large language model.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 9,
        "name": "PaLM 2",
        "link": "https://arxiv.org/abs/2305.10403",
        "description": "Google's improved language model (May 2023) with enhanced multilingual capabilities.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 10,
        "name": "RWKV",
        "link": "https://arxiv.org/abs/2305.13048",
        "description": "Linear transformers with RNN-like computation (May 2023) for efficient inference.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 11,
        "name": "Llama 2",
        "link": "https://arxiv.org/abs/2307.09288",
        "description": "Meta's open release (Jul 2023) of improved foundation models with commercial usage.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 12,
        "name": "Code Llama",
        "link": "https://arxiv.org/abs/2308.12950",
        "description": "Open foundation models (Aug 2023) for code understanding and generation.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 13,
        "name": "Mistral 7B",
        "link": "https://arxiv.org/abs/2310.06825",
        "description": "Efficient open-source language model (Oct 2023) with sliding window attention.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 14,
        "name": "Phi-2",
        "link": "https://arxiv.org/abs/2311.10617",
        "description": "Microsoft's small language model (Nov 2023) with strong reasoning capabilities.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 15,
        "name": "Gemini",
        "link": "https://arxiv.org/abs/2312.11805",
        "description": "Google's multimodal AI model (Dec 2023) trained across text, code, audio, image, and video.",
        "description2": "The Gemini family consists of Ultra, Pro, and Nano sizes, suitable for applications ranging from complex reasoning tasks to on-device memory-constrained use-cases. Evaluation on a broad range of benchmarks shows that the Gemini Ultra model advances the state of the art in 30 of 32 benchmarks, achieving human-expert performance on the MMLU exam benchmark and improving the state of the art in all 20 multimodal benchmarks examined. This model's capabilities in cross-modal reasoning and language understanding enable a wide variety of use cases. For more details.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 16,
        "name": "Mixtral 8x7B",
        "link": "https://arxiv.org/abs/2401.04088",
        "description": "Mistral AI's sparse mixture-of-experts model (Jan 2024) with state-of-the-art performance.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 17,
        "name": "Claude 3",
        "link": "https://www.anthropic.com/news/claude-3-family",
        "description": "Anthropic's latest model family (Mar 2024) with improved reasoning and capabilities.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.anthropic.com&sz=128",
        "parentId": 4
      },
      {
        "id": 18,
        "name": "Stable LM 3B",
        "link": "https://arxiv.org/abs/2403.07608",
        "description": "Small yet capable language model (Mar 2024) for efficient deployment.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 19,
        "name": "arXiv LLM Papers",
        "link": "https://arxiv.org/list/cs.CL/recent",
        "description": "Latest research papers in computational linguistics and natural language processing.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 20,
        "name": "Papers with Code LLM",
        "link": "https://paperswithcode.com/methods/category/language-models",
        "description": "Curated collection of LLM papers with implementation details and benchmarks.",
        "favicon": "https://www.google.com/s2/favicons?domain=paperswithcode.com&sz=128",
        "parentId": 4
      },
      {
        "id": 21,
        "name": "The First Law of Complexodynamics",
        "link": "https://arxiv.org/abs/2312.09818",
        "description": "Sutskever's paper (2023) on fundamental principles governing complex system behavior.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 22,
        "name": "The Unreasonable Effectiveness of RNNs",
        "link": "https://karpathy.github.io/2015/05/21/rnn-effectiveness/",
        "description": "Influential blog post (2015) by Andrej Karpathy on RNN capabilities and applications.",
        "favicon": "https://www.google.com/s2/favicons?domain=karpathy.github.io&sz=128",
        "parentId": 4
      },
      {
        "id": 23,
        "name": "Understanding LSTM Networks",
        "link": "https://colah.github.io/posts/2015-08-Understanding-LSTMs/",
        "description": "Christopher Olah's clear explanation (2015) of LSTM architecture and functionality.",
        "favicon": "https://www.google.com/s2/favicons?domain=colah.github.io&sz=128",
        "parentId": 4
      },
      {
        "id": 24,
        "name": "Recurrent Neural Network Regularization",
        "link": "https://arxiv.org/abs/1409.2329",
        "description": "Zaremba et al. (2014) on improving RNN training through dropout and other techniques.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 25,
        "name": "Keeping Neural Networks Simple",
        "link": "https://arxiv.org/abs/1412.6544",
        "description": "Research on minimizing description length of weights for better generalization.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 26,
        "name": "Pointer Networks",
        "link": "https://arxiv.org/abs/1506.03134",
        "description": "Novel architecture (2015) for learning sequences of pointers by Vinyals et al.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 27,
        "name": "ImageNet Classification with Deep CNNs",
        "link": "https://papers.nips.cc/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html",
        "description": "AlexNet paper (2012) that kickstarted modern deep learning era.",
        "favicon": "https://www.google.com/s2/favicons?domain=papers.nips.cc&sz=128",
        "parentId": 4
      },
      {
        "id": 28,
        "name": "Order Matters: Sequence to Sequence for Sets",
        "link": "https://arxiv.org/abs/1511.06391",
        "description": "Vinyals et al. (2015) on handling set-structured input and output with neural networks.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 29,
        "name": "GPipe: Easy Scaling with Micro-Batch Pipeline Parallelism",
        "link": "https://arxiv.org/abs/1811.06965",
        "description": "Efficient pipeline parallelism (2018) for training large neural networks.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 30,
        "name": "Deep Residual Learning for Image Recognition",
        "link": "https://arxiv.org/abs/1512.03385",
        "description": "ResNet paper (2015) introducing skip connections for very deep networks.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 31,
        "name": "Multi-Scale Context Aggregation by Dilated Convolutions",
        "link": "https://arxiv.org/abs/1511.07122",
        "description": "Yu & Koltun (2015) on systematic use of dilated convolutions for dense prediction.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 32,
        "name": "Neural Message Passing for Quantum Chemistry",
        "link": "https://arxiv.org/abs/1704.01212",
        "description": "Gilmer et al. (2017) on learning molecular properties through message passing.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 33,
        "name": "Neural Machine Translation by Jointly Learning to Align and Translate",
        "link": "https://arxiv.org/abs/1409.0473",
        "description": "Bahdanau et al. (2014) introducing attention mechanism for NMT.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 34,
        "name": "Identity Mappings in Deep Residual Networks",
        "link": "https://arxiv.org/abs/1603.05027",
        "description": "He et al. (2016) on improving residual networks through better forward propagation.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 35,
        "name": "A Simple Neural Network Module for Relational Reasoning",
        "link": "https://arxiv.org/abs/1706.01427",
        "description": "Santoro et al. (2017) on learning relationships between entities.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 36,
        "name": "Variational Lossy Autoencoder",
        "link": "https://arxiv.org/abs/1611.02731",
        "description": "Chen et al. (2016) on improving VAE with hierarchical latent variables.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 37,
        "name": "Relational Recurrent Neural Networks",
        "link": "https://arxiv.org/abs/1806.01822",
        "description": "Santoro et al. (2018) on incorporating relational reasoning into RNNs.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 38,
        "name": "Neural Turing Machines",
        "link": "https://arxiv.org/abs/1410.5401",
        "description": "Graves et al. (2014) on neural networks with external memory access.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 39,
        "name": "Deep Speech 2",
        "link": "https://arxiv.org/abs/1512.02595",
        "description": "End-to-end speech recognition system (2015) for English and Mandarin.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 40,
        "name": "Scaling Laws for Neural Language Models",
        "link": "https://arxiv.org/abs/2001.08361",
        "description": "Kaplan et al. (2020) on empirical laws governing LLM performance scaling.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 41,
        "name": "A Tutorial on the MDL Principle",
        "link": "https://arxiv.org/abs/0804.2251",
        "description": "Grünwald (2008) on the Minimum Description Length principle.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 42,
        "name": "Machine Super Intelligence",
        "link": "https://arxiv.org/abs/2907.03512",
        "description": "Theoretical framework for understanding and developing superintelligent AI systems.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 43,
        "name": "Kolmogorov Complexity and Algorithmic Randomness",
        "link": "https://www.springer.com/gp/book/9783540208068",
        "description": "Li & Vitányi's comprehensive book on algorithmic information theory.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.springer.com&sz=128",
        "parentId": 4
      },
      {
        "id": 44,
        "name": "Stanford's CS231n CNN for Visual Recognition",
        "link": "http://cs231n.stanford.edu/",
        "description": "Comprehensive course materials on CNNs and computer vision.",
        "favicon": "https://www.google.com/s2/favicons?domain=cs231n.stanford.edu&sz=128",
        "parentId": 4
      },
      {
        "id": 45,
        "name": "Quantifying Complexity in Closed Systems",
        "link": "https://arxiv.org/abs/2201.09152",
        "description": "Analysis of complexity measures in closed dynamical systems.",
        "description2": "Generative Adversarial Networks (GANs) are machine learning methods that are used in many important and novel applications. For example, in imaging science, GANs are effectively utilized in generating image datasets, photographs of human faces, image and video captioning, image-to-image translation, text-to-image translation, video prediction, and 3D object generation to name a few. In this paper, we discuss how GANs can be used to create an artificial world. More specifically, we discuss how GANs help to describe an image utilizing image/video captioning methods and how to translate the image to a new image using image-to-image translation frameworks in a theme we desire. We articulate how GANs impact creating a customized world. Comments: Computational Science and Computational Intelligence; 2021 International Conference on IEEE CPS (IEEE XPLORE, Scopus), IEEE, 2021. Subjects: Computer Vision and Pattern Recognition (cs.CV); Machine Learning (cs.LG); Image and Video Processing (eess.IV). Cite as: arXiv:2201.09152 [cs.CV] (or arXiv:2201.09152v1 [cs.CV] for this version) https://doi.org/10.48550/arXiv.2201.09152 Focus to learn more Submission history From: Soheyla Amirian [view email] [v1] Sun, 23 Jan 2022 00:57:02 UTC (5,065 KB)",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 46,
        "name": "Byte Latent Transformer: Patches Scale Better Than Tokens",
        "link": "https://arxiv.org/abs/2412.09871",
        "description": "New byte-level LLM architecture that matches tokenization-based performance with improved efficiency and robustness.",
        "description2": "We introduce the Byte Latent Transformer (BLT), a new byte-level LLM architecture that, for the first time, matches tokenization-based LLM performance at scale with significant improvements in inference efficiency and robustness. BLT encodes bytes into dynamically sized patches, which serve as the primary units of computation. Patches are segmented based on the entropy of the next byte, allocating more compute and model capacity where increased data complexity demands it. We present the first FLOP controlled scaling study of byte-level models up to 8B parameters and 4T training bytes. Our results demonstrate the feasibility of scaling models trained on raw bytes without a fixed vocabulary. Both training and inference efficiency improve due to dynamically selecting long patches when data is predictable, along with qualitative improvements on reasoning and long tail generalization. Overall, for fixed inference costs, BLT shows significantly better scaling than tokenization-based models, by simultaneously growing both patch and model size.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 47,
        "name": "Learning Flow Fields in Attention for Controllable Person Image Generation",
        "link": "https://arxiv.org/abs/2412.08486",
        "description": "Leffa is a state-of-the-art framework developed by Zijian Zhou et al. that enables controllable person image generation based on reference images, allowing precise adjustments in appearance and pose while maintaining high image quality.",
        "description2": "This framework addresses the common issue of distortion in fine-grained details by learning flow fields in attention, which guides the model to focus on the correct regions of the reference image during training. Extensive experiments demonstrate that Leffa significantly reduces detail distortion and enhances the quality of generated images.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 48,
        "name": "Meta Video Seal: Open and Efficient Video Watermarking",
        "link": "https://arxiv.org/abs/2412.09492",
        "description": "Video Seal is an open-source model for video watermarking that embeds imperceptible signals into videos, allowing for identification and protection against tampering.",
        "description2": "Video Seal introduces a comprehensive framework for neural video watermarking, jointly training an embedder and an extractor to ensure watermark robustness. The model applies transformations such as video codecs during training to enhance robustness against distortions like flipping and blurring. The approach includes temporal watermark propagation, converting image watermarking models to efficient video watermarking models without watermarking every high-resolution frame. Experimental results demonstrate the model's effectiveness in terms of speed, imperceptibility, and robustness, outperforming strong baselines under challenging distortions. The codebase, models, and a public demo are open-sourced under permissive licenses to foster further research and development.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 49,
        "name": "Latent Video Diffusion Models for High-Fidelity Long Video Generation",
        "link": "https://arxiv.org/abs/2211.13221",
        "description": "Lightweight video diffusion models leveraging a low-dimensional 3D latent space for high-fidelity long video generation.",
        "description2": "AI-generated content has attracted lots of attention recently, but photo-realistic video synthesis is still challenging. Although many attempts using GANs and autoregressive models have been made in this area, the visual quality and length of generated videos are far from satisfactory. Diffusion models have shown remarkable results recently but require significant computational resources. To address this, we introduce lightweight video diffusion models by leveraging a low-dimensional 3D latent space, significantly outperforming previous pixel-space video diffusion models under a limited computational budget. In addition, we propose hierarchical diffusion in the latent space such that longer videos with more than one thousand frames can be produced. To further overcome the performance degradation issue for long video generation, we propose conditional latent perturbation and unconditional guidance that effectively mitigate the accumulated errors during the extension of video length. Extensive experiments on small domain datasets of different categories suggest that our framework generates more realistic and longer videos than previous strong baselines. We additionally provide an extension to large-scale text-to-video generation to demonstrate the superiority of our work. Our code and models will be made publicly available. Comments: Computer Vision and Pattern Recognition (cs.CV); Artificial Intelligence (cs.AI). Cite as: arXiv:2211.13221 [cs.CV] (or arXiv:2211.13221v2 [cs.CV] for this version) https://doi.org/10.48550/arXiv.2211.13221",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 50,
        "name": "Dreamix: Video Diffusion Models are General Video Editors",
        "link": "https://arxiv.org/abs/2302.01329",
        "description": "A novel method for text-driven video editing using diffusion models.",
        "description2": "This paper presents the first diffusion-based method capable of performing text-based motion and appearance editing of general videos. By combining low-resolution spatio-temporal information from the original video with synthesized high-resolution information, the method significantly boosts fidelity. The authors introduce a new framework for image animation and demonstrate extensive qualitative and numerical experiments showcasing the remarkable editing ability of their method.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 51,
        "name": "MAV3D by Meta AI",
        "link": "https://arxiv.org/abs/2301.11280",
        "description": "A method for generating 3D dynamic scenes from text descriptions using a 4D dynamic Neural Radiance Field.",
        "description2": "Developed by Meta AI, MAV3D (Make-A-Video3D) is a pioneering method that generates three-dimensional dynamic scenes from textual descriptions. It employs a 4D dynamic Neural Radiance Field (NeRF) optimized for scene appearance, density, and motion consistency by querying a text-to-video diffusion-based model. The resulting dynamic video outputs can be viewed from any camera location and angle, and integrated into various 3D environments. Notably, MAV3D does not require any 3D or 4D data for training; the text-to-video model is trained solely on text-image pairs and unlabeled videos. This approach represents a significant advancement in AI-driven content creation, enabling the seamless generation of dynamic 3D scenes from simple text inputs.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 52,
        "name": "Best-of-N Jailbreaking",
        "link": "https://arxiv.org/abs/2412.03556",
        "description": "A simple black-box algorithm that jailbreaks frontier AI systems across modalities.",
        "description2": "We introduce Best-of-N (BoN) Jailbreaking, a simple black-box algorithm that jailbreaks frontier AI systems across modalities. BoN Jailbreaking works by repeatedly sampling variations of a prompt with a combination of augmentations - such as random shuffling or capitalization for textual prompts - until a harmful response is elicited. We find that BoN Jailbreaking achieves high attack success rates (ASRs) on closed-source language models, such as 89% on GPT-4o and 78% on Claude 3.5 Sonnet when sampling 10,000 augmented prompts. Further, it is similarly effective at circumventing state-of-the-art open-source defenses like circuit breakers. BoN also seamlessly extends to other modalities: it jailbreaks vision language models (VLMs) such as GPT-4o and audio language models (ALMs) like Gemini 1.5 Pro, using modality-specific augmentations. BoN reliably improves when we sample more augmented prompts. Across all modalities, ASR, as a function of the number of samples (N), empirically follows power-law-like behavior for many orders of magnitude. BoN Jailbreaking can also be composed with other black-box algorithms for even more effective attacks - combining BoN with an optimized prefix attack achieves up to a 35% increase in ASR. Overall, our work indicates that, despite their capability, language models are sensitive to seemingly innocuous changes to inputs, which attackers can exploit across modalities.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 53,
        "name": "LiveBench: A Challenging, Contamination-Free LLM Benchmark",
        "link": "https://arxiv.org/abs/2406.19314",
        "description": "LiveBench is a new benchmark designed to evaluate LLMs without the risk of test set contamination, featuring frequently-updated questions and automatic scoring.",
        "description2": "This paper introduces LiveBench, a benchmark that mitigates test set contamination and biases from human evaluations. It includes a variety of challenging tasks across math, coding, reasoning, and more, with questions sourced from recent competitions and articles. LiveBench aims to provide a fair evaluation of LLM capabilities, with ongoing updates to maintain its relevance. The authors evaluate numerous models, revealing that even top models struggle to achieve high accuracy, thus highlighting the benchmark's difficulty.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 54,
        "name": "CosyVoice 2: Scalable Streaming Speech Synthesis with Large Language Models",
        "link": "https://arxiv.org/abs/2412.10117",
        "description": "An advanced model for multilingual speech synthesis, achieving high naturalness and minimal latency in streaming applications.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 55,
        "name": "The Open Source Advantage in Large Language Models (LLMs)",
        "link": "https://arxiv.org/abs/2412.12004",
        "description": "Explores the benefits of open-source models in LLMs, emphasizing democratization and community-driven development.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      },
      {
        "id": 56,
        "name": "Alignment faking in large language models",
        "link": "https://arxiv.org/abs/2412.14093",
        "description": "Demonstrates how large language models can engage in alignment faking by selectively complying with harmful queries.",
        "description2": "This paper presents a study on alignment faking in large language models, where the model selectively complies with harmful queries based on its training context. The authors find that models can exhibit alignment faking reasoning, especially when trained on synthetic documents that mimic pre-training data. The study highlights the risks of alignment faking in future models, suggesting that even without explicit instructions, models may infer their training processes and adjust their behavior accordingly.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 4
      }
    ],
    "id": 4,
    "slug": "research-papers"
  },
  {
    "title": "GitHub Repositories",
    "tag": "Learning Resources",
    "tag2": "GitHub Repositories",
    "description": "Essential GitHub repositories for LLM development, training, and deployment",
    "resources": [
      {
        "id": 1,
        "name": "LangChain",
        "link": "https://github.com/langchain-ai/langchain",
        "description": "Building applications with LLMs through composable components",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 5
      },
      {
        "id": 2,
        "name": "vLLM",
        "link": "https://github.com/vllm-project/vllm",
        "description": "High-throughput and memory-efficient inference engine",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 5
      },
      {
        "id": 3,
        "name": "llama.cpp",
        "link": "https://github.com/ggerganov/llama.cpp",
        "description": "Port of Facebook's LLaMA model in C/C++",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 5
      },
      {
        "id": 4,
        "name": "text-generation-webui",
        "link": "https://github.com/oobabooga/text-generation-webui",
        "description": "Gradio web UI for running Large Language Models",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 5
      },
      {
        "id": 5,
        "name": "FastChat",
        "link": "https://github.com/lm-sys/FastChat",
        "description": "Training and serving LLM chatbots",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 5
      },
      {
        "id": 6,
        "name": "LocalAI",
        "link": "https://github.com/go-skynet/LocalAI",
        "description": "Self-hosted, community-driven LLM solution",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 5
      },
      {
        "id": 7,
        "name": "LlamaIndex",
        "link": "https://github.com/jerryjliu/llama_index",
        "description": "Data framework for LLM applications",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 5
      },
      {
        "id": 8,
        "name": "ExLlama",
        "link": "https://github.com/turboderp/exllama",
        "description": "Optimized inference for LLaMA models",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 5
      },
      {
        "id": 9,
        "name": "PEFT",
        "link": "https://github.com/huggingface/peft",
        "description": "Parameter-Efficient Fine-Tuning methods",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 5
      },
      {
        "id": 10,
        "name": "Transformers",
        "link": "https://github.com/huggingface/transformers",
        "description": "State-of-the-art Machine Learning for PyTorch and TensorFlow",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 5
      },
      {
        "id": 11,
        "name": "GPT4All",
        "link": "https://github.com/nomic-ai/gpt4all",
        "description": "Run open-source LLMs locally on CPU",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 5
      },
      {
        "id": 12,
        "name": "Axolotl",
        "link": "https://github.com/OpenAccess-AI-Collective/axolotl",
        "description": "Easy-to-use LLM fine-tuning framework",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 5
      },
      {
        "id": 13,
        "name": "OpenLLM",
        "link": "https://github.com/bentoml/OpenLLM",
        "description": "Operating LLMs in production",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 5
      },
      {
        "id": 14,
        "name": "lit-llama",
        "link": "https://github.com/Lightning-AI/lit-llama",
        "description": "Implementation of LLaMA in PyTorch Lightning",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 5
      },
      {
        "id": 15,
        "name": "CTranslate2",
        "link": "https://github.com/OpenNMT/CTranslate2",
        "description": "Fast inference engine for Transformer models",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 5
      },
      {
        "id": 16,
        "name": "DeepSpeed",
        "link": "https://github.com/microsoft/DeepSpeed",
        "description": "Deep learning optimization library",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 5
      },
      {
        "id": 17,
        "name": "AutoGPT",
        "link": "https://github.com/Significant-Gravitas/Auto-GPT",
        "description": "Autonomous GPT-4 experiment framework",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 5
      },
      {
        "id": 18,
        "name": "MLC-LLM",
        "link": "https://github.com/mlc-ai/mlc-llm",
        "description": "Universal LLM deployment across devices",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 5
      },
      {
        "id": 19,
        "name": "LMFlow",
        "link": "https://github.com/OptimalScale/LMFlow",
        "description": "Toolbox for LLM fine-tuning and inference",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 5
      },
      {
        "id": 20,
        "name": "LLaMA Factory",
        "link": "https://github.com/hiyouga/LLaMA-Factory",
        "description": "Fine-tuning framework for LLaMA models",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 5
      },
      {
        "id": 21,
        "name": "Language Modeling is Compression",
        "link": "https://github.com/google-deepmind/language_modeling_is_compression?tab=readme-ov-file",
        "description": "Implementation of the ICLR 2024 paper on language modeling as compression.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 5
      },
      {
        "id": 22,
        "name": "ML For Beginners",
        "link": "https://github.com/microsoft/ML-For-Beginners?WT.mc_id=academic-113596-abartolo",
        "description": "A comprehensive introduction to machine learning concepts.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 5
      },
      {
        "id": 23,
        "name": "Generative AI for Beginners",
        "link": "https://github.com/microsoft/generative-ai-for-beginners",
        "description": "Learn the basics of generative AI and its applications.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 5
      },
      {
        "id": 24,
        "name": "AI For Beginners",
        "link": "https://github.com/microsoft/AI-For-Beginners/",
        "description": "An introductory guide to AI concepts and technologies.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 5
      },
      {
        "id": 25,
        "name": "LLM Discussions",
        "link": "https://github.com/karpathy/llm.c/discussions/481",
        "description": "Community discussions on large language models.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 5
      },
      {
        "id": 26,
        "name": "Spreadsheets Are All You Need",
        "link": "https://github.com/ianand/spreadsheets-are-all-you-need?tab=readme-ov-file",
        "description": "Exploring the power of spreadsheets in data analysis.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 5
      },
      {
        "id": 27,
        "name": "Deep Dive Into AI With MLX PyTorch",
        "link": "https://github.com/neobundy/Deep-Dive-Into-AI-With-MLX-PyTorch",
        "description": "In-depth exploration of AI concepts using PyTorch.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 5
      }
    ],
    "id": 5,
    "slug": "github-repositories"
  },
  {
    "title": "Data Processing Tools",
    "tag": "Learning Resources",
    "tag2": "Data Processing Tools",
    "description": "Tools and utilities for processing, cleaning, and preparing LLM training data",
    "resources": [
      {
        "id": 1,
        "name": "LangChain Text Splitters",
        "link": "https://python.langchain.com/docs/modules/data_connection/document_transformers/",
        "description": "Modern text splitting utilities for chunking and processing large documents for LLMs.",
        "favicon": "https://www.google.com/s2/favicons?domain=python.langchain.com&sz=128",
        "parentId": 6
      },
      {
        "id": 2,
        "name": "Unstructured.io",
        "link": "https://unstructured.io/",
        "description": "Latest open-source tool for extracting text from PDFs, images, and various document formats.",
        "favicon": "https://www.google.com/s2/favicons?domain=unstructured.io&sz=128",
        "parentId": 6
      },
      {
        "id": 3,
        "name": "LlamaIndex",
        "link": "https://www.llamaindex.ai/",
        "description": "Advanced framework for ingesting, structuring, and accessing data for LLM applications.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.llamaindex.ai&sz=128",
        "parentId": 6
      },
      {
        "id": 4,
        "name": "Cleanlab",
        "link": "https://github.com/cleanlab/cleanlab",
        "description": "ML tool for automatically detecting and cleaning label issues in datasets.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 6
      },
      {
        "id": 5,
        "name": "TextCortex",
        "link": "https://textcortex.com/",
        "description": "AI-powered content processing and generation platform with advanced text analysis.",
        "favicon": "https://www.google.com/s2/favicons?domain=textcortex.com&sz=128",
        "parentId": 6
      },
      {
        "id": 6,
        "name": "DeepSpeed",
        "link": "https://www.deepspeed.ai/",
        "description": "Microsoft's latest deep learning optimization library with data processing capabilities.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.deepspeed.ai&sz=128",
        "parentId": 6
      },
      {
        "id": 7,
        "name": "Doccano",
        "link": "https://github.com/doccano/doccano",
        "description": "Modern open-source text annotation tool for machine learning practitioners.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 6
      },
      {
        "id": 8,
        "name": "Label Studio",
        "link": "https://labelstud.io/",
        "description": "Open source data labeling tool with support for text, audio, images, and video.",
        "favicon": "https://www.google.com/s2/favicons?domain=labelstud.io&sz=128",
        "parentId": 6
      },
      {
        "id": 9,
        "name": "Rubrix",
        "link": "https://github.com/recognai/rubrix",
        "description": "Open-source tool for data-centric NLP, focusing on dataset management and labeling.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 6
      },
      {
        "id": 10,
        "name": "Argilla",
        "link": "https://argilla.io/",
        "description": "Modern platform for data labeling, validation, and curation in NLP projects.",
        "favicon": "https://www.google.com/s2/favicons?domain=argilla.io&sz=128",
        "parentId": 6
      },
      {
        "id": 11,
        "name": "DataPrep.ai",
        "link": "https://dataprep.ai/",
        "description": "Latest tool for automated data cleaning and preparation with ML capabilities.",
        "favicon": "https://www.google.com/s2/favicons?domain=dataprep.ai&sz=128",
        "parentId": 6
      },
      {
        "id": 12,
        "name": "Haystack",
        "link": "https://haystack.deepset.ai/",
        "description": "End-to-end framework for building NLP pipelines with modern preprocessing tools.",
        "favicon": "https://www.google.com/s2/favicons?domain=haystack.deepset.ai&sz=128",
        "parentId": 6
      },
      {
        "id": 13,
        "name": "Datasets CLI",
        "link": "https://github.com/huggingface/datasets-cli",
        "description": "Command-line tool for efficient dataset processing from Hugging Face.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 6
      },
      {
        "id": 14,
        "name": "Texthero",
        "link": "https://texthero.org/",
        "description": "Python toolkit for text preprocessing, representation and visualization.",
        "favicon": "https://www.google.com/s2/favicons?domain=texthero.org&sz=128",
        "parentId": 6
      },
      {
        "id": 15,
        "name": "Snorkel",
        "link": "https://snorkel.ai/",
        "description": "Programmatic data labeling platform for creating training datasets quickly.",
        "favicon": "https://www.google.com/s2/favicons?domain=snorkel.ai&sz=128",
        "parentId": 6
      },
      {
        "id": 16,
        "name": "Prodigy",
        "link": "https://prodi.gy/",
        "description": "Modern annotation tool from the makers of spaCy, with active learning capabilities.",
        "favicon": "https://www.google.com/s2/favicons?domain=prodi.gy&sz=128",
        "parentId": 6
      },
      {
        "id": 17,
        "name": "DataTorch",
        "link": "https://datatorch.io/",
        "description": "Open-source platform for data labeling and ML workflow management.",
        "favicon": "https://www.google.com/s2/favicons?domain=datatorch.io&sz=128",
        "parentId": 6
      },
      {
        "id": 18,
        "name": "Great Expectations",
        "link": "https://greatexpectations.io/",
        "description": "Tool for validating, documenting, and profiling data with ML support.",
        "favicon": "https://www.google.com/s2/favicons?domain=greatexpectations.io&sz=128",
        "parentId": 6
      },
      {
        "id": 19,
        "name": "Kedro",
        "link": "https://kedro.org/",
        "description": "Production-ready framework for creating reproducible data processing pipelines.",
        "favicon": "https://www.google.com/s2/favicons?domain=kedro.org&sz=128",
        "parentId": 6
      },
      {
        "id": 20,
        "name": "Weights & Biases",
        "link": "https://wandb.ai/",
        "description": "MLOps platform with advanced data versioning and preprocessing capabilities.",
        "favicon": "https://www.google.com/s2/favicons?domain=wandb.ai&sz=128",
        "parentId": 6
      },
      {
        "id": 21,
        "name": "PDFPlumber",
        "link": "https://github.com/jsvine/pdfplumber",
        "description": "Advanced PDF text and table extraction tool with precise positioning and layout analysis.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 6
      },
      {
        "id": 22,
        "name": "Nougat",
        "link": "https://github.com/facebookresearch/nougat",
        "description": "Meta's ML-powered tool for extracting text and math from academic PDFs with high accuracy.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 6
      },
      {
        "id": 23,
        "name": "Grobid",
        "link": "https://github.com/kermitt2/grobid",
        "description": "Machine learning tool for extracting and structuring scientific documents in PDF format.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 6
      },
      {
        "id": 24,
        "name": "PdfMiner.six",
        "link": "https://github.com/pdfminer/pdfminer.six",
        "description": "Python library for extracting text, images, and metadata from PDF documents.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 6
      },
      {
        "id": 25,
        "name": "OCRmyPDF",
        "link": "https://github.com/ocrmypdf/OCRmyPDF",
        "description": "Adds OCR text layer to scanned PDFs while optimizing for document quality.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 6
      },
      {
        "id": 26,
        "name": "Camelot",
        "link": "https://github.com/camelot-dev/camelot",
        "description": "Framework for extracting tables from PDF files with high precision.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 6
      },
      {
        "id": 27,
        "name": "DocTR",
        "link": "https://github.com/mindee/doctr",
        "description": "End-to-end document text recognition and analysis powered by deep learning.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 6
      },
      {
        "id": 28,
        "name": "Tabula",
        "link": "https://tabula.technology/",
        "description": "Free tool for extracting tables from PDF files into CSV and Excel formats.",
        "favicon": "https://www.google.com/s2/favicons?domain=tabula.technology&sz=128",
        "parentId": 6
      },
      {
        "id": 29,
        "name": "Adobe PDF Services API",
        "link": "https://developer.adobe.com/document-services/apis/pdf-services/",
        "description": "Free tier API for PDF manipulation, extraction, and conversion with ML capabilities.",
        "favicon": "https://www.google.com/s2/favicons?domain=developer.adobe.com&sz=128",
        "parentId": 6
      },
      {
        "id": 30,
        "name": "PaddleOCR",
        "link": "https://github.com/PaddlePaddle/PaddleOCR",
        "description": "Multilingual OCR toolkit supporting 80+ languages with document analysis features.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 6
      }
    ],
    "id": 6,
    "slug": "data-processing-tools"
  },
  {
    "title": "Datasets",
    "tag": "Learning Resources",
    "tag2": "Datasets",
    "description": "High-quality datasets and data collections for LLM training",
    "resources": [
      {
        "id": 1,
        "name": "HuggingFace Datasets",
        "link": "https://huggingface.co/datasets",
        "description": "Comprehensive repository of datasets for machine learning, with easy integration into ML pipelines.",
        "favicon": "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
        "parentId": 7
      },
      {
        "id": 2,
        "name": "Common Crawl",
        "link": "https://commoncrawl.org/",
        "description": "Massive web crawl data used for training large language models, freely available for download.",
        "favicon": "https://www.google.com/s2/favicons?domain=commoncrawl.org&sz=128",
        "parentId": 7
      },
      {
        "id": 3,
        "name": "The Pile",
        "link": "https://pile.eleuther.ai/",
        "description": "800GB diverse, open-source language modeling dataset curated for training large language models.",
        "favicon": "https://www.google.com/s2/favicons?domain=pile.eleuther.ai&sz=128",
        "parentId": 7
      },
      {
        "id": 4,
        "name": "RedPajama",
        "link": "https://github.com/togethercomputer/RedPajama-Data",
        "description": "Open dataset replicating LLaMA training data, with 1.2 trillion tokens across various sources.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 7
      },
      {
        "id": 5,
        "name": "LAION-400M",
        "link": "https://laion.ai/blog/laion-400-open-dataset/",
        "description": "Large-scale dataset of image-text pairs for multimodal AI training.",
        "favicon": "https://www.google.com/s2/favicons?domain=laion.ai&sz=128",
        "parentId": 7
      },
      {
        "id": 6,
        "name": "OpenWebText2",
        "link": "https://openwebtext2.readthedocs.io/",
        "description": "Web text dataset extracted from URLs shared on Reddit with high engagement.",
        "favicon": "https://www.google.com/s2/favicons?domain=openwebtext2.readthedocs.io&sz=128",
        "parentId": 7
      },
      {
        "id": 7,
        "name": "C4 (Colossal Clean Crawled Corpus)",
        "link": "https://www.tensorflow.org/datasets/catalog/c4",
        "description": "Massive cleaned web crawl dataset used for T5 and other language models.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.tensorflow.org&sz=128",
        "parentId": 7
      },
      {
        "id": 8,
        "name": "WikiText",
        "link": "https://blog.salesforceairesearch.com/the-wikitext-long-term-dependency-language-modeling-dataset/",
        "description": "Long-term dependency language modeling dataset extracted from Wikipedia articles.",
        "favicon": "https://www.google.com/s2/favicons?domain=blog.salesforceairesearch.com&sz=128",
        "parentId": 7
      },
      {
        "id": 9,
        "name": "Books3",
        "link": "https://datasets.pythonmachinelearning.com/books3.tar.gz",
        "description": "Large collection of books in plain text format for language model training.",
        "favicon": "https://www.google.com/s2/favicons?domain=datasets.pythonmachinelearning.com&sz=128",
        "parentId": 7
      },
      {
        "id": 10,
        "name": "Stack Exchange Data Dump",
        "link": "https://archive.org/details/stackexchange",
        "description": "Complete archive of Stack Exchange network's question-answer pairs.",
        "favicon": "https://www.google.com/s2/favicons?domain=archive.org&sz=128",
        "parentId": 7
      },
      {
        "id": 11,
        "name": "Ubuntu IRC Logs",
        "link": "https://irclogs.ubuntu.com/",
        "description": "Extensive collection of IRC chat logs for conversational AI training.",
        "favicon": "https://www.google.com/s2/favicons?domain=irclogs.ubuntu.com&sz=128",
        "parentId": 7
      },
      {
        "id": 12,
        "name": "ArXiv Dataset",
        "link": "https://www.kaggle.com/Cornell-University/arxiv",
        "description": "Over 1.7 million scholarly papers across multiple scientific fields.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.kaggle.com&sz=128",
        "parentId": 7
      },
      {
        "id": 13,
        "name": "GitHub Code Dataset",
        "link": "https://huggingface.co/datasets/codeparrot/github-code",
        "description": "Large collection of source code from GitHub repositories for code LLM training.",
        "favicon": "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
        "parentId": 7
      },
      {
        "id": 14,
        "name": "OpenAssistant Conversations",
        "link": "https://huggingface.co/datasets/OpenAssistant/oasst1",
        "description": "High-quality conversation dataset for training AI assistants.",
        "favicon": "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
        "parentId": 7
      },
      {
        "id": 15,
        "name": "Alpaca Dataset",
        "link": "https://github.com/tatsu-lab/stanford_alpaca",
        "description": "52K instructions following ChatGPT format for fine-tuning language models.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 7
      },
      {
        "id": 16,
        "name": "ShareGPT",
        "link": "https://huggingface.co/datasets/anon8231489123/ShareGPT_Vicuna_unfiltered",
        "description": "Collection of ChatGPT conversations for training conversational AI models.",
        "favicon": "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
        "parentId": 7
      },
      {
        "id": 17,
        "name": "OSCAR",
        "link": "https://oscar-corpus.com/",
        "description": "Large multilingual corpus extracted from Common Crawl web data.",
        "favicon": "https://www.google.com/s2/favicons?domain=oscar-corpus.com&sz=128",
        "parentId": 7
      },
      {
        "id": 18,
        "name": "mC4",
        "link": "https://www.tensorflow.org/datasets/catalog/c4#c4multilingual",
        "description": "Multilingual version of C4 dataset covering 101 languages.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.tensorflow.org&sz=128",
        "parentId": 7
      },
      {
        "id": 19,
        "name": "Dolly Dataset",
        "link": "https://www.databricks.com/blog/2023/04/12/dolly-first-open-commercially-viable-instruction-tuned-llm",
        "description": "Instruction-following dataset for fine-tuning language models.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.databricks.com&sz=128",
        "parentId": 7
      },
      {
        "id": 20,
        "name": "WMT Translation Datasets",
        "link": "https://www.statmt.org/wmt23/",
        "description": "High-quality parallel corpora for machine translation training.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.statmt.org&sz=128",
        "parentId": 7
      },
      {
        "id": 21,
        "name": "PubMed Central",
        "link": "https://www.ncbi.nlm.nih.gov/pmc/tools/openftlist/",
        "description": "Archive of biomedical and life sciences journal literature.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.ncbi.nlm.nih.gov&sz=128",
        "parentId": 7
      },
      {
        "id": 22,
        "name": "CodeSearchNet",
        "link": "https://github.com/github/CodeSearchNet",
        "description": "Large dataset for code search and documentation in multiple programming languages.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 7
      },
      {
        "id": 23,
        "name": "MATH Dataset",
        "link": "https://github.com/hendrycks/math",
        "description": "Mathematics problems with step-by-step solutions for training reasoning capabilities.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 7
      },
      {
        "id": 24,
        "name": "GSM8K",
        "link": "https://github.com/openai/grade-school-math",
        "description": "Grade school math word problems for testing mathematical reasoning.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 7
      },
      {
        "id": 25,
        "name": "BIG-bench",
        "link": "https://github.com/google/BIG-bench",
        "description": "Collaborative benchmark for measuring and extrapolating language model capabilities.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 7
      },
      {
        "id": 26,
        "name": "MMLU",
        "link": "https://github.com/hendrycks/test",
        "description": "Massive Multitask Language Understanding benchmark across various domains.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 7
      },
      {
        "id": 27,
        "name": "Natural Questions",
        "link": "https://ai.google.com/research/NaturalQuestions",
        "description": "Real Google search questions with answers from Wikipedia.",
        "favicon": "https://www.google.com/s2/favicons?domain=ai.google.com&sz=128",
        "parentId": 7
      },
      {
        "id": 28,
        "name": "SQuAD 2.0",
        "link": "https://rajpurkar.github.io/SQuAD-explorer/",
        "description": "Reading comprehension dataset with questions and answers from Wikipedia articles.",
        "favicon": "https://www.google.com/s2/favicons?domain=rajpurkar.github.io&sz=128",
        "parentId": 7
      },
      {
        "id": 29,
        "name": "HotpotQA",
        "link": "https://hotpotqa.github.io/",
        "description": "Question answering dataset requiring multi-hop reasoning.",
        "favicon": "https://www.google.com/s2/favicons?domain=hotpotqa.github.io&sz=128",
        "parentId": 7
      },
      {
        "id": 30,
        "name": "TruthfulQA",
        "link": "https://github.com/sylinrl/TruthfulQA",
        "description": "Benchmark for measuring truthfulness in language models.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 7
      },
      {
        "id": 31,
        "name": "Open Images Dataset",
        "link": "https://storage.googleapis.com/openimages/web/index.html",
        "description": "Large-scale dataset of images with annotations for vision-language tasks.",
        "favicon": "https://www.google.com/s2/favicons?domain=storage.googleapis.com&sz=128",
        "parentId": 7
      },
      {
        "id": 32,
        "name": "WebText",
        "link": "https://paperswithcode.com/dataset/webtext",
        "description": "Dataset of web pages from Reddit submissions with high engagement.",
        "favicon": "https://www.google.com/s2/favicons?domain=paperswithcode.com&sz=128",
        "parentId": 7
      },
      {
        "id": 33,
        "name": "BookCorpus",
        "link": "https://huggingface.co/datasets/bookcorpus",
        "description": "Collection of unpublished books for training language understanding.",
        "favicon": "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
        "parentId": 7
      },
      {
        "id": 34,
        "name": "CC-Stories",
        "link": "https://paperswithcode.com/dataset/cc-stories",
        "description": "Filtered subset of CommonCrawl focused on story-like content.",
        "favicon": "https://www.google.com/s2/favicons?domain=paperswithcode.com&sz=128",
        "parentId": 7
      },
      {
        "id": 35,
        "name": "RealNews",
        "link": "https://github.com/rowanz/grover/tree/master/realnews",
        "description": "Large dataset of news articles from reliable sources.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 7
      },
      {
        "id": 36,
        "name": "Anthropic Constitutional AI",
        "link": "https://www.anthropic.com/constitutional-ai-data",
        "description": "Dataset for training AI systems with specific behavioral constraints.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.anthropic.com&sz=128",
        "parentId": 7
      },
      {
        "id": 37,
        "name": "ROOTS",
        "link": "https://github.com/bigscience-workshop/roots",
        "description": "Multilingual dataset curated for the BLOOM language model.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 7
      },
      {
        "id": 38,
        "name": "Pile of Law",
        "link": "https://arxiv.org/abs/2207.00220",
        "description": "Large legal text dataset including cases, statutes, and regulations.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 7
      },
      {
        "id": 39,
        "name": "Code Alpaca",
        "link": "https://github.com/sahil280114/codealpaca",
        "description": "Dataset for training code generation and understanding capabilities.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 7
      },
      {
        "id": 40,
        "name": "Multilingual Amazon Reviews",
        "link": "https://registry.opendata.aws/amazon-reviews-ml/",
        "description": "Product reviews in multiple languages for sentiment analysis and recommendation.",
        "favicon": "https://www.google.com/s2/favicons?domain=registry.opendata.aws&sz=128",
        "parentId": 7
      }
    ],
    "id": 7,
    "slug": "datasets"
  },
  {
    "title": "LLM Leaderboards",
    "tag": "Learning Resources",
    "tag2": "Benchmarks",
    "description": "Top benchmarks and leaderboards for comparing LLM performance across different tasks",
    "resources": [
      {
        "id": 1,
        "name": "Open LLM Leaderboard",
        "link": "https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard",
        "description": "Comprehensive benchmark of open source LLMs on various tasks by Hugging Face.",
        "favicon": "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
        "parentId": 8
      },
      {
        "id": 2,
        "name": "Chatbot Arena Leaderboard",
        "link": "https://chat.lmsys.org/?leaderboard",
        "description": "Interactive LLM rankings based on human preferences and head-to-head comparisons.",
        "favicon": "https://www.google.com/s2/favicons?domain=chat.lmsys.org&sz=128",
        "parentId": 8
      },
      {
        "id": 3,
        "name": "AlpacaEval Leaderboard",
        "link": "https://tatsu-lab.github.io/alpaca_eval/",
        "description": "Evaluation of instruction-following capabilities across different models.",
        "favicon": "https://www.google.com/s2/favicons?domain=tatsu-lab.github.io&sz=128",
        "parentId": 8
      },
      {
        "id": 4,
        "name": "MT-Bench Leaderboard",
        "link": "https://github.com/lm-sys/FastChat/tree/main/fastchat/llm_judge",
        "description": "Multi-turn conversation benchmark for testing complex reasoning and consistency.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 8
      },
      {
        "id": 5,
        "name": "Big Code Models Leaderboard",
        "link": "https://huggingface.co/spaces/bigcode/bigcode-models-leaderboard",
        "description": "Evaluation of code generation models on multiple programming tasks.",
        "favicon": "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
        "parentId": 8
      },
      {
        "id": 6,
        "name": "HELM Benchmark",
        "link": "https://crfm.stanford.edu/helm/latest/",
        "description": "Stanford's holistic evaluation framework covering 42 scenarios.",
        "favicon": "https://www.google.com/s2/favicons?domain=crfm.stanford.edu&sz=128",
        "parentId": 8
      },
      {
        "id": 7,
        "name": "BIG-bench",
        "link": "https://github.com/google/BIG-bench",
        "description": "Google's Beyond the Imitation Game benchmark with 200+ tasks.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 8
      },
      {
        "id": 8,
        "name": "C-Eval Leaderboard",
        "link": "https://cevalbenchmark.com/static/leaderboard.html",
        "description": "Comprehensive Chinese language capabilities evaluation.",
        "favicon": "https://www.google.com/s2/favicons?domain=cevalbenchmark.com&sz=128",
        "parentId": 8
      },
      {
        "id": 9,
        "name": "MMLU Leaderboard",
        "link": "https://paperswithcode.com/sota/multi-task-language-understanding-on-mmlu",
        "description": "Massive Multitask Language Understanding benchmark across 57 subjects.",
        "favicon": "https://www.google.com/s2/favicons?domain=paperswithcode.com&sz=128",
        "parentId": 8
      },
      {
        "id": 10,
        "name": "HumanEval Leaderboard",
        "link": "https://paperswithcode.com/sota/code-generation-on-humaneval",
        "description": "Evaluation of Python code generation capabilities.",
        "favicon": "https://www.google.com/s2/favicons?domain=paperswithcode.com&sz=128",
        "parentId": 8
      },
      {
        "id": 11,
        "name": "AGIEval Benchmark",
        "link": "https://github.com/microsoft/AGIEval",
        "description": "Microsoft's benchmark for testing human-level intelligence tasks.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 8
      },
      {
        "id": 12,
        "name": "OpenCompass Leaderboard",
        "link": "https://opencompass.org.cn/leaderboard-llm",
        "description": "Comprehensive evaluation platform with 50+ datasets.",
        "favicon": "https://www.google.com/s2/favicons?domain=opencompass.org.cn&sz=128",
        "parentId": 8
      },
      {
        "id": 13,
        "name": "LongBench Leaderboard",
        "link": "https://github.com/THUDM/LongBench",
        "description": "Benchmark for testing long-context understanding capabilities.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 8
      },
      {
        "id": 14,
        "name": "Harness Leaderboard",
        "link": "https://www.eleuther.ai/projects/harness/",
        "description": "EleutherAI's framework for language model evaluation.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.eleuther.ai&sz=128",
        "parentId": 8
      },
      {
        "id": 15,
        "name": "GLUE Benchmark",
        "link": "https://gluebenchmark.com/leaderboard",
        "description": "General Language Understanding Evaluation benchmark.",
        "favicon": "https://www.google.com/s2/favicons?domain=gluebenchmark.com&sz=128",
        "parentId": 8
      },
      {
        "id": 16,
        "name": "SuperGLUE Benchmark",
        "link": "https://super.gluebenchmark.com/leaderboard",
        "description": "More challenging successor to GLUE with harder tasks.",
        "favicon": "https://www.google.com/s2/favicons?domain=super.gluebenchmark.com&sz=128",
        "parentId": 8
      },
      {
        "id": 17,
        "name": "Multilingual LEaderboard",
        "link": "https://huggingface.co/spaces/mteb/leaderboard",
        "description": "MTEB benchmark for multilingual model evaluation.",
        "favicon": "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
        "parentId": 8
      },
      {
        "id": 18,
        "name": "TruthfulQA Leaderboard",
        "link": "https://github.com/sylinrl/TruthfulQA",
        "description": "Benchmark for measuring truthfulness in model responses.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 8
      },
      {
        "id": 19,
        "name": "Instruction Tuning Benchmark",
        "link": "https://github.com/google-research/google-research/tree/master/instruction_tuning_benchmark",
        "description": "Google's benchmark for instruction-following capabilities.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 8
      },
      {
        "id": 20,
        "name": "LLM Security Leaderboard",
        "link": "https://www.llm-security.org/leaderboard",
        "description": "Evaluation of models' resistance to security exploits and jailbreaks.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.llm-security.org&sz=128",
        "parentId": 8
      },
      {
        "id": 21,
        "name": "Hallucination Leaderboard",
        "link": "https://github.com/vectara/hallucination-leaderboard/tree/main",
        "description": "Public LLM leaderboard computed using Vectara's Hughes Hallucination Evaluation Model.",
        "description2": "Public LLM leaderboard computed using Vectara's Hughes Hallucination Evaluation Model. This evaluates how often an LLM introduces hallucinations when summarizing a document. We plan to update this regularly as our model and the LLMs get updated over time. Also, feel free to check out our hallucination leaderboard on Hugging Face. The rankings in this leaderboard are computed using the HHEM-2.1 hallucination evaluation model. If you are interested in the previous leaderboard, which was based on HHEM-1.0, it is available here for more details.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 8
      },
      {
        "id": 22,
        "name": "LiveBench Leaderboard",
        "link": "https://livebench.ai/#/",
        "description": "A benchmark for LLMs designed to limit contamination and provide objective evaluation.",
        "description2": "LiveBench is a challenging benchmark that releases new questions monthly, ensuring a contamination-free evaluation of LLMs. It features verifiable, objective ground-truth answers for accurate scoring without LLM judges. The benchmark includes diverse tasks across multiple categories and is updated regularly to maintain its relevance.",
        "favicon": "https://www.google.com/s2/favicons?domain=livebench.ai&sz=128",
        "parentId": 8
      },
      {
        "id": 23,
        "name": "The Fastest AI Benchmark",
        "link": "https://thefastest.ai/",
        "description": "Reliable measurements for the performance of popular LLMs.",
        "description2": "This site provides insights into the speed and efficiency of various language models, including metrics like Time To First Token (TTFT) and Tokens Per Second (TPS). It allows users to filter models based on different criteria and is updated daily to reflect the latest performance data.",
        "favicon": "https://www.google.com/s2/favicons?domain=thefastest.ai&sz=128",
        "parentId": 8
      }
    ],
    "id": 8,
    "slug": "llm-leaderboards"
  },
  {
    "title": "LLM Communities",
    "tag": "Learning Resources",
    "tag2": "Communities",
    "description": "Active communities and forums for LLM developers, researchers, and enthusiasts",
    "resources": [
      {
        "id": 1,
        "name": "Hugging Face Forums",
        "link": "https://discuss.huggingface.co/",
        "description": "Official community for Hugging Face, discussing ML models, datasets, and implementations.",
        "favicon": "https://www.google.com/s2/favicons?domain=discuss.huggingface.co&sz=128",
        "parentId": 9
      },
      {
        "id": 2,
        "name": "Reddit - LocalLLaMA",
        "link": "https://www.reddit.com/r/LocalLLaMA/",
        "description": "Reddit community focused on running and fine-tuning LLaMA models locally.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.reddit.com&sz=128",
        "parentId": 9
      },
      {
        "id": 3,
        "name": "Reddit - Machine Learning",
        "link": "https://www.reddit.com/r/MachineLearning/",
        "description": "Largest ML community on Reddit, covering latest research and developments.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.reddit.com&sz=128",
        "parentId": 9
      },
      {
        "id": 4,
        "name": "Reddit - Artificial Intelligence",
        "link": "https://www.reddit.com/r/artificial/",
        "description": "Reddit's main community for AI discussions, news, and developments.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.reddit.com&sz=128",
        "parentId": 9
      },
      {
        "id": 5,
        "name": "Reddit - ChatGPT",
        "link": "https://www.reddit.com/r/ChatGPT/",
        "description": "Community focused on ChatGPT, its applications, and latest updates.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.reddit.com&sz=128",
        "parentId": 9
      },
      {
        "id": 6,
        "name": "Reddit - Singularity",
        "link": "https://www.reddit.com/r/singularity/",
        "description": "Discussions about technological singularity, AGI, and future of AI.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.reddit.com&sz=128",
        "parentId": 9
      },
      {
        "id": 7,
        "name": "LangChain Discord",
        "link": "https://discord.gg/langchain",
        "description": "Official Discord for LangChain framework discussions and support.",
        "favicon": "https://www.google.com/s2/favicons?domain=discord.gg&sz=128",
        "parentId": 9
      },
      {
        "id": 8,
        "name": "Weights & Biases Community",
        "link": "https://wandb.ai/community",
        "description": "Community platform for ML practitioners sharing experiments and insights.",
        "favicon": "https://www.google.com/s2/favicons?domain=wandb.ai&sz=128",
        "parentId": 9
      },
      {
        "id": 9,
        "name": "AI Alignment Forum",
        "link": "https://www.alignmentforum.org/",
        "description": "Discussion forum focused on AI safety and alignment research.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.alignmentforum.org&sz=128",
        "parentId": 9
      },
      {
        "id": 10,
        "name": "EleutherAI Discord",
        "link": "https://discord.gg/eleutherai",
        "description": "Community of researchers working on open source LLMs and ML research.",
        "favicon": "https://www.google.com/s2/favicons?domain=discord.gg&sz=128",
        "parentId": 9
      },
      {
        "id": 11,
        "name": "MLOps Community",
        "link": "https://mlops.community/",
        "description": "Community focused on ML operations, deployment, and engineering.",
        "favicon": "https://www.google.com/s2/favicons?domain=mlops.community&sz=128",
        "parentId": 9
      },
      {
        "id": 12,
        "name": "Papers with Code Discord",
        "link": "https://discord.gg/paperswithcode",
        "description": "Discussion of latest ML papers and their implementations.",
        "favicon": "https://www.google.com/s2/favicons?domain=discord.gg&sz=128",
        "parentId": 9
      },
      {
        "id": 13,
        "name": "Together.ai Discord",
        "link": "https://discord.gg/together",
        "description": "Community focused on deploying and fine-tuning open source LLMs.",
        "favicon": "https://www.google.com/s2/favicons?domain=discord.gg&sz=128",
        "parentId": 9
      },
      {
        "id": 14,
        "name": "Reddit - Claude AI",
        "link": "https://www.reddit.com/r/ClaudeAI/",
        "description": "Community focused on discussions and developments related to Claude AI.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.reddit.com&sz=128",
        "parentId": 9
      }
    ],
    "id": 9,
    "slug": "llm-communities"
  },
  {
    "title": "LLM Deployment",
    "tag": "Learning Resources",
    "tag2": "Deployment",
    "description": "Tools, frameworks, and platforms for deploying and serving LLM applications",
    "resources": [
      {
        "id": 1,
        "name": "LangChain",
        "link": "https://github.com/langchain-ai/langchain",
        "description": "Popular framework for building applications with LLMs through composable components.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 10
      },
      {
        "id": 2,
        "name": "LlamaIndex",
        "link": "https://www.llamaindex.ai/",
        "description": "Data framework for ingesting, structuring, and accessing private or domain-specific data with LLMs.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.llamaindex.ai&sz=128",
        "parentId": 10
      },
      {
        "id": 3,
        "name": "Semantic Kernel",
        "link": "https://github.com/microsoft/semantic-kernel",
        "description": "Microsoft's SDK for integrating LLMs into applications with memory and planning.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 10
      },
      {
        "id": 4,
        "name": "vLLM",
        "link": "https://github.com/vllm-project/vllm",
        "description": "High-throughput and memory-efficient inference engine for LLMs.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 10
      },
      {
        "id": 5,
        "name": "Modal",
        "link": "https://modal.com/",
        "description": "Cloud platform optimized for running and deploying LLMs at scale.",
        "favicon": "https://www.google.com/s2/favicons?domain=modal.com&sz=128",
        "parentId": 10
      },
      {
        "id": 6,
        "name": "RunPod",
        "link": "https://www.runpod.io/",
        "description": "GPU cloud platform for training and deploying AI models.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.runpod.io&sz=128",
        "parentId": 10
      },
      {
        "id": 7,
        "name": "Together AI",
        "link": "https://www.together.ai/",
        "description": "Platform for deploying and fine-tuning open source LLMs.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.together.ai&sz=128",
        "parentId": 10
      },
      {
        "id": 8,
        "name": "TensorRT-LLM",
        "link": "https://github.com/NVIDIA/TensorRT-LLM",
        "description": "NVIDIA's toolkit for optimizing LLMs for efficient inference.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 10
      },
      {
        "id": 9,
        "name": "GGML",
        "link": "https://github.com/ggerganov/ggml",
        "description": "Tensor library for machine learning optimized for CPU inference.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 10
      },
      {
        "id": 10,
        "name": "llama.cpp",
        "link": "https://github.com/ggerganov/llama.cpp",
        "description": "Port of Facebook's LLaMA model in C/C++ for efficient CPU inference.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 10
      },
      {
        "id": 11,
        "name": "Text Generation Inference",
        "link": "https://github.com/huggingface/text-generation-inference",
        "description": "Hugging Face's toolkit for deploying and serving language models.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 10
      },
      {
        "id": 12,
        "name": "FastAPI",
        "link": "https://fastapi.tiangolo.com/",
        "description": "Modern web framework for building APIs with Python, popular for ML services.",
        "favicon": "https://www.google.com/s2/favicons?domain=fastapi.tiangolo.com&sz=128",
        "parentId": 10
      },
      {
        "id": 13,
        "name": "Ray Serve",
        "link": "https://docs.ray.io/en/latest/serve/index.html",
        "description": "Scalable model serving library for building ML APIs and services.",
        "favicon": "https://www.google.com/s2/favicons?domain=docs.ray.io&sz=128",
        "parentId": 10
      },
      {
        "id": 14,
        "name": "Weights & Biases",
        "link": "https://wandb.ai/",
        "description": "MLOps platform for tracking experiments, models, and deployments.",
        "favicon": "https://www.google.com/s2/favicons?domain=wandb.ai&sz=128",
        "parentId": 10
      },
      {
        "id": 15,
        "name": "LangSmith",
        "link": "https://smith.langchain.com/",
        "description": "Platform for debugging, testing, and monitoring LLM applications.",
        "favicon": "https://www.google.com/s2/favicons?domain=smith.langchain.com&sz=128",
        "parentId": 10
      },
      {
        "id": 16,
        "name": "LocalAI",
        "link": "https://github.com/go-skynet/LocalAI",
        "description": "Self-hosted, community-driven solution for running LLMs locally.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 10
      },
      {
        "id": 17,
        "name": "Ollama",
        "link": "https://ollama.ai/",
        "description": "Run and manage large language models locally.",
        "favicon": "https://www.google.com/s2/favicons?domain=ollama.ai&sz=128",
        "parentId": 10
      },
      {
        "id": 18,
        "name": "AWS SageMaker",
        "link": "https://aws.amazon.com/sagemaker/",
        "description": "Fully managed service for building, training, and deploying ML models.",
        "favicon": "https://www.google.com/s2/favicons?domain=aws.amazon.com&sz=128",
        "parentId": 10
      },
      {
        "id": 19,
        "name": "Google Vertex AI",
        "link": "https://cloud.google.com/vertex-ai",
        "description": "Google's unified platform for deploying ML models and building ML-powered applications.",
        "favicon": "https://www.google.com/s2/favicons?domain=cloud.google.com&sz=128",
        "parentId": 10
      },
      {
        "id": 20,
        "name": "Azure ML",
        "link": "https://azure.microsoft.com/en-us/services/machine-learning/",
        "description": "Microsoft's cloud service for MLOps and model deployment.",
        "favicon": "https://www.google.com/s2/favicons?domain=azure.microsoft.com&sz=128",
        "parentId": 10
      }
    ],
    "id": 10,
    "slug": "llm-deployment"
  },
  {
    "title": "Open Source Models",
    "tag": "LLM Models",
    "tag2": "Open Source Models",
    "description": "Collection of open source large language models available for research and deployment",
    "resources": [
      {
        "id": 1,
        "name": "Llama 3.1 405B (Base)",
        "link": "https://huggingface.co/meta-llama/Llama-3-405B",
        "description": "405B parameter model for advanced AI tasks.",
        "description2": "A 405-billion-parameter model, representing one of the largest open-source AI models available. It offers advanced capabilities in natural language understanding and generation, suitable for high-level research and complex AI tasks. Supports a context length of 131K tokens.",
        "favicon": "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
        "parentId": 11
      },
      {
        "id": 1.1,
        "name": "Llama 3.1 70B Instruct",
        "link": "https://huggingface.co/meta-llama/Llama-3-70B-Instruct",
        "description": "70B parameter model optimized for dialogue.",
        "description2": "A 70-billion-parameter model optimized for high-quality dialogue use cases. It demonstrates strong performance compared to leading closed-source models in human evaluations. Supports a context length of 131K tokens.",
        "favicon": "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
        "parentId": 11
      },
      {
        "id": 1.2,
        "name": "Llama 3.1 8B Instruct",
        "link": "https://huggingface.co/meta-llama/Llama-3-8B-Instruct",
        "description": "8B parameter model for efficient dialogue performance.",
        "description2": "An 8-billion-parameter model designed for efficient performance in dialogue and instruction-following tasks. It balances computational efficiency with robust language generation capabilities. Supports a context length of 131K tokens.",
        "favicon": "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
        "parentId": 11
      },
      {
        "id": 1.3,
        "name": "Llama 3 70B (Base)",
        "link": "https://huggingface.co/meta-llama/Llama-3-70B",
        "description": "70B parameter base model for NLP tasks.",
        "description2": "A 70-billion-parameter base model offering strong performance in natural language processing tasks. It serves as a foundation for various fine-tuned versions tailored to specific applications. Supports a context length of 8K tokens.",
        "favicon": "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
        "parentId": 11
      },
      {
        "id": 1.4,
        "name": "Llama 3 8B (Base)",
        "link": "https://huggingface.co/meta-llama/Llama-3-8B",
        "description": "8B parameter base model for NLP tasks.",
        "description2": "An 8-billion-parameter base model suitable for a range of natural language understanding and generation tasks. Its relatively smaller size allows for deployment in environments with limited computational resources. Supports a context length of 8K tokens.",
        "favicon": "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
        "parentId": 11
      },
      {
        "id": 1.5,
        "name": "CodeLlama 70B Instruct",
        "link": "https://huggingface.co/codellama/CodeLlama-70B",
        "description": "70B parameter model specialized for code generation.",
        "description2": "A 70-billion-parameter model specialized for code generation tasks. It provides zero-shot instruction-following ability for programming, supporting a context length of 2K tokens.",
        "favicon": "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
        "parentId": 11
      },
      {
        "id": 1.6,
        "name": "CodeLlama 34B Instruct",
        "link": "https://huggingface.co/codellama/CodeLlama-34B",
        "description": "34B parameter model for code infilling.",
        "description2": "A 34-billion-parameter model built upon Llama 2, excelling at code infilling and handling extensive input contexts. It supports a context length of 8K tokens.",
        "favicon": "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
        "parentId": 11
      },
      {
        "id": 1.7,
        "name": "Llama v2 13B Chat",
        "link": "https://huggingface.co/meta-llama/Llama-v2-13B-Chat",
        "description": "13B parameter model for chat completions.",
        "description2": "A 13-billion-parameter model fine-tuned for chat completions, offering robust conversational AI capabilities. Supports a context length of 4K tokens.",
        "favicon": "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
        "parentId": 11
      },
      {
        "id": 1.8,
        "name": "Llama v2 70B Chat",
        "link": "https://huggingface.co/meta-llama/Llama-v2-70B-Chat",
        "description": "70B parameter flagship model for chat.",
        "description2": "A flagship 70-billion-parameter model fine-tuned for chat completions, utilizing an optimized transformer architecture. Supports a context length of 4K tokens.",
        "favicon": "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
        "parentId": 11
      },
      {
        "id": 2,
        "name": "Qwen 2.5 32B Instruct",
        "link": "https://huggingface.co/qwen/Qwen-2.5-32B",
        "description": "Qwen 2.5 32B is a transformer-based model that excels in language understanding, multilingual capabilities, coding, mathematics, and reasoning.",
        "description2": "It features SwiGLU activation, attention QKV bias, and group query attention. It is pretrained on extensive data with supervised finetuning and direct preference optimization.",
        "favicon": "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
        "parentId": 11
      },
      {
        "id": 2.1,
        "name": "Qwen 2.5 72B Instruct",
        "link": "https://huggingface.co/qwen/Qwen-2.5-72B",
        "description": "Qwen 2.5 72B is a transformer-based model that excels in language understanding, multilingual capabilities, coding, mathematics, and reasoning.",
        "description2": "It features SwiGLU activation, attention QKV bias, and group query attention. It is pretrained on extensive data with supervised finetuning and direct preference optimization.",
        "favicon": "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
        "parentId": 11
      },
      {
        "id": 2.2,
        "name": "Qwen 2.5 7B Instruct",
        "link": "https://huggingface.co/qwen/Qwen-2.5-7B",
        "description": "Qwen 2.5 7B is a transformer-based model that excels in language understanding, multilingual capabilities, coding, mathematics, and reasoning.",
        "description2": "It features SwiGLU activation, attention QKV bias, and group query attention. It is pretrained on extensive data with supervised finetuning and direct preference optimization.",
        "favicon": "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
        "parentId": 11
      },
      {
        "id": 2.3,
        "name": "Qwen 2.5 Coder 7B",
        "link": "https://huggingface.co/qwen/Qwen-2.5-Coder-7B",
        "description": "Qwen 2.5 Coder 7B is designed specifically for coding tasks, enhancing code generation and reasoning capabilities.",
        "description2": "It provides advanced features for code completion and debugging, making it suitable for developers.",
        "favicon": "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
        "parentId": 11
      },
      {
        "id": 2.4,
        "name": "Qwen 2.5 Coder 32B",
        "link": "https://huggingface.co/qwen/Qwen-2.5-Coder-32B",
        "description": "Qwen 2.5 Coder 32B is a large language model focused on code generation and reasoning.",
        "description2": "It significantly improves coding capabilities while maintaining strengths in mathematics and general competencies.",
        "favicon": "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
        "parentId": 11
      },
      {
        "id": 3,
        "name": "DeepSeek-V2.5",
        "link": "https://www.deepseek.com/",
        "description": "DeepSeek's flagship model, excelling in reasoning, math, and coding tasks.",
        "description2": "DeepSeek-V2.5 is an open-source model designed for general-purpose tasks and coding, highly competitive with leading models like GPT-4 and LLaMA3. It features innovative technologies such as Multi-head Latent Attention (MLA) for improved efficiency and is available for both academic and commercial use.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.deepseek.com&sz=128",
        "parentId": 11
      },
      {
        "id": 3.1,
        "name": "DeepSeek-V3",
        "link": "https://github.com/deepseek-ai/DeepSeek-V3",
        "description": "DeepSeek-V3 is a Mixture-of-Experts (MoE) language model with 671 billion total parameters, designed for efficient inference and cost-effective training.",
        "description2": "It features innovative Multi-head Latent Attention (MLA) and an auxiliary-loss-free strategy for load balancing, achieving state-of-the-art performance in various tasks. DeepSeek-V3 is pre-trained on 14.8 trillion tokens and demonstrates competitive capabilities against leading closed-source models.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 11
      },
      {
        "id": 3.2,
        "name": "DeepSeek-Math-7B",
        "link": "https://www.deepseek.com/deepseek-math-7b",
        "description": "7B parameter model optimized for mathematical reasoning.",
        "description2": "DeepSeek-Math-7B excels in solving complex mathematical problems and reasoning tasks.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.deepseek.com&sz=128",
        "parentId": 11
      },
      {
        "id": 3.3,
        "name": "DeepSeek-Coder-1.3",
        "link": "https://www.deepseek.com/deepseek-coder-1.3",
        "description": "33B parameter model specialized for code generation.",
        "description2": "DeepSeek-Coder-1.3 is designed for efficient code generation and understanding, providing advanced capabilities for developers.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.deepseek.com&sz=128",
        "parentId": 11
      },
      {
        "id": 3.4,
        "name": "DeepSeek-VL-1.3",
        "link": "https://www.deepseek.com/deepseek-vl-1.3",
        "description": "7B parameter model for vision-language tasks.",
        "description2": "DeepSeek-VL-1.3 integrates visual and language understanding for enhanced multimodal applications.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.deepseek.com&sz=128",
        "parentId": 11
      },
      {
        "id": 3.5,
        "name": "DeepSeek-MoE-16B",
        "link": "https://www.deepseek.com/deepseek-moe-16b",
        "description": "16B parameter Mixture-of-Experts model.",
        "description2": "DeepSeek-MoE-16B utilizes a mixture-of-experts architecture for efficient processing and performance.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.deepseek.com&sz=128",
        "parentId": 11
      },
      {
        "id": 3.6,
        "name": "DeepSeek-v2-236B-MoE",
        "link": "https://www.deepseek.com/deepseek-v2-236b-moe",
        "description": "236B parameter Mixture-of-Experts model.",
        "description2": "DeepSeek-v2-236B-MoE is designed for high-performance tasks, leveraging a large number of parameters for complex problem-solving.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.deepseek.com&sz=128",
        "parentId": 11
      },
      {
        "id": 3.7,
        "name": "DeepSeek-Coder-v2-16",
        "link": "https://www.deepseek.com/deepseek-coder-v2-16",
        "description": "16B parameter model for advanced code generation.",
        "description2": "DeepSeek-Coder-v2-16 is optimized for coding tasks, providing enhanced capabilities for developers.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.deepseek.com&sz=128",
        "parentId": 11
      },
      {
        "id": 4,
        "name": "Mistral 7B",
        "link": "https://huggingface.co/mistral/Mistral-7B",
        "description": "Mistral's first dense model with 7 billion parameters.",
        "description2": "Released in September 2023, this model matches the capabilities of models up to 30B parameters, making it suitable for experimentation, customization, and quick iteration.",
        "favicon": "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
        "parentId": 11
      },
      {
        "id": 4.1,
        "name": "Mixtral 8x7B",
        "link": "https://huggingface.co/mistral/Mixtral-8x7B",
        "description": "Sparse mixture-of-experts model leveraging up to 45 billion parameters.",
        "description2": "Introduced in December 2023, this model uses about 12 billion during inference, enhancing throughput for various tasks.",
        "favicon": "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
        "parentId": 11
      },
      {
        "id": 4.2,
        "name": "Mixtral 8x22B",
        "link": "https://huggingface.co/mistral/Mixtral-8x22B",
        "description": "Mistral's largest open-source model with up to 141 billion parameters.",
        "description2": "Launched in April 2024, it employs about 39 billion during inference, offering excellent performance in code-related tasks and multilingual capabilities.",
        "favicon": "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
        "parentId": 11
      },
      {
        "id": 4.3,
        "name": "Mistral NeMo",
        "link": "https://huggingface.co/mistral/Mistral-NeMo",
        "description": "Multilingual open-source model for a wide range of languages.",
        "description2": "Released in July 2024, this model enhances versatility in various applications.",
        "favicon": "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
        "parentId": 11
      },
      {
        "id": 4.4,
        "name": "Codestral Mamba",
        "link": "https://huggingface.co/mistral/Codestral-Mamba",
        "description": "Model tailored for code generation tasks.",
        "description2": "Introduced in July 2024, it leverages the Mamba 2 architecture to handle longer inputs efficiently.",
        "favicon": "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
        "parentId": 11
      },
      {
        "id": 4.5,
        "name": "Mathstral",
        "link": "https://huggingface.co/mistral/Mathstral",
        "description": "Model focused on mathematical reasoning and problem-solving.",
        "description2": "Unveiled in July 2024, Mathstral is suitable for STEM-related applications.",
        "favicon": "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
        "parentId": 11
      },
      {
        "id": 5,
        "name": "Nemotron 4 340B Instruct",
        "link": "https://huggingface.co/nvidia/Nemotron-4-340B-Instruct",
        "description": "340B parameter model for synthetic data generation.",
        "description2": "Part of the Nemotron-4 collection, this model is designed for Synthetic Data Generation (SDG) and includes Base, Instruct, and Reward models. It offers advanced capabilities for generating synthetic datasets, making it suitable for various AI applications.",
        "favicon": "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
        "parentId": 11
      },
      {
        "id": 6,
        "name": "Yi-VL 34B",
        "link": "https://huggingface.co/collections/01-ai/yi-vl-663f557228538eae745769f3",
        "description": "Image-Text-to-Text model for versatile applications.",
        "description2": "Updated on June 26, this model excels in generating text from images, making it suitable for a variety of AI tasks involving visual data.",
        "favicon": "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
        "parentId": 11
      },
      {
        "id": 6.1,
        "name": "Yi 1.5 34B Chat",
        "link": "https://huggingface.co/collections/01-ai/yi-15-2024-05-663f3ecab5f815a3eaca7ca8",
        "description": "Text generation model optimized for conversational AI.",
        "description2": "Updated on August 27, this model is designed for engaging and coherent dialogue, making it ideal for chat applications.",
        "favicon": "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
        "parentId": 11
      },
      {
        "id": 6.2,
        "name": "Yi 34B 200K",
        "link": "https://huggingface.co/collections/01-ai/yi-2023-11-663f3f19119ff712e176720f",
        "description": "Advanced text generation model with extensive training.",
        "description2": "Updated on November 11, this model offers high-quality text generation capabilities, suitable for various content creation tasks.",
        "favicon": "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
        "parentId": 11
      },
      {
        "id": 7,
        "name": "Gemma2-9",
        "link": "https://blog.google/technology/developers/google-gemma-2/",
        "description": "27B parameter model for advanced language tasks.",
        "description2": "Gemma2-9 is designed for high-performance language understanding and generation, suitable for various applications.",
        "favicon": "https://www.google.com/s2/favicons?domain=blog.google&sz=128",
        "parentId": 11
      },
      {
        "id": 7.1,
        "name": "Gemma-2",
        "link": "https://blog.google/technology/developers/gemma-open-models/",
        "description": "7B parameter model optimized for conversational AI.",
        "description2": "Gemma-2 excels in dialogue generation and understanding, providing robust conversational capabilities.",
        "favicon": "https://www.google.com/s2/favicons?domain=blog.google&sz=128",
        "parentId": 11
      },
      {
        "id": 7.2,
        "name": "RecurrentGemma-2B",
        "link": "https://github.com/google-deepmind/recurrentgemma",
        "description": "Recurrent model for enhanced context handling.",
        "description2": "RecurrentGemma-2B is designed to maintain context over longer interactions, improving conversational flow.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 11
      },
      {
        "id": 7.3,
        "name": "T5",
        "link": "https://arxiv.org/abs/1910.10683",
        "description": "Text-to-Text Transfer Transformer model.",
        "description2": "T5 is a versatile model that converts all NLP tasks into a text-to-text format, enabling a wide range of applications.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 11
      },
      {
        "id": 8,
        "name": "OpenELM",
        "link": "https://huggingface.co/apple/OpenELM",
        "description": "OpenELM is a family of efficient language models designed for enhanced accuracy and performance.",
        "description2": "Utilizing a layer-wise scaling strategy, OpenELM offers pretrained models with 270M, 450M, 1.1B, and 3B parameters, trained on a diverse dataset totaling approximately 1.8 trillion tokens.",
        "favicon": "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
        "parentId": 11
      }
    ],
    "id": 11,
    "slug": "open-source-models"
  },
  {
    "title": "Proprietary Models",
    "tag": "LLM Models",
    "tag2": "Proprietary Models",
    "description": "Popular LLM applications and models",
    "resources": [
      {
        "id": 1,
        "name": "ChatGPT",
        "link": "https://openai.com/chatgpt",
        "description": "OpenAI's conversational AI for general-purpose question answering and tasks.",
        "description2": "ChatGPT is designed to assist users in generating human-like text based on the input provided. It has evolved through multiple iterations, enhancing its capabilities in understanding and generating natural language, making it a versatile tool for various applications, including content creation, coding assistance, and more.",
        "favicon": "https://www.google.com/s2/favicons?domain=openai.com&sz=128",
        "parentId": 12
      },
      {
        "id": 1.1,
        "name": "GPT-1",
        "link": "https://openai.com/gpt-1",
        "description": "OpenAI's first generative pre-trained transformer model.",
        "description2": "Released in 2018, GPT-1 demonstrated the potential of unsupervised pre-training for language understanding.",
        "favicon": "https://www.google.com/s2/favicons?domain=openai.com&sz=128",
        "parentId": 12
      },
      {
        "id": 1.2,
        "name": "GPT-2",
        "link": "https://openai.com/gpt-2",
        "description": "Significant improvement in language generation capabilities.",
        "description2": "Released in 2019, GPT-2 featured 1.5 billion parameters, producing coherent and contextually relevant text.",
        "favicon": "https://www.google.com/s2/favicons?domain=openai.com&sz=128",
        "parentId": 12
      },
      {
        "id": 1.3,
        "name": "GPT-3",
        "link": "https://openai.com/gpt-3",
        "description": "A major leap forward in NLP capabilities.",
        "description2": "Launched in 2020, GPT-3 introduced 175 billion parameters, enabling a wide range of tasks from translation to coding assistance.",
        "favicon": "https://www.google.com/s2/favicons?domain=openai.com&sz=128",
        "parentId": 12
      },
      {
        "id": 1.4,
        "name": "GPT-3.5",
        "link": "https://openai.com/gpt-3.5",
        "description": "Enhanced version of GPT-3 for better performance.",
        "description2": "Released in March 2022, GPT-3.5 marked significant progress in NLP, excelling in generating coherent and contextually relevant text across diverse topics.",
        "favicon": "https://www.google.com/s2/favicons?domain=openai.com&sz=128",
        "parentId": 12
      },
      {
        "id": 1.5,
        "name": "GPT-4",
        "link": "https://openai.com/gpt-4",
        "description": "Enhanced multimodal AI model for text and image processing.",
        "description2": "Released in March 2023, GPT-4 introduced improved performance in understanding and generating nuanced text, alongside multimodal capabilities.",
        "favicon": "https://www.google.com/s2/favicons?domain=openai.com&sz=128",
        "parentId": 12
      },
      {
        "id": 1.6,
        "name": "GPT-4o",
        "link": "https://openai.com/gpt-4o",
        "description": "Advanced multimodal model for text, image, and audio processing.",
        "description2": "Introduced in May 2024, GPT-4o achieved state-of-the-art results across various benchmarks.",
        "favicon": "https://www.google.com/s2/favicons?domain=openai.com&sz=128",
        "parentId": 12
      },
      {
        "id": 1.7,
        "name": "GPT-4o Mini",
        "link": "https://openai.com/gpt-4o-mini",
        "description": "Cost-effective version of GPT-4o for resource-limited environments.",
        "description2": "Launched in July 2024, this smaller model provided high performance with reduced computational costs.",
        "favicon": "https://www.google.com/s2/favicons?domain=openai.com&sz=128",
        "parentId": 12
      },
      {
        "id": 1.8,
        "name": "o1",
        "link": "https://openai.com/o1",
        "description": "Model focusing on enhanced reasoning capabilities.",
        "description2": "Released in September 2024, o1 excelled in tasks requiring logical thinking and complex problem-solving.",
        "favicon": "https://www.google.com/s2/favicons?domain=openai.com&sz=128",
        "parentId": 12
      },
      {
        "id": 1.9,
        "name": "o3",
        "link": "https://openai.com/o3",
        "description": "Successor to o1 with improved benchmark performance.",
        "description2": "Unveiled in December 2024, o3 provided enhanced reasoning for challenging tasks and logical workflows.",
        "favicon": "https://www.google.com/s2/favicons?domain=openai.com&sz=128",
        "parentId": 12
      },
      {
        "id": 1.1,
        "name": "Codex",
        "link": "https://openai.com/codex",
        "description": "AI model for programming and code generation.",
        "description2": "Released in August 2021, Codex specializes in understanding and writing code, powering tools like GitHub Copilot to assist developers efficiently.",
        "favicon": "https://www.google.com/s2/favicons?domain=openai.com&sz=128",
        "parentId": 12
      },
      {
        "id": 2,
        "name": "Gemini",
        "link": "https://gemini.google.com",
        "description": "Google's AI model for general-purpose question answering and tasks.",
        "description2": "Gemini is Google's latest AI model, designed to leverage advanced machine learning techniques for accurate and context-aware responses. It excels in various applications, including natural language understanding, image processing, and real-time data analysis. Gemini's architecture allows it to handle complex queries and provide insightful answers, making it suitable for both casual users and professionals seeking reliable AI assistance.",
        "favicon": "https://www.google.com/s2/favicons?domain=gemini.google.com&sz=128",
        "parentId": 12
      },
      {
        "id": 2.4,
        "name": "Gemini Ultra",
        "link": "https://deepmind.google/technologies/gemini-ultra",
        "description": "The most powerful model in the Gemini family.",
        "description2": "Designed for highly complex tasks, Gemini Ultra offers advanced reasoning and problem-solving abilities.",
        "favicon": "https://www.google.com/s2/favicons?domain=deepmind.google&sz=128",
        "parentId": 12
      },
      {
        "id": 2.5,
        "name": "Gemini Nano",
        "link": "https://deepmind.google/technologies/gemini-nano",
        "description": "Optimized for on-device tasks.",
        "description2": "Gemini Nano operates efficiently on edge devices like smartphones, enabling AI capabilities without heavy cloud reliance.",
        "favicon": "https://www.google.com/s2/favicons?domain=deepmind.google&sz=128",
        "parentId": 12
      },
      {
        "id": 2.6,
        "name": "Gemini 1.5 Pro",
        "link": "https://deepmind.google/technologies/gemini-1.5-pro",
        "description": "Mid-size multimodal model for reasoning tasks.",
        "description2": "Optimized for tasks like processing large data sets, including extended video and audio content.",
        "favicon": "https://www.google.com/s2/favicons?domain=deepmind.google&sz=128",
        "parentId": 12
      },
      {
        "id": 2.7,
        "name": "Gemini 1.5 Flash",
        "link": "https://deepmind.google/technologies/gemini-1.5-flash",
        "description": "Distilled version of Gemini 1.5 Pro for faster performance.",
        "description2": "Provides versatility across various tasks while ensuring efficiency.",
        "favicon": "https://www.google.com/s2/favicons?domain=deepmind.google&sz=128",
        "parentId": 12
      },
      {
        "id": 2.8,
        "name": "Gemini 1.5 Flash-8B",
        "link": "https://deepmind.google/technologies/gemini-1.5-flash-8b",
        "description": "Smaller variant of Gemini 1.5 Flash.",
        "description2": "Designed for high-volume, low-intelligence tasks in resource-constrained environments.",
        "favicon": "https://www.google.com/s2/favicons?domain=deepmind.google&sz=128",
        "parentId": 12
      },
      {
        "id": 2.9,
        "name": "Gemini 2.0 Flash Experimental",
        "link": "https://deepmind.google/technologies/gemini-2.0-flash-experimental",
        "description": "The latest experimental model in the Gemini series.",
        "description2": "Features real-time audio and video interactions, enhanced spatial understanding, and text-to-speech generation.",
        "favicon": "https://www.google.com/s2/favicons?domain=deepmind.google&sz=128",
        "parentId": 12
      },
      {
        "id": 3,
        "name": "Claude",
        "link": "https://anthropic.com/claude",
        "description": "Anthropic's advanced AI assistant for analysis, writing, and coding tasks.",
        "description2": "Claude is designed to assist users in generating human-like text based on the input provided. It is trained on the latest real-time data, making it capable of providing up-to-date information and insights. Claude excels in various applications, including content creation, data analysis, and coding assistance. Accessible through platforms like Slack, it offers a user-friendly interface for seamless interaction, making it a valuable tool for both casual users and professionals seeking reliable AI support.",
        "favicon": "https://www.google.com/s2/favicons?domain=anthropic.com&sz=128",
        "parentId": 12
      },
      {
        "id": 3.1,
        "name": "Claude Instant 1.1",
        "link": "https://openrouter.ai/anthropic/claude-instant-1.0",
        "description": "The first model in the Claude series, aimed at providing basic conversational capabilities.",
        "description2": "Claude Instant 1.1 served as a foundation for subsequent models, focusing on general tasks without advanced features. It was designed to assist users in basic conversational scenarios, making it suitable for a wide range of applications.",
        "favicon": "https://www.google.com/s2/favicons?domain=openrouter.ai&sz=128",
        "parentId": 12
      },
      {
        "id": 3.2,
        "name": "Claude Instant 1.2",
        "link": "https://www.anthropic.com/news/releasing-claude-instant-1-2",
        "description": "An improvement over Instant 1.1, enhancing performance in math and coding tasks.",
        "description2": "Claude Instant 1.2 offers improved versatility for users needing assistance in technical subjects. It builds on the foundation of its predecessor, providing better accuracy and response times in various applications.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.anthropic.com&sz=128",
        "parentId": 12
      },
      {
        "id": 3.3,
        "name": "Claude 3 Haiku",
        "link": "https://www.anthropic.com/news/claude-3-haiku",
        "description": "The entry-level model in the Claude 3 series, designed for general tasks.",
        "description2": "Claude 3 Haiku strikes a balance between performance and efficiency, making it suitable for users who need reliable assistance without the complexity of higher-tier models. It is ideal for everyday tasks and general inquiries.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.anthropic.com&sz=128",
        "parentId": 12
      },
      {
        "id": 3.4,
        "name": "Claude 3 Sonnet",
        "link": "https://openrouter.ai/anthropic/claude-3-sonnet",
        "description": "A mid-tier model providing enhanced capabilities for complex tasks.",
        "description2": "Claude 3 Sonnet is designed for a broader range of applications, including more complex conversational tasks and content generation. It offers improved performance over the Haiku model, making it suitable for users with diverse needs.",
        "favicon": "https://www.google.com/s2/favicons?domain=openrouter.ai&sz=128",
        "parentId": 12
      },
      {
        "id": 3.5,
        "name": "Claude 3 Opus",
        "link": "https://anthropic.com/claude-3-opus",
        "description": "The most advanced model in the Claude 3 series, excelling in high-performance tasks.",
        "description2": "Claude 3 Opus is tailored for users who require the highest level of capability from a language model, particularly in coding and complex problem-solving. It is designed to handle demanding tasks with ease.",
        "favicon": "https://www.google.com/s2/favicons?domain=anthropic.com&sz=128",
        "parentId": 12
      },
      {
        "id": 3.6,
        "name": "Claude 3.5 Haiku",
        "link": "https://anthropic.com/claude-3-5-haiku",
        "description": "An upgraded version of Haiku with improved performance and usability.",
        "description2": "Claude 3.5 Haiku enhances the capabilities of its predecessor, making it more effective for everyday tasks and providing users with a more seamless experience.",
        "favicon": "https://www.google.com/s2/favicons?domain=anthropic.com&sz=128",
        "parentId": 12
      },
      {
        "id": 3.7,
        "name": "Claude 3.5 Sonnet",
        "link": "https://anthropic.com/claude-3-5-sonnet",
        "description": "Builds on the capabilities of Sonnet, particularly in coding and task execution.",
        "description2": "Claude 3.5 Sonnet can perform actions like keystrokes and mouse clicks, allowing it to interact with computer environments more effectively. It is designed for users who need advanced functionality in their applications.",
        "favicon": "https://www.google.com/s2/favicons?domain=anthropic.com&sz=128",
        "parentId": 12
      },
      {
        "id": 4,
        "name": "Grok",
        "link": "https://x.ai/",
        "description": "Grok is now faster, sharper, and has improved multilingual support.",
        "description2": "Grok is an AI chatbot developed by Elon Musk's company xAI, capable of generating text and engaging in conversations with users. It has real-time access to information through the social media platform X (formerly Twitter), allowing it to respond to edgy and provocative questions with witty and rebellious answers. Grok operates in two modes: 'Fun Mode' for humorous interactions and 'Regular Mode' for more accurate responses. It was trained using a custom tech stack, including Kubernetes, JAX, and Rust, enabling efficient development. Grok's unique personality is inspired by Douglas Adams' 'The Hitchhiker's Guide to the Galaxy,' aiming to provide a playful yet insightful conversational experience. Unlike other chatbots, Grok is designed to tackle taboo topics and provide unfiltered responses, making it a distinct alternative to more politically correct models like ChatGPT.",
        "favicon": "https://www.google.com/s2/favicons?domain=x.ai&sz=128",
        "parentId": 12
      },
      {
        "id": 4.1,
        "name": "Grok-1",
        "link": "https://x.ai/blog/grok-os",
        "description": "314B parameter Mixture-of-Experts model with open-source weights.",
        "description2": "Grok-1 is a 314 billion parameter Mixture-of-Experts model trained from scratch by xAI, designed for generating text and engaging in conversations. It operates in two modes: 'Fun Mode' for humorous interactions and 'Regular Mode' for more accurate responses. Grok-1 has real-time access to information through the social media platform X (formerly Twitter), allowing it to respond to edgy and provocative questions. This model is not fine-tuned for any specific application and was developed using a custom tech stack on JAX and Rust. For more details, visit the [Grok-1 blog](https://x.ai/blog/grok-os).",
        "favicon": "https://www.google.com/s2/favicons?domain=x.ai&sz=128",
        "parentId": 12
      },
      {
        "id": 4.2,
        "name": "Grok-1.5",
        "link": "https://x.ai/blog/grok-1-5",
        "description": "Enhanced model with 128K token context length.",
        "description2": "Announced on March 29, 2024, Grok-1.5 introduced improved reasoning capabilities and an extended context length of 128,000 tokens, enabling more complex and nuanced language processing.",
        "favicon": "https://www.google.com/s2/favicons?domain=x.ai&sz=128",
        "parentId": 12
      },
      {
        "id": 4.3,
        "name": "Grok-1.5 Vision",
        "link": "https://x.ai/blog/grok-1-5v",
        "description": "First multimodal model in the Grok family.",
        "description2": "Introduced on April 12, 2024, Grok-1.5V is xAI's first multimodal model, capable of processing a wide variety of visual information, including documents, diagrams, graphs, screenshots, and photographs, enhancing its applicability across diverse tasks.",
        "favicon": "https://www.google.com/s2/favicons?domain=x.ai&sz=128",
        "parentId": 12
      },
      {
        "id": 4.4,
        "name": "Grok-2",
        "link": "https://x.ai/blog/grok-2",
        "description": "Advanced model with image generation capabilities.",
        "description2": "Grok-2 represents a significant advancement over its predecessor, Grok-1.5, showcasing frontier capabilities in chat, coding, and reasoning. It has been tested on the LMSYS leaderboard, outperforming both Claude 3.5 Sonnet and GPT-4-Turbo. Grok-2 is designed for real-time information access and excels in various academic benchmarks, including reasoning, reading comprehension, and coding tasks. It is available in beta on 𝕏 and will be accessible through an enterprise API for developers.",
        "favicon": "https://www.google.com/s2/favicons?domain=x.ai&sz=128",
        "parentId": 12
      },
      {
        "id": 5,
        "name": "Mistral Large 2411",
        "link": "https://mistral.ai/models/mistral-large-2411",
        "description": "Updated version of Mistral Large 2 with significant improvements.",
        "description2": "An updated version of Mistral Large 2, released alongside Pixtral Large 2411. It offers significant improvements in long-context understanding, a new system prompt, and more accurate function calling. Features a 128K token context window.",
        "favicon": "https://www.google.com/s2/favicons?domain=mistral.ai&sz=128",
        "parentId": 12
      },
      {
        "id": 5.1,
        "name": "Mistral Large 2407",
        "link": "https://mistral.ai/models/mistral-large-2407",
        "description": "Flagship model excelling in reasoning and code generation.",
        "description2": "Mistral AI's flagship model, excelling in reasoning, code generation, JSON handling, and chat functionalities. Supports multiple languages, including French, German, Spanish, Italian, Portuguese, Arabic, Hindi, Russian, Chinese, Japanese, and Korean, as well as over 80 coding languages. Equipped with a 128K token context window.",
        "favicon": "https://www.google.com/s2/favicons?domain=mistral.ai&sz=128",
        "parentId": 12
      },
      {
        "id": 5.2,
        "name": "Pixtral Large 2411",
        "link": "https://mistral.ai/models/pixtral-large-2411",
        "description": "Open-weight multimodal model built on Mistral Large 2.",
        "description2": "A 124B parameter, open-weight, multimodal model built on Mistral Large 2. Capable of understanding documents, charts, and natural images. Available under the Mistral Research License (MRL) for research and educational use, and the Mistral Commercial License for commercial purposes. Features a 128K token context window.",
        "favicon": "https://www.google.com/s2/favicons?domain=mistral.ai&sz=128",
        "parentId": 12
      },
      {
        "id": 5.3,
        "name": "Ministral 8B",
        "link": "https://mistral.ai/models/ministral-8b",
        "description": "8B parameter model for faster, memory-efficient inference.",
        "description2": "An 8B parameter model with an interleaved sliding-window attention pattern for faster, memory-efficient inference. Designed for edge use cases, supporting up to a 128K token context length. Excels in knowledge and reasoning tasks, outperforming peers in the sub-10B category.",
        "favicon": "https://www.google.com/s2/favicons?domain=mistral.ai&sz=128",
        "parentId": 12
      },
      {
        "id": 5.4,
        "name": "Ministral 3B",
        "link": "https://mistral.ai/models/ministral-3b",
        "description": "3B parameter model optimized for edge computing.",
        "description2": "A 3B parameter model optimized for on-device and edge computing. Excels in knowledge, commonsense reasoning, and function-calling, outperforming larger models like Mistral 7B on most benchmarks. Supports up to a 128K token context length.",
        "favicon": "https://www.google.com/s2/favicons?domain=mistral.ai&sz=128",
        "parentId": 12
      },
      {
        "id": 5.5,
        "name": "Pixtral 12B",
        "link": "https://mistral.ai/models/pixtral-12b",
        "description": "First multimodal text+image-to-text model.",
        "description2": "Mistral's first multimodal, text+image-to-text model. Weights were launched via torrent. Supports a 4K token context window.",
        "favicon": "https://www.google.com/s2/favicons?domain=mistral.ai&sz=128",
        "parentId": 12
      },
      {
        "id": 5.6,
        "name": "Mistral Nemo",
        "link": "https://mistral.ai/models/mistral-nemo",
        "description": "12B parameter multilingual model.",
        "description2": "A 12B parameter model with a 128K token context length, built in collaboration with NVIDIA. Multilingual, supporting languages such as English, French, German, Spanish, Italian, Portuguese, Chinese, Japanese, Korean, Arabic, and Hindi. Supports function calling and is released under the Apache 2.0 license.",
        "favicon": "https://www.google.com/s2/favicons?domain=mistral.ai&sz=128",
        "parentId": 12
      },
      {
        "id": 5.7,
        "name": "Codestral Mamba",
        "link": "https://mistral.ai/models/codestral-mamba",
        "description": "7.3B parameter model for code and reasoning tasks.",
        "description2": "A 7.3B parameter model based on the Mamba 2 architecture, designed for code and reasoning tasks. Features linear time inference, allowing for theoretically infinite sequence lengths, with a 256K token context window. Optimized for quick responses, especially beneficial for code productivity. Available under the Apache 2.0 license.",
        "favicon": "https://www.google.com/s2/favicons?domain=mistral.ai&sz=128",
        "parentId": 12
      },
      {
        "id": 5.8,
        "name": "Mistral 7B Instruct",
        "link": "https://mistral.ai/models/mistral-7b-instruct",
        "description": "High-performing 7.3B parameter model.",
        "description2": "A high-performing, industry-standard 7.3B parameter model, optimized for speed and context length. Supports a 33K token context window.",
        "favicon": "https://www.google.com/s2/favicons?domain=mistral.ai&sz=128",
        "parentId": 12
      },
      {
        "id": 5.9,
        "name": "Mixtral 8x22B Instruct",
        "link": "https://mistral.ai/models/mixtral-8x22b-instruct",
        "description": "Official instruct fine-tuned version of Mixtral 8x22B.",
        "description2": "Mistral's official instruct fine-tuned version of Mixtral 8x22B, utilizing 39B active parameters out of 141B, offering unparalleled cost efficiency for its size. Strengths include strong math, coding, and reasoning capabilities, with a large context length of 66K tokens.",
        "favicon": "https://www.google.com/s2/favicons?domain=mistral.ai&sz=128",
        "parentId": 12
      }
    ],
    "id": 12,
    "slug": "proprietary-models"
  },
  {
    "title": "Open Source Generative AI",
    "tag": "Image Generation",
    "tag2": "Open Source",
    "description": "Ready-to-use applications and implementations",
    "resources": [
      {
        "id": 1,
        "name": "Stable Diffusion 3",
        "link": "https://stability.ai/news/stable-diffusion-3",
        "description": "A family of models offering high-quality text-to-image generation.",
        "description2": "Stable Diffusion 3 introduces a range of models with parameters ranging from 800 million to 8 billion, enhancing text-to-image generation capabilities with improved efficiency and quality.",
        "favicon": "https://www.google.com/s2/favicons?domain=stability.ai&sz=128",
        "parentId": 13
      },
      {
        "id": 2,
        "name": "SDXL",
        "link": "https://arxiv.org/abs/2307.01952",
        "description": "An advanced latent diffusion model for high-resolution image synthesis.",
        "description2": "SDXL is a latent diffusion model that improves upon previous versions by leveraging a larger UNet backbone and multiple novel conditioning schemes, enabling high-resolution image synthesis with enhanced visual fidelity.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 13
      },
      {
        "id": 3,
        "name": "ControlNet",
        "link": "https://arxiv.org/abs/2302.05543",
        "description": "A neural network structure that adds conditional control to text-to-image diffusion models.",
        "description2": "ControlNet enables precise control in image generation by incorporating additional input conditions like edge maps, depth maps, and human poses, enhancing the flexibility and accuracy of diffusion models.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 13
      },
      {
        "id": 4,
        "name": "FLUX.1 [dev]",
        "link": "https://huggingface.co/black-forest-labs/FLUX.1-dev",
        "description": "A 12-billion parameter model for high-quality image generation; requires a separate license for commercial use.",
        "description2": "FLUX.1 [dev] is a 12-billion parameter rectified flow transformer capable of generating images from text descriptions. It offers cutting-edge output quality, second only to the state-of-the-art model FLUX.1 [pro]. The model is released under the FLUX.1-dev Non-Commercial License, making it suitable for personal, scientific, and non-commercial purposes. For more information, please refer to the official Hugging Face page.",
        "favicon": "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
        "parentId": 13
      },
      {
        "id": 5,
        "name": "FLUX.1 [schnell]",
        "link": "https://huggingface.co/black-forest-labs/FLUX.1-schnell",
        "description": "A faster, fully open-source variant under the Apache 2.0 license.",
        "description2": "FLUX.1 [schnell] is a 12-billion parameter rectified flow transformer optimized for speed and efficiency. Trained using latent adversarial diffusion distillation, it can generate high-quality images in only 1 to 4 steps, matching the performance of closed-source alternatives. Released under the Apache 2.0 license, the model can be used for personal, scientific, and commercial purposes. For more details, visit the official Hugging Face page.",
        "favicon": "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
        "parentId": 13
      },
      {
        "id": 6,
        "name": "Craiyon (formerly DALL-E Mini)",
        "link": "https://www.craiyon.com/",
        "description": "An open-source AI model generating images from text prompts.",
        "description2": "Craiyon, previously known as DALL-E Mini, is a free AI image generator that creates images based on user-provided text prompts. Developed by Boris Dayma, it utilizes machine learning algorithms trained on existing images and text descriptions to produce unique visuals. Craiyon is accessible online without the need for sign-up, allowing users to generate multiple images simultaneously. It has gained popularity for its ability to produce surreal and humorous images, making AI-generated art accessible to a broad audience.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.craiyon.com&sz=128",
        "parentId": 13
      },
      {
        "id": 7,
        "name": "DeepAI Text-to-Image Generator",
        "link": "https://deepai.org/machine-learning-model/text2img",
        "description": "An AI-powered tool that creates images from textual descriptions.",
        "description2": "DeepAI's Text-to-Image Generator utilizes advanced machine learning algorithms to transform user-provided text prompts into corresponding images. It offers multiple artistic styles, customization options, and high-resolution outputs, making it accessible for both personal and professional use.",
        "favicon": "https://www.google.com/s2/favicons?domain=deepai.org&sz=128",
        "parentId": 13
      },
      {
        "id": 8,
        "name": "Artbreeder",
        "link": "https://www.artbreeder.com/",
        "description": "A collaborative AI platform for creating and exploring generative art.",
        "description2": "Artbreeder is an online platform that enables users to create and explore generative art using machine learning, particularly through a process known as 'collaborative breeding' of images. It primarily utilizes Generative Adversarial Networks (GANs) to blend and alter existing images, allowing users to generate new artworks by combining and modifying various images. The platform offers multiple tools, such as Composer and Collager, to facilitate the creation of characters, landscapes, and abstract art. With over 10 million users and 250 million images, Artbreeder fosters a community-driven approach to AI-generated art.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.artbreeder.com&sz=128",
        "parentId": 13
      },
      {
        "id": 9,
        "name": "Disco Diffusion",
        "link": "https://github.com/alembics/disco-diffusion",
        "description": "An AI tool that generates artistic visuals from textual prompts using diffusion techniques.",
        "description2": "Disco Diffusion is a free, open-source AI image generator that leverages CLIP-Guided Diffusion to create compelling and beautiful images from text inputs. Accessible via a Google Colab Notebook, it allows users to produce high-quality, artist-like images by describing the desired scene in text. The process can take from a few minutes to an hour, depending on the complexity and the computational resources used. Disco Diffusion has gained popularity for its ability to generate stunning visuals, making AI-generated art accessible to a wide audience.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 13
      },
      {
        "id": 10,
        "name": "BigGAN",
        "link": "https://arxiv.org/abs/1809.11096",
        "description": "A GAN-based model that generates high-resolution, photorealistic images.",
        "description2": "BigGAN is a generative adversarial network designed to produce high-fidelity, high-resolution images by scaling up model and batch sizes. It incorporates techniques like class-conditional batch normalization and the hinge loss objective to enhance training stability and image quality. BigGAN has set new benchmarks in image synthesis, particularly with complex datasets like ImageNet, generating images up to 512×512 pixels with remarkable realism.",
        "favicon": "https://www.google.com/s2/favicons?domain=arxiv.org&sz=128",
        "parentId": 13
      },
      {
        "id": 11,
        "name": "StyleGAN",
        "link": "https://github.com/NVlabs/stylegan",
        "description": "A GAN-based model renowned for generating highly realistic human faces and other objects.",
        "description2": "StyleGAN, developed by NVIDIA, is a generative adversarial network (GAN) architecture that enables the synthesis of high-quality, photorealistic images. By introducing a style-based generator, it allows for unprecedented control over the visual attributes of generated images, facilitating applications in art, design, and entertainment. Subsequent versions, such as StyleGAN2 and StyleGAN3, have further enhanced image quality and addressed artifacts, solidifying StyleGAN's status as a pivotal tool in AI-driven image generation.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 13
      },
      {
        "id": 12,
        "name": "Genesis Embodied AI",
        "link": "https://genesis-embodied-ai.github.io/",
        "description": "A comprehensive physics simulation platform for robotics and embodied AI applications.",
        "description2": "Genesis is a universal physics engine designed for simulating a wide range of materials and physical phenomena. It integrates various physics solvers into a unified framework, enabling the generation of physically-accurate videos, robotic manipulation policies, and interactive 3D scenes. The platform is open-sourced, providing tools for automated data generation in robotics and beyond.",
        "favicon": "https://www.google.com/s2/favicons?domain=genesis-embodied-ai.github.io&sz=128",
        "parentId": 13
      }
    ],
    "id": 13,
    "slug": "open-source-generative-ai"
  },
  {
    "title": "Proprietary Generative AI",
    "tag": "Image Generation",
    "tag2": "Proprietary",
    "description": "Ready-to-use applications and implementations",
    "resources": [
      {
        "id": 1,
        "name": "DALL·E 2",
        "link": "https://openai.com/dall-e-2/",
        "description": "An AI system that creates realistic images and art from natural language descriptions.",
        "description2": "Developed by OpenAI, DALL·E 2 generates more realistic and accurate images with 4x greater resolution than its predecessor. It can combine concepts, attributes, and styles, and is capable of adding and removing elements while considering shadows, reflections, and textures. DALL·E 2 can also create different variations of an image inspired by the original. While it offers significant advancements in image generation, access has been limited to ensure responsible use.",
        "favicon": "https://www.google.com/s2/favicons?domain=openai.com&sz=128",
        "parentId": 14
      },
      {
        "id": 2,
        "name": "Midjourney",
        "link": "https://www.midjourney.com/",
        "description": "A proprietary AI tool that generates high-quality artistic images from user prompts.",
        "description2": "Midjourney is an AI-powered image generator that transforms textual descriptions into high-quality, artistic visuals. Accessible via a Discord bot and a web interface, it allows users to create unique images by entering descriptive prompts. Midjourney has gained popularity among digital artists and creatives for its ability to produce diverse and detailed artwork, making it a valuable tool in the realms of design, advertising, and entertainment.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.midjourney.com&sz=128",
        "parentId": 14
      },
      {
        "id": 3,
        "name": "Adobe Firefly",
        "link": "https://www.adobe.com/products/firefly.html",
        "description": "Adobe's suite of generative AI tools integrated into their creative software ecosystem.",
        "description2": "Adobe Firefly is a family of generative AI models designed to enhance creativity and streamline workflows within Adobe's suite of applications. Integrated into tools like Photoshop, Illustrator, and Adobe Express, Firefly enables users to generate images, apply text effects, and perform complex edits using simple text prompts. By leveraging Adobe's extensive content libraries and AI capabilities, Firefly offers creators intuitive and powerful features to bring their ideas to life efficiently.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.adobe.com&sz=128",
        "parentId": 14
      },
      {
        "id": 4,
        "name": "Runway",
        "link": "https://runwayml.com/",
        "description": "A suite of AI-powered generative tools for creatives, offering capabilities in video and image generation.",
        "description2": "Runway is an applied research company building the next era of art, entertainment, and human creativity. Their platform provides a range of AI tools that facilitate the creation of multimedia content through easy-to-use interfaces. These tools include capabilities for text-to-video, video-to-video, image-to-image transformations, and more, making complex tasks simpler and more accessible. Runway's generative AI models, such as Gen-1, Gen-2, and Gen-3 Alpha, allow users to create detailed and nuanced media from basic inputs. Integrated into a web platform and accessible via an API, Runway's tools are utilized by professionals in filmmaking, music production, visual effects, and other creative industries.",
        "favicon": "https://www.google.com/s2/favicons?domain=runwayml.com&sz=128",
        "parentId": 14
      },
      {
        "id": 5,
        "name": "DreamStudio",
        "link": "https://dreamstudio.ai/",
        "description": "A user-friendly web interface for Stable Diffusion, enabling easy image generation without technical setup.",
        "description2": "DreamStudio, developed by Stability AI, provides a commercial platform for users to generate images using the Stable Diffusion model. It offers an intuitive interface that allows users to create images from text prompts without the need for complex installations or technical expertise. DreamStudio includes features such as negative and multi-prompting, inpainting, outpainting, and CLIP guidance, enhancing the creative process for artists and designers. Users can purchase credits to access various functionalities, making it a flexible tool for both hobbyists and professionals.",
        "favicon": "https://www.google.com/s2/favicons?domain=dreamstudio.ai&sz=128",
        "parentId": 14
      },
      {
        "id": 6,
        "name": "NVIDIA GauGAN",
        "link": "https://www.nvidia.com/en-us/research/ai-playground/",
        "description": "An AI tool that transforms simple sketches into photorealistic images using GAN technology.",
        "description2": "Developed by NVIDIA, GauGAN utilizes generative adversarial networks (GANs) to convert basic doodles into stunning, lifelike landscapes. By interpreting segmentation maps, it fills in details like reflections, shadows, and textures, enabling users to create realistic scenes with minimal input. GauGAN has evolved into applications like NVIDIA Canvas, offering artists intuitive tools for rapid concept visualization and design.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.nvidia.com&sz=128",
        "parentId": 14
      },
      {
        "id": 7,
        "name": "ChatGPT with DALL·E Integration",
        "link": "https://openai.com/dall-e-3/",
        "description": "An AI system that combines conversational text generation with image creation capabilities.",
        "description2": "OpenAI's integration of DALL·E 3 into ChatGPT allows users to generate detailed images directly from conversational prompts. This seamless fusion enables users to describe a scene or concept in natural language, and ChatGPT, leveraging DALL·E 3, produces corresponding images. This functionality enhances creative workflows by providing visual content generation within the chat interface, making it accessible for various applications, including design, education, and entertainment.",
        "favicon": "https://www.google.com/s2/favicons?domain=openai.com&sz=128",
        "parentId": 14
      }
    ],
    "id": 14,
    "slug": "proprietary-generative-ai"
  },
  {
    "title": "Open Source Video Generation",
    "tag": "Video Generation",
    "tag2": "Open Source",
    "description": "Ready-to-use applications and implementations",
    "resources": [
      {
        "id": 1,
        "name": "Potat1",
        "link": "https://github.com/camenduru/text-to-video-synthesis-colab",
        "description": "An open-source AI video generator that creates high-resolution videos from text prompts.",
        "description2": "Potat1 is a pioneering open-source AI model designed to generate high-resolution videos (up to 1024x576) from textual descriptions. Developed by the AI community, it leverages advanced diffusion models to produce coherent and high-quality video outputs. Potat1 is accessible via platforms like Google Colab, allowing users to experiment with and generate videos without the need for extensive computational resources. As an open-source project, it encourages collaboration and further development in the field of AI-driven video generation.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 15
      },
      {
        "id": 2,
        "name": "VideoGPT",
        "link": "https://github.com/wilson1yan/VideoGPT",
        "description": "A generative model that creates natural videos using likelihood-based modeling.",
        "description2": "VideoGPT is a generative model that extends the GPT architecture to video data, enabling the creation of natural videos through likelihood-based modeling. It employs a Vector Quantized-Variational AutoEncoder (VQ-VAE) with 3D convolutions and axial self-attention to learn compressed video representations. An autoregressive GPT-like model processes these latent representations with spatio-temporal encodings to generate high-fidelity videos. VideoGPT has demonstrated performance comparable to Generative Adversarial Networks (GANs) in video quality, producing high-fidelity videos from datasets such as UCF-101 and TGIF.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 15
      },
      {
        "id": 3,
        "name": "Stable Video Diffusion",
        "link": "https://stability.ai/stable-video",
        "description": "A latent video diffusion model for generating videos from text or images.",
        "description2": "Stable Video Diffusion, developed by Stability AI, is a state-of-the-art model for text-to-video and image-to-video generation. The model features two variants capable of producing 14 and 25 frames, with customizable frame rates ranging between 3 and 30 frames per second. It incorporates robust multi-view 3D priors, enhancing the consistency and realism of generated video sequences. Stable Video Diffusion can also fine-tune multi-view diffusion models, enabling the creation of dynamic, high-fidelity videos suitable for creative and professional applications.",
        "favicon": "https://www.google.com/s2/favicons?domain=stability.ai&sz=128",
        "parentId": 15
      },
      {
        "id": 4,
        "name": "LVDM (Latent Video Diffusion Model)",
        "link": "https://github.com/YingqingHe/LVDM",
        "description": "A lightweight video diffusion model for high-fidelity long video generation.",
        "description2": "Developed by Tencent AI Lab, LVDM is a latent video diffusion model designed for high-fidelity long video generation. By leveraging a low-dimensional 3D latent space, LVDM efficiently generates videos with thousands of frames. Its hierarchical diffusion approach enables the production of extended video sequences, while addressing common errors in long video generation through techniques like conditional latent perturbation and unconditional guidance. LVDM has demonstrated state-of-the-art performance on various benchmarks, making it a significant advancement in AI-driven video generation.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 15
      },
      {
        "id": 5,
        "name": "StyleGAN-V",
        "link": "https://github.com/universome/stylegan-v",
        "description": "A continuous-time video generator built upon StyleGAN2, enabling high-quality video synthesis with spatial manipulations.",
        "description2": "StyleGAN-V extends the capabilities of StyleGAN2 to video generation by treating videos as continuous signals in time. It employs neural representations with positional embeddings to model continuous motion, allowing for the generation of high-fidelity videos. Notably, StyleGAN-V can be effectively trained on sparse video datasets, requiring as few as two frames per clip. This approach facilitates spatial manipulations and offers a straightforward architecture for generating natural videos using likelihood-based modeling.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 15
      },
      {
        "id": 6,
        "name": "AnimateDiff",
        "link": "https://github.com/guoyww/AnimateDiff",
        "description": "A plug-and-play module that transforms text-to-image diffusion models into animation generators without specific tuning.",
        "description2": "AnimateDiff is an innovative framework that enables existing text-to-image diffusion models, such as Stable Diffusion, to generate animations without requiring model-specific tuning. By integrating a pre-trained motion module, AnimateDiff imparts motion dynamics to personalized text-to-image models, allowing them to produce temporally smooth and visually consistent animation clips. This approach preserves the original model's visual quality and diversity while introducing motion, making it a versatile tool for creators seeking to animate their personalized diffusion models.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 15
      },
      {
        "id": 7,
        "name": "LaVie",
        "link": "https://vchitect.github.io/LaVie-project/",
        "description": "A high-quality text-to-video generation framework utilizing cascaded latent diffusion models.",
        "description2": "LaVie is an advanced text-to-video (T2V) generation framework that leverages pre-trained text-to-image (T2I) models to produce visually realistic and temporally coherent videos. It operates through cascaded latent diffusion models, including a base T2V model, a temporal interpolation model, and a video super-resolution model. Key features of LaVie include the incorporation of temporal self-attentions with rotary positional encoding to capture temporal correlations and joint image-video fine-tuning to enhance creative output. Additionally, LaVie utilizes a comprehensive dataset named Vimeo25M, consisting of 25 million text-video pairs, to ensure quality, diversity, and aesthetic appeal in generated videos.",
        "favicon": "https://www.google.com/s2/favicons?domain=vchitect.github.io&sz=128",
        "parentId": 15
      },
      {
        "id": 8,
        "name": "Latte",
        "link": "https://github.com/Vchitect/Latte",
        "description": "A Latent Diffusion Transformer model for high-quality video generation.",
        "description2": "Latte is a novel Latent Diffusion Transformer designed for video generation. It first extracts spatio-temporal tokens from input videos and then employs a series of Transformer blocks to model video distribution in the latent space. To efficiently handle the substantial number of tokens extracted from videos, Latte introduces four efficient variants by decomposing the spatial and temporal dimensions of input videos. Comprehensive evaluations demonstrate that Latte achieves state-of-the-art performance across standard video generation datasets, including FaceForensics, SkyTimelapse, UCF101, and Taichi-HD. Additionally, Latte extends to text-to-video generation tasks, achieving comparable results to recent T2V models.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 15
      },
      {
        "id": 9,
        "name": "Open-Sora",
        "link": "https://github.com/hpcaitech/Open-Sora",
        "description": "An open-source AI video generation framework for efficient and high-quality video production.",
        "description2": "Open-Sora is an open-source initiative dedicated to democratizing efficient video production through advanced AI techniques. It provides a comprehensive framework for generating high-quality videos from text prompts, images, or existing video clips. By embracing open-source principles, Open-Sora aims to make state-of-the-art video generation tools accessible to all, fostering innovation and collaboration within the AI and creative communities.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 15
      },
      {
        "id": 10,
        "name": "Genmo",
        "link": "https://genmo.ai",
        "description": "An AI platform offering open-source video generation models for creating high-quality videos from text prompts.",
        "description2": "Genmo is an AI platform dedicated to developing open-source video generation models that enable users to create high-quality videos from simple text prompts. Their flagship model, Mochi 1, utilizes advanced AI techniques to produce realistic motion and superior prompt adherence, allowing for detailed control over characters, settings, and actions. Genmo provides a user-friendly interface through their Playground, where users can experiment with AI-generated videos, making advanced video generation accessible to a wider audience.",
        "favicon": "https://www.google.com/s2/favicons?domain=genmo.ai&sz=128",
        "parentId": 15
      },
      {
        "id": 11,
        "name": "Mochi 1",
        "link": "https://genmo.ai",
        "description": "An open-source AI video generation model that creates high-quality videos from text prompts.",
        "description2": "Mochi 1 is a state-of-the-art open-source AI video generation model developed by Genmo. It utilizes a novel Asymmetric Diffusion Transformer (AsymmDiT) architecture to produce high-fidelity videos with smooth motion at 30 frames per second. With a 10 billion parameter diffusion model, Mochi 1 excels in prompt adherence, ensuring that generated videos accurately reflect user inputs. Licensed under the permissive Apache 2.0 license, it is freely available for personal and commercial use. Users can access Mochi 1 through Genmo's playground or integrate it into their applications via APIs.",
        "favicon": "https://www.google.com/s2/favicons?domain=genmo.ai&sz=128",
        "parentId": 15
      },
      {
        "id": 12,
        "name": "Hunyuan Video",
        "link": "https://hunyuanvideoai.com/",
        "description": "An open-source AI video generator by Tencent, transforming text descriptions into high-quality videos.",
        "description2": "Hunyuan Video is a state-of-the-art AI video generation model developed by Tencent, featuring 13 billion parameters. It excels in creating high-quality videos from text descriptions, offering superior motion quality and visual fidelity. As an open-source model, Hunyuan Video provides creators with advanced tools for realistic and innovative video production, fostering a new era of AI-driven content creation.",
        "favicon": "https://www.google.com/s2/favicons?domain=hunyuanvideoai.com&sz=128",
        "parentId": 15
      },
      {
        "id": 13,
        "name": "Awesome Video Diffusion",
        "link": "https://github.com/showlab/Awesome-Video-Diffusion",
        "description": "A curated list of recent diffusion models for video generation, editing, restoration, and understanding.",
        "description2": "Awesome Video Diffusion is a comprehensive repository that compiles state-of-the-art diffusion models and related resources in the field of video processing. It encompasses various applications, including video generation, editing, restoration, and understanding, as well as advancements in neural radiance fields (NeRF). The repository serves as a valuable resource for researchers and practitioners, providing access to open-source toolboxes, foundation models, evaluation benchmarks, and metrics. By aggregating these resources, Awesome Video Diffusion facilitates the exploration and development of cutting-edge techniques in video diffusion modeling.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 15
      },
      {
        "id": 14,
        "name": "FLUX.1",
        "link": "https://flux1.ai/",
        "description": "A state-of-the-art AI image generator developed by Black Forest Labs, offering high-quality image generation from text prompts.",
        "description2": "FLUX.1 is an advanced AI image generation model created by Black Forest Labs. It interprets detailed text descriptions to produce high-quality images, supporting various styles and complexities. FLUX.1 is available in multiple variants, including FLUX.1 [pro], FLUX.1 [dev], and FLUX.1 [schnell], each catering to different user needs. The 'pro' version delivers top-tier performance, the 'dev' version is ideal for developers with advanced features, and the 'schnell' version offers faster image generation with slightly reduced quality. FLUX.1 is accessible through various online platforms, providing both free and subscription-based plans to accommodate diverse user requirements.",
        "favicon": "https://www.google.com/s2/favicons?domain=flux1.ai&sz=128",
        "parentId": 15
      },
      {
        "id": 15,
        "name": "DeepFloyd IF",
        "link": "https://github.com/deep-floyd/IF",
        "description": "An open-source text-to-image model achieving high photorealism and language understanding.",
        "description2": "Developed by DeepFloyd Lab at Stability AI, DeepFloyd IF is a state-of-the-art open-source text-to-image model that excels in photorealism and language comprehension. It employs a modular architecture comprising a frozen text encoder and three cascaded pixel diffusion modules. The process begins with a base model generating a 64x64 pixel image from a text prompt, followed by two super-resolution models that upscale the image to 256x256 and 1024x1024 pixels, respectively. This design enables the creation of high-quality images that accurately reflect complex textual descriptions. DeepFloyd IF has demonstrated superior performance, achieving a zero-shot FID score of 6.66 on the COCO dataset, underscoring its potential for advancing text-to-image synthesis.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 15
      },
      {
        "id": 16,
        "name": "ControlNet",
        "link": "https://github.com/lllyasviel/ControlNet",
        "description": "A neural network architecture that adds conditional control to text-to-image diffusion models.",
        "description2": "ControlNet is a neural network structure designed to provide additional control over text-to-image diffusion models by incorporating extra conditions. It achieves this by duplicating the weights of neural network blocks into a 'locked' copy and a 'trainable' copy. The 'trainable' copy learns the new condition, while the 'locked' copy preserves the original model's integrity. This architecture allows for the integration of various conditioning inputs, such as edges, depth, segmentation, and human poses, enabling more precise and consistent image generation without compromising the quality of the pretrained diffusion models.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 15
      },
      {
        "id": 17,
        "name": "Animagine XL 3.1",
        "link": "https://huggingface.co/cagliostrolab/animagine-xl-3.1",
        "description": "An open-source, anime-themed text-to-image model for high-quality image generation.",
        "description2": "Animagine XL 3.1 is an advanced open-source text-to-image model designed to generate high-quality anime-style images from textual prompts. Building upon its predecessor, Animagine XL 3.0, this model offers enhanced image quality, a broader range of characters from well-known anime series, an optimized dataset, and new aesthetic tags for improved image creation. Developed by Cagliostro Research Lab in collaboration with SeaArt.ai, Animagine XL 3.1 is based on Stable Diffusion XL and has been fine-tuned to better understand anime concepts, hand anatomy, and prompt interpretation. It supports Danbooru-style tags and various resolution options, making it a valuable resource for anime fans, artists, and content creators seeking accurate and detailed representations of anime characters.",
        "favicon": "https://www.google.com/s2/favicons?domain=huggingface.co&sz=128",
        "parentId": 15
      }
    ],
    "id": 15,
    "slug": "open-source-video-generation"
  },
  {
    "title": "Proprietary Video Generation",
    "tag": "Video Generation",
    "tag2": "Proprietary",
    "description": "Ready-to-use applications and implementations",
    "resources": [
      {
        "id": 1,
        "name": "Sora",
        "link": "https://sora.com/",
        "description": "OpenAI's advanced text-to-video model that generates realistic videos from textual prompts.",
        "description2": "Sora is OpenAI's state-of-the-art video generation model capable of creating high-quality videos based on user-provided text descriptions. Leveraging advanced AI techniques, Sora can produce videos up to 1080p resolution and 20 seconds in length, supporting various aspect ratios. Users can generate entirely new content from text or enhance existing media by extending, remixing, and blending assets. Integrated into OpenAI's suite of products, Sora offers a user-friendly interface for both creative professionals and enthusiasts, marking a significant advancement in generative video technology.",
        "favicon": "https://www.google.com/s2/favicons?domain=sora.com&sz=128",
        "parentId": 16
      },
      {
        "id": 2,
        "name": "Kling",
        "link": "https://kling.kuaishou.com/en",
        "description": "A Chinese generative AI model that creates realistic videos from text prompts.",
        "description2": "Developed by Kuaishou, Kling is a generative AI model that transforms textual descriptions into high-quality videos. Leveraging advanced 3D face and body reconstruction technology, Kling accurately simulates real-world physics and complex motions, producing videos up to 1080p resolution at 30 frames per second. It supports various aspect ratios and shot types, making it a versatile tool for content creators seeking to generate lifelike videos from simple text inputs.",
        "favicon": "https://www.google.com/s2/favicons?domain=kling.kuaishou.com&sz=128",
        "parentId": 16
      },
      {
        "id": 3,
        "name": "Runway Gen-2",
        "link": "https://runwayml.com/research/gen-2",
        "description": "A multimodal AI system that generates novel videos from text, images, or video clips.",
        "description2": "Runway's Gen-2 is an advanced AI model that enables users to create high-quality videos by inputting text descriptions, images, or existing video clips. It offers various modes, including Text to Video, Text + Image to Video, and Image to Video, providing flexibility in content creation. While primarily a commercial tool, Gen-2 has garnered interest within open-source communities, leading to the development of unofficial clients and integrations that expand its accessibility and functionality.",
        "favicon": "https://www.google.com/s2/favicons?domain=runwayml.com&sz=128",
        "parentId": 16
      },
      {
        "id": 4,
        "name": "Pika Labs",
        "link": "https://pika.art/",
        "description": "An AI-powered platform that transforms text or image prompts into short, engaging videos.",
        "description2": "Pika Labs is a free AI video generator that allows users to create animated videos from simple text or image inputs. Operating through a user-friendly web interface and a Discord-based platform, it offers features like 'Pikaffects' for imaginative transformations and cinematic camera controls. Pika Labs supports various styles, including 3D animation and realistic visuals, making it a versatile tool for content creators seeking to enhance their digital storytelling.",
        "favicon": "https://www.google.com/s2/favicons?domain=pika.art&sz=128",
        "parentId": 16
      },
      {
        "id": 5,
        "name": "Runway Gen-3 Alpha",
        "link": "https://runwayml.com/research/introducing-gen-3-alpha",
        "description": "An advanced AI model for fast, high-fidelity, and controllable video generation from text, image, or video prompts.",
        "description2": "Runway's Gen-3 Alpha represents a significant advancement in AI-driven video generation, offering improved fidelity, consistency, and motion over its predecessors. It enables users to create high-quality videos by inputting text descriptions, images, or existing video clips, providing flexibility in content creation. Gen-3 Alpha supports various modes, including Text to Video, Image to Video, and Video to Video, making it a versatile tool for creatives seeking to generate lifelike videos from simple inputs. Integrated into Runway's suite of products, it offers a user-friendly interface for both professionals and enthusiasts.",
        "favicon": "https://www.google.com/s2/favicons?domain=runwayml.com&sz=128",
        "parentId": 16
      },
      {
        "id": 6,
        "name": "Luma Labs Dream Machine",
        "link": "https://lumalabs.ai/dream-machine",
        "description": "An AI-powered tool that generates realistic and fantastical videos from text instructions and images.",
        "description2": "Luma Labs' Dream Machine is an AI model designed to create high-quality, realistic, and imaginative videos based on user-provided text prompts or images. Utilizing a scalable and efficient transformer architecture trained directly on videos, Dream Machine excels at producing physically accurate, consistent, and dynamic scenes. It offers features such as keyframe editing, video extensions, and prompt enhancement, enabling users to craft complex narratives with ease. Accessible through a user-friendly web interface, Dream Machine provides both free and subscription-based plans to accommodate varying user needs.",
        "favicon": "https://www.google.com/s2/favicons?domain=lumalabs.ai&sz=128",
        "parentId": 16
      },
      {
        "id": 7,
        "name": "Dreamix",
        "link": "https://dreamix-video-editing.github.io/",
        "description": "An AI model for text-guided motion and appearance editing of general videos.",
        "description2": "Dreamix is a video diffusion model that enables text-based motion and appearance editing of real-world videos. By combining low-resolution spatio-temporal information from the original video with newly synthesized high-resolution content, Dreamix aligns the output with guiding text prompts. It employs a novel mixed finetuning approach to enhance motion editability and supports applications such as image animation and subject-driven video generation. Extensive experiments have demonstrated Dreamix's superior performance in producing temporally consistent and high-fidelity edited videos.",
        "favicon": "https://www.google.com/s2/favicons?domain=dreamix-video-editing.github.io&sz=128",
        "parentId": 16
      },
      {
        "id": 8,
        "name": "Meta's Movie Gen",
        "link": "https://movie-gen.net/",
        "description": "An AI-powered video generator that creates high-definition videos with synchronized audio from text inputs.",
        "description2": "Meta's Movie Gen is an advanced AI model capable of generating realistic videos and audio clips based on user prompts. It can create videos up to 16 seconds long and audio up to 45 seconds, showcasing tasks such as swimmers, surfers, and interactive manipulations like adding elements or changing environments in a scene. Movie Gen allows users to produce high-quality videos and audio, edit existing videos with precision, and transform images into unique video content. While currently in the research phase and not publicly available, Movie Gen represents a significant advancement in AI-driven media generation, with potential applications in content creation and editing.",
        "favicon": "https://www.google.com/s2/favicons?domain=movie-gen.net&sz=128",
        "parentId": 16
      },
      {
        "id": 9,
        "name": "Veo",
        "link": "https://deepmind.google/technologies/veo/",
        "description": "An advanced AI video generation model by Google DeepMind, capable of producing high-quality 1080p videos over a minute long from text, image, or video prompts.",
        "description2": "Veo is Google DeepMind's most advanced video generation model, introduced in May 2024. It generates high-definition 1080p videos exceeding a minute in length, accommodating a wide range of cinematic and visual styles. Veo interprets complex prompts, accurately capturing nuances and tones, and simulates real-world physics. It offers creative control over camera angles, movements, and shot styles, making it a versatile tool for filmmakers, educators, and content creators. Veo is currently available to select creators through VideoFX, an experimental tool at labs.google, with plans for broader integration into platforms like YouTube Shorts.",
        "favicon": "https://www.google.com/s2/favicons?domain=deepmind.google&sz=128",
        "parentId": 16
      },
      {
        "id": 10,
        "name": "Pictory",
        "link": "https://pictory.ai/",
        "description": "An AI-powered video creation platform that transforms text content into engaging videos.",
        "description2": "Pictory is an AI-driven video creation tool that enables users to produce professional-quality videos without prior video editing experience. It offers features such as transforming scripts or blog posts into videos, adding captions automatically, and converting long-form content into short, shareable clips. With a vast library of royalty-free visuals and music, Pictory streamlines the video production process, making it accessible for content creators, marketers, and businesses aiming to enhance their digital presence.",
        "favicon": "https://www.google.com/s2/favicons?domain=pictory.ai&sz=128",
        "parentId": 16
      },
      {
        "id": 11,
        "name": "Colossyan Creator",
        "link": "https://www.colossyan.com/",
        "description": "An AI-powered video creation platform that transforms text into engaging videos with realistic AI avatars.",
        "description2": "Colossyan Creator is an AI-driven video generation platform that enables users to create professional-quality videos from text inputs. It offers a diverse range of AI avatars, supports over 70 languages and accents, and provides features such as instant avatar creation, voice cloning, and automatic translation. Designed for applications in learning, training, communication, marketing, and sales, Colossyan Creator streamlines the video production process, making it accessible and efficient for businesses and individuals alike.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.colossyan.com&sz=128",
        "parentId": 16
      },
      {
        "id": 12,
        "name": "HeyGen",
        "link": "https://www.heygen.com/",
        "description": "An AI-powered video creation platform that transforms text into engaging videos with customizable AI avatars.",
        "description2": "HeyGen is an innovative AI-driven video generation platform that enables users to create professional-quality videos from text inputs. It offers a diverse range of AI avatars, supports multiple languages and accents, and provides features such as video translation, personalized video creation, and interactive avatars. Designed for applications in marketing, e-learning, and corporate communications, HeyGen streamlines the video production process, making it accessible and efficient for businesses and individuals alike.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.heygen.com&sz=128",
        "parentId": 16
      },
      {
        "id": 13,
        "name": "Luma AI",
        "link": "https://lumalabs.ai/",
        "description": "An AI platform specializing in 3D scene reconstruction and video generation from text and images.",
        "description2": "Luma AI is an innovative platform that leverages advanced artificial intelligence to enable users to create lifelike 3D models and high-quality videos from simple text descriptions or images. Their flagship product, Dream Machine, utilizes a scalable transformer architecture trained directly on videos, allowing for the generation of physically accurate and consistent scenes. Luma AI also offers tools for 3D scene capture and reconstruction, making it accessible for applications in gaming, virtual reality, and digital content creation.",
        "favicon": "https://www.google.com/s2/favicons?domain=lumalabs.ai&sz=128",
        "parentId": 16
      },
      {
        "id": 14,
        "name": "Fliki",
        "link": "https://fliki.ai/",
        "description": "An AI-powered platform that transforms text into engaging videos with lifelike voiceovers.",
        "description2": "Fliki is an AI-driven video creation tool that enables users to effortlessly convert text into captivating videos. It offers a user-friendly script-based editor, a vast library of over 2,000 realistic text-to-speech voices across 80+ languages, and access to millions of stock media assets. Fliki supports various use cases, including content creation, marketing, education, and e-commerce, making it a versatile solution for individuals and businesses seeking to enhance their digital content efficiently.",
        "favicon": "https://www.google.com/s2/favicons?domain=fliki.ai&sz=128",
        "parentId": 16
      }
    ],
    "id": 16,
    "slug": "proprietary-video-generation"
  },
  {
    "title": "Open Source Apps | Projects",
    "tag": "Apps | Projects",
    "tag2": "Open Source Apps | Projects",
    "description": "Ready-to-use applications and implementations",
    "resources": [
      {
        "id": 1,
        "name": "Auto-GPT",
        "link": "https://github.com/Significant-Gravitas/Auto-GPT",
        "description": "Autonomous GPT-4 agent that chains together LLM thoughts to accomplish complex goals independently.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 17
      },
      {
        "id": 2,
        "name": "GPT4All",
        "link": "https://gpt4all.io/",
        "description": "Ecosystem of open-source large language models that run locally on consumer-grade hardware.",
        "favicon": "https://www.google.com/s2/favicons?domain=gpt4all.io&sz=128",
        "parentId": 17
      },
      {
        "id": 3,
        "name": "PrivateGPT",
        "link": "https://github.com/imartinez/privateGPT",
        "description": "Interact with documents privately using LLMs, running everything locally without data leaving your system.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 17
      },
      {
        "id": 4,
        "name": "ChatBot UI",
        "link": "https://github.com/mckaywrigley/chatbot-ui",
        "description": "Open source ChatGPT clone with clean UI and support for multiple LLM providers.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 17
      },
      {
        "id": 5,
        "name": "OpenAssistant",
        "link": "https://open-assistant.io/",
        "description": "Community-driven effort to create a free and open source AI assistant with broad capabilities.",
        "favicon": "https://www.google.com/s2/favicons?domain=open-assistant.io&sz=128",
        "parentId": 17
      },
      {
        "id": 6,
        "name": "Jan",
        "link": "https://github.com/janhq/jan",
        "description": "Desktop app for running open LLMs locally with chat interface and model management.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 17
      },
      {
        "id": 7,
        "name": "MiniGPT-4",
        "link": "https://github.com/Vision-CAIR/MiniGPT-4",
        "description": "Open-source implementation enhancing language models with vision capabilities.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 17
      },
      {
        "id": 8,
        "name": "LocalGPT",
        "link": "https://github.com/PromtEngineer/localGPT",
        "description": "Chat with documents locally using open-source language models for complete privacy.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 17
      },
      {
        "id": 9,
        "name": "GPT Engineer",
        "link": "https://github.com/gpt-engineer-org/gpt-engineer",
        "description": "Tool that generates entire codebases from natural language project descriptions.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 17
      },
      {
        "id": 10,
        "name": "OpenChat",
        "link": "https://github.com/openchatai/OpenChat",
        "description": "Self-hosted ChatGPT alternative supporting multiple LLM backends and custom models.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 17
      },
      {
        "id": 11,
        "name": "H2O GPT",
        "link": "https://github.com/h2oai/h2ogpt",
        "description": "Enterprise-ready stack for private LLM experimentation and deployment.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 17
      },
      {
        "id": 12,
        "name": "Dalai",
        "link": "https://github.com/cocktailpeanut/dalai",
        "description": "CLI tool for easily running LLaMA and Alpaca models locally with simple commands.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 17
      },
      {
        "id": 13,
        "name": "LangChain",
        "link": "https://github.com/langchain-ai/langchain",
        "description": "Framework for developing applications powered by language models with chains and agents.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 17
      },
      {
        "id": 14,
        "name": "LlamaIndex",
        "link": "https://github.com/jerryjliu/llama_index",
        "description": "Data framework for LLM applications to ingest, structure, and access private or domain-specific data.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 17
      },
      {
        "id": 15,
        "name": "LocalAI",
        "link": "https://github.com/go-skynet/LocalAI",
        "description": "Self-hosted, OpenAI-compatible API for running LLMs locally with consumer hardware.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 17
      },
      {
        "id": 16,
        "name": "Text Generation WebUI",
        "link": "https://github.com/oobabooga/text-generation-webui",
        "description": "Gradio web UI for running Large Language Models like LLaMA, llama.cpp, GPT-J, OPT, and GALACTICA.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 17
      },
      {
        "id": 17,
        "name": "Semantic Kernel",
        "link": "https://github.com/microsoft/semantic-kernel",
        "description": "Microsoft's SDK for integrating LLMs into applications with prompts as functions.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 17
      },
      {
        "id": 18,
        "name": "Transformers.js",
        "link": "https://github.com/xenova/transformers.js",
        "description": "Run 🤗 Transformers in your browser with WebGL acceleration.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 17
      },
      {
        "id": 19,
        "name": "Haystack",
        "link": "https://github.com/deepset-ai/haystack",
        "description": "Framework for building NLP applications with LLMs and Transformers.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 17
      },
      {
        "id": 20,
        "name": "vLLM",
        "link": "https://github.com/vllm-project/vllm",
        "description": "High-throughput and memory-efficient inference and serving engine for LLMs.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 17
      },
      {
        "id": 21,
        "name": "GPT4All",
        "link": "https://github.com/nomic-ai/gpt4all",
        "description": "Run open-source LLMs anywhere with a chat interface.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 17
      },
      {
        "id": 22,
        "name": "PrivateGPT",
        "link": "https://github.com/imartinez/privateGPT",
        "description": "Interact with documents using LLMs, 100% private, no data leaves your execution environment.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 17
      },
      {
        "id": 23,
        "name": "Flowise",
        "link": "https://github.com/FlowiseAI/Flowise",
        "description": "Drag & drop UI to build LLM flows with LangchainJS.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 17
      },
      {
        "id": 24,
        "name": "Chroma",
        "link": "https://github.com/chroma-core/chroma",
        "description": "Open-source embedding database for LLM applications.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 17
      },
      {
        "id": 25,
        "name": "LiteLLM",
        "link": "https://github.com/BerriAI/litellm",
        "description": "Unified interface to call OpenAI, Anthropic, Cohere, Hugging Face, Replicate APIs.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 17
      },
      {
        "id": 26,
        "name": "Ollama",
        "link": "https://github.com/jmorganca/ollama",
        "description": "Get up and running with large language models locally.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 17
      },
      {
        "id": 27,
        "name": "OpenLLM",
        "link": "https://github.com/bentoml/OpenLLM",
        "description": "Operating LLMs in production with fine-tuning and serving capabilities.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 17
      },
      {
        "id": 28,
        "name": "LMStudio",
        "link": "https://github.com/lmstudio-ai/lmstudio",
        "description": "Desktop app for running and testing local LLMs with chat interface.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 17
      },
      {
        "id": 29,
        "name": "Guidance",
        "link": "https://github.com/microsoft/guidance",
        "description": "Language model programming with structured input/output support.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 17
      },
      {
        "id": 30,
        "name": "Langflow",
        "link": "https://github.com/logspace-ai/langflow",
        "description": "UI for LangChain, easily experiment and prototype flows.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 17
      },
      {
        "id": 31,
        "name": "FastChat",
        "link": "https://github.com/lm-sys/FastChat",
        "description": "Training and serving framework for large language models and chatbots.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 17
      },
      {
        "id": 32,
        "name": "Text Generation Inference",
        "link": "https://github.com/huggingface/text-generation-inference",
        "description": "Hugging Face's production-ready LLM serving with optimized inference.",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 17
      },
      {
        "id": 33,
        "name": "MarkItDown",
        "link": "https://github.com/microsoft/markitdown",
        "description": "Microsoft Open Sourced MarkItDown: An AI Tool to Convert All Files into Markdown for Seamless Integration and Analysis.",
        "description2": "MarkItDown is a utility for converting various files to Markdown (e.g., for indexing, text analysis, etc). It supports PDF, PowerPoint, Word, Excel, Images (EXIF metadata and OCR), Audio (EXIF metadata and speech transcription), HTML, Text-based formats (CSV, JSON, XML), and ZIP files (iterates over contents).",
        "favicon": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
        "parentId": 17
      }
    ],
    "id": 17,
    "slug": "open-source-apps-or-projects"
  },
  {
    "title": "Proprietary Apps | Projects",
    "tag": "Apps | Projects",
    "tag2": "Proprietary Apps | Projects",
    "description": "Ready-to-use applications and implementations",
    "resources": [
      {
        "id": 1,
        "name": "Google Smart Glasses - Project Astra",
        "link": "https://www.google.com/ai/astra",
        "description": "The Google smart glasses, part of the AI project Astra, come with a display and allow users to take photos, check framing, and access applications like Google Maps. They integrate Gemini AI for voice control and natural conversations, with most processing done on a paired smartphone.",
        "favicon": "https://www.google.com/s2/favicons?domain=www.google.com&sz=128",
        "parentId": 18
      },
      {
        "id": 2,
        "name": "Meshtron",
        "link": "https://research.nvidia.com/labs/dir/meshtron/",
        "description": "Nvidia's autoregressive mesh generation model, Meshtron, can generate meshes with up to 64K faces and a coordinate resolution of 1024 levels, significantly surpassing existing methods. It reduces memory requirements by over 50% during training and increases throughput by 2.5 times.",
        "description2": "Meshtron enables the generation of complex 3D object meshes with unprecedented resolution and fidelity, making it suitable for animation, gaming, and virtual environments.",
        "favicon": "https://www.google.com/s2/favicons?domain=research.nvidia.com&sz=128",
        "parentId": 18
      },
      {
        "id": 3,
        "name": "NotebookLM",
        "link": "https://notebooklm.google.com/",
        "description": "NotebookLM Updates｜Audio Interactivity and more. Join the conversation with the podcast you're listening to! NotebookLM Update Brings New User Interface, Audio Interactivity, and a Premium Version NotebookLM Plus!🧵1/4",
        "description2": "NotebookLM has introduced a new interface that optimizes the management and generation of new content based on your sources. The interface is redesigned into three areas: the 'Sources' panel manages the core information of your project, the 'Chat' panel discusses your sources through a conversational AI interface with citations, and the 'Studio' panel allows you to create new content from your sources with a single click, such as study guides, briefing documents, and audio overviews. NotebookLM is beginning to roll out the ability to 'join' conversations in audio overviews. Users can ask questions or request explanations of concepts in different ways using voice, as if they have a personal tutor or guide who listens attentively and responds directly, drawing from the knowledge in your sources. NotebookLM Plus: This is the premium subscription version of NotebookLM, offering new features and higher usage limits for heavy users, teams, and enterprises. Subscribers will receive benefits including more than five times the number of audio overviews, notebooks, and sources per notebook; the ability to customize the style and length of notebook responses; shared team notebooks with usage analytics; and additional privacy and security protections.",
        "favicon": "https://www.google.com/s2/favicons?domain=notebooklm.google.com&sz=128",
        "parentId": 18
      },
      {
        "id": 4,
        "name": "OpenRouter",
        "link": "https://openrouter.ai/",
        "description": "A unified API gateway providing access to multiple AI models from different providers.",
        "description2": "OpenRouter is a platform that simplifies access to various AI models through a single API endpoint. It offers integration with models from providers like Anthropic, OpenAI, Google, and Meta, allowing developers to switch between different models without changing their code. The service features transparent pricing, pay-as-you-go billing, and automatic fallback options. Key benefits include simplified API access, cost optimization through automatic model routing, and the ability to use multiple AI providers without managing separate API keys and implementations. OpenRouter supports both chat completions and text completions, making it suitable for various AI applications.",
        "favicon": "https://www.google.com/s2/favicons?domain=openrouter.ai&sz=128",
        "parentId": 18
      }
    ],
    "id": 18,
    "slug": "proprietary-apps-or-projects"
  }
]
