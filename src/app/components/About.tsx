import { motion } from "motion/react";
import { Briefcase, GraduationCap, MapPin, Phone } from "lucide-react";

const experiences = [
  {
    company: "Tata Institute of Social Sciences, Mumbai",
    position: "Software Developer",
    period: "Sep 2023 - Present",
    highlights: [
      "Designed and implemented core backend modules using Django for fee mapping, grade calculation, grade card generation, and room scheduling",
      "Developed scalable REST APIs using Django REST Framework for seamless integration between portals and frontend clients",
      "Integrated SBIepay payment gateway into student fee portal and donation system, ensuring secure transaction processing",
      "Optimized backend logic and database queries, contributing to 35% improvement in page load times and 25% enhanced user experience",
      "Led full-stack architecture and deployment for internal applications including multiple websites with Content Management System",
    ],
  },
  {
    company: "Tata Institute of Social Sciences, Mumbai",
    position: "Jr. Software Developer",
    period: "Aug 2022 - Sep 2023",
    highlights: [
      "Contributed to backend development and maintenance of Django-based web applications by implementing new features and optimizing existing modules",
      "Debugged and fixed critical backend issues in production environments, improving application reliability and load performance",
      "Integrated SBIepay payment gateway into the donation system, ensuring secure and seamless transactions",
      "Developed backend systems for institutional websites with custom admin panel modules and role-based access control",
    ],
  },
  {
    company: "Nettech Solutions Pvt. LTD.",
    position: "Software Engineer",
    period: "Jun 2021 - Aug 2022",
    highlights: [
      "Developed, tested, and deployed web applications using Django, focusing on data integrity and user verification workflows",
      "Built responsive and user-friendly interfaces while optimizing backend performance through efficient Django views and database models",
      "Managed deployment of application releases to client servers for regional banks including Sindhudurg Bank, Thiruvalla Bank, and Hanumanta Bank",
      "Provided CMS training and backend support to client teams, improving system adoption and reducing operational support requests",
    ],
  },
];

const education = [
  {
    institution: "DR. D.Y. PATIL, VIDYAPEETH PUNE",
    degree: "MBA (IT Management)",
    period: "July 2020 - Aug 2022",
    note: "Created banking solutions web applications hosted on Heroku",
  },
  {
    institution: "ST. WILFRED EDUCATION SOCIETY, Shedung, Panvel",
    degree: "Bachelor in Computer Science",
    period: "April 2017 - May 2020",
  },
];

export function About() {
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
            About Me
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Software developer with 4+ years of experience in Django, React, and REST
            APIs, building secure and scalable applications across fintech and business
            domains. Focused on performance optimization, clean architecture, and
            efficient team collaboration.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16 grid sm:grid-cols-2 gap-4"
        >
          <div className="flex items-center gap-3 text-slate-300">
            <MapPin className="text-red-500" size={20} />
            <span>Panvel, Navi Mumbai</span>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <Phone className="text-red-500" size={20} />
            <span>+91 8652012693</span>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-red-500" size={28} />
            <h2 className="text-3xl text-white">Experience</h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 hover:border-slate-700/50 transition-colors"
              >
                <h3 className="text-xl text-white mb-1">
                  {exp.position}
                </h3>
                <p className="text-red-400 mb-2">{exp.company}</p>
                <p className="text-sm text-slate-500 mb-4">{exp.period}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="text-slate-300 flex items-start gap-2"
                    >
                      <span className="text-red-500 mt-1.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-red-500" size={28} />
            <h2 className="text-3xl text-white">Education</h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 hover:border-slate-700/50 transition-colors"
              >
                <h3 className="text-xl text-white mb-1">
                  {edu.degree}
                </h3>
                <p className="text-red-400 mb-2">{edu.institution}</p>
                <p className="text-sm text-slate-500 mb-2">{edu.period}</p>
                {edu.note && (
                  <p className="text-slate-300 text-sm">{edu.note}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}