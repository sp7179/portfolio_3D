import {
  mobile, backend, creator, web, 

  javascript, html, css, reactjs, tailwindcss, nodejs, mongodb, git, flask, python, java, nextjs, fastapi, sql, vercel, 

  wipro, next24, devtown, eduversity, bel, infosys,

  carrent, jobit, tripguide, 
  
  career_coach, desktop_assistant, diabetes, document_analysis, financial_analysis, leetcode_ext, trading_bot, gfg, signGame, feedback, medicalBot
  
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Engineer",
    icon: web,
  },
  {
    title: "DSA & Problem-Solving Enthusiast",
    icon: mobile,
  },
  {
    title: "Aspiring Data Analyst",
    icon: backend,
  },
  {
    title: "AI Tools & Automation Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
    
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwindcss,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "vercel",
    icon: vercel,
  },
  
  {
    name: "SQL",
    icon: sql,
  }
  
];

const experiences = [
  {
  title: "Systems & Database Intern",
  company_name: "Bharat Electronics Limited (BEL)",
  icon: bel,
  iconBg: "#1b3a2f",
  date: "December 2025 - January 2026",
  certificateImage: "https://res.cloudinary.com/dsaytr1qm/image/upload/v1766135784/test_img_jaihfk.jpg", 
  points: [
  "Analyzed 10,000+ network traffic logs to study normal vs anomalous behavior patterns.",
  "Implemented machine learning based intrusion classification covering 4+ common network attack indicators.",
  "Performed feature extraction on 20+ network attributes to improve detection stability and signal clarity.",
  "Gained hands-on exposure to defense-grade cybersecurity environments and structured intrusion detection workflows.",
],

},

    {
    title: "AI / ML Intern",
    company_name: "Infosys",
    icon: infosys,
    iconBg: "#0f1c2e",
    date: "October 2025 - December 2025",
    certificateImage: "https://res.cloudinary.com/dsaytr1qm/image/upload/v1766135784/test_img_jaihfk.jpg", 
    points: [
    "Processed and structured 3,000+ customer feedback records collected from multiple sources using automated text extraction pipelines.",
    "Built sentiment and aspect-level classification workflows covering 6+ common feedback categories such as delivery, quality, and support.",
    "Reduced manual feedback analysis effort by ~45% by enabling faster insight generation through structured outputs.",
    "Validated model outputs with mentors and iteratively improved classification consistency across multiple feedback batches.",
  ],

  },

  {
    title: "Data Analyst Intern",
    company_name: "Next24Tech",
    icon: next24, // Replace with your Next24Tech icon
    iconBg: "#37474F",
    date: "June 2024 - July 2024",
    certificateImage: "https://res.cloudinary.com/dsaytr1qm/image/upload/v1766071939/sp_Next24tech_dpzjfc.jpg",
    points: [
      "Processed and analyzed 50,000+ data entries using Pandas and NumPy to uncover actionable insights.",
      "Improved reporting accuracy by 22% through anomaly detection and data validation techniques.",
      "Designed 10+ predictive dashboards using Matplotlib and Seaborn for real-time business decision-making.",
      "Achieved 85% confidence accuracy in forecasting models for trend prediction and analysis.",
    ],
  },

  {
    title: "Full Stack Developer Intern",
    company_name: "Eduversity",
    icon: eduversity, // Replace with your Eduversity icon
    iconBg: "#1f1f1f",
    date: "January 2024 - March 2024",
    certificateImage: "https://res.cloudinary.com/dsaytr1qm/image/upload/v1766071938/sp_eduversity_kupkct.jpg",
    points: [
    "Developed a journaling platform for 1,500+ users with editable entries and folder-based organization, improving content management by 70%.",
    "Implemented mood analysis on 1,500+ journal logs to derive insights across 7 emotional categories.",
    "Reduced average journaling time by 60% through workflow and UI optimizations.",
    "Improved daily active user retention by 35% within 3 months of deployment.",
  ],

  },
  
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Desktop Automation System",
    description: [
      "⚡ Voice-controlled smart assistant automating daily desktop tasks using Python, OpenCV, and NLP.",
      "🌡️ Real-time weather reporting, language translation, and app launching through voice.",
      "📱 Smart notification control and integrated chat-based interface for multitasking.",
      "🧠 Used SQLite for managing assistant state and history."
    ],
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "opencv", color: "green-text-gradient" },
      { name: "nlp", color: "pink-text-gradient" },
      { name: "sqlite", color: "orange-text-gradient" },
    ],
    image: desktop_assistant, // Replace with actual image
    source_code_link: "https://github.com/sp7179/desktop-assistant.git",
  },
  {
  name: "Sentiment Insight Engine",
  description: [
    "🧠 Engineered an end-to-end customer feedback intelligence system processing 3,000+ textual feedback entries with automated sentiment classification.",
    "📊 Implemented sentiment polarity, confidence scoring, and aspect-based insights across 6+ feedback dimensions such as service, delivery, and product quality.",
    "🔁 Designed an active learning pipeline that retrains models on low-confidence samples, improving prediction reliability over multiple iterations.",
    "⚙️ Built scalable REST APIs using FastAPI to support real-time analysis, background retraining jobs, and versioned model management.",
    "📈 Developed interactive dashboards in Next.js to visualize sentiment trends, issue frequency, and model confidence for faster decision-making.",
  ],
  tags: [
    { name: "fastapi", color: "blue-text-gradient" },
    { name: "nextjs", color: "green-text-gradient" },
    { name: "machine-learning", color: "pink-text-gradient" },
    { name: "mongodb", color: "orange-text-gradient" },
  ],
  image: feedback, // project UI image
  source_code_link: "https://github.com/sp7179/infosys_customer_feeback_analysis.git",
},

  {
    name: "Crypto Trade Automation",
    description: [
      "🤖 Automated crypto bot for Bitcoin trading with real-time token swaps via Uniswap v3.",
      "🔐 Integrated with Alchemy API for secure token monitoring.",
      "📊 Dynamic swap UI where users configure buy amount, target price, and loop frequency.",
      "⚙️ Tech stack: Next.js, React.js, Node.js, MongoDB."
    ],
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "reactjs", color: "pink-text-gradient" },
      { name: "mongodb", color: "orange-text-gradient" },
    ],
    image: trading_bot, // Replace with actual image
    source_code_link: "https://github.com/sp7179/Cryto_TradingBot.git",
  },
  {
    name: "Coding Practice Assistant",
    description: [
      "💡 Chrome extension that auto-detects LeetCode problem pages and provides AI-powered solutions.",
      "🧠 Step-by-step breakdowns using Gemini API and real-time logic explanations.",
      "🔍 Fetches related resources (YouTube, GeeksforGeeks) using Google Search API.",
      "⚙️ Built with React.js, Vite, HTML, and CSS."
    ],
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "vite", color: "green-text-gradient" },
      { name: "chrome-extension", color: "pink-text-gradient" },
      { name: "google-api", color: "orange-text-gradient" },
    ],
    image: leetcode_ext, // Replace with actual image
    source_code_link: "https://github.com/sp7179/leetcode_extension.git",
  },
  {
  name: "Vision-Based Interaction Play",
  description: [
    "🖐️ Developed a real-time hand gesture recognition system supporting 5+ distinct gestures using MediaPipe and OpenCV.",
    "🎮 Mapped gestures to keyboard controls with <50ms input latency, enabling smooth hands-free gameplay.",
    "⚡ Optimized the vision pipeline to sustain 18–22 FPS on low-end systems (≤4GB RAM).",
    "🧠 Built a modular gesture-to-action engine allowing quick extension for new gestures and game mappings."
  ],
  tags: [
    { name: "python", color: "blue-text-gradient" },
    { name: "computer-vision", color: "green-text-gradient" },
    { name: "mediapipe", color: "pink-text-gradient" },
    { name: "opencv", color: "orange-text-gradient" },
  ],
  image: signGame, // project UI image
  source_code_link: "https://github.com/sp7179/Sign_detection_game_hub.git",
},

  {
    name: "Personal Finance Intelligence",
    description: [
      "💸 A full-stack AI-powered finance platform to manage expenses across multiple accounts.",
      "🔐 Includes secure login (Clerk), real-time budget alerts, and recurring payment tracking.",
      "📈 Dashboard auto-categorizes expenses and emails monthly/weekly insights.",
      "🧾 Receipt scanning with OCR extracts and logs transactions in seconds."
    ],
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "postgresql", color: "green-text-gradient" },
      { name: "inngest", color: "pink-text-gradient" },
      { name: "shadcn-ui", color: "orange-text-gradient" },
    ],
    image: financial_analysis, // Replace with actual image
    source_code_link: "https://github.com/sp7179/Prosp---AI-Finance-Platform.git",
  },
  {
    name: "Professional Growth Advisor",
    description: [
      "🧑‍💼 AI-driven career coaching platform with resume feedback, skill gap analysis, and mock interviews.",
      "📊 Real-time suggestions for job roles based on market demand and personal profile.",
      "🎯 Provides AI-generated resume scores and improvement tips.",
      "⚙️ Stack: Next.js, PostgreSQL, Inngest, ShadCN UI."
    ],
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "postgresql", color: "green-text-gradient" },
      { name: "shadcn-ui", color: "pink-text-gradient" },
      { name: "inngest", color: "orange-text-gradient" },
    ],
    image: career_coach, // Replace with actual image
    source_code_link: "https://github.com/sp7179/Laoshi-AI-CAREER-COACH.git",
  },
  {
    name: "Diagnostic Insight Logic",
    description: [
      "⌚ Smartwatch-powered diabetes management system with real-time activity, water, and glucose tracking.",
      "📉 Predictive analysis using XGBoost for hypoglycemia prevention.",
      "🧾 Personal health report generation using Diabetica-7B + RL-based chatbot support.",
      "🤝 Tailored AI communication experience for each patient using OpenAI."
    ],
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
      { name: "openai", color: "orange-text-gradient" },
    ],
    image: diabetes, // Replace with actual image
    source_code_link: "https://github.com/sp7179/Diagnosis.git",
  },
  {
  name: "Emission Forecast Intelligence",
  description: [
  "🌱 Built an AI-based forecasting system to predict sector-wise greenhouse gas emissions using 500+ historical data records.",
  "📊 Trained a Random Forest regression model to generate 15-year emission forecasts across 15+ industrial sectors.",
  "📈 Developed an interactive React dashboard comparing actual vs predicted emissions, reducing analysis time by ~60%.",
  "⚙️ Implemented a Flask REST API serving real-time predictions and dynamically generated charts for frontend use."
],

  tags: [
    { name: "python", color: "blue-text-gradient" },
    { name: "machine-learning", color: "green-text-gradient" },
    { name: "react", color: "pink-text-gradient" },
    { name: "flask", color: "orange-text-gradient" },
  ],
  image: gfg, // project UI image
  source_code_link: "https://github.com/sp7179/GreenHouse_Prediction.git",
},

