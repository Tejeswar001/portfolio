"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Calendar,
  Tag,
  Users,
  Award,
} from "lucide-react";
import Link from "next/link";
import { AnimatedBackground } from "@/components/animated-background";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/app/data/projectdetails";
import { notFound } from "next/navigation";

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const projectData = projects.find((p) => p.slug === params.slug);
  if (!projectData) return notFound();

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />

      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Link href="/projects">
              <Button variant="outline" className="group">
                <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Projects
              </Button>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full font-medium">
                {projectData.category}
              </span>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(projectData.date).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {projectData.title}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              {projectData.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href={projectData.github}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  <Github className="mr-2 w-5 h-5" />
                  View Code
                </Button>
              </motion.a>

              <motion.a
                href={projectData.demo}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline">
                  <ExternalLink className="mr-2 w-5 h-5" />
                  Live Demo
                </Button>
              </motion.a>
            </div>
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={projectData.image || "/placeholder.svg"}
                alt={projectData.title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>

          {/* Project Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Duration
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {projectData.duration}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Team
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {projectData.team}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Accuracy
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {projectData.accuracy}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-orbitron font-bold mb-6 text-gray-900 dark:text-white flex items-center">
              <Tag className="mr-3 w-6 h-6 text-blue-600" />
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {projectData.tech.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Project Content */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-12">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h2 className="text-3xl font-orbitron font-bold mb-6 text-gray-900 dark:text-white">
                  Project Overview
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {projectData.overview}
                </p>
              </motion.div>

              {/* Methodology */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h2 className="text-3xl font-orbitron font-bold mb-6 text-gray-900 dark:text-white">
                  Methodology
                </h2>
                <div className="space-y-4">
                  {projectData.methodology.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="flex items-center p-4 bg-white/30 dark:bg-slate-800/30 rounded-lg backdrop-blur-sm"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {step}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              {/* Challenges */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <h2 className="text-3xl font-orbitron font-bold mb-6 text-gray-900 dark:text-white">
                  Challenges
                </h2>
                <div className="space-y-4">
                  {projectData.challenges.map((challenge, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-r-lg"
                    >
                      <p className="text-gray-700 dark:text-gray-300">
                        {challenge}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Solutions */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <h2 className="text-3xl font-orbitron font-bold mb-6 text-gray-900 dark:text-white">
                  Solutions
                </h2>
                <div className="space-y-4">
                  {projectData.solutions.map((solution, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className="p-4 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-r-lg"
                    >
                      <p className="text-gray-700 dark:text-gray-300">
                        {solution}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <h2 className="text-3xl font-orbitron font-bold mb-6 text-gray-900 dark:text-white">
                  Results & Impact
                </h2>
                <div className="space-y-4">
                  {projectData.results.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                      className="p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-lg"
                    >
                      <p className="text-gray-700 dark:text-gray-300">
                        {result}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-20 text-center"
          >
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0 shadow-xl">
              <CardContent className="p-12">
                <h2 className="text-3xl font-orbitron font-bold mb-4 text-gray-900 dark:text-white">
                  Interested in This Project?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Want to learn more about the implementation details or discuss
                  similar projects? I'd love to hear from you!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full"
                    >
                      <Link href="/contact">Get In Touch</Link>
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
                      className="px-8 py-3 rounded-full"
                    >
                      <Link href="/projects">View More Projects</Link>
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
