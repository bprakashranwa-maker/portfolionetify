/**
 * ==============================================================================
 * PORTFOLIO CONFIGURATION DATA - BUDHIPRAKASH JAT
 * ==============================================================================
 * All personal details, social profiles, skills, projects, and education
 * are centralized in this single file for effortless updating.
 * ==============================================================================
 */

export const personalInfo = {
  fullName: "Budhiprakash Jat",
  firstName: "Budhiprakash",
  title: "Junior AI & Data Scientist",
  email: "bprakashranwa@gmail.com",
  location: "Jaipur, Rajasthan, India",
  
  // Configurable placeholders - update these with your real profile URLs
  social: {
    github: "https://github.com/budhiprakash-jat", // Replace with your actual GitHub URL
    linkedin: "https://linkedin.com/in/budhiprakash-jat", // Replace with your actual LinkedIn URL
    kaggle: "https://www.kaggle.com", // Optional: Add your Kaggle profile
  },

  headline: "Transforming raw data into meaningful insights & building intelligent AI solutions.",
  
  bio: [
    "I am an enthusiastic Junior AI & Data Scientist with a deep interest in Python, machine learning algorithms, and exploratory data analytics.",
    "Driven by analytical curiosity, I enjoy extracting patterns from complex datasets, training predictive models, and engineering practical AI-assisted tools that solve real-world problems.",
    "I am actively seeking entry-level opportunities in Artificial Intelligence, Data Science, Machine Learning, and Data Analytics where I can contribute fresh perspective, dedication, and robust problem-solving."
  ],

  careerGoal: "Entry-level opportunities in Artificial Intelligence, Data Science, Machine Learning, and Data Analytics.",

  // Quick stats/highlights for hero & about
  highlights: [
    { label: "Core Focus", value: "AI & Data Science" },
    { label: "Primary Language", value: "Python & SQL" },
    { label: "Location", value: "Jaipur, Rajasthan, India" },
    { label: "Status", value: "Open to Junior Roles" },
  ],

  resumeUrl: "/resume/Budhiprakash_Jat_Resume.pdf",
};

/**
 * TECHNICAL SKILLS
 * Organized cleanly by domain with no fabricated percentages.
 * Each item includes a description or context for how you apply the skill.
 */
