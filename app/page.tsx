"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Database,
  BarChart3,
  Brain,
} from "lucide-react";
import Link from "next/link";
import { AnimatedBackground } from "@/components/animated-background";
import { TypingAnimation } from "@/components/typing-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const featuredProjects = [
  {
    title: "Role Radar – Domain Expert Finder",
    description:
      "Flask app that identifies professionals with 10+ years of experience using GitHub, Google, and Gemini APIs with custom NLP scoring logic.",
    tech: ["Flask", "GitHub API", "Serper API", "Gemini API", "NLP"],
    link: "/projects/role-radar",
  },
  {
    title: "UrbanFlow – AI-Based Traffic Management",
    description:
      "YOLOv11 model deployed on AWS using serverless architecture to detect and classify vehicles in real time for smart traffic control.",
    tech: ["YOLOv11", "AWS Lambda", "S3", "DynamoDB", "Python"],
    link: "/projects/urbanflow",
  },
  {
    title: "Smart Todo Application",
    description:
      "JWT-authenticated Next.js app for managing tasks with MongoDB backend, real-time updates, and full CRUD capabilities.",
    tech: ["Next.js", "MongoDB", "JWT", "React", "Node.js"],
    link: "/projects/smart-todo",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1"
              >
                <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
                  <span className="text-4xl font-orbitron font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    TEJ
                  </span>
                </div>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Tejeswar Naidu .S
              </h1>

              <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 h-8">
                <TypingAnimation
                  texts={[
                    "I turn data into insights",
                    "I build predictive models",
                    "I create data visualizations",
                    "I solve complex problems",
                  ]}
                />
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Data Science student passionate about transforming raw data into
              actionable insights. Specializing in machine learning, statistical
              analysis, and data visualization to solve real-world problems.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/projects">
                    View My Work <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 rounded-full font-medium border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                >
                  <Link href="/contact">Get In Touch</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center space-x-6"
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/Tejeswar001",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "www.linkedin.com/in/tejeswar-",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:tejeswarnaidu9@gmail.com",
                  label: "Email",
                },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What I Do
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Combining statistical analysis, machine learning, and data
              visualization to extract meaningful insights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Database,
                title: "Data Analysis",
                description:
                  "Statistical analysis and data mining to uncover hidden patterns and trends",
              },
              {
                icon: Brain,
                title: "Machine Learning",
                description:
                  "Building predictive models and AI solutions for complex business problems",
              },
              {
                icon: BarChart3,
                title: "Data Visualization",
                description:
                  "Creating compelling visual stories that make data accessible and actionable",
              },
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:glow-effect">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <skill.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-orbitron font-semibold mb-4 text-gray-900 dark:text-white">
                      {skill.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A showcase of my latest data science projects and analytical
              solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full bg-white dark:bg-slate-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:glow-effect overflow-hidden">
                  <CardContent className="p-6">
                    <div className="h-32 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg mb-6 flex items-center justify-center">
                      <BarChart3 className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={project.link}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                    >
                      Learn More <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 py-3 rounded-full font-medium border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
              >
                <Link href="/projects">
                  View All Projects <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