{
  name: "Medical Query Intelligence System",
  description: [
    "🩺 Processed 1,000+ pages of medical documents and PDFs into searchable knowledge chunks using text preprocessing and embedding pipelines.",
    "🔍 Enabled semantic retrieval of top-K relevant medical contexts per query using vector similarity search, improving response relevance and grounding.",
    "🧠 Integrated large language models with a retrieval-augmented generation (RAG) flow to deliver context-aware medical answers via API endpoints.",
    "⚙️ Exposed chatbot functionality through a REST-based backend, supporting real-time medical query handling and scalable deployment."
  ],
  tags: [
    { name: "python", color: "blue-text-gradient" },
    { name: "llm", color: "green-text-gradient" },
    { name: "langchain", color: "pink-text-gradient" },
    { name: "fastapi", color: "orange-text-gradient" },
  ],
  image: medicalBot, // project UI image
  source_code_link: "https://github.com/sp7179/ai_medical_chatbot.git",
},



];


const certificates = [
  // Participation
  {
  title: "HackStasy 2025",
  issuer: "Azure Developer Community × Reskill",
  date: "January 2025",
  image: "https://res.cloudinary.com/dsaytr1qm/image/upload/v1766072025/sp_part_1_tbca9a.jpg",
  category: "Participation",
  description: "Participated in a national-level hackathon focused on problem-solving and innovation. Collaborated in a team-based environment under time constraints. Gained hands-on exposure to structured ideation and competitive evaluation."
},
{
  title: "Microsoft AI Skills Fest – Festival Participation",
  issuer: "Microsoft",
  date: "May 2025",
  image: "https://res.cloudinary.com/dsaytr1qm/image/upload/v1766072026/sp_part_2_pkpkhp.png",
  category: "Participation",
  description: "Participated in Microsoft AI Skills Fest, engaging with AI-focused learning tracks and sessions. Explored real-world applications of artificial intelligence through guided activities and industry-aligned content."
},
{
  title: "AI Skills Fest Challenge – Agentic AI Solutions",
  issuer: "Microsoft",
  date: "April 2025",
  image: "https://res.cloudinary.com/dsaytr1qm/image/upload/v1766072029/sp_part_3_zhdhoe.png",
  category: "Participation",
  description: "Participated in the AI Skills Fest Challenge centered on agentic AI solutions using Azure AI Foundry. Gained exposure to autonomous AI concepts, workflows, and modern cloud-based AI tooling."
},
{
  title: "Code4Cause 2.0 Hackathon",
  issuer: "NSUT Delhi Dwarka",
  date: "September 2024",
  image: "https://res.cloudinary.com/dsaytr1qm/image/upload/v1766072031/sp_part_4_k2kgqj.jpg",
  category: "Participation",
  description: "Participated in a 30-hour national hackathon with 1,200+ teams. Ranked among the top 4,000 applicants nationwide. Demonstrated problem-solving ability and commitment in a high-competition environment."
},
{
  title: "Developer Student Clubs – DevTown Bootcamp",
  issuer: "Google Developer Student Clubs",
  date: "August 2024",
  image: "https://res.cloudinary.com/dsaytr1qm/image/upload/v1766072033/sp_part_5_abyhk9.jpg",
  category: "Participation",
  description: "Participated in a 7-day technical bootcamp focused on object detection using OpenCV. Gained practical exposure to computer vision workflows and hands-on implementation fundamentals."
},
{
  title: "Python & Machine Learning Bootcamp",
  issuer: "DevTown",
  date: "May 2024",
  image: "https://res.cloudinary.com/dsaytr1qm/image/upload/v1766072035/sp_part_6_knxadn.jpg",
  category: "Participation",
  description: "Participated in a 7-day bootcamp focused on Python programming and machine learning fundamentals. Covered core concepts through guided sessions and practical examples. Gained exposure to applied ML workflows and industry-oriented learning."
},
{
  title: "Ideathon 2.0 – Eximius 2024",
  issuer: "Indian Institute of Management (IIM) Bangalore",
  date: "September 2024",
  image: "https://res.cloudinary.com/dsaytr1qm/image/upload/v1766072037/sp_part_7_frj7k2.jpg",
  category: "Participation",
  description: "Participated in Ideathon 2.0 under Eximius 2024, IIM Bangalore’s flagship innovation challenge. Contributed to team-based ideation and solution presentation evaluated on feasibility and innovation."
},
{
  title: "Flipkart GRiD 6.0 – E-Commerce & Tech Quiz (Level 1)",
  issuer: "Flipkart",
  date: "August 2024",
  image: "https://res.cloudinary.com/dsaytr1qm/image/upload/v1766072039/sp_part_8_wenijt.jpg",
  category: "Participation",
  description: "Participated in Level 1 of the Flipkart GRiD 6.0 E-Commerce and Technology Quiz. Demonstrated understanding of core computer science, problem-solving, and industry-relevant technical concepts."
},
{
  title: "Deep Learning & Web Deployment Bootcamp",
  issuer: "AWS Community Builders",
  date: "June 2024",
  image: "https://res.cloudinary.com/dsaytr1qm/image/upload/v1766072042/sp_part_9_tkr9yw.jpg",
  category: "Participation",
  description: "Participated in a 7-day bootcamp focused on deep learning fundamentals and web deployment practices. Explored model deployment workflows and real-world application scenarios. Gained exposure to end-to-end ML deployment concepts."
},
{
  title: "Flash Code – Innovate 2024",
  issuer: "SRM Institute of Science & Technology",
  date: "April 2024",
  image: "https://res.cloudinary.com/dsaytr1qm/image/upload/v1766072043/sp_part_10_nxvgfa.jpg",
  category: "Participation",
  description: "Participated in Flash Code, a coding event conducted during Innovate 2024, the national-level technical fest at SRM IST. Engaged in problem-solving under time constraints, enhancing competitive coding experience."
},
{
  title: "ERR-Hunt Bug Hunting Contest",
  issuer: "Computer Society of India, SRM IST Delhi-NCR",
  date: "September 2023",
  image: "https://res.cloudinary.com/dsaytr1qm/image/upload/v1766072046/sp_part_11_ifxyzh.jpg",
  category: "Participation",
  description: "Participated in ERR-Hunt, a bug hunting contest organized by the Computer Society of India. Identified logical and implementation-level issues in provided problem statements. Strengthened debugging and analytical skills."
},

  // Courses
  {
  title: "Data Analytics Job Simulation",
  issuer: "Deloitte (Forage)",
  date: "June 2025",
  image: "https://res.cloudinary.com/dsaytr1qm/image/upload/v1766071898/sp_cour_1_paiute.jpg",
  category: "Courses",
  description: "Completed a virtual job simulation focused on practical data analytics tasks. Worked on data analysis and forensic technology use cases. Gained exposure to industry-style problem-solving and structured analytical workflows."
},
{
  title: "Data Structures and Algorithms using Java",
  issuer: "NPTEL – IIT Kharagpur",
  date: "October 2024",
  image: "https://res.cloudinary.com/dsaytr1qm/image/upload/v1766071909/sp_cour_2_tgvpgj.jpg",
  category: "Courses",
  description: "Completed a 12-week NPTEL course covering core data structures and algorithmic techniques using Java. Achieved a consolidated score of 64% through assignments and a proctored examination. Strengthened problem-solving and algorithmic thinking."
},
{
  title: "Microsoft AI Skills Challenge",
  issuer: "Microsoft",
  date: "January 2024",
  image: "https://res.cloudinary.com/dsaytr1qm/image/upload/v1766071900/sp_cour_3_ctvxzv.jpg",
  category: "Courses",
  description: "Completed the Microsoft AI Skills Challenge focused on foundational AI concepts. Explored real-world applications of artificial intelligence through structured learning modules and guided challenges."
},
{
  title: "Python for Data Science",
  issuer: "NPTEL – IIT Madras",
  date: "August 2025",
  image: "https://res.cloudinary.com/dsaytr1qm/image/upload/v1766071905/sp_cour_4_onrrx4.jpg",
  category: "Courses",
  description: "Completed an intensive NPTEL course on Python for data science with an 80% consolidated score. Ranked within the top 5% of certified candidates. Built strong foundations in data handling, analysis, and Python-based workflows."
},
{
  title: "Advanced Software Engineering Job Simulation",
  issuer: "Walmart Global Tech (Forage)",
  date: "November 2024",
  image: "https://res.cloudinary.com/dsaytr1qm/image/upload/v1766071902/sp_cour_5_p9rw06.jpg",
  category: "Courses",
  description: "Completed an advanced software engineering simulation covering data structures, relational database design, and data munging. Gained exposure to enterprise-level engineering practices and system-oriented problem solving."
},

{
  title: "Software Engineering Job Simulation",
  issuer: "JPMorgan Chase & Co. (Forage)",
  date: "October 2025",
  image: "https://res.cloudinary.com/dsaytr1qm/image/upload/v1766071905/sp_cour_6_gf2ndx.jpg",
  category: "Courses",
  description: "Completed a software engineering job simulation covering project setup, REST API development, and database integration. Worked with Kafka, H2, and controller-level APIs to understand backend service workflows."
},
{
  title: "GenAI Powered Data Analytics Job Simulation",
  issuer: "Tata Group (Forage)",
  date: "July 2025",
  image: "https://res.cloudinary.com/dsaytr1qm/image/upload/v1766071910/sp_cour_10_fu1rxo.jpg",
  category: "Courses",
  description: "Completed a GenAI-driven data analytics simulation focused on risk profiling and predictive analysis. Created business insights through data storytelling and AI-assisted collections strategy design."
},

{
  title: "Introduction to Data Science Job Simulation",
  issuer: "Commonwealth Bank (Forage)",
  date: "August 2025",
  image: "https://res.cloudinary.com/dsaytr1qm/image/upload/v1766071908/sp_cour_9_lcrgpr.jpg",
  category: "Courses",
  description: "Completed an introductory data science simulation covering data aggregation, exploratory analysis, and database design. Applied structured analytical approaches to real-world business datasets."
},

{
  title: "GenAI Job Simulation",
  issuer: "BCG X (Forage)",
  date: "August 2024",
  image: "https://res.cloudinary.com/dsaytr1qm/image/upload/v1766071906/sp_cour_8_avrpmw.jpg",
  category: "Courses",
  description: "Completed a GenAI-focused job simulation involving data extraction and initial analysis. Developed an AI-powered financial chatbot concept, gaining exposure to applied generative AI use cases."
},

{
  title: "Cybersecurity Analyst Job Simulation",
  issuer: "Tata Consultancy Services (Forage)",
  date: "January 2024",
  image: "https://res.cloudinary.com/dsaytr1qm/image/upload/v1766071907/sp_cour_7_pzngzs.jpg",
  category: "Courses",
  description: "Completed a cybersecurity job simulation focused on identity and access management fundamentals. Worked on IAM strategy assessment, solution design, and platform integration concepts."
},

  // Achievements
  {
  title: "HackStasy 2025 – Top 15 Teams",
  issuer: "Computer Society of India, SRM IST Delhi-NCR",
  date: "April 2025",
  image: "https://res.cloudinary.com/dsaytr1qm/image/upload/v1766071973/sp_ach_01_figkyq.jpg",
  category: "Achievements",
  description: "Secured placement among the Top 15 teams at HackStasy 2025. Recognized for outstanding performance and technical contribution during the multi-day hackathon. Demonstrated strong problem-solving and team execution skills."
},
{
  title: "Oracle Cloud Infrastructure 2025 – Data Science Professional",
  issuer: "Oracle University",
  date: "September 2025",
  image: "https://res.cloudinary.com/dsaytr1qm/image/upload/v1766071974/sp_ach_2_ifnxvr.jpg",
  category: "Achievements",
  description: "Earned Oracle Certified Data Science Professional credential for OCI 2025. Validated proficiency in data science workflows, cloud-based analytics, and Oracle cloud services. Certification valid through September 2027."
},
{
  title: "Artificial Intelligence Primer Certification",
  issuer: "Infosys Springboard",
  date: "June 2025",
  image: "https://res.cloudinary.com/dsaytr1qm/image/upload/v1766071976/sp_ach_3_ljkbua.jpg",
  category: "Achievements",
  description: "Successfully completed Infosys AI Primer certification covering AI fundamentals, machine learning concepts, and enterprise AI applications. Demonstrated understanding of AI lifecycle and real-world use cases."
},
{
  title: "Microsoft Applied Skills – NLP Solution with Azure AI Language",
  issuer: "Microsoft",
  date: "June 2025",
  image: "https://res.cloudinary.com/dsaytr1qm/image/upload/v1766071977/sp_ach_04_kgpybf.jpg",
  category: "Achievements",
  description: "Earned Microsoft Applied Skills credential by building a natural language processing solution using Azure AI Language services. Demonstrated applied proficiency in text analysis and NLP workflows."
},
{
  title: "Microsoft Applied Skills – Intelligent Document Processing",
  issuer: "Microsoft",
  date: "June 2025",
  image: "https://res.cloudinary.com/dsaytr1qm/image/upload/v1766071978/sp_ach_5_gxqu59.jpg",
  category: "Achievements",
  description: "Achieved Microsoft Applied Skills certification for developing an intelligent document processing solution. Applied Azure AI Document Intelligence to extract and structure data from documents."
},
{
  title: "Principles of Generative AI Certification",
  issuer: "Infosys Springboard",
  date: "June 2025",
  image: "https://res.cloudinary.com/dsaytr1qm/image/upload/v1766071981/sp_ach_6_xu5k5p.jpg",
  category: "Achievements",
  description: "Completed Infosys certification validating core principles of generative AI, including model behavior, responsible AI practices, and enterprise adoption. Demonstrated conceptual readiness for GenAI-driven solutions."
},
{
  title: "Community Appreciation Award",
  issuer: "DevTown (Startup India, MSME)",
  date: "March 2024",
  image: "https://res.cloudinary.com/dsaytr1qm/image/upload/v1766071983/sp_ach_7_s06xmu.jpg",
  category: "Achievements",
  description: "Recognized for consistent contribution and support to the developer community. Awarded for active engagement in knowledge sharing, mentorship, and community-driven technical initiatives."
},
{
  title: "Oracle Cloud Infrastructure 2025 – Generative AI Professional",
  issuer: "Oracle University",
  date: "September 2025",
  image: "https://res.cloudinary.com/dsaytr1qm/image/upload/v1766071984/sp_ach_8_w2ysmn.jpg",
  category: "Achievements",
  description: "Earned Oracle Professional certification demonstrating advanced expertise in generative AI services on OCI. Validated skills in designing, deploying, and managing GenAI solutions at cloud scale."
},
{
  title: "Oracle Cloud Infrastructure 2025 – AI Foundations Associate",
  issuer: "Oracle University",
  date: "July 2025",
  image: "https://res.cloudinary.com/dsaytr1qm/image/upload/v1766071987/sp_ach_9_alfy6w.jpg",
  category: "Achievements",
  description: "Achieved foundational certification covering AI concepts, machine learning basics, and Oracle Cloud AI services. Established strong fundamentals for cloud-based AI solution development."
},
{
  title: "Foundational C# with Microsoft Developer Certification",
  issuer: "freeCodeCamp & Microsoft",
  date: "June 2024",
  image: "https://res.cloudinary.com/dsaytr1qm/image/upload/v1766071988/sp_ach_10_bqgjyv.jpg",
  category: "Achievements",
  description: "Completed Microsoft-backed developer certification validating core C# programming skills, object-oriented concepts, and practical software development aligned with industry standards."
},


];


