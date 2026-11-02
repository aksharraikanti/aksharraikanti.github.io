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
    category: 'AI / ML & Vision',
    items: [
      'PyTorch',
      'TensorFlow',
      'Computer Vision (OpenCV)',
      'Agentic AI',
      'LLM Evaluation',
      'LoRA & Model Quantization',
      'RAG',
      'Vector Database Search',
    ],
  },
  {
    category: 'Systems & Cloud',
    items: ['Distributed Systems', 'Raft Consensus', 'WebRTC', 'AWS', 'Google Cloud (GCP)', 'Azure', 'Docker', 'CI/CD'],
  },
  {
    category: 'Data & Frameworks',
    items: ['React Native', 'FastAPI', 'PostgreSQL', 'SQLite', 'Google Spanner', 'Apache Airflow', 'Git', 'Jira'],
  },
];
