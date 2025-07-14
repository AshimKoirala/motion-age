export interface JobOpening {
  id: string
  title: string
  department: string
  location: string
  type: string
  salary: string
  posted: string
  description: string
  requirements: string[]
  responsibilities?: string[]
  benefits?: string[]
}

export const jobOpenings: JobOpening[] = [
  // {
  //   id: "senior-web-developer",
  //   title: "Senior Web Developer",
  //   department: "Development",
  //   location: "On-site",
  //   type: "Full-time",
  //   salary: "90,000 - 120,000",
  //   posted: "2 weeks ago",
  //   description:
  //     "We're looking for an experienced web developer to join our team and help build innovative web solutions for our clients. You'll be responsible for developing and maintaining high-quality websites and web applications using modern technologies and best practices.",
  //   requirements: [
  //     "5+ years of experience in web development",
  //     "Proficient in React, Next.js, and TypeScript",
  //     "Experience with backend technologies like Node.js",
  //     "Strong problem-solving skills and attention to detail",
  //     "Excellent communication and teamwork abilities",
  //   ],
  //   responsibilities: [
  //     "Develop and maintain responsive websites and web applications",
  //     "Collaborate with designers, project managers, and other developers",
  //     "Write clean, maintainable, and efficient code",
  //     "Troubleshoot and debug issues as they arise",
  //     "Stay up-to-date with emerging trends and technologies",
  //     "Mentor junior developers and participate in code reviews",
  //   ],
  //   benefits: [
  //     "Competitive salary and performance bonuses",
  //     "Health, dental, and vision insurance",
  //     "401(k) matching program",
  //     "Flexible work arrangements",
  //     "Professional development budget",
  //     "Paid time off and company holidays",
  //   ],
  // },
  // {
  //   id: "ui-ux-designer",
  //   title: "UI/UX Designer",
  //   department: "Design",
  //   location: "On-site",
  //   type: "Full-time",
  //   salary: "10,000-15,000",
  //   posted: "1 week ago",
  //   description:
  //     "Join our design team to create beautiful, intuitive user interfaces and experiences for web and mobile applications. You'll work closely with clients and developers to translate business requirements into engaging digital experiences.",
  //   requirements: [
  //     "0-1 years of experience in UI/UX design",
  //     "Proficiency in Figma, Adobe XD, or similar tools",
  //     "Strong portfolio demonstrating user-centered design approach",
  //     "Understanding of design systems and component libraries",
  //     "Experience collaborating with developers to implement designs",
  //   ],
  //   responsibilities: [
  //     "Create wireframes, prototypes, and high-fidelity mockups",
  //     "Conduct user research and usability testing",
  //     "Develop and maintain design systems and style guides",
  //     "Collaborate with cross-functional teams throughout the design process",
  //     "Present and explain design decisions to stakeholders",
  //     "Stay current with UX trends, tools, and best practices",
  //   ],
  //       benefits: [
  //     "Competitive salary and performance bonuses",
  //     "Flexible work arrangements",
  //     "Paid time off and company holidays",
  //   ],
  // },
  // {
  //   id: "digital-marketing-specialist",
  //   title: "Digital Marketing Specialist",
  //   department: "Marketing",
  //   location: "Hybrid",
  //   type: "Full-time",
  //   salary: "10,000 - 15,000",
  //   posted: "3 days ago",
  //   description:
  //     "Help our clients grow their online presence through strategic digital marketing campaigns and analytics. You'll be responsible for planning, executing, and optimizing marketing initiatives across various digital channels.",
  //   requirements: [
  //     "3+ years of experience in digital marketing",
  //     "Experience with SEO, SEM, and social media marketing",
  //     "Proficiency in marketing analytics tools",
  //     "Strong copywriting and content creation skills",
  //     "Ability to manage multiple projects and meet deadlines",
  //   ],
  //   responsibilities: [
  //     "Develop and implement comprehensive digital marketing strategies",
  //     "Manage and optimize paid advertising campaigns (Google Ads, social media ads)",
  //     "Create and distribute engaging content across digital channels",
  //     "Monitor and analyze campaign performance and ROI",
  //     "Prepare regular reports and presentations for clients",
  //     "Stay up-to-date with digital marketing trends and best practices",
  //   ],
  //   benefits: [
  //     "Competitive salary and performance bonuses",
  //     "Flexible work arrangements",
  //     "Paid time off and company holidays",
  //   ],
  // },
  // {
  //   id: "content-writer",
  //   title: "Content Writer",
  //   department: "Content",
  //   location: "Remote",
  //   type: "Part-time",
  //   salary: "50,000 - 65,000",
  //   posted: "5 days ago",
  //   description:
  //     "Create engaging, SEO-friendly content for our clients across various industries and platforms. You'll be responsible for writing blog posts, website copy, social media content, and more.",
  //   requirements: [
  //     "2+ years of experience in content writing",
  //     "Strong understanding of SEO principles",
  //     "Excellent research and writing skills",
  //     "Ability to adapt tone and style for different audiences",
  //     "Experience with content management systems",
  //   ],
  //   responsibilities: [
  //     "Create high-quality, engaging content for various platforms",
  //     "Conduct research to ensure content accuracy and relevance",
  //     "Optimize content for search engines and user engagement",
  //     "Edit and proofread content for grammar, spelling, and clarity",
  //     "Collaborate with designers and marketers on content strategy",
  //     "Meet deadlines and content calendar requirements",
  //   ],
  //   benefits: [
  //     "Competitive salary and performance bonuses",
  //     "Flexible work arrangements",
  //     "Paid time off and company holidays",
  //   ],
  // },
  // {
  //   id: "project-manager",
  //   title: "Project Manager",
  //   department: "Operations",
  //   location: "San Francisco, CA (Hybrid)",
  //   type: "Full-time",
  //   salary: "$85,000 - $110,000",
  //   posted: "1 month ago",
  //   description:
  //     "Lead project teams to deliver high-quality digital solutions on time and within budget for our clients. You'll be responsible for planning, executing, and closing projects while ensuring client satisfaction and team productivity.",
  //   requirements: [
  //     "4+ years of experience in project management",
  //     "PMP certification preferred",
  //     "Experience managing digital projects (web, app, marketing)",
  //     "Strong leadership and communication skills",
  //     "Proficiency in project management tools and methodologies",
  //   ],
  //   responsibilities: [
  //     "Develop project plans, timelines, and budgets",
  //     "Coordinate cross-functional teams to execute project deliverables",
  //     "Manage client expectations and maintain regular communication",
  //     "Identify and mitigate project risks and issues",
  //     "Track project progress and ensure quality standards are met",
  //     "Conduct post-project evaluations and document lessons learned",
  //   ],
  //   benefits: [
  //     "Competitive salary and performance bonuses",
  //     "Flexible work arrangements",
  //     "Paid time off and company holidays",
  //   ],
  // },
  // {
  //   id: "video-editor",
  //   title: "Video Editor",
  //   department: "Production",
  //   location: "Remote",
  //   type: "Full-time",
  //   salary: "30,000 - 45,000",
  //   posted: "2 weeks ago",
  //   description:
  //     "Create compelling video content for our clients' marketing campaigns, social media, and websites. You'll be responsible for editing footage, adding effects, and ensuring high-quality final products.",
  //   requirements: [
  //     "2+ years of experience in video editing",
  //     "Proficiency in Adobe Premiere Pro and After Effects",
  //     "Strong portfolio demonstrating video editing skills",
  //     "Understanding of storytelling and pacing",
  //     "Experience with motion graphics and animation a plus",
  //   ],
  //   responsibilities: [
  //     "Edit raw footage into polished, engaging videos",
  //     "Add visual effects, transitions, and sound design",
  //     "Collaborate with creative teams on video concepts and storyboards",
  //     "Ensure videos meet brand guidelines and client requirements",
  //     "Optimize videos for different platforms and formats",
  //     "Stay current with video editing trends and techniques",
  //   ],
  //   benefits: [
  //     "Competitive salary and performance bonuses",
  //     "Flexible work arrangements",
  //     "Paid time off and company holidays",
  //   ],
  // },
]
