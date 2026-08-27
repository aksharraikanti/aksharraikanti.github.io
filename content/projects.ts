export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string[];
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  date: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'malloc-implementation',
    title: 'Malloc Implementation',
    summary: 'A dynamic memory allocator in C++ supporting malloc, free, and calloc.',
    description: [
      'Implemented a dynamic memory allocator in C++ supporting malloc, free, and calloc from scratch, without relying on the standard library allocator.',
      'Used explicit free lists with boundary-tag coalescing and first-fit placement to maximize heap utilization and minimize fragmentation across allocation patterns.',
    ],
    stack: ['C++', 'Systems Programming', 'Memory Management'],
    date: '2026-02',
    featured: true,
  },
  {
    slug: 'pantry-tracker',
    title: 'Pantry Tracker App',
    summary: 'Real-time pantry inventory tracking with AI-powered image recognition.',
    description: [
      'Created with React, Next.js, and Node.js for real-time data tracking of pantry items.',
      'Implemented user authentication and authorization using Firebase Authentication to ensure secure access to each user’s data.',
      'Implemented a camera system to link items with images, using OpenAI image classification tools to automatically detect objects in an image and add them to the list of items.',
      'Deployed the application on Vercel.',
    ],
    stack: ['React', 'Next.js', 'Node.js', 'Firebase Authentication', 'OpenAI', 'Vercel'],
    githubUrl: 'https://github.com/aksharraikanti/inventory-management-app',
    date: '2024-07',
  },
  {
    slug: 'ai-customer-support',
    title: 'AI Customer Support System',
    summary: 'An AI-driven customer support system with automated, adaptive responses.',
    description: [
      'Engineered a sophisticated AI-driven customer support system utilizing Llama 3.1, Groq AI, Next.js, and AWS, enabling automated, adaptive responses to a wide range of customer inquiries.',
      'Integrated multiple APIs to enhance functionality and dynamically adjust to various prompts and inputs, effectively routing specific queries to the appropriate services.',
    ],
    stack: ['Llama 3.1', 'Groq AI', 'Next.js', 'AWS'],
    githubUrl: 'https://github.com/aksharraikanti/customer-support-ai-app',
    date: '2024-08',
  },
  {
    slug: 'ai-flashcard-app',
    title: 'AI Flashcard App',
    summary: 'A study app with AI-generated flashcards and adaptive difficulty.',
    description: [
      'Designed an app with Stripe API payments and Llama 3.1-generated content to help users study efficiently.',
      'Used Firebase and Clerk to store user-specific information and handle authentication.',
      'Integrated adaptive learning algorithms to customize flashcard difficulty based on user performance and learning speed.',
    ],
    stack: ['Llama 3.1', 'Stripe API', 'Firebase', 'Clerk'],
    githubUrl: 'https://github.com/aksharraikanti/flashcard-ai-saas-app',
    date: '2024-09',
  },
  {
    slug: 'rag-professor-tracker',
    title: 'ML-Assisted Professor Tracking App',
    summary: 'A RAG-powered app that recommends professors from historical reviews.',
    description: [
      'Developed an app using RAG with Pinecone, Llama 3.1 (via Groq AI), and vector embeddings to help students choose classes based on professors’ past reviews.',
      'Devised a weighted review system through Pinecone to recommend professors to students.',
      'Utilized sentiment analysis techniques to provide deeper insights into professor reviews, helping students make more informed decisions.',
    ],
    stack: ['RAG', 'Pinecone', 'Llama 3.1', 'Groq AI', 'Sentiment Analysis'],
    githubUrl: 'https://github.com/aksharraikanti/rag-ai-rate-my-professor',
    date: '2024-09',
  },
];
