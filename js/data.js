/*
  ==========================================================================
  SITE CONTENT. Edit this file whenever something changes.
  Nothing else in the project needs to change for text, link, project,
  publication, certification or photo updates.

  To change the photo:
    1. Drop the new image in /assets (any name).
    2. Update PROFILE.photo below to that file name.

  After editing, just commit and push. GitHub Pages rebuilds automatically.
  ==========================================================================
*/

const PROFILE = {
  name: "Md Shamsul Rayhan Chy",
  shortName: "Shaamray",
  tagline: "Cyber security minded IT professional and ML researcher, based in Sydney.",
  photo: "assets/profile1.jpg",
  photoAlt: "Md Shamsul Rayhan Chy at his Master of Information Technology graduation",
  location: "Sydney, Australia",
  email: "shaamsulrayhan@gmail.com",
  linkedin: "https://www.linkedin.com/in/md-shamsul-rayhan-chy-980a841b0",
  github: "https://github.com/shaaamray",
  bio: [
    "I work across IT operations and applied machine learning, with a focus on cyber security. My research looks at how detection systems behave when the data is messy or adversarial, and my engineering work is about building tools that hold up under real conditions, not just demos.",
    "I am completing a Master of Information Technology in Cyber Security at Macquarie University and I hold a Bachelor of Computer Science and Engineering from BRAC University. Outside coursework, I build security focused tools end to end, from the code to the CI pipeline to the documentation."
  ]
};

const EXPERIENCE = [
  {
    role: "Sales Team Member, Electrical",
    org: "Myer, Bondi Junction",
    period: "Current",
    current: true,
    points: [
      "Part time role supporting customers in the Electrical department while completing postgraduate study.",
      "Day to day work in product knowledge, customer service and point of sale operations."
    ]
  },
  {
    role: "IT Analyst Intern",
    org: "Truuth",
    period: "6 months",
    current: false,
    points: [
      "Primary IT contact for a 30 person startup.",
      "Supported ServiceNow, JIRA, Microsoft 365, Entra ID, Intune and Exchange Online.",
      "Wrote Python automation to reduce repetitive IT support work."
    ]
  }
];

const EDUCATION = [
  {
    program: "Master of Information Technology (Cyber Security)",
    org: "Macquarie University",
    period: "In progress",
    note: "Also completing the Professional Year program alongside this degree."
  },
  {
    program: "Bachelor of Computer Science and Engineering",
    org: "BRAC University",
    period: "Completed",
    note: null
  }
];

const CERTIFICATIONS = [
  {
    name: "CompTIA Security+",
    status: "Earned",
    detail: "Credential ID b23ebf86afac4060818c451df5269c2c",
    validity: "Valid March 2026 to March 2029"
  },
  {
    name: "Microsoft Certified: Azure Administrator Associate (AZ 104)",
    status: "In progress",
    detail: null,
    validity: null
  }
];

/*
  Featured projects: the ones you most want a visitor to see first.
  "repo" can be left as an empty string for a project that is not public
  (it will show a "Private repository" label instead of a GitHub link).
*/
const FEATURED_PROJECTS = [
  {
    name: "NineGuard",
    description: "A security focused availability guardian with SLO alerting, a remediation engine and a tamper evident audit log.",
    stack: ["Python"],
    repo: "https://github.com/shaaamray/Nineguard"
  },
  {
    name: "AssureOps",
    description: "A cyber assurance toolkit covering third party risk assessment, access recertification, remediation SLA governance, and ISO 27001 / NIST CSF control mapping.",
    stack: ["Python"],
    repo: "https://github.com/shaaamray/AssureOps"
  },
  {
    name: "DeskOps",
    description: "A guarded Microsoft Graph automation toolkit for handling common service desk tickets safely.",
    stack: ["Python", "Microsoft Graph"],
    repo: "https://github.com/shaaamray/Deskops"
  },
  {
    name: "AccessForge",
    description: "A just in time privileged access request and provisioning platform, built to support a full stack developer application.",
    stack: [".NET 8", "Next.js 14"],
    repo: ""
  },
  {
    name: "Vulnerability Scanner",
    description: "A lightweight scanner that checks websites for secure HTTP configuration, open ports and SSL setup.",
    stack: ["Python"],
    repo: "https://github.com/shaaamray/Vulnerability-Scanner"
  },
  {
    name: "Azure Sentinel SOC Log Ingestion",
    description: "A log ingestion pipeline built for Microsoft Sentinel, supporting SOC monitoring and alerting.",
    stack: ["Shell", "Azure Sentinel"],
    repo: "https://github.com/shaaamray/Azure-sentinel-soc-log-ingestion"
  }
];

