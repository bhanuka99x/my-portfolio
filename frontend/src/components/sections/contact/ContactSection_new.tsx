"use client";
import emailjs from "@emailjs/browser";
import React, { useState,useRef } from "react";
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");


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
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram",
      url: "https://instagram.com/bhanuka99x",
      color: "hover:text-pink-400",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    
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
          setSubmitError("Failed to send message. Please try again or contact me directly.");
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };



  return (
    <section
      id="contact"
      className="relative min-h-screen text-white py-20 font-bilmond overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-amber-400 to-white bg-clip-text text-transparent">
              Get In Touch
            </h2>
          </div>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-NeueHaas leading-relaxed">
            Have a project in mind or just want to chat? Let's create something amazing together!
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/20 via-blue-400/20 to-purple-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              
              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl shadow-lg shadow-amber-400/30">
                    <MessageSquare className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Send a Message
                  </h3>
                </div>

              {isSubmitted && (
                <div className="mb-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-2xl p-5 flex items-center gap-3 shadow-lg shadow-green-500/10">
                  <div className="p-2 bg-green-400/20 rounded-full">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-green-300 font-NeueHaas font-medium">
                    Message sent successfully! I'll get back to you soon. 🎉
                  </span>
                </div>
              )}

              {submitError && (
                <div className="mb-6 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-400/30 rounded-2xl p-5 shadow-lg shadow-red-500/10">
                  <div className="text-red-300 text-sm font-NeueHaas">
                    {submitError}
                  </div>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-semibold mb-2.5 text-gray-300">
                    Your Name
                  </label>
                  <div className="relative group/input">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                      <User className="w-5 h-5 text-gray-400 group-focus-within/input:text-amber-400 transition-colors duration-300" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className={`w-full bg-white/[0.03] border ${errors.name ? 'border-red-400/50 focus:border-red-400' : 'border-white/10 focus:border-amber-400/60'} rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:bg-white/[0.08] focus:shadow-lg focus:shadow-amber-400/10 transition-all duration-300`}
                    />
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400/10 to-transparent opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
                  </div>
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                      <span className="text-xs">⚠</span> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-semibold mb-2.5 text-gray-300">
                    Email Address
                  </label>
                  <div className="relative group/input">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                      <Mail className="w-5 h-5 text-gray-400 group-focus-within/input:text-amber-400 transition-colors duration-300" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className={`w-full bg-white/[0.03] border ${errors.email ? 'border-red-400/50 focus:border-red-400' : 'border-white/10 focus:border-amber-400/60'} rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:bg-white/[0.08] focus:shadow-lg focus:shadow-amber-400/10 transition-all duration-300`}
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400/10 to-transparent opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                      <span className="text-xs">⚠</span> {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-sm font-semibold mb-2.5 text-gray-300">
                    Subject
                  </label>
                  <div className="relative group/input">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                      <FileText className="w-5 h-5 text-gray-400 group-focus-within/input:text-amber-400 transition-colors duration-300" />
                    </div>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Inquiry"
                      className={`w-full bg-white/[0.03] border ${errors.subject ? 'border-red-400/50 focus:border-red-400' : 'border-white/10 focus:border-amber-400/60'} rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:bg-white/[0.08] focus:shadow-lg focus:shadow-amber-400/10 transition-all duration-300`}
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400/10 to-transparent opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                      <span className="text-xs">⚠</span> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-sm font-semibold mb-2.5 text-gray-300 flex justify-between items-center">
                    <span>Your Message</span>
                    <span className={`text-xs font-mono transition-colors duration-300 ${formData.message.length > 450 ? 'text-amber-400' : 'text-gray-500'}`}>
                      {formData.message.length} / 500
                    </span>
                  </label>
                  <div className="relative group/input">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      maxLength={500}
                      rows={6}
                      placeholder="Tell me about your project... What are your goals? What challenges are you facing?"
                      className={`w-full bg-white/[0.03] border ${errors.message ? 'border-red-400/50 focus:border-red-400' : 'border-white/10 focus:border-amber-400/60'} rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:bg-white/[0.08] focus:shadow-lg focus:shadow-amber-400/10 transition-all duration-300 resize-none`}
                    ></textarea>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400/10 to-transparent opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                      <span className="text-xs">⚠</span> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full group/btn overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-2xl blur-sm group-hover/btn:blur-md transition-all duration-300 opacity-70"></div>
                  <div className={`relative w-full bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold px-8 py-4 rounded-2xl shadow-lg shadow-amber-400/30 flex items-center justify-center gap-3 transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-2xl hover:shadow-amber-400/40'}`}>
                    {isSubmitting ? (
                      <>
                        <Loader className="w-5 h-5 animate-spin" />
                        <span>Sending your message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        <span>Send Message</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                      </>
                    )}
                  </div>
                </button>
              </form>
            </div>
          </div>
          </div>

          {/* Right Side - Contact Info */}
          <div className="space-y-6 order-1 lg:order-2">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="group/card relative block overflow-hidden"
                >
                  {/* Hover glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover/card:opacity-100 blur-lg transition-opacity duration-500" style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }}></div>
                  
                  <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 group-hover/card:border-white/30 transition-all duration-300 shadow-xl">
                    <div className="flex items-center gap-5">
                      <div className={`relative p-4 bg-gradient-to-br ${info.color} rounded-xl shadow-lg`}>
                        <div className="text-black relative z-10">{info.icon}</div>
                        <div className={`absolute inset-0 bg-gradient-to-br ${info.color} rounded-xl blur-md opacity-50`}></div>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs uppercase tracking-wider text-gray-400 mb-1.5 font-semibold">
                          {info.title}
                        </div>
                        <div className="text-lg font-bold text-white group-hover/card:text-amber-400 transition-colors duration-300">
                          {info.value}
                        </div>
                      </div>
                      <div className="text-gray-400 group-hover/card:text-amber-400 transition-colors duration-300">
                        →
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="relative group/social">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-blue-400/20 rounded-2xl blur-xl group-hover/social:blur-2xl transition-all duration-500 opacity-0 group-hover/social:opacity-100"></div>
              
              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-8 bg-gradient-to-b from-amber-400 to-purple-400 rounded-full"></div>
                  <h4 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Let's Connect
                  </h4>
                </div>
                <p className="text-gray-400 text-sm mb-6 font-NeueHaas">
                  Follow me on social media for updates and insights
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-purple-400/20 rounded-xl blur-md opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                      <div className={`relative flex flex-col items-center justify-center gap-2 bg-white/[0.05] border border-white/10 rounded-xl p-4 hover:bg-white/[0.1] hover:border-amber-400/40 transition-all duration-300 ${social.color} aspect-square`}>
                        <div className="text-gray-300">
                          {social.icon}
                        </div>
                        <span className="text-xs font-semibold text-gray-400 group-hover/link:text-white transition-colors duration-300">
                          {social.name}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
