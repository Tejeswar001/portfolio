"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { AnimatedBackground } from "@/components/animated-background";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "tejeswarnaidu9@gmail.com",
    href: "mailto:tejeswarnaidu9@gmail.com",
  },
  /*{
    icon: Phone,
    label: "Phone",
    value: "+91 888 527 1525",
    href: "tel:+91 888 527 1525",
  },*/
  {
    icon: MapPin,
    label: "Location",
    value: "Andhra Pradesh, India",
    href: "https://maps.google.com",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Tejeswar001",
    color: "hover:text-gray-900 dark:hover:text-white",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "www.linkedin.com/in/tejeswar-",
    color: "hover:text-blue-600",
  },
  /*{
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com",
    color: "hover:text-blue-400",
  },*/
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);

    // Show success message (you would implement this with a toast or notification)
    alert("Message sent successfully!");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />

      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind or want to discuss data science
              opportunities? I'd love to hear from you and explore how we can
              work together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-orbitron font-bold mb-6 text-gray-900 dark:text-white">
                    Send Me a Message
                  </h2>

                  <form
                    onSubmit={handleSubmit}
                    action="https://formspree.io/f/xqakkevb"
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border-2 focus:border-blue-500 transition-colors"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border-2 focus:border-blue-500 transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 focus:border-blue-500 transition-colors"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 focus:border-blue-500 transition-colors resize-none"
                        placeholder="Tell me about your project or inquiry..."
                      />
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Sending...
                          </div>
                        ) : (
                          <>
                            <Send className="mr-2 w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info & Social */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact Information */}
              <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-orbitron font-bold mb-6 text-gray-900 dark:text-white">
                    Contact Information
                  </h2>

                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.a
                        key={info.label}
                        href={info.href}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        whileHover={{ x: 10 }}
                        className="flex items-center p-4 bg-white/30 dark:bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-white/50 dark:hover:bg-slate-800/50 transition-all duration-300 group"
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {info.label}
                          </p>
                          <p className="font-medium text-gray-900 dark:text-white">
                            {info.value}
                          </p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-orbitron font-bold mb-6 text-gray-900 dark:text-white">
                    Connect With Me
                  </h2>

                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.2, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-4 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 dark:text-gray-300 ${social.color}`}
                        aria-label={social.label}
                      >
                        <social.icon className="w-6 h-6" />
                      </motion.a>
                    ))}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mt-6 leading-relaxed">
                    Follow me on social media for updates on my latest projects,
                    data science insights, and industry trends. I regularly
                    share tutorials, tips, and behind-the-scenes content from my
                    work.
                  </p>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-0 shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-xl font-orbitron font-bold mb-2 text-gray-900 dark:text-white">
                    Available for Projects
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    I'm currently open to new opportunities and collaborations.
                    Let's discuss how we can work together!
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
