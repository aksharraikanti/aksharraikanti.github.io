export type ExperienceEntry = {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | null;
  note?: string;
  highlights: string[];
  skills: string[];
  featured?: boolean;
  companyUrl?: string;
};

export const experience: ExperienceEntry[] = [
  {
    id: 'google',
    company: 'Google',
    role: 'Software Engineer Intern',
    location: 'Mountain View, CA',
    startDate: '2026-05',
    endDate: '2026-08',
    highlights: [
      'Architected and developed an Agentic Bug Triage System, transitioning a legacy script-based triage process into a scalable, event-driven automation system, targeting a ~10% reduction in thermal engineer workload to eliminate manual triage.',
      'Engineered an AI agent with tool-calling capabilities (Gemini API) to automate root-cause analysis, synthesizing definitive diagnostic summaries from system logs with a projected goal of decreasing Mean Time to Triage (MTTT) by ~75%.',
      'Designed a scalable data parsing pipeline capable of aggregating telemetry data into unified DataFrames, featuring a modular architecture allowing engineers to integrate custom data parsing logic based on their expertise and adapt to new requirements.',
      'Implemented a modular, heuristic rule engine to execute algorithmic diagnostic checks for thermal anomalies (e.g., unexpected shutdowns) and route actionable proofs for teams to address, built with an extensible framework to easily deploy new rules.',
    ],
    skills: ['Python', 'Gemini API', 'Agentic AI', 'Data Pipelines', 'Automation'],
  },
  {
    id: 'brydge',
    company: 'Brydge',
    role: 'Co-Founder & COO',
    location: 'San Francisco, CA',
    startDate: '2025-12',
    endDate: '2026-04',
    featured: true,
    highlights: [
      'Co-founded and led as COO a B2B SaaS AI startup; drove product strategy, operations, and go-to-market from zero to launch, securing 5 pilot paying customers in the developer productivity space.',
      'Architected and shipped a multi-agent AI platform integrating 20+ enterprise tools (GitHub, Jira, Confluence, Slack, Microsoft 365) via unified semantic search and agentic execution, enabling autonomous creation of PRs, Jira tickets, and Confluence docs.',
      'Shipped end-to-end encryption and human oversight for agentic actions; pitched to Y Combinator, a16z Speedrun, Accel Atoms, and Pear VC.',
    ],
    skills: ['Multi-Agent Systems', 'Semantic Search', 'Product Strategy', 'Go-To-Market', 'E2E Encryption'],
  },
  {
    id: 'tesla',
    company: 'Tesla',
    role: 'Software Engineer Intern',
    location: 'Fremont, CA',
    startDate: '2025-09',
    endDate: '2025-12',
    highlights: [
      'Built a Health Check AI Agent that correlates logs and runs post-deployment checks to verify application health, detecting early warning patterns using RAG on historical data with 85% accuracy.',
      'Engineered a multimodal AI pipeline to digitize 10,000+ legacy PDFs, utilizing dual-model inference (image analysis + semantic validation) to automatically convert static work instructions into proprietary data models.',
      'Architected a microservices-based orchestrator agent within Microsoft Teams, implementing SSO to secure inter-agent communication and enable user-authenticated actions for hardware logistics and database management.',
    ],
    skills: ['RAG', 'Multimodal AI', 'Microservices', 'Microsoft Teams', 'SSO'],
  },
  {
    id: 'textron',
    company: 'Textron',
    role: 'Agentic AI Software Engineer Intern',
    location: 'Hunt Valley, MD',
    startDate: '2025-08',
    endDate: '2025-09',
    highlights: [
      'Built an Agentic AI RAG workflow in C# and Python that ingests and indexes OpenAI embeddings via FAISS; a decision agent routes queries to the right team with context, achieving 40% fewer misroutes using Microsoft Semantic Kernel.',
      'Trained a bid/no-bid decision engine (RAG on Textron data via FAISS + GPT-4o) that tripled screening throughput and cut manual review time by 50%, with win-probability scoring on high-priority opportunities.',
      'Collaborated with Microsoft to build a Databricks ingestion/embedding pipeline using Logic Apps for orchestration and Microsoft AI Foundry for model lifecycle, integrated with Azure Data Factory to deliver low-latency agent knowledge lookup.',
    ],
    skills: ['C#', 'FAISS', 'Microsoft Semantic Kernel', 'Databricks', 'Azure Data Factory'],
  },
  {
    id: 'kohls',
    company: "Kohl's",
    role: 'Software Engineer Intern',
    location: 'San Francisco, CA',
    startDate: '2025-06',
    endDate: '2025-08',
    highlights: [
      'Engineered a scalable, high-performance backend for an ordering platform with a RESTful API, leveraging Java Spring Boot, MongoDB, and Google Spanner databases, achieving a 10% increase in responsiveness and a 5% reduction in load times.',
    ],
    skills: ['Java', 'Spring Boot', 'MongoDB', 'Google Spanner', 'REST APIs'],
  },
  {
    id: 'transsight',
    company: 'TransSIGHT',
    role: 'Data Engineering and Machine Learning Intern',
    location: 'San Francisco, CA',
    startDate: '2024-06',
    endDate: '2024-08',
    highlights: [
      'Built and deployed predictive machine learning transit-demand models (Random Forest, XGBoost; scikit-learn, PyTorch) and designed an automated end-to-end data pipeline using Apache Airflow and AWS S3/Lambda, raising forecast accuracy by 20%.',
    ],
    skills: ['Python', 'scikit-learn', 'PyTorch', 'Apache Airflow', 'AWS'],
  },
  {
    id: 'veygo',
    company: 'Veygo Rentals',
    role: 'Full Stack Developer',
    location: 'West Lafayette, IN',
    startDate: '2024-08',
    endDate: null,
    note: 'Part-time, alongside internships',
    highlights: [
      'Led the development and maintenance of the Veygo Rentals website using React, JavaScript, CSS, Bootstrap, and Tailwind, creating a responsive, user-friendly interface for Purdue University students.',
      'Implemented real-time inventory tracking, automated booking confirmations, and multi-tiered user access controls.',
      'Built a robust back-end with Node.js and Python, integrating the Stripe API for secure payments, and utilized Firebase Authentication for user account management.',
    ],
    skills: ['React', 'Node.js', 'Stripe API', 'Firebase', 'AWS'],
  },
];
