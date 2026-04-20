import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data
    alert("Thank you for your message! This is a demo portfolio.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            Have a project in mind or want to discuss opportunities? Feel free
            to reach out!
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

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                    <MapPin className="text-red-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white mb-1">Location</h3>
                    <p className="text-slate-300">Panvel, Navi Mumbai</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-white mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/atish98"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-red-500/50 hover:bg-slate-800 transition-all"
                >
                  <Github className="text-slate-300" size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/atish-kumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-red-500/50 hover:bg-slate-800 transition-all"
                >
                  <Linkedin className="text-slate-300" size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-8"
            >
              <h2 className="text-2xl text-white mb-6">
                Send Me a Message
              </h2>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-red-500/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-red-500/50 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-slate-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-red-500/50 transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <Send
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}