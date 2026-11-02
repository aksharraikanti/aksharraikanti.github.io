export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['Python', 'Go', 'Java', 'C', 'C++', 'C#/.NET', 'TypeScript', 'JavaScript', 'SQL', 'R'],
  },
  {
    category: 'AI / ML',
    items: [
      'TensorFlow',
      'PyTorch',
      'LangChain',
      'LangGraph',
      'Agentic AI',
      'RAG',
      'Vector Database Search',
      'LLM Evaluation',
    ],
  },
  {
    category: 'Systems & Cloud',
    items: ['Distributed Systems', 'Raft Consensus', 'AWS', 'Google Cloud (GCP)', 'Azure', 'Docker', 'CI/CD', 'OpenShift'],
  },
  {
    category: 'Data & Tools',
    items: ['PostgreSQL', 'SQLite', 'Google Spanner', 'NoSQL', 'Apache Airflow', 'Git', 'Jira'],
  },
];
