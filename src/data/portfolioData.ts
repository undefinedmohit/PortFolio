export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  location?: string;
  isCurrent?: boolean;
  description: string[];
  skills: string[];
}

export interface DetailedProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  highlights: string[];
  category: 'Local AI' | 'NRT Data Pipeline' | 'Security & Auth' | 'DevOps & Infrastructure';
  badge: string;
  linkText?: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; icon?: string }[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Mohit',
    title: 'Senior Software Engineer',
    experience: '~5 Years Experience',
    summary:
      "I'm a Backend Engineer with close to 5 years of experience building scalable, production-grade systems using Java and Spring Boot. Currently working as a Senior Software Engineer at LTIMindtree, I've built real-time data pipelines handling large-scale traffic, secure authentication systems with JWT/SSO, and payment gateway integrations for enterprise clients. My toolkit includes Spring Boot, PostgreSQL, Redis, Apache Kafka, and Docker — with a strong focus on writing clean, efficient, and maintainable code. Outside of work, I'm sharpening my problem-solving skills through consistent Data Structures & Algorithms practice, preparing for opportunities at top product-based companies.",
    email: 'se.mohityadav@gmail.com',
    github: 'https://github.com/undefinedmohit',
    githubUsername: 'undefinedmohit',
    linkedin: 'https://www.linkedin.com/in/mohit-yadav-ji/',
    linkedinDisplay: 'linkedin.com/in/mohit-yadav-ji',
    leetcode: 'https://leetcode.com/u/mohity/',
    leetcodeHandle: 'mohity',
    leetcodeSolved: '125+',
  },

  experiences: [
    {
      company: 'LTIMindtree',
      role: 'Senior Software Engineer',
      period: 'Nov 2024 – Present',
      isCurrent: true,
      description: [
        'Built a Kafka-based NRT (Near Real-Time) data ingestion pipeline for LIC Life Insurance handling high-concurrency API events.',
        'Implemented JWT and Single Sign-On (SSO) authentication systems for enterprise access control.',
        'Worked on robust payment gateway integrations with high transaction reliability.',
      ],
      skills: ['Java', 'Spring Boot', 'Apache Kafka', 'JWT/SSO', 'Payment Gateways', 'Redis', 'Docker'],
    },
    {
      company: 'Dogma India Pvt Ltd',
      role: 'Software Engineer',
      period: 'Apr 2024 – Oct 2024',
      isCurrent: false,
      description: [
        'Engineered high-performance backend microservices and REST APIs using Spring Boot.',
        'Optimized SQL queries and database indexes in PostgreSQL to reduce latency.',
      ],
      skills: ['Java', 'Spring Boot', 'PostgreSQL', 'REST APIs', 'Microservices'],
    },
    {
      company: 'Candour Infotech Pvt Ltd',
      role: 'Software Engineer',
      period: 'Feb 2023 – Feb 2024',
      isCurrent: false,
      description: [
        'Designed decoupled Spring Boot services for transaction validation and secure data transfers.',
        'Implemented JWT token authentication and role-based access control workflows.',
      ],
      skills: ['Java', 'Spring Boot', 'JWT', 'MySQL', 'REST Services'],
    },
    {
      company: 'RMSI Pvt. Ltd.',
      role: 'Software Engineer',
      period: 'Jan 2021 – Jul 2022',
      isCurrent: false,
      description: [
        'Developed backend services and data processing utilities in Java for enterprise platforms.',
        'Wrote data validation routines and automated internal data transformations.',
      ],
      skills: ['Java', 'Spring Framework', 'REST APIs', 'SQL'],
    },
  ] as WorkExperience[],

  projects: [
    {
      id: 'saathi-ai',
      title: 'Saathi — On-Device AI Coding Assistant',
      subtitle: 'Privacy-first AI pair-programming companion running locally',
      description:
        'Privacy-first AI pair-programming companion running locally via Java, Spring Boot, Ollama (CodeLlama), and native Text-to-Speech synthesis.',
      techStack: [
        'Java',
        'Spring Boot',
        'Ollama',
        'Local AI',
        'Text-to-Speech',
        'Real-time File Watching',
        'Developer Tools',
      ],
      highlights: [
        'Local-first privacy architecture — zero external cloud API latency or data leakage',
        'Spring Boot service layer managing local LLM prompt execution via Ollama',
        'Native macOS voice synthesis integration (`say` command) for speech output',
        'Roadmap: Picovoice Porcupine wake-word engine integration for hands-free activation',
      ],
      category: 'Local AI',
      badge: 'Featured Personal Project',
    },
    {
      id: 'lic-kafka-pipeline',
      title: 'LIC Real-Time (NRT) Data Ingestion',
      subtitle: 'High-scale Kafka data pipeline for Life Insurance Corporation',
      description:
        'Kafka-driven near real-time data ingestion pipeline for LIC Life Insurance handling large-scale API traffic and downstream database synchronization.',
      techStack: ['Java', 'Spring Boot', 'Apache Kafka', 'Teradata', 'High Traffic API'],
      highlights: [
        'Architected fault-tolerant Kafka consumer groups processing peak concurrent insurance events',
        'Optimized end-to-end data latency down to milliseconds for real-time compliance reporting',
        'Implemented dead-letter queues (DLQ) and idempotent message processing logic',
      ],
      category: 'NRT Data Pipeline',
      badge: 'Enterprise Systems',
    },
    {
      id: 'enterprise-jwt-sso',
      title: 'Enterprise JWT & SSO Auth Platform',
      subtitle: 'Centralized Single Sign-On & JWT security platform',
      description:
        'Single Sign-On (SSO) and JWT authentication engine for enterprise application access control across microservices.',
      techStack: ['Java', 'Spring Security', 'JWT', 'SSO', 'Redis'],
      highlights: [
        'Designed stateless token-based authorization using Spring Security & Redis token blacklisting',
        'Implemented unified SSO login flows supporting multi-tenant enterprise applications',
        'Configured RBAC (Role-Based Access Control) with dynamic permission evaluation',
      ],
      category: 'Security & Auth',
      badge: 'Security & Infrastructure',
    },
    {
      id: 'cicd-jenkins-pipeline',
      title: 'Automated CI/CD Jenkins Pipeline & Deployment',
      subtitle: 'Automated build, test, and release deployment pipeline',
      description:
        'Automated build, testing, and deployment pipelines using Jenkins for seamless production releases.',
      techStack: ['Jenkins', 'Groovy', 'Docker', 'CI/CD', 'Git'],
      highlights: [
        'Automated multi-stage Jenkins pipeline using declarative Groovy scripts',
        'Integrated automated unit test execution, static code analysis, & Docker image builds',
        'Reduced deployment manual overhead by 80% with zero-downtime containerized releases',
      ],
      category: 'DevOps & Infrastructure',
      badge: 'DevOps & Delivery',
    },
  ] as DetailedProject[],

  skillCategories: [
    {
      category: 'Languages & Core Frameworks',
      skills: [
        { name: 'Java (Core & Advanced)' },
        { name: 'Spring Boot' },
        { name: 'Spring MVC & Security' },
        { name: 'REST APIs & Microservices' },
      ],
    },
    {
      category: 'Messaging & Data Pipelines',
      skills: [
        { name: 'Apache Kafka (NRT Ingestion)' },
        { name: 'Event-Driven Architecture' },
        { name: 'Pub/Sub Messaging' },
      ],
    },
    {
      category: 'Databases & Storage',
      skills: [
        { name: 'PostgreSQL' },
        { name: 'Redis (Caching / Tokens)' },
        { name: 'MySQL / Teradata' },
      ],
    },
    {
      category: 'DevOps, Security & Tools',
      skills: [
        { name: 'JWT & SSO Authentication' },
        { name: 'Docker & Containerization' },
        { name: 'Jenkins CI/CD Pipelines' },
        { name: 'Git & Linux System Administration' },
      ],
    },
  ] as SkillCategory[],

  leetcode: {
    solvedCount: '125+',
    profileUrl: 'https://leetcode.com/u/mohity/',
    topics: ['Binary Trees', 'Binary Search Trees (BST)', 'Heaps & Priority Queues', 'Arrays & Two Pointers', 'Dynamic Programming'],
  },
};
