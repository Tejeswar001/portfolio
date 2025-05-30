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
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
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
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[85vh]">
            {/* Left Column - Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="relative z-10 order-2 lg:order-1"
            >
              <motion.div variants={itemVariants} className="mb-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-900/30 dark:to-blue-900/30 rounded-full mb-6 sm:mb-8 border border-emerald-200 dark:border-emerald-800"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                    className="w-2 h-2 bg-emerald-500 rounded-full mr-3"
                  />
                  <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                    Available for new opportunities
                  </span>
                </motion.div>

                {/* Name with enhanced typography */}
                <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
                  <motion.h1 className="font-orbitron font-bold leading-tight">
                    <motion.span
                      className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-900 dark:text-white"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      Tejeswar
                    </motion.span>
                    <motion.span
                      className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      Naidu.S
                    </motion.span>
                  </motion.h1>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 h-8 sm:h-10 md:h-12"
                >
                  <TypingAnimation
                    texts={[
                      "Data Scientist & ML Engineer",
                      "Turning Data into Insights",
                      "Building Predictive Models",
                      "Creating Data Stories",
                      "AI Solutions Architect",
                    ]}
                    className="font-medium"
                  />
                </motion.div>

                <motion.p
                  variants={itemVariants}
                  className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-xl"
                >
                  Passionate about transforming complex datasets into actionable
                  insights through advanced analytics, machine learning, and
                  compelling data visualizations that drive business success.
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group"
                  >
                    {/*
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    />*/}

                    <Button
                      asChild
                      size="lg"
                      className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium shadow-xl text-sm sm:text-base"
                    >
                      <Link href="/projects">
                        Explore My Work
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                          className="ml-2"
                        >
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </motion.div>
                      </Link>
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 shadow-lg text-sm sm:text-base"
                    >
                      <Link href="/contact">Let's Connect</Link>
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  variants={itemVariants}
                  className="flex space-x-4 sm:space-x-6"
                >
                  {[
                    {
                      icon: Github,
                      href: "https://github.com/Tejeswar001",
                      label: "GitHub",
                      color: "hover:text-gray-900 dark:hover:text-white",
                    },
                    {
                      icon: Linkedin,
                      href: "https://www.linkedin.com/in/tejeswar-",
                      label: "LinkedIn",
                      color: "hover:text-blue-600",
                    },
                    {
                      icon: Mail,
                      href: "mailto:tejeswarnaidu9@gmail.com",
                      label: "Email",
                      color: "hover:text-purple-600",
                    },
                  ].map(({ icon: Icon, href, label, color }, index) => (
                    <motion.a
                      key={label}
                      href={href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.2, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-2 sm:p-3 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 dark:text-gray-300 ${color}`}
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Column - Enhanced Interactive Visual */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center order-1 lg:order-2"
            >
              {/* 
                🖼️ PHOTO REPLACEMENT SECTION
                ================================
                To replace the animation with your photo:
                1. Replace the entire motion.div below with an img tag
                2. Use: <img src="/your-photo.jpg" alt="Tejeswar Naidu.S" className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl" />
                3. Wrap it in the motion.div with these animations for a unique photo experience:
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 1, type: "spring", bounce: 0.3 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="relative"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-lg opacity-30"
                  />
                  <motion.img
                    src="/your-photo.jpg"
                    alt="Tejeswar Naidu.S"
                    className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl border-4 border-white dark:border-slate-800"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  // Add floating elements around photo
                  {Array.from({ length: 6 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                      animate={{
                        x: Math.cos((i * 60 * Math.PI) / 180) * 150,
                        y: Math.sin((i * 60 * Math.PI) / 180) * 150,
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                      }}
                    />
                  ))}
                </motion.div>
              */}

              {/* Current Animation - Replace this entire section with photo code above */}
              <div className="relative w-full h-full max-w-sm sm:max-w-md lg:max-w-lg">
                {/* Minimal Central Element */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 1, type: "spring", bounce: 0.3 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="relative"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-lg opacity-30"
                  />
                  <motion.img
                    src="/profile.png"
                    alt="Tejeswar Naidu.S"
                    className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl border-4 border-white dark:border-slate-800"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  {/*
                  {Array.from({ length: 6 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                      animate={{
                        x: Math.cos((i * 60 * Math.PI) / 180) * 150,
                        y: Math.sin((i * 60 * Math.PI) / 180) * 150,
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  ))}*/}
                </motion.div>

                {/* Floating Dots */}
                {/*{Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 0.6, 0],
                      scale: [0.5, 1, 0.5],
                      x:
                        Math.cos((i * 45 * Math.PI) / 180) *
                        (100 + Math.sin(Date.now() / 1000 + i) * 20),
                      y:
                        Math.sin((i * 45 * Math.PI) / 180) *
                        (100 + Math.cos(Date.now() / 1000 + i) * 20),
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.5,
                      ease: "easeInOut",
                    }}
                    className="absolute top-1/2 left-1/2 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                  />
                ))}*/}

                {/* Subtle Grid Lines */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.1 }}
                  transition={{ duration: 2, delay: 1 }}
                  className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"
                />

                {/* Corner Elements */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                  className="absolute top-8 right-8 w-3 h-3 bg-blue-500/40 rounded-full"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.7 }}
                  className="absolute bottom-8 left-8 w-2 h-2 bg-purple-500/40 rounded-sm rotate-45"
                />

                {/* Breathing Ring */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.1, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 border border-blue-300/20 dark:border-purple-400/20 rounded-full"
                />
              </div>
            </motion.div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="flex flex-col items-center text-gray-400 dark:text-gray-500"
            >
              <span className="text-xs sm:text-sm mb-2 hidden sm:block">
                Scroll to explore
              </span>
              <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="w-1 h-2 sm:h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-1 sm:mt-2"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-orbitron font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What I Do
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Combining statistical analysis, machine learning, and data
              visualization to extract meaningful insights
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <skill.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-orbitron font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white">
                      {skill.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
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
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-orbitron font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A showcase of my latest data science projects and analytical
              solutions
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                    <div className="h-24 sm:h-32 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg mb-4 sm:mb-6 flex items-center justify-center">
                      <BarChart3 className="w-8 h-8 sm:w-12 sm:h-12 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 sm:px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={project.link}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors text-sm sm:text-base"
                    >
                      Learn More{" "}
                      <ArrowRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
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
            className="text-center mt-8 sm:mt-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-6 sm:px-8 py-3 rounded-full font-medium border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 text-sm sm:text-base"
              >
                <Link href="/projects">
                  View All Projects{" "}
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