const educations = [
  {
    title: "B.Tech in Computer Science",
    institution: "SRMIST, Delhi NCR",
    date: "2023 - 2027",
    icon: "🎓",
    points: ["CGPA: 9.95"],
  },
  {
    title: "Class 12 - Science Stream",
    institution: "Air Force School, Hindan",
    date: "2022 - 2023",
    icon: "🧪",
    points: ["Percentage: 91.2%"],
  },
  {
    title: "Class 10",
    institution: "Air Force School, Hindan",
    date: "2020 - 2021",
    icon: "📘",
    points: ["Percentage: 96.5%"],
  },
];

const skills = [
  {
    title: "Languages & Databases",
    items: ["Python", "Java", "JavaScript", "Data Structures & Algorithms", "SQL"],
  },
  {
    title: "Frameworks & Technologies",
    items: ["React.js", "Next.js", "git", "Express.js", "FastAPI", "Tailwind css" ],
  },
  {
    title: "Additional Tools & Libraries",
    items: ["MS Excel","Power BI" , "Pandas", "NumPy", "Seaborn", "MySQL", "MongoDB"],
  },
  {
    title: "Runtime & Deployment",
    items: ["Node.js", "Vercel", "Linux", "Postman", "Docker" ],
  },
];



export { services, technologies, experiences, testimonials, projects, certificates, educations, skills };
