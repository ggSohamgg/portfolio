import { 
  Code2, 
  Brain, 
  Database, 
  Cloud, 
  Terminal, 
  Linkedin, 
  Github, 
  Mail,
  Bot
} from 'lucide-react';
import { Project, Experience, SkillCategory, SocialLink, Certificate } from './types';

export const PERSONAL_INFO = {
  name: "Soham Banerjee",
  title: "AI/ML Engineer & Full Stack Developer",
  summary: "AI/ML Engineer with proven experience in architecting and finetuning specialized language models. Expert in full-stack model development, from high-quality dataset curation to QLoRA finetuning. Proficient in PyTorch, NLP, and deploying models that outperform larger counterparts.",
  location: "Kolkata, India",
  email: "sohamaiuse@gmail.com",
  phone: "+91 6291612912",
};

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/ggSohamgg", icon: Github },
  { name: "LinkedIn", url: "http://linkedin.com/in/soham-banerjee-328366338", icon: Linkedin },
  { name: "Hugging Face", url: "https://huggingface.co/nnsohamnn", icon: Bot },
  { name: "Email", url: "mailto:sohamaiuse@gmail.com", icon: Mail },
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Witting AI",
    role: "AI Intern",
    period: "Summer 2025",
    location: "Remote",
    description: [
      "Designed a multi-agent AI system to generate schema-adherent NL-to-SQL datasets, directly addressing data scarcity.",
      "Built and validated a 5K high-signal dataset using a custom graph-based multi-metric evaluation pipeline.",
      "Fine-tuned Qwen3-4B/8B with QLoRA, achieving state-of-the-art performance on complex analytical plans.",
      "Proven impact: Demonstrated that 4B parameter models with high-quality data outperform 8B models trained on mixed datasets.",
      "Benchmarked leading NL-to-SQL libraries including Agno SDK, Wren AI, and Vanna.AI."
    ],
    technologies: ["PyTorch", "QLoRA", "Multi-Agent Systems", "NL-to-SQL", "Dataset Curation", "LLM Evaluation"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "SparkQuiz - AI Quiz Generator",
    description: "A Flask web app generating custom quizzes using Google Gemini 2.5 Flash with glassmorphism UI.",
    tech: ["Gemini 2.5 Flash", "Flask", "React", "Tailwind"],
    type: "Web App",
    github: "https://github.com/ggSohamgg/Spark_Quiz",
    metrics: ["Optimized prompt engineering", "Deployed on Railway", "Markdown parsing"]
  },
  {
    title: "Conversational AI (GPT-2)",
    description: "Built and trained a small GPT-2 conversational agent from scratch using PyTorch (450M parameters).",
    tech: ["PyTorch", "Transformers", "FineWeb-Edu", "SmolTalk"],
    type: "AI Model",
    link: "https://huggingface.co/spaces/nnsohamnn/GPT-2-450M",
    metrics: ["Perplexity 44.37", "PPL 9.31 (Fine-tuned)", "Mixed-precision (FP16)"]
  },
  {
    title: "Food Image Classification",
    description: "Deep learning-based food classifier utilizing MobileNetV2 architecture.",
    tech: ["MobileNetV2", "CNN", "Transfer Learning"],
    type: "Deployment",
    github: "https://github.com/ggSohamgg/Food5-PyTorch",
    metrics: ["90% Accuracy", "5 Categories", "Hugging Face Spaces"]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    name: "Deep Learning",
    icon: Brain,
    skills: ["CNN", "RNN", "Transformers", "Attention Mechanisms", "QLoRA", "Unsloth"]
  },
  {
    name: "Frameworks",
    icon: Code2,
    skills: ["PyTorch", "TensorFlow", "scikit-learn", "DeepEval", "Flask", "FastAPI"]
  },
  {
    name: "Deployment & Cloud",
    icon: Cloud,
    skills: ["AWS Sagemaker", "Hugging Face", "ONNX", "TFLite", "Llama.cpp", "Docker"]
  },
  {
    name: "Languages",
    icon: Terminal,
    skills: ["Python", "C++", "Java", "Kotlin", "SQL"]
  },
  {
    name: "Data Engineering",
    icon: Database,
    skills: ["NumPy", "Pandas", "Matplotlib", "Dataset Curation", "Data Augmentation"]
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    title: "Certificate in Deep Learning",
    issuer: "NVIDIA Deep Learning Institute",
    date: "Apr 2025",
    link: "https://learn.nvidia.com/certificates?id=b_uVApMUTSyDyf1LO23zjw"
  },
  {
    title: "Fundamentals of LLMs",
    issuer: "Hugging Face",
    date: "May 2025",
    link: "https://huggingface.co/spaces/huggingface-course/chapter_1_exam/discussions/38"
  }
];

export const EDUCATION = {
  degree: "BTech in Computer Science and Engineering",
  university: "Kalinga Institute of Industrial Technology",
  location: "Bhubaneshwar, India",
  year: "2027 (Expected)",
  gpa: "8.84 / 10"
};