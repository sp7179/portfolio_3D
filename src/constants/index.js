import {
  mobile, backend, creator, web, 

  javascript, html, css, reactjs, gemini, tailwind, nodejs, mongodb, git, flask, python, java, nextjs,

  wipro, next24, devtown,

  carrent, jobit, tripguide, career_coach, desktop_assistant, diabetes, document_analysis, financial_analysis,
  leetcode_ext, trading_bot,
  
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
    title: "Full-Stack Web Developer",
    icon: web,
  },
  {
    title: "DSA & Problem-Solving Enthusiast",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI Tools & Automation Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    icon: tailwind,
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
    name: "Flask",
    icon: flask,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "gemini",
    icon: gemini,
  },
  
  {
    name: "Python",
    icon: python,
  }
  
];

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company_name: "Wipro",
    icon: wipro, // Replace with your Wipro icon
    iconBg: "#1f1f1f",
    date: "June 2024 - September 2024",
    certificateImage: "https://res.cloudinary.com/dsaytr1qm/image/upload/0_1719475194791_page-0001_y7mcdh.jpg",
    points: [
      "Built a financial platform managing 5,000+ monthly transactions with OCR-based receipt scanning and recurring payment workflows.",
      "Automated monthly reporting and financial summaries to reduce manual data entry by 85%.",
      "Created interactive dashboards (Chart.js, D3.js) visualizing 100% of user spend for 1,200+ users.",
      "Boosted monthly user engagement by 40% through performance optimizations and UI improvements.",
    ],
  },
  {
    title: "Data Analyst Intern",
    company_name: "Next24Tech",
    icon: next24, // Replace with your Next24Tech icon
    iconBg: "#37474F",
    date: "January 2024 - March 2024",
    certificateImage: "https://res.cloudinary.com/dsaytr1qm/image/upload/SHOURISH_PAUL_Internship_Certificate_Next24tech_ouelxh.jpg",
    points: [
      "Processed and analyzed 50,000+ data entries using Pandas and NumPy to uncover actionable insights.",
      "Improved reporting accuracy by 22% through anomaly detection and data validation techniques.",
      "Designed 10+ predictive dashboards using Matplotlib and Seaborn for real-time business decision-making.",
      "Achieved 85% confidence accuracy in forecasting models for trend prediction and analysis.",
    ],
  },
  {
    title: "Campus Ambassador",
    company_name: "DevTown",
    icon: devtown, // Replace with your DevTown icon
    iconBg: "#263238",
    date: "September 2023 - December 2023",
    certificateImage: "https://res.cloudinary.com/dsaytr1qm/image/upload/Z21SnCR_2__page-0001_vdsaxv.jpg",
    points: [
      "Engaged and onboarded 500+ students from 10 colleges, increasing the active user base by 45%.",
      "Promoted 12+ technical workshops, leading to a 60% boost in participation and 1,000+ new leads.",
      "Strategized marketing campaigns that improved social media engagement by 38%.",
      "Acted as a liaison between DevTown and campus communities to drive brand visibility.",
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
    name: "AI Desktop Assistant",
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
    name: "Crypto Trading Bot",
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
    name: "LeetCode Assistant Extension",
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
    name: "AI Finance Tracker",
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
    name: "AI Career Coach",
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
    name: "AI Diagnosis System",
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
];


const certificates = [
  // Participation
  {
    title: "Code4Clause 2.0 Hackathon",
    issuer: "NSUT Delhi Dwarka",
    date: "September 2024",
    image: "https://res.cloudinary.com/dsaytr1qm/image/upload/WhatsApp_Image_2025-07-14_at_20.33.55_7ccd0db2_yzzxhp.jpg",
    category: "Participation",
    description: "Ranked among top 4,000 teams out of 100,000 applicants in the national-level hackathon."
  },
  {
    title: "Flash Code - Innovate 2024",
    issuer: "SRM IST Delhi NCR",
    date: "April 2024",
    image: "https://res.cloudinary.com/dsaytr1qm/image/upload/WhatsApp_Image_2025-07-14_at_20.34.17_841fc522_ewtq4x.jpg",
    category: "Participation",
    description: "Participated in a competitive coding contest during SRM’s national tech fest, Innovate 2024."
  },
  {
    title: "Flipkart GRiD 6.0 Quiz - SDE Track",
    issuer: "Flipkart",
    date: "August 2024",
    image: "https://res.cloudinary.com/dsaytr1qm/image/upload/7847164e-986b-4eda-949e-e39bd90de945_gk2tc3.jpg",
    category: "Participation",
    description: "Completed the E-Commerce & Tech quiz for the Software Development Engineering track under GRiD 6.0."
  },
  {
    title: "Hackathon - Build With India",
    issuer: "SRM IST",
    date: "June 2024",
    image: "https://res.cloudinary.com/dsaytr1qm/image/upload/8f72e929-b593-4234-8a0a-fbcfc5d12e48_x7irre.jpg",
    category: "Participation",
    description: "Engaged in innovation-focused hackathon under the Build With India initiative at SRM IST."
  },
  {
    title: "Ideathon 2.0 - Eximius 2024",
    issuer: "IIM Bangalore",
    date: "September 2024",
    image: "https://res.cloudinary.com/dsaytr1qm/image/upload/d878f39b-58b7-4519-931a-aa9c5f8ada32_woufch.jpg",
    category: "Participation",
    description: "Participated in Eximius 2024, IIM Bangalore’s flagship innovation challenge attracting top talent nationwide."
  },
  {
    title: "Tata Crucible Campus Quiz 2024",
    issuer: "Tata Group",
    date: "July 2024",
    image: "https://res.cloudinary.com/dsaytr1qm/image/upload/b96e7375-b5c4-4381-a3f9-1fa5b84644bb_db4wmm.jpg",
    category: "Participation",
    description: "Took part in India’s premier business quiz organized by Tata Group with pan-India student participation."
  },

  // Courses
  {
    title: "Machine Learning with Python A-Z",
    issuer: "Udemy",
    date: "July 2024",
    image: "https://res.cloudinary.com/dsaytr1qm/image/upload/UC-01a2b333-5f60-4464-8f68-6225a866923c_xheiyq.jpg",
    category: "Courses",
    description: "Completed a comprehensive hands-on ML course covering regression, clustering, SVM, and deployment."
  },
  {
    title: "Build RESTful API with Node.js",
    issuer: "Udemy",
    date: "April 2024",
    image: "https://res.cloudinary.com/dsaytr1qm/image/upload/UC-a873ec88-90b5-4955-b8bd-5d3c881d871a_uq4kg9.jpg",
    category: "Courses",
    description: "Built scalable REST APIs using Node.js and Express, handling routes, middleware, and MongoDB."
  },
  {
    title: "Introduction to OpenAI Models",
    issuer: "Infosys Springboard",
    date: "May 2025",
    image: "https://res.cloudinary.com/dsaytr1qm/image/upload/1-df01955c-c16f-4681-aa00-c1dc626b03c5_page-0001_otdit8.jpg",
    category: "Courses",
    description: "Learned core concepts of OpenAI models including GPT architecture, usage, and safety alignment."
  },
  {
    title: "Generative Models for Developers",
    issuer: "Infosys",
    date: "May 2025",
    image: "https://res.cloudinary.com/dsaytr1qm/image/upload/1-dc4febeb-2359-4362-800a-0ff1c2351231_page-0001_f3xbaf.jpg",
    category: "Courses",
    description: "Explored foundation models and prompt engineering with use cases in content and code generation."
  },
  {
    title: "OpenAI GPT-3 for Developers",
    issuer: "Infosys",
    date: "June 2025",
    image: "https://res.cloudinary.com/dsaytr1qm/image/upload/1-d84c1a2e-7df9-4a3f-8420-12c0bd026899_page-0001_tr3yhn.jpg",
    category: "Courses",
    description: "Practical implementation of GPT-3 APIs for real-world tasks like summarization, Q&A, and chatbot creation."
  },

  // Achievements
  {
    title: "Data Structures and Algorithms Using Java",
    issuer: "NPTEL",
    date: "November 2024",
    image: "https://res.cloudinary.com/dsaytr1qm/image/upload/Data_Structure_and_Algorithms_using_Java_page-0001_krwm6l.jpg",
    category: "Achievements",
    description: "Successfully completed NPTEL course with strong performance in problem-solving and algorithm design."
  },
  {
    title: "Full Stack Web Development - Industrial Training",
    issuer: "Wipro",
    date: "January 2024",
    image: "https://res.cloudinary.com/dsaytr1qm/image/upload/0_1719475298023_page-0001_biyenx.jpg",
    category: "Achievements",
    description: "Received hands-on industrial training in MERN stack and cloud deployment under Wipro's tech mentorship."
  },
  {
    title: "Applied Skills: NLP Processing Solution",
    issuer: "Microsoft",
    date: "June 2025",
    image: "https://res.cloudinary.com/dsaytr1qm/image/upload/Credentials_-_shourishpaul-0944___Microsoft_Learn_page-0001_pfkyyo.jpg",
    category: "Achievements",
    description: "Earned Microsoft Applied Skills badge by building an NLP pipeline using Azure AI Language Studio."
  },
  {
    title: "Applied Skills: Intelligent Document Processing",
    issuer: "Microsoft",
    date: "July 2025",
    image: "https://res.cloudinary.com/dsaytr1qm/image/upload/Credentials_-_shourishpaul-0945___Microsoft_Learn_page-0001_cjylxr.jpg",
    category: "Achievements",
    description: "Completed Microsoft’s applied skills certification to build IDP solution with Azure AI and Form Recognizer."
  },
  {
    title: "Foundational C#",
    issuer: "Microsoft",
    date: "October 2024",
    image: "https://res.cloudinary.com/dsaytr1qm/image/upload/C_microsoft_page-0001_cewrtr.jpg",
    category: "Achievements",
    description: "Built strong programming foundations in C# including OOP, async programming, and .NET Core basics."
  },
  {
    title: "Principles of Generative AI",
    issuer: "Infosys",
    date: "May 2025",
    image: "https://res.cloudinary.com/dsaytr1qm/image/upload/1-400c5265-d208-4836-bc62-4167fae849a6_page-0001_ujlcrz.jpg",
    category: "Achievements",
    description: "Scored 89% in Infosys certification exam on generative AI models, prompt tuning, and ethical use."
  },
  {
    title: "AI Primer Certification",
    issuer: "Infosys",
    date: "June 2025",
    image: "https://res.cloudinary.com/dsaytr1qm/image/upload/1-e626615c-fb5a-436f-b881-1ddc0df845be_page-0001_wt6amd.jpg",
    category: "Achievements",
    description: "Introduced to AI landscape, including ML/DL workflows, AI lifecycle, and enterprise applications."
  }
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
    items: ["Python", "Java", "JavaScript", "Data Structures & Algorithms", "MySQL", "MongoDB"],
  },
  {
    title: "Frameworks & Technologies",
    items: ["React.js", "Next.js", "Node.js", "Express.js", "Flask", "Tailwind css" ],
  },
  {
    title: "Additional Tools & Libraries",
    items: ["MS Excel","Power BI" , "Pandas", "NumPy", "Matplotlib", "Git", "Gemini"],
  },
];



export { services, technologies, experiences, testimonials, projects, certificates, educations, skills };
