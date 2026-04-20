import { motion } from "motion/react";
import {
  Code2,
  Database,
  Layout,
  Server,
  Wrench,
  Sparkles,
} from "lucide-react";

const skillCategories = [
  {
    title: "Backend",
    icon: Server,
    skills: ["Python", "Django", "Django REST Framework", "REST APIs"],
    color: "red",
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Tailwind", "FIGMA"],
    color: "rose",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "Database Optimization", "Query Performance"],
    color: "orange",
  },
  {
    title: "DevOps",
    icon: Wrench,
    skills: ["Docker", "Nginx", "AWS (EC2)", "Gunicorn", "Linux", "Git"],
    color: "amber",
  },
];

const competencies = [
  "Full-Stack Web Development",
  "Cross-Functional Team Collaboration",
  "Performance Optimization",
  "Code Quality Assurance",
  "Problem Solving",
  "Process Improvement",
];

const colorClasses = {
  red: {
    bg: "bg-red-500/10",
    border: "border-red-500/20",
    text: "text-red-400",
    iconBg: "bg-red-500/20",
  },
  rose: {
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    text: "text-rose-400",
    iconBg: "bg-rose-500/20",
  },
  orange: {
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    text: "text-orange-400",
    iconBg: "bg-orange-500/20",
  },
  amber: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    text: "text-amber-400",
    iconBg: "bg-amber-500/20",
  },
};

export function Skills() {
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
            Skills & Expertise
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            A comprehensive set of technical skills and core competencies built
            over 4+ years of professional experience.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const colors = colorClasses[category.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 hover:border-slate-700/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${colors.iconBg}`}>
                    <Icon className={colors.text} size={24} />
                  </div>
                  <h3 className="text-xl text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1.5 ${colors.bg} ${colors.text} text-sm rounded-lg border ${colors.border}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-red-500/20">
              <Sparkles className="text-red-400" size={24} />
            </div>
            <h2 className="text-2xl text-white">Core Competencies</h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {competencies.map((competency, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.05 }}
                className="flex items-center gap-3 p-4 bg-slate-800/30 rounded-lg border border-slate-700/50"
              >
                <div className="w-2 h-2 bg-red-500 rounded-full" />
                <span className="text-slate-300">{competency}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl text-red-400 mb-2">4+</div>
            <div className="text-slate-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl text-rose-400 mb-2">35%</div>
            <div className="text-slate-400">Performance Boost</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl text-orange-400 mb-2">40%</div>
            <div className="text-slate-400">Error Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl text-amber-400 mb-2">25%</div>
            <div className="text-slate-400">Engagement Increase</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}