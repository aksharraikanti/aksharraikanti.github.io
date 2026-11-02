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
    slug: 'distsys-lab',
    title: 'Distributed Systems Laboratory',
    summary: 'A compounded 10-stage distributed systems laboratory in Go implementing Raft consensus, sharded storage, 2PC transactions, and AWS deployment.',
    description: [
      'Engineered an incremental, ten-stage distributed systems learning track in Go, progressing from foundational consensus algorithms to an autoscaling mini distributed database on AWS.',
      'Implemented the Raft consensus protocol from scratch in Go (01-raft), handling leader election, randomized election timers, log replication, state machine safety, and linearizable reads.',
      'Constructed a fault-tolerant key-value store on top of Raft with state machine snapshotting and log compaction to prevent unbounded memory growth (02-kv-store).',
      'Architected production-grade infrastructure primitives including connection pooling with adaptive backpressure, cache-aside layers with TTL invalidation, and a sharded key-value store with consistent hashing.',
      'Engineered dynamic hot shard detection with load-based splitting, cross-shard Two-Phase Commit (2PC) atomic transactions with MVCC, and edge caching with CloudFront and ElastiCache on AWS.',
      'Maintained 100% test coverage with automated GitHub Actions CI running `go test ./...` on every incremental commit.',
    ],
    stack: ['Go', 'Raft Consensus', 'Distributed Systems', 'AWS', 'Consistent Hashing', 'Two-Phase Commit', 'CI/CD'],
    githubUrl: 'https://github.com/aksharraikanti/distsys-lab',
    date: '2026-10',
    featured: true,
  },
  {
    slug: 'multi-agent-eval-harness',
    title: 'Multi-Agent LLM Eval Harness',
    summary: 'A 25-day vertical slice evaluation harness for multi-agent LLM systems with injected failure modes, Claude judge calibration, and SQLite dashboard.',
    description: [
      'Built a production-grade multi-agent LLM evaluation framework designed to catch complex multi-agent failure modes that traditional single-agent benchmarks overlook.',
      'Authored declarative Pydantic scenario schemas in YAML defining tool-call expectations, output-format constraints, and multi-agent context handoff invariants.',
      'Engineered deterministic mock agents with injected failure modes—such as dropped context across agent handoffs, hallucinated tool calls, and execution timeouts—to mathematically prove evaluator accuracy against known ground truth.',
      'Implemented rule-based sequence evaluators (exact, subset, and hallucination checks) alongside an advisory LLM-as-a-judge powered by Claude Haiku 4.5.',
      'Developed a calibration suite with 12 hand-labeled scenarios and statistical bias checkers for verbosity bias and order independence.',
      'Created a zero-dependency static HTML dashboard powered by an embedded SQLite run log to visualize pass rates, per-scenario latency, and LLM judge costs without requiring a server runtime.',
    ],
    stack: ['Python', 'Multi-Agent AI', 'LLM Evals', 'Claude API', 'Pytest', 'SQLite', 'Pydantic', 'CI/CD'],
    githubUrl: 'https://github.com/aksharraikanti/multi-agent-eval-harness',
    date: '2026-09',
    featured: true,
  },
  {
    slug: 'overlay-board',
    title: 'Overlay Board (AR Real-Time Whiteboard)',
    summary: 'Real-time shared paper and whiteboard collaboration using OpenCV homography, tile ink extraction, and peer-to-peer WebRTC.',
    description: [
      'Point your phone at a sheet of physical paper or a whiteboard to connect with a collaborator: each person sees the other’s handwriting appear live on their own physical page in real time.',
      'Engineered a Python and OpenCV computer vision pipeline detecting document corners in real time, executing perspective transformation (homography) to a canonical shared canvas, and isolating ink from paper texture, shadows, and hands while preserving color.',
      'Implemented an ink delta streaming protocol that partitions the canvas into 64px tiles and broadcasts only updated ink tiles peer-to-peer over WebRTC data channels for low-latency collaboration.',
      'Applied inverse homography projection to warp incoming partner ink back onto the user’s local camera feed, blending it with natural ink translucency in a cross-platform React Native (Expo) application.',
    ],
    stack: ['Python', 'OpenCV', 'Computer Vision', 'WebRTC', 'React Native', 'Expo', 'P2P Networking'],
    date: '2026-10',
    featured: true,
  },
  {
    slug: 'malloc-implementation',
    title: 'Malloc Dynamic Memory Allocator',
    summary: 'A dynamic memory allocator in C++ implementing custom malloc, free, and calloc with boundary-tag coalescing.',
    description: [
      'Implemented a dynamic memory allocator in C++ supporting malloc, free, and calloc from scratch, without relying on the standard C/C++ runtime library allocator.',
      'Structured explicit free lists with boundary-tag coalescing to immediately merge adjacent free blocks and eliminate external fragmentation.',
      'Implemented first-fit placement and header/footer metadata tracking to maximize heap utilization and minimize overhead across diverse memory allocation patterns.',
    ],
    stack: ['C++', 'Systems Programming', 'Memory Management', 'Data Structures'],
    date: '2026-02',
    featured: true,
  },
  {
    slug: 'localllm',
    title: 'LocalLLM: Fine-Tuning & Quantized Inference Pipeline',
    summary: 'An end-to-end local LLM pipeline for dataset synthesis, LoRA fine-tuning, 8-bit quantization, and low-latency FastAPI inference serving.',
    description: [
      'Architected an end-to-end local LLM fine-tuning and inference platform enabling on-device execution on Apple Silicon and containerized Linux without external API dependencies.',
      'Constructed automated data preparation and tokenization pipelines for domain-specific Q&A datasets with ROUGE metric evaluation and validation reports.',
      'Implemented parameter-efficient LoRA fine-tuning workflows and 8-bit model quantization (bitsandbytes/ONNX) to reduce memory footprint while evaluating perplexity baselines against known prompts.',
      'Shipped a low-latency FastAPI inference microservice with batching, API-key authentication, Docker containerization, and a standalone Python client SDK (localllm-client).',
    ],
    stack: ['Python', 'PyTorch', 'Transformers', 'LoRA', '8-bit Quantization', 'FastAPI', 'Docker', 'ONNX'],
    date: '2025-08',
  },
  {
    slug: 'rag-professor-tracker',
    title: 'ML-Assisted Professor Tracking App',
    summary: 'A RAG-powered app that recommends professors from historical reviews using Pinecone and Llama 3.1.',
    description: [
      'Developed an application using Retrieval-Augmented Generation (RAG) with Pinecone vector database, Llama 3.1 (via Groq AI), and semantic embeddings to help students choose courses based on past student reviews.',
      'Devised a weighted review scoring system through Pinecone to accurately rank and recommend professors tailored to student criteria.',
      'Utilized sentiment analysis techniques to extract nuanced insights from unstructured student reviews, delivering actionable decision criteria.',
    ],
    stack: ['RAG', 'Pinecone', 'Llama 3.1', 'Groq AI', 'Sentiment Analysis', 'Next.js'],
    githubUrl: 'https://github.com/aksharraikanti/rag-ai-rate-my-professor',
    date: '2024-09',
  },
  {
    slug: 'ai-customer-support',
    title: 'AI Customer Support System',
    summary: 'An AI-driven customer support system with automated, adaptive responses using Groq and Llama 3.1.',
    description: [
      'Engineered an AI-driven customer support system utilizing Llama 3.1, Groq AI, Next.js, and AWS, enabling automated, sub-second adaptive responses to inbound customer inquiries.',
      'Integrated multiple external APIs to dynamically interpret user intent and route complex inquiries to specialized downstream services.',
    ],
    stack: ['Llama 3.1', 'Groq AI', 'Next.js', 'AWS', 'TypeScript'],
    githubUrl: 'https://github.com/aksharraikanti/customer-support-ai-app',
    date: '2024-08',
  },
  {
    slug: 'ai-flashcard-app',
    title: 'AI Flashcard App',
    summary: 'A study app with AI-generated flashcards, adaptive difficulty, and Stripe billing.',
    description: [
      'Designed an AI-assisted flashcard SaaS application with Stripe API subscription payments and Llama 3.1-generated study material.',
      'Integrated Firebase Firestore and Clerk for secure user authentication, entitlement checks, and cross-device deck persistence.',
      'Integrated adaptive learning algorithms to calibrate flashcard presentation frequency based on spaced repetition and user performance.',
    ],
    stack: ['Llama 3.1', 'Stripe API', 'Firebase', 'Clerk', 'Next.js'],
    githubUrl: 'https://github.com/aksharraikanti/flashcard-ai-saas-app',
    date: '2024-09',
  },
  {
    slug: 'pantry-tracker',
    title: 'Pantry Tracker App',
    summary: 'Real-time pantry inventory tracking with AI-powered image recognition and Firebase.',
    description: [
      'Built a responsive inventory tracking system with React, Next.js, and Node.js for real-time pantry item synchronization.',
      'Implemented user authentication and database isolation using Firebase Authentication and Firestore security rules.',
      'Integrated camera capture with OpenAI vision classification models to automatically detect physical objects in photos and append them to inventory.',
      'Deployed on Vercel with zero-configuration CI/CD.',
    ],
    stack: ['React', 'Next.js', 'Firebase', 'OpenAI Vision', 'Vercel'],
    githubUrl: 'https://github.com/aksharraikanti/inventory-management-app',
    date: '2024-07',
  },
];
