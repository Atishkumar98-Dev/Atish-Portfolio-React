import { motion } from "motion/react";
import { ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    title: "Student Management System (SMS)",
    company: "Tata Institute of Social Sciences",
    description:
      "Engineered comprehensive backend features using Django ORM and PostgreSQL for fee automation, result processing, grade card PDF generation, and academic scheduling. Built modules for bulk caution fee upload, admission cancellation, and student ID card generation with photo and signature.",
    technologies: ["Django", "PostgreSQL", "Django REST Framework", "CBCS Grading"],
    highlights: [
      "Integrated CBCS grading system with marks module for streamlined evaluation",
      "Built ABC module for National Academic Depository (NAD) portal compliance",
      "Implemented room scheduling system for faculty and students",
      "Configured CRON jobs for reliable SBIePay payment status updates",
      "Optimized No Dues processing and consolidated reporting",
    ],
  },
  {
    title: "Multiple Site Development",
    company: "Tata Institute of Social Sciences",
    description:
      "Developed and maintained multiple institutional websites (cecsr, prayas, tissglobal, viksit-bharat, visitors-reflection) with Google Workspace-based authentication and role-based CMS dashboards. Built interactive features including visitor reflection system with text and drawing support.",
    technologies: ["Django", "Google Auth", "CMS", "RBAC"],
    highlights: [
      "TISS domain login with role-based redirection to dashboards",
      "Visitor reflection system with text input and scribble support",
      "Centralized content management through custom admin modules",
      "Multiple production websites: cecsr.tiss.ac.in, prayas.tiss.ac.in, tissglobal.tiss.ac.in",
    ],
  },
  {
    title: "Donation & Invoice Portal",
    company: "Tata Institute of Social Sciences",
    description:
      "Built secure backend system for public donations using Django with automated invoice generation, audit logging, and staff management dashboards. Integrated SBIePay payment gateway, reducing manual effort and improving financial tracking accuracy by 40%.",
    technologies: ["Django", "SBIepay", "PostgreSQL", "PDF Generation"],
    highlights: [
      "Secure online payment processing with SBIePay integration",
      "Automated invoice generation and transaction tracking logic",
      "Audit logging and staff management dashboard",
      "Reduced manual intervention through backend automation",
    ],
  },
  {
    title: "Admission Portal",
    company: "Tata Institute of Social Sciences",
    description:
      "Developed backend for full-cycle student admissions using Django REST Framework (DRF). Enabled real-time synchronization of applicant data with central SMS database and designed scalable APIs for application processing, validation, and status tracking.",
    technologies: ["Django", "Django REST Framework", "PostgreSQL", "Real-time sync"],
    highlights: [
      "Full admission workflow from application to enrollment",
      "Real-time data synchronization with SMS database",
      "Scalable APIs for application processing and validation",
      "Comprehensive applicant status tracking system",
    ],
  },
  {
    title: "Banking / Fintech Web Application",
    company: "Nettech Solutions Pvt. LTD.",
    description:
      "Developed a secure banking-style web application using Django and PostgreSQL with authentication, role-based access control, and session management. Built modules for account management, transaction tracking, and balance handling with RESTful APIs.",
    technologies: ["Django", "PostgreSQL", "Docker", "REST APIs"],
    highlights: [
      "Role-based access control and session management",
      "Account management, transaction tracking, and balance handling modules",
      "RESTful APIs for frontend and mobile integration",
      "Security best practices: CSRF protection, password hashing, input validation",
      "Containerized using Docker for scalable deployment",
    ],
  },
  {
    title: "UMAC & CKYC Verification Portals",
    company: "Nettech Solutions Pvt. LTD.",
    description:
      "Developed multi-step dynamic forms for customer verification workflows with integration to CERSAI portal for automated data synchronization. Improved compliance processes and reduced manual workload through workflow automation.",
    technologies: ["Django", "CERSAI API", "Multi-step Forms", "KYC"],
    highlights: [
      "Multi-step dynamic customer verification forms",
      "Automated CERSAI portal data synchronization",
      "Compliance process automation",
      "Workflow optimization reducing manual workload",
    ],
  },
];

const personalProjects = [
  {
    title: "Hangman Game Project",
    description:
      "Full-stack Hangman game built with React frontend, Django backend, and containerized with Docker for easy deployment.",
    technologies: ["React", "Django", "Docker"],
    githubUrl: "https://github.com/Atishkumar98-Dev/Audacix-Hangman-Excercise",
  },
  {
    title: "BREAKROOM POS",
    description:
      "Point of Sale system built with Django for restaurant and retail management, featuring inventory tracking and order processing.",
    technologies: ["Django", "PostgreSQL", "POS System"],
    githubUrl: "https://github.com/Atishkumar98-Dev/Breakroom",
  },
  {
    title: "Smart PDF AI Training",
    description:
      "AI-powered PDF document processing and training system for intelligent document analysis and information extraction.",
    technologies: ["Python", "AI/ML", "PDF Processing"],
    githubUrl: "https://github.com/Atishkumar98-Dev/SMART_PDF_AI/blob/master/app.py",
  },
  {
    title: "Food Ecommerce",
    description:
      "Full-stack food delivery platform with Django backend, React Native mobile app, REST APIs, and deployed on AWS with Docker and Nginx.",
    technologies: ["Django", "React Native", "Docker", "AWS", "Nginx"],
    githubUrl: "https://github.com/Atishkumar98-Dev/Foodly",
  },
  {
    title: "Portfolio",
    description:
      "Modern portfolio website built with Figma Make, React, and Vite JS, deployed on Vercel with smooth animations and responsive design.",
    technologies: ["React", "Vite", "Figma Make", "Vercel"],
    githubUrl: "https://react-portfolio-rho-puce.vercel.app/",
  },
];

export function Projects() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl text-white mb-6">
            Projects
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            A showcase of my work across academic institutions, financial
            platforms, and business applications.
          </p>
        </motion.div>

        {/* Professional Projects */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl text-white mb-8">
            Professional Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 hover:border-red-500/50 transition-all group"
              >
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl text-white group-hover:text-red-400 transition-colors">
                      {project.title}
                    </h3>
                    <Code2 className="text-red-500 flex-shrink-0 ml-2" size={20} />
                  </div>
                  <p className="text-sm text-red-400">{project.company}</p>
                </div>

                {/* Description */}
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm text-slate-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-slate-300 flex items-start gap-2">
                        <span className="text-red-500 mt-0.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-red-500/10 text-red-400 text-xs rounded-full border border-red-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <h2 className="text-2xl md:text-3xl text-white mb-8">
            Personal & Open Source Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 hover:border-red-500/50 transition-all group"
              >
                <div className="mb-4">
                  <h3 className="text-lg text-white group-hover:text-red-400 transition-colors mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-red-500/10 text-red-400 text-xs rounded-full border border-red-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-red-400 hover:text-red-300 transition-colors group/link"
                >
                  <ExternalLink size={16} />
                  <span className="group-hover/link:underline">View Project</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}