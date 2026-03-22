export const siteConfig = {
  name: "Josselin Perret",
  title: "Student @ CentraleSupélec & ESSEC Business School",
  description: "CentraleSupelec engineering student focused on world models and representation learning.",
  accentColor: "#1d4ed8",
  social: {
    email: "josselinprrt@gmail.com",
    linkedin: "https://www.linkedin.com/in/josselin-perret/",
    twitter: "https://x.com/josselinperret",
    github: "https://github.com/JosselinPerret",
  },
  aboutMe:
    "CentraleSupelec engineering student with a strong mathematical background (MPSI/MP*). Focused on world models and latent representation learning for real-world sensor data. Co-founder of an AI startup applying deep learning to noisy clinical data, and currently exploring theoretical extensions to RSSM architectures in hyperbolic latent spaces.",
  skills: [
    "PyTorch",
    "JAX (learning)",
    "Scikit-Learn",
    "XGBoost",
    "Transformers",
    "CNNs",
    "Computer Vision",
    "Python",
    "Git",
    "Docker",
    "LaTeX",
    "Riemannian Geometry",
    "Stochastic Processes",
    "Probability & Measure",
    "Linear Algebra",
    "Optimization",
  ],
  experience: [
    {
      company: "ZenkoLab",
      title: "Co-founder & AI R&D Lead",
      dateRange: "Sep 2024 - Present",
      bullets: [
        "Engineered a pipeline handling high-dimensional, noisy retinal imaging data (fundus and OCT) in partnership with the Hopital National de 15-20, covering acquisition, cleaning, and validation across 200k+ annotated images.",
        "Fine-tuned a Vision Transformer (RETFound) and built a hybrid architecture (ViT, EfficientNet, Random Forest) achieving 99.6% sensitivity on diabetic retinopathy and 98.6% on AMD detection.",
        "Integrated Integrated Gradients, Grad-CAM, and LIME to analyze decision boundaries and failure modes in a safety-critical diagnostic setting.",
      ],
    },
  ],
  education: [
    {
      school: "CentraleSupelec -- Paris-Saclay University",
      degree: "Master of Engineering (Diplome d'Ingenieur)",
      dateRange: "Sep 2024 - Present",
      achievements: [
        "Relevant coursework: Statistical Learning, Deep Learning, Probability & Measure, Optimization, Signal Processing, Data-Driven Control, Time-Series Analysis.",
        "GPA: 4.0/4.0",
        "Location: Gif-sur-Yvette, France",
      ],
    },
    {
      school: "ESSEC Business School",
      degree: "Global Strategy & Innovation Semester (Exchange)",
      dateRange: "Jan 2026 - Jun 2026",
      achievements: [
        "Focus: Business Data Science, Machine Learning, Strategy, Innovation Management.",
        "Location: Singapore, Singapore",
      ],
    },
    {
      school: "Lycee Henri IV",
      degree: "Preparatory Classes, MPSI/MP* (Mathematics & Physics)",
      dateRange: "Sep 2022 - Jun 2024",
      achievements: [
        "Rigorous two-year curriculum in advanced Mathematics (Algebra, Analysis, Probability) and Physics.",
        "GPA: 4.0/4.0",
        "Location: Paris, France",
      ],
    },
  ],
};
