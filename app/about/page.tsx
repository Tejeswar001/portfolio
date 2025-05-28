"use client";

import { motion } from "framer-motion";
import { Download, Award, BookOpen, Code } from "lucide-react";
import { AnimatedBackground } from "@/components/animated-background";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { name: "Python", level: 90 },
  { name: "Machine Learning", level: 85 },
  { name: "SQL", level: 88 },
  { name: "Data Visualization", level: 82 },
  { name: "Statistical Analysis", level: 90 },
  { name: "Flask", level: 85 },
  { name: "Big Data", level: 75 },
  { name: "Java", level: 86 },
];

const tools = [
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "TensorFlow",
  "PyTorch",
  "Matplotlib",
  "Seaborn",
  "Plotly",
  "Tableau",
  "Power BI",
  "Jupyter",
  "Git",
  "Docker",
  "AWS",
];

const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "Lovely Professional University",
    year: "2023-2027",
    description:
      "Specialization in Artificial Intelligence and Data Engineering",
  },
];

const certifications = [
  "DP-900: Microsoft Azure Data Fundamentals",
  "SQL Advanced - HackerRank",
  "Problem Solving (Intermediate) - HackerRank",
  "Java - iamneo",
];

export default function About() {
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
              About Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Passionate about turning complex data into simple, actionable
              insights that drive meaningful decisions
            </p>
          </motion.div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 mb-20"
          >
            <div>
              <h2 className="text-3xl font-orbitron font-bold mb-6 text-gray-900 dark:text-white">
                My Journey
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  As a tech enthusiast with a strong focus on AI and data
                  engineering, I’m passionate about exploring meaningful
                  patterns in data and building intelligent solutions. My
                  journey into data science has been driven by a deep curiosity
                  for how data can solve real-world challenges and create
                  impactful outcomes.
                </p>
                <p>
                  With experience in machine learning, statistical analysis, and
                  data visualization, I specialize in building predictive models
                  and creating compelling visual narratives that make data
                  accessible to stakeholders at all levels.
                </p>
                <p>
                  When I'm not analyzing data, you can find me contributing to
                  open-source projects, participating in Kaggle competitions, or
                  exploring the latest developments in AI and machine learning
                  research.
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8"
              >
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                  <Download className="mr-2 w-5 h-5" />
                  Download Resume
                </Button>
              </motion.div>
            </div>

            <div className="space-y-8">
              {/* Education */}
              <div>
                <h3 className="text-2xl font-orbitron font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                  <BookOpen className="mr-3 w-6 h-6 text-blue-600" />
                  Education
                </h3>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                      <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-0 shadow-lg">
                        <CardContent className="p-6">
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {edu.degree}
                          </h4>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">
                            {edu.school}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {edu.year}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                            {edu.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-2xl font-orbitron font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                  <Award className="mr-3 w-6 h-6 text-blue-600" />
                  Certifications
                </h3>
                <div className="space-y-2">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="flex items-center p-3 bg-white/30 dark:bg-slate-800/30 rounded-lg backdrop-blur-sm"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700 dark:text-gray-300">
                        {cert}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-orbitron font-bold mb-12 text-center text-gray-900 dark:text-white">
              Technical Skills
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-orbitron font-bold mb-8 text-gray-900 dark:text-white flex items-center justify-center">
              <Code className="mr-3 w-8 h-8 text-blue-600" />
              Tools & Technologies
            </h2>

            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 cursor-default"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