/*
  Everything else on GitHub: coursework, practice and earlier builds.
  Kept as a compact list so the page stays easy to scan. Add new rows
  here as you push new repositories.
*/
const MORE_PROJECTS = [
  { name: "Cyber AI Project", tag: "AI for malware traffic detection", lang: "Python", repo: "https://github.com/shaaamray/Cyber-AI-Project" },
  { name: "GadgetHunt REPLIQ", tag: "Django device tracking app", lang: "Python", repo: "https://github.com/shaaamray/GadgetHunt_REPLIQ" },
  { name: "Authentication System", tag: "MERN stack JWT authentication", lang: "JavaScript", repo: "https://github.com/shaaamray/Authentication-System" },
  { name: "CSE470 Vehicle Review System", tag: "Coursework project", lang: "JavaScript", repo: "https://github.com/shaaamray/CSE470_Vehicle-Review-System" },
  { name: "TextRefine", tag: "Text tool built with React", lang: "JavaScript", repo: "https://github.com/shaaamray/TextRefine" },
  { name: "Hospital Management", tag: "Personal project", lang: "Python", repo: "https://github.com/shaaamray/Hospital-management" },
  { name: "Calculator App", tag: "Practice project", lang: "React", repo: "https://github.com/shaaamray/Calculator-app-React" },
  { name: "Smartwatch Heartbeat and Temperature Monitor", tag: "Arduino and LCD1602", lang: "C++", repo: "https://github.com/shaaamray/Smartwatch-to-detect-Heartbeat-and-Temperature-using-Arduino-and-LCD1602" },
  { name: "Data Structures", tag: "Practice repository", lang: "Python", repo: "https://github.com/shaaamray/Data-Structures" },
  { name: "Algorithms", tag: "Practice repository", lang: "Python", repo: "https://github.com/shaaamray/Algorithms" },
  { name: "Algorithms, CSE221", tag: "Coursework repository", lang: "Python", repo: "https://github.com/shaaamray/Algorithms_Cse221" },
  { name: "Compiler Design, CSE420", tag: "Coursework repository", lang: "Python", repo: "https://github.com/shaaamray/Compiler_Design_Cse420" },
  { name: "Operating Systems, CSE321", tag: "Coursework repository", lang: "C", repo: "https://github.com/shaaamray/Operating_System-OS-_Cse321" },
  { name: "Computer Graphics, CSE423", tag: "Coursework repository", lang: "Python", repo: "https://github.com/shaaamray/Computer-Graphics_Cse423" },
  { name: "Object Oriented Programming", tag: "Coursework repository", lang: "Python", repo: "https://github.com/shaaamray/Object-Oriented-Programming-OOP-" },
  { name: "CS188 Project", tag: "Coursework repository", lang: "Python", repo: "https://github.com/shaaamray/CS188_Project" },
  { name: "CSE431", tag: "Coursework repository", lang: "Other", repo: "https://github.com/shaaamray/CSE431" },
  { name: "CSE424", tag: "Coursework repository", lang: "Other", repo: "https://github.com/shaaamray/CSE424" },
  { name: "LeetCode Solves", tag: "Practice repository", lang: "Python", repo: "https://github.com/shaaamray/leetCode_solves" },
  { name: "HackerRank Solves", tag: "Practice repository", lang: "Python", repo: "https://github.com/shaaamray/HackerRank-solves" }
];

/*
  Publications. The two entries below are confirmed first author papers.
  Google Scholar blocks automated reading, so the full list (including
  any papers written jointly with other authors that are not listed here)
  is best kept current by copying new entries from your Scholar profile
  straight into this array.
*/
const PUBLICATIONS = [
  {
    title: "Classifying Corn Leaf Diseases using Ensemble Learning with Dropout and Stochastic Depth Based Convolutional Networks",
    venue: "International Conference on Machine Learning Technologies (ICMLT), 2023",
    role: "First author",
    link: "https://dl.acm.org/doi/abs/10.1145/3589883.3589911"
  },
  {
    title: "Sarcasm Detection in News Headlines Using Evidential Deep Learning Based LSTM and GRU",
    venue: "Asian Conference on Pattern Recognition (ACPR), 2023",
    role: "First author",
    link: "https://link.springer.com/chapter/10.1007/978-3-031-47634-1_15"
  },
  {
    title: "Interpretable Disease Classification in Plant Leaves using Deep Convolutional Neural Networks",
    venue: "25th International Conference on Computer and Information Technology (ICCIT), 2022",
    role: "Third author",
    link: "https://ieeexplore.ieee.org/abstract/document/10055126"
  }
];

const CURRENT_RESEARCH = {
  status: "Submission ready, targeting AISC 2027",
  description: "A paper on open set detection of encrypted DNS tunnelling using evidential deep learning, covering leave one tool out experiments across 13 methods and a distance aware evidential head developed for the task. The results are reported honestly, including the cases where simpler baselines outperform the proposed method."
};

const SCHOLAR_URL = "https://scholar.google.com/citations?user=J1qRlRYAAAAJ&hl=en";
