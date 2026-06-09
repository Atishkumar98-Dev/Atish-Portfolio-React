
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
} from "lucide-react";

export function Contact() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl text-white mb-6">
            Get In Touch
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities?
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl text-white mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                    <Mail className="text-red-400" size={24} />
                  </div>

                  <div>
                    <h3 className="text-white mb-1">Email</h3>

                    <a
                      href="mailto:atish98.dev@gmail.com"
                      className="text-slate-300 hover:text-red-400 transition-colors"
                    >
                      atish98.dev@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                    <Phone className="text-red-400" size={24} />
                  </div>

                  <div>
                    <h3 className="text-white mb-1">Phone</h3>

                    <a
                      href="tel:+918652012693"
                      className="text-slate-300 hover:text-red-400 transition-colors"
                    >
                      +91 8652012693
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                    <MapPin className="text-red-400" size={24} />
                  </div>

                  <div>
                    <h3 className="text-white mb-1">Location</h3>

                    <p className="text-slate-300">
                      Panvel, Navi Mumbai
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-8">
              <h2 className="text-2xl text-white mb-6">
                Let's Connect
              </h2>

              <p className="text-slate-300 mb-8">
                Feel free to connect with me through any of these platforms.
              </p>

              <div className="space-y-5">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/atishkumar98"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-red-500/50 transition-all group"
                >
                  <div className="p-3 bg-red-500/10 rounded-lg">
                    <Linkedin className="text-red-400" size={24} />
                  </div>

                  <div>
                    <h3 className="text-white group-hover:text-red-400 transition-colors">
                      LinkedIn
                    </h3>

                    <p className="text-slate-400">
                      linkedin.com/in/atishkumar98
                    </p>
                  </div>
                </a>

                {/* GitHub */}

                {/* Email */}
                <a
                  href="mailto:atish98.dev@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-red-500/50 transition-all group"
                >
                  <div className="p-3 bg-red-500/10 rounded-lg">
                    <Mail className="text-red-400" size={24} />
                  </div>

                  <div>
                    <h3 className="text-white group-hover:text-red-400 transition-colors">
                      Email
                    </h3>

                    <p className="text-slate-400">
                      atish98.dev@gmail.com
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
