export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'C', 'C++', 'C#/.NET', 'SQL', 'R', 'JavaScript'],
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
      'ML Training',
    ],
  },
  {
    category: 'Cloud & Infra',
    items: ['Azure', 'Google Cloud (GCP)', 'AWS', 'Docker', 'CI/CD', 'OpenShift'],
  },
  {
    category: 'Data & Tools',
    items: ['Relational Databases', 'NoSQL', 'Jira', 'Apache', 'Git'],
  },
];
