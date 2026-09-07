import p1 from "@/assets/project_1.jpg";
import p2 from "@/assets/project_2.jpg";
import p4 from "@/assets/project_4.jpg";

export const projects = [
  {
    title: "DocuChat — RAG Assistant",
    tag: "Generative AI",
    desc: "A multi-document RAG assistant that enables natural-language conversations across PDF, DOCX, TXT, Markdown, and CSV files using semantic retrieval and LLM-powered responses.",
    tags: ["Python", "LangChain", "ChromaDB", "Hugging Face", "Gemini", "Streamlit"],
    highlights: ["RAG Pipeline", "Semantic Search", "Multi-Document QA"],
    gradient: "linear-gradient(135deg, oklch(0.62 0.25 290), oklch(0.72 0.19 195))",
    iconName: "FileText",
    githubUrl: "https://github.com/msangeeth28/rag-docuchat",
    liveUrl: null,
    image: p1,
  },
  {
    title: "Research Crew AI",
    tag: "Agentic AI",
    desc: "A multi-agent AI research assistant that orchestrates specialized agents for web research, quality evaluation, data analysis, and report generation using CrewAI and Google Gemini.",
    tags: ["Python", "CrewAI", "Gemini", "Serper", "Streamlit"],
    highlights: ["Multi-Agent System", "Quality Control Loop", "AI Research"],
    gradient: "linear-gradient(135deg, oklch(0.72 0.19 195), oklch(0.75 0.2 340))",
    iconName: "Bot",
    githubUrl: "https://github.com/msangeeth28/researchcrew-ai",
    liveUrl: null,
    image: p2,
  },
  {
    title: "AI Fitness Tracker",
    tag: "Machine Learning",
  desc: "A machine learning fitness tracker that predicts calories burned from personal and workout metrics using a Random Forest regression model, with an interactive Streamlit interface.",
  tags: ["Python", "Streamlit", "Scikit-learn", "Random Forest", "Pandas"],
    highlights: ["Real-time Analytics", "AI Recommendations", "Dark Mode UI"],
    gradient: "linear-gradient(135deg, oklch(0.75 0.2 340), oklch(0.62 0.25 290))",
    iconName: "Activity",
    githubUrl: "https://github.com/msangeeth28/AI-Fitness-Tracker",
    liveUrl: null,
    image: p4,
  },
];