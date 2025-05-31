// data/projects.ts
export const projects = [
  {
  slug: "credit-card-fraud-detection",
  title: "Credit Card Fraud Detection",
  description:
    "Detect fraudulent credit card transactions using machine learning with high precision and recall.",
  image: "/credit_card.jpg",
  tech: [
    "Python",
    "XGBoost",
    "Random Forest",
    "SMOTE",
    "PCA",
    "scikit-learn",
    "Pandas",
    "Matplotlib"
  ],
  category: "Machine Learning",
  date: "2025-05",
  duration: "1 weeks",
  team: "2 members",
  accuracy: "96.78%",
  github: "https://github.com/Tejeswar001/credit-card-fraud-detection",
  demo: "https://github.com/Tejeswar001/credit-card-fraud-detection/tree/main/models",
  overview:
    "A comprehensive ML project to detect fraudulent transactions using real-world credit card data. It tackles class imbalance using SMOTE, reduces dimensionality with PCA, and leverages powerful classifiers like XGBoost and Random Forest to ensure accurate and fast detection.",
  challenges: [
    "Highly imbalanced dataset (fraud vs non-fraud)",
    "Selecting features that enhance fraud prediction",
    "Maintaining high accuracy without overfitting"
  ],
  solutions: [
    "Applied SMOTE to balance the class distribution",
    "Used PCA to retain 95% variance while reducing feature space",
    "Evaluated models with multiple metrics for robustness"
  ],
  results: [
    "Achieved 96.78% accuracy with XGBoost",
    "F1 Score of 0.78, Recall of 0.80 on test data",
    "Models exported for future deployment"
  ],
  methodology: [
    "Data Cleaning & Encoding",
    "Feature Scaling",
    "SMOTE Oversampling",
    "PCA for Dimensionality Reduction",
    "Model Training & Evaluation",
    "Performance Visualization"
  ]
},
  {
    slug: "role-radar",
    title: "Role Radar",
    description:
      "Discover professionals with 10+ years of experience in any domain using NLP and real-time web scraping.",
    image: "/roleradar.png",
    tech: ["Python", "Flask", "GitHub API", "Serper API", "Gemini API", "NLP"],
    category: "Web Application",
    date: "2025-05",
    duration: "2 weeks",
    team: "4 members",
    accuracy: "100%",
    github: "https://github.com/Tejeswar001/RoleRadar",
    demo: "https://roleradar-01.onrender.com/",
    overview:
      "Role Radar is a Flask-based web application that leverages NLP and real-time data scraping to identify domain experts with over a decade of experience. By taking minimal user input (domain and optional keywords), it intelligently fetches and filters profiles from GitHub and search engines, ranking them using a custom-built confidence scoring algorithm.",
    challenges: [
      "Scraping reliable data in real time without being rate-limited",
      "Designing a confidence score that balances multiple relevance factors",
      "Integrating multiple APIs seamlessly within response time goals",
    ],
    solutions: [
      "Used Serper.dev for Google-like search results and GitHub API for detailed metadata",
      "Developed a Gemini-powered NLP algorithm to evaluate context and experience",
      "Streamlined backend requests to ensure <20s total response time",
    ],
    results: [
      "Returned top experts in under 20 seconds per search",
      "Confidence score accuracy validated with test prompts",
      "Effortless UX with no dummy data; 100% real profiles",
    ],
    methodology: [
      "Keyword Parsing",
      "Query Expansion",
      "Serper + GitHub API Search",
      "Gemini NLP Score Evaluation",
      "Sorting & Display",
    ],
  },
  {
    slug: "urbanflow-traffic-management",
    title: "UrbanFlow-AI Traffic Management",
    description:
      "AI-powered real-time traffic signal optimization using YOLOv11 and AWS services.",
    image: "/traffic.png",
    tech: [
      "Python",
      "YOLOv11",
      "AWS Lambda",
      "DynamoDB",
      "S3",
      "OpenCV",
      "Flask",
    ],
    category: "AI + Cloud",
    date: "2025-04",
    duration: "4 weeks",
    team: "2 members",
    accuracy: "94.6%",
    github:
      "https://github.com/Tejeswar001/UrbanFlow-AI-Based-Traffic-Management",
    demo: "https://media.licdn.com/dms/image/v2/D4D22AQEZsaksJVsr8Q/feedshare-shrink_2048_1536/B4DZYvN7fRHsAs-/0/1744548909536",
    overview:
      "UrbanFlow uses YOLOv11 to detect vehicle types and counts in real-time video feeds. The data is processed and stored using AWS (Lambda, S3, DynamoDB) to dynamically manage traffic signal durations based on road congestion, improving urban mobility.",
    challenges: [
      "Handling real-time object detection across four camera angles",
      "Deploying ML models with low latency on the cloud",
      "Designing a scalable, event-driven architecture",
    ],
    solutions: [
      "Trained YOLOv11 model with high mAP@50 (94.6%) for multiple vehicle classes",
      "Used AWS Lambda + S3 triggers for near real-time model inference",
      "Leveraged DynamoDB to log counts and compute congestion trends",
    ],
    results: [
      "Successfully identified cars, trucks, buses, bikes, and pedestrians",
      "Reduced signal wait time on average by 22% in test scenarios",
      "Scalable architecture that supports multiple junctions",
    ],
    methodology: [
      "Video Splitting and Preprocessing",
      "YOLOv11 Training and Inference",
      "Vehicle Count and Classification",
      "Data Upload to AWS S3",
      "Lambda Trigger and DynamoDB Logging",
      "Signal Duration Adjustment Logic",
    ],
  },
  {
    slug: "smart-todo",
    title: "Smart Todo App",
    description:
      "A feature-rich task manager with deadline tracking, priorities, and MongoDB integration.",
    image: "/todo.png",
    tech: ["Next.js", "MongoDB Atlas", "TailwindCSS", "Vercel"],
    category: "Productivity Tool",
    date: "2024-08",
    duration: "1 week",
    team: "Solo Project",
    accuracy: "100%",
    github: "https://github.com/Tejeswar001/Smart-Todo",
    demo: "https://smarttodo.vercel.app",
    overview:
      "Smart Todo is a productivity web app built with Next.js and MongoDB Atlas that allows users to create, update, and track tasks. Features include deadlines, priority levels, and task filtering. The app is designed with clean UI/UX and is fully responsive.",
    challenges: [
      "Designing intuitive UI for task creation and filtering",
      "Handling database schema updates for new features",
      "Optimizing performance on client-side state changes",
    ],
    solutions: [
      "Used TailwindCSS and shadcn/ui for a modern, responsive interface",
      "Implemented ISO date handling and form validation",
      "Integrated MongoDB Atlas for scalable, fast data storage",
    ],
    results: [
      "Over 95% task completion rate during internal testing",
      "Quick task creation and status toggling with low latency",
      "Easily extendable structure for future features (e.g., notifications)",
    ],
    methodology: [
      "User Requirements Analysis",
      "Schema Design in MongoDB",
      "Next.js Component Architecture",
      "Form Validation and Task Filtering",
      "Deployment to Vercel",
    ],
  },
  
];