export const DEFAULT_JOB_DESCRIPTION = `Senior Full-Stack AI Engineer
Company: NeuralFlow Technologies (San Francisco, CA / Hybrid / Remote)

About the Role:
We are seeking an experienced Senior Full-Stack AI Engineer to design and build scalable, user-facing AI applications. You will collaborate directly with machine learning researchers, product designers, and backend architects to deliver intelligent workflows used by over 500,000 daily professionals.

Key Responsibilities:
- Lead the architecture and implementation of reactive web applications using React, TypeScript, and modern state management.
- Build high-throughput REST and GraphQL backend services in Node.js / Python.
- Integrate large language models (LLMs), semantic search, and retrieval-augmented generation (RAG) pipelines.
- Optimize web performance, client-side rendering, and responsive UD interactions.
- Containerize applications using Docker and deploy to AWS infrastructure.
- Mentor junior engineers and participate in architecture design reviews.

Requirements & Qualifications:
-5 + years of production experience in full-stack software development.
- Deep expertise in React, TypeScript, modern CSS (Tailwind CSS), and HTML5.
- Strong backend experience with Node.js, Express/Fastify, or Python (FastAPI).
- Hands-on experience with SQL databases (PostgreSQL) and caching layers (Redis).
- Familiarity with AI APIs (OpenAI, Anthropic) or orchestration frameworks (LangChain, LlamaIndex).
- Practical knowledge of Docker, CI/CD pipelines, and cloud platforms (AWS/GCP):)
- Excellent communication skills and passion for building intuitive, accessible user interfaces.`;

export const SAMPLE_RESUME_INFO = {
  fileName: "Alex_Morgan_Senior_FullStack_Resume.pdf",
  fileSize: "1.42 MB",
  fileType: "application/pdf",
  uploadedAt: "Preloaded Sample",
  candidateName: "Alex Morgan",
  headline: "Senior Full Stack Software Engineer | React, Node.js, Cloud Architectures",
  yearsExperience: "6.5 Years",
  education: "B.S. in Computer Science - University of Washington",
  location: "Seattle, WA (Open to Remote)",
};

export const DEFAULT_ANALYSIS_RESULT = {
  overallScore: 88,
  roleTitle: "Senior Full-Stack AI Engineer",
  company: "NeuralFlow Technologies",
  verdict: "High Match Potential",
  verdictTag: "Top 10% Candidate Fit",
  matchSummary:
    "The candidate's profile demonstrates extensive production experience in modern React architectures, TypeScript, Node.js microservices, and API performance engineering. Strong fundamentals in distributed systems align well with the position's requirements. Adding explicit experience with LangChain and Kubernetes orchestration will elevate this to an ideal 95%+ match.",
  categories: [
    {
      name: "Core Technical Stack",
      score: 94,
      status: "Exceptional Match",
      desc: "React, TypeScript, Node.js, Tailwind CSS, PostgreSQL",
    },
    {
      name: "System Architecture & Scale",
      score: 86,
      status: "Strong Match",
      desc: "Microservices, AWS, Docker, Redis caching",
    },
    {
      name: "Experience & Seniority",
      score: 90,
      status: "Exceptional Match",
      desc: "6.5 years proven engineering leadership and delivery",
    },
    {
      name: "AI / ML Integration",
      score: 72,
      status: "Moderate Match",
      desc: "OpenAI API usage present; LangChain & RAG pipelines can be highlighted",
    },
  ],
  matchedSkills: [
    { name: "React 18 / 19", level: "Expert", category: "Frontend", match: "Direct Match" },
    { name: "TypeScript", level: "Expert", category: "Frontend/Backend", match: "Direct Match" },
    { name: "Node.js & Express", level: "Advanced", category: "Backend", match: "Direct Match" },
    { name: "Tailwind CSS", level: "Advanced", category: "Frontend", match: "Direct Match" },
    { name: "PostgreSQL", level: "Advanced", category: "Database", match: "Direct Match" },
    { name: "REST & GraphQL APIs", level: "Advanced", category: "API Design", match: "Direct Match" },
    { name: "Docker Containerization", level: "Proficient", category: "DevOps", match: "Direct Match" },
    { name: "AWS (S3, EC2, CloudFront)", level: "Proficient", category: "Cloud", match: "Direct Match" },
    { name: "OpenAI API Integration", level: "Working Knowledge", category: "AIGS/ML", match: "Partial Match" },
    { name: "Performance Optimization", level: "Expert", category: "Architecture", match: "Direct Match" },
  ],
  missingSkills: [
    {
      name: "LangChain / LlamaIndex",
      priority: "High",
      impact: "Required for complex multi-step AI tool chains and agent workflows.",
      tip: "Mention any prompt chaining, vector embeddings, or agentic experiments you have built.",
    },
    {
      name: "Kubernetes (K8s)",
      priority: "Medium",
      impact: "Preferred for production cluster orchestration at scale.",
      tip: "If you have used Helm charts or managed EKS/GKE clusters, explicitly list them.",
    },
    {
      name: "Vector Databases (Pinecone/Chroma)",
      priority: "Medium",
      impact: "Used for high-throughput semantic search and retrieval (RAG).",
      tip: "Highlight any experience indexing text embeddings or similarity searches.",
    },
  ],
  strengths: [
    "6.5+ years of hands-on production experience directly exceeding the 5-year requirement.",
    "Comprehensive coverage of modern frontend & backend TypeScript ecosystem.",
    "Demonstrated ownership of high-traffic customer-facing web applications.",
    "Clean history of cross-functional team collaboration and junior engineer mentorship.",
  ],
  actionableRecommendations: [
    {
      title: "Elevate AI Workflows in Project Summaries",
      detail:
        "Frame your experience with OpenAI APIs with specific quantifiable outcomes (e.g., 'Implemented LLM-driven response generation cutting query latency by 35%').",
    },
    {
      title: "Add Explicit RAG & Vector Search Keywords",
      detail:
        "The job description heavily values semantic search. If you have built document retrieval or embedding pipelines, make sure terms like 'embeddings', 'similarity search', or 'RAG' appear in your experience section.",
    },
    {
      title: "Highlight Full-Stack Observability",
      detail:
        "Include monitoring tools such as Datadog, Prometheus, or OpenTelemetry to reinforce your enterprise backend credibility.",
    },
  ],
  interviewQuestions: [
    {
      question: "How have you handled latency and streaming responses when integrating LLM endpoints into a reactive React frontend?",
      focus: "Frontend Performance & UX",
    },
    {
      question: "Can you describe the caching architecture you would implement with Redis to prevent redundant LLM inference calls?",
      focus: "System Design & Cost Efficiency",
    },
    {
      question: "Tell us about a time you led a team through migrating legacy monolithic code to modern modular microservices.",
      focus: "Engineering Leadership & Delivery",
    },
  ],
};
