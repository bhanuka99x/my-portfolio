"use client";
import emailjs from "@emailjs/browser";
import React, { useState,useRef } from "react";
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

  const formRef = useRef<HTMLFormElement>(null);

  
  const [backgroundImage] = useState("/images/beautiful-shot-snowy-mountain-sunset.jpg");

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
      value: "bhanuka99xdev@gmail.com",
      link: "mailto:bhanuka99xdev@gmail.com",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+94 75 2960845",
      link: "tel:+94752960845",
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

// Form Submit 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // --- EmailJS Configuration ---
    // EmailJS Dashboard 
    const serviceID = 'service_14ggknr'; 
    const templateID = 'template_b1skc65';
    const publicKey = 'ZHlh_wFapRkTRV-rU';

   
    if (formRef.current) {
      emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
        .then((result) => {
          console.log('Email sent:', result.text);
          setIsSubmitted(true);
          setFormData({ name: '', email: '', subject: '', message: '' }); 
          
          
          setTimeout(() => setIsSubmitted(false), 5000);
        })
        .catch((error) => {
          console.error('Email error:', error.text);
          alert("Failed to send message. Please try again.");
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };



  return (
    <section
      id="contact"
      className="min-h-screen text-white py-20 font-bilmond overflow-hidden relative"
    >
     
     
      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20 p-10 relative z-10 rounded-3xl "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
     
      }}
      
      >
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-6xl font-bold mb-4 p-1 bg-gradient-to-br from-blue-400 via-blue-50 to-blue-50 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-base text-gray-300 mb-4 font-NeueHaas leading-relaxed">
              Have a project in mind? I'm always open to discussing new opportunities, creative ideas, or partnerships. Let's build something amazing together.
            </p>
            <p className="text-sm text-gray-400 mb-4 font-NeueHaas">
              Whether you need a full-stack developer, a consultation, or just want to say hello, feel free to reach out. I typically respond within 24 hours.
            </p>
            
            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-3 mt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`   p-2.5  transition-all duration-300 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            {/* Contact Info Cards */}
            <div className="flex flex-wrap items-center gap-3 mt-3">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center mt-3 p-3 rounded-xl  transition-all duration-300 group"
                >
                 
                  <div>
                    <p className="text-xs text-gray-400">{info.title}</p>
                    <p className="text-sm text-white tracking-wide">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-5 max-w-md ml-auto">
              <h3 className="text-lg  mb-4 flex items-center gap-2">
                Send Me a Message
              </h3>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 bg-green-500/20 border border-green-500/30 rounded-xl p-3 flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-green-400 font-NeueHaas">
                    Message sent successfully!
                  </span>
                </motion.div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input */}
                <div>
                  <label className="block text-sm mb-1.5 text-gray-300">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-xs  mb-1.5 text-gray-300">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs  mb-1.5 text-gray-300">
                    Subject
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Inquiry"
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-xs  mb-1.5 text-gray-300">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={3}
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black font-semibold px-6 py-2.5 rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
