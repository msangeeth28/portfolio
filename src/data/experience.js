import p3 from "@/assets/project_3.jpg";

export const experienceDetails = [
  {
    role: "Machine Learning Intern",
    company: "APSSDC",
    period: "May 2026 – July 2026",
    type: "Remote",
    image: p3,
    imageAlt: "Predictive Maintenance Project",

    desc: "Built an end-to-end Predictive Maintenance system using Python, Scikit-Learn, and XGBoost to predict equipment failures and classify failure types from industrial sensor data. Worked on feature engineering, class imbalance handling, model optimization, and evaluation.",

    stats: [
      { label: "F1 Score", value: 0.83, decimals: 2 },
      { label: "ROC AUC", value: 98.47, suffix: "%", decimals: 2 },
    ],

    links: [
      {
        name: "GitHub",
        url: "https://github.com/msangeeth28/Predictive-Maintainance",
        iconName: "Github",
      },
      {
        name: "Live Demo",
        url: "https://predictive-maintainance-msangeeth28.streamlit.app",
        iconName: "ExternalLink",
      },
    ],
  },
];
