"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  MessageSquare,
  User,
  FileText,
  CheckCircle,
  Loader,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "hello@bhanuka.dev",
      link: "mailto:hello@bhanuka.dev",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+94 77 123 4567",
      link: "tel:+94771234567",
      color: "from-green-400 to-emerald-400",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Colombo, Sri Lanka",
      link: "#",
      color: "from-purple-400 to-pink-400",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      url: "https://github.com/bhanuka99x",
      color: "hover:text-gray-400",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/bhanuka99x",
      color: "hover:text-blue-400",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      name: "Twitter",
      url: "https://twitter.com/bhanuka99x",
      color: "hover:text-sky-400",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram",
      url: "https://instagram.com/bhanuka99x",
      color: "hover:text-pink-400",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="contact"
      className="min-h-screen text-white py-20 font-bilmond overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Get In <span className="text-amber-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-blue-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-NeueHaas">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-amber-400" />
                Send Me a Message
              </h3>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 bg-green-500/20 border border-green-500/30 rounded-2xl p-4 flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-NeueHaas">
                    Message sent successfully! I'll get back to you soon.
                  </span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    Subject
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Inquiry"
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold px-8 py-4 rounded-2xl hover:shadow-lg hover:shadow-amber-400/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group block bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`bg-gradient-to-br ${info.color} p-4 rounded-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="text-black">{info.icon}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">
                        {info.title}
                      </div>
                      <div className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors duration-300">
                        {info.value}
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            >
              <h4 className="text-xl font-bold mb-4">Connect With Me</h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-amber-400/50 transition-all duration-300 group ${social.color}`}
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                    <span className="font-semibold">{social.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-green-400/10 to-emerald-400/10 backdrop-blur-sm border border-green-400/20 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-green-400 font-bold">
                  Available for Freelance
                </span>
              </div>
              <p className="text-gray-300 text-sm font-NeueHaas">
                I'm currently available for freelance projects and full-time opportunities. 
                Let's build something amazing together!
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-amber-400/10 to-blue-400/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-400 mb-6 font-NeueHaas max-w-2xl mx-auto">
            Whether you need a new website, web application, or want to discuss a custom solution, 
            I'm here to help bring your ideas to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold px-8 py-4 rounded-2xl hover:shadow-lg hover:shadow-amber-400/50 hover:scale-105 transition-all duration-300">
              Schedule a Call
            </button>
            <button className="bg-white/5 backdrop-blur-sm border border-white/20 text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/10 hover:border-amber-400/50 hover:scale-105 transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