export const skillCategories = [
  {
    id: "programming",
    title: "Programming",
    icon: "Code",
    description: "Core languages for algorithmic logic, computational pipelines, and data handling.",
    skills: [
      { name: "Python", tags: ["Primary", "Data/ML", "Automation"], description: "Object-oriented programming, data structures, and scripting" },
      { name: "Java", tags: ["OOP", "Backend Foundations"], description: "Core concepts, algorithmic thinking, and object-oriented design" },
      { name: "SQL", tags: ["Databases", "Queries"], description: "Relational querying, aggregations, joins, and data extraction" },
    ],
  },
  {
    id: "data-analysis",
    title: "Data Analysis",
    icon: "Database",
    description: "Wrangling, preprocessing, and statistical exploration of structured data.",
    skills: [
      { name: "Pandas", tags: ["DataFrames", "Cleaning"], description: "Data manipulation, missing value imputation, indexing, and grouping" },
      { name: "NumPy", tags: ["Numerical", "Linear Algebra"], description: "Multi-dimensional array operations, mathematical transforms" },
      { name: "Microsoft Excel", tags: ["Spreadsheets", "Formulas"], description: "Pivot tables, VLOOKUP, data sanitization, and summary metrics" },
    ],
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    icon: "Cpu",
    description: "Predictive modeling, statistical learning, and metric evaluation.",
    skills: [
      { name: "Scikit-learn", tags: ["Pipelines", "ML Core"], description: "Model fitting, preprocessing, hyperparameter tuning" },
      { name: "Regression", tags: ["Linear", "Ridge", "Random Forest"], description: "Continuous target estimation, residual inspection, MSE/R² evaluation" },
      { name: "Classification", tags: ["Logistic", "Trees", "KNN"], description: "Binary & multi-class predictive modeling, confusion matrix analysis" },
      { name: "Model Evaluation", tags: ["Cross-Validation", "Metrics"], description: "Accuracy, Precision, Recall, F1-Score, ROC-AUC benchmarking" },
    ],
  },
  {
    id: "visualization",
    title: "Data Visualization",
    icon: "BarChart3",
    description: "Communicating findings through intuitive charts and narrative dashboards.",
    skills: [
      { name: "Matplotlib", tags: ["Plotting", "Customization"], description: "Custom 2D plots, histograms, scatter visual analysis" },
      { name: "Seaborn", tags: ["Statistical", "Heatmaps"], description: "Correlation matrices, distribution plots, pairplots" },
      { name: "Power BI", tags: ["Dashboards", "BI"], description: "Interactive report design, KPI cards, visual storytelling" },
    ],
  },
  {
    id: "web-dev",
    title: "Web Development",
    icon: "Globe",
    description: "Building responsive frontends to deploy and showcase AI/data applications.",
    skills: [
      { name: "HTML5", tags: ["Semantic", "Accessibility"], description: "Clean document structure and SEO compliance" },
      { name: "CSS3", tags: ["Responsive", "Flexbox/Grid"], description: "Modern styling, glassmorphism, mobile-first design" },
      { name: "JavaScript", tags: ["ES6+", "Async"], description: "Interactive client-side logic, API calls, event handling" },
      { name: "React", tags: ["Components", "Hooks"], description: "Declarative UI engineering, modular state management" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    icon: "Wrench",
    description: "Version control, development environments, and scientific workspaces.",
    skills: [
      { name: "Git & GitHub", tags: ["VCS", "Collaboration"], description: "Branching, commits, pull requests, repository management" },
      { name: "Jupyter Notebook", tags: ["EDA", "Prototyping"], description: "Interactive data analysis, code documentation, inline plotting" },
      { name: "VS Code", tags: ["IDE", "Extensions"], description: "Primary development workspace, linting, debugging" },
      { name: "Google Colab", tags: ["Cloud", "GPU/TPU"], description: "Cloud-hosted scientific computing and reproducible experimentation" },
    ],
  },
];

/**
 * PORTFOLIO PROJECTS
 * Suggested foundational projects.
 * Unfinished/sample projects are clearly labeled with status badges.
 */
export const projectsData = [
  {
    id: "house-price-prediction",
    title: "House Price Prediction",
    subtitle: "End-to-End Regression & Feature Engineering",
    category: "Machine Learning",
    status: "Completed",
    featured: true,
    summary: "Built a predictive regression pipeline to estimate residential real-estate prices using historical housing features, correlation analysis, and regression modeling.",
    detailedDescription: "This project explores data cleaning, missing value imputation, outlier detection, and feature selection on structured housing data. Several models including Linear Regression, Ridge Regression, and Random Forest were benchmarked using RMSE and R-squared metrics to find the optimal predictor.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
    keyLearnings: [
      "Exploratory Data Analysis (EDA) uncovering key price drivers such as square footage and location.",
      "Handling skewness and multicollinearity using log transforms and variance inflation checks.",
      "Implementing k-fold cross-validation to prevent model overfitting.",
    ],
    githubUrl: "https://github.com/budhiprakash-jat/house-price-prediction", // Placeholder
    liveUrl: null, // Marked as offline / notebook project
    visualType: "chart",
    colorAccent: "#8b5cf6",
  },
  {
    id: "sales-data-analysis",
    title: "Sales Data Analysis Dashboard",
    subtitle: "Exploratory Analytics & Business Insights",
    category: "Data Analysis",
    status: "Completed",
    featured: true,
    summary: "Conducted deep-dive exploratory data analysis on retail transactional data to extract seasonal revenue patterns, regional trends, and customer purchase behaviors.",
    detailedDescription: "Wrote SQL queries and Python aggregation scripts to ingest, transform, and analyze multi-thousand row sales records. Engineered visual charts highlighting peak purchasing months, best-selling product categories, and customer retention metrics.",
    technologies: ["Python", "SQL", "Pandas", "Matplotlib", "Seaborn", "Excel"],
    keyLearnings: [
      "Designed complex SQL aggregations with GROUP BY, subqueries, and window functions.",
      "Generated actionable business intelligence summaries for stakeholder interpretation.",
      "Created correlation heatmaps and time-series line trends for revenue tracking.",
    ],
    githubUrl: "https://github.com/budhiprakash-jat/sales-data-analysis", // Placeholder
    liveUrl: null,
    visualType: "dashboard",
    colorAccent: "#06b6d4",
  },
  {
    id: "ai-sentiment-analysis",
    title: "AI Sentiment Analysis App",
    subtitle: "Text Classification & Streamlit Interface",
    category: "NLP & AI",
    status: "In Development",
    featured: true,
    summary: "An upcoming Natural Language Processing web tool that classifies customer feedback and reviews into positive, neutral, or negative sentiment.",
    detailedDescription: "Focuses on text preprocessing pipelines (tokenization, stop-word removal, TF-IDF vectorization) coupled with lightweight classification models. A Streamlit frontend is currently in development to enable interactive user testing in real time.",
    technologies: ["Python", "NLP", "Scikit-learn", "Streamlit", "NLTK"],
    keyLearnings: [
      "Text normalization and vocabulary vectorization techniques.",
      "Evaluating classification performance using precision, recall, and confusion matrix.",
      "Integrating machine learning inference models with lightweight web frameworks.",
    ],
    githubUrl: "https://github.com/budhiprakash-jat/ai-sentiment-analysis", // Placeholder
    liveUrl: null, // In development
    visualType: "nlp",
    colorAccent: "#3b82f6",
  },
];

/**
 * EDUCATION & LEARNING JOURNEY
 * Timeline with clearly editable placeholders — no unverified history.
 */
export const educationTimeline = [
  {
    id: "degree",
    type: "Degree Placeholder",
    title: "[Your Degree Name - e.g., B.Tech Computer Science / BCA / BSc in Data Science]",
    institution: "[Your College or University Name - Jaipur, Rajasthan]",
    duration: "[Year - e.g., 2022 - 2026 / Present]",
    status: "In Progress / Editable Placeholder",
    description: "Foundational academic training covering computer programming, algorithmic logic, linear algebra, discrete mathematics, and database management systems.",
    highlights: [
      "Core Courses: Data Structures & Algorithms, Object Oriented Programming, Probability & Statistics, DBMS",
      "Academic Projects: Software engineering mini-projects, analytical reports",
    ],
  },
  {
    id: "self-learning",
    type: "Self-Directed Learning & Specializations",
    title: "Applied Machine Learning & Data Science Path",
    institution: "Independent Studies & Online Coursework (e.g. Kaggle, Coursera, YouTube)",
    duration: "Continuous / Current",
    status: "Active",
    description: "Hands-on self-guided learning curve focusing on modern AI libraries, real dataset competitions, and end-to-end Python coding.",
    highlights: [
      "Implemented practical regression and classification workflows using Scikit-learn",
      "Explored data storytelling using Matplotlib, Seaborn, and Pandas wrangling",
      "Practicing version control with Git and building reproducible Jupyter Notebooks",
    ],
  },
  {
    id: "certifications-placeholder",
    type: "Certifications Placeholder",
    title: "[Your Certifications / Bootcamps - Add when completed]",
    institution: "[Certification Authority - e.g., Coursera, DeepLearning.AI, HackerRank, Google]",
    duration: "[Upcoming / In Progress]",
    status: "Planned",
    description: "Placeholder section ready for your verified credentials, credentials ID, and completion badges.",
    highlights: [
      "Editable card: easily add your verified certificates in src/data/portfolioData.js",
    ],
  },
];

/**
 * NAVIGATION LINKS
 */
export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];
