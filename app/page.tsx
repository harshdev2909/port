"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Home, Bookmark, Github, Linkedin, Twitter, Mail, ExternalLink, Sparkles, Code, Zap } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  useEffect(() => {
    // GSAP animations for hero section
    const tl = gsap.timeline()

    tl.from(".hero-title", {
      duration: 1.2,
      y: 100,
      opacity: 0,
      ease: "power3.out",
    })
      .from(
        ".hero-subtitle",
        {
          duration: 1,
          y: 50,
          opacity: 0,
          ease: "power3.out",
        },
        "-=0.8",
      )
      .from(
        ".hero-avatar",
        {
          duration: 1.5,
          scale: 0,
          rotation: 180,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.5",
      )

    // Floating animation for avatar
    gsap.to(".hero-avatar", {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    })

    // Sparkle animation
    gsap.to(".sparkle", {
      rotation: 360,
      duration: 4,
      repeat: -1,
      ease: "none",
    })
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <motion.div ref={containerRef} className="relative max-w-4xl mx-auto px-6 py-16" style={{ y }}>
        {/* Header Section */}
        <motion.div
          className="flex items-start justify-between mb-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="relative">
            <motion.h1
              className="hero-title text-7xl font-black mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent tracking-tight"
              style={{
                fontFamily: "'Space Grotesk', 'Inter', sans-serif",
                textShadow: "0 0 40px rgba(139, 92, 246, 0.3)",
              }}
              variants={itemVariants}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                backgroundPosition: {
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                },
              }}
            >
              Hi, Harsh Sharma here
            </motion.h1>
            <motion.p
              className="hero-subtitle text-gray-300 text-2xl font-light italic tracking-wide"
              style={{
                fontFamily: "'Playfair Display', 'Georgia', serif",
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
              }}
              variants={itemVariants}
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              19 year old something guy
            </motion.p>

            {/* Decorative elements */}
            <motion.div
              className="sparkle absolute -top-6 -right-10"
              variants={itemVariants}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              }}
            >
              <Sparkles className="text-yellow-400 w-8 h-8 drop-shadow-lg" />
            </motion.div>

            {/* Glowing underline effect */}
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
              style={{
                boxShadow: "0 0 20px rgba(139, 92, 246, 0.6)",
              }}
            />

            {/* Floating text effect */}
            <motion.div
              className="absolute -left-8 top-1/2 text-purple-400/30 text-sm font-mono"
              animate={{
                y: [-10, 10, -10],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              {"{ developer }"}
            </motion.div>

            <motion.div
              className="absolute -right-12 bottom-0 text-pink-400/30 text-sm font-mono"
              animate={{
                y: [10, -10, 10],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2,
              }}
            >
              {"< creator />"}
            </motion.div>
          </div>

          <motion.div
            className="hero-avatar relative group cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-1 shadow-2xl shadow-purple-500/25">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 opacity-80"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10"></div>

                {/* Pulse effect */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-white/20"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeOut",
                  }}
                />
              </div>
            </div>
            <motion.div
              className="absolute -inset-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            ></motion.div>
          </motion.div>
        </motion.div>

        {/* About Section */}
        <motion.section
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            About
          </motion.h2>
          <motion.div className="space-y-4 text-gray-300" variants={containerVariants}>
            {[
              "tldr; learnt by hacking around on the internet.",
              "i like technology and deep science. they make a dent in the universe.",
              "i love building scalable systems.",
            ].map((text, index) => (
              <motion.p
                key={index}
                className="text-lg leading-relaxed hover:text-white transition-colors duration-300"
                variants={itemVariants}
                whileHover={{ x: 10 }}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
        </motion.section>

        {/* Work Experience Section */}
        <motion.section
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-2xl font-semibold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Cool places I worked at
          </motion.h2>
          <motion.div className="space-y-6" variants={containerVariants}>
            {[
              {
                company: "Stepous Labs",
                role: "Founder",
                period: "June 2024 - Present",
                gradient: "from-blue-500 to-blue-600",
                icon: <Code className="w-6 h-6" />,
              },
              {
                company: "ZerodotEmail",
                role: "open source contributor",
                period: "April 2025 - Present",
                gradient: "from-blue-500 to-blue-600",
                icon: <Sparkles className="w-6 h-6" />,
              },
              {
                company: "Atomic Media",
                role: "Full Stack engineer",
                period: "February 2024 - Jan 2025",
                gradient: "from-gray-500 to-gray-600",
                icon: <Zap className="w-6 h-6" />,
              },
              {
                company: "HackWithIndia",
                role: "Lead",
                period: "June 2024 - Present",
                gradient: "from-purple-500 to-pink-500",
                icon: <Sparkles className="w-6 h-6" />,
              },
            ].map((job, index) => (
              <motion.div
                key={index}
                className="group relative p-6 rounded-2xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500"
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.1)",
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${job.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {job.icon}
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-lg text-white group-hover:text-purple-200 transition-colors">
                        {job.company}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{job.role}</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-purple-300 transition-colors font-medium">
                    {job.period}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 rounded-2xl transition-all duration-500"></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-2xl font-semibold mb-8 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Education
          </motion.h2>
          <motion.div
            className="group relative p-6 rounded-2xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 hover:border-green-500/50 transition-all duration-500"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(34, 197, 94, 0.1)",
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <motion.div
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-8 h-8 rounded-full bg-white/20"></div>
                </motion.div>
                <div>
                  <h3 className="font-semibold text-lg text-white group-hover:text-green-200 transition-colors">
                    SGT University
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    B.Tech in Computer Science and Engineering
                  </p>
                </div>
              </div>
              <span className="text-sm text-gray-400 group-hover:text-green-300 transition-colors font-medium">
                2023 - 2027
              </span>
            </div>
          </motion.div>
        </motion.section>

        {/* Newsletter Section */}
        <motion.section
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-2xl font-semibold mb-3 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Stay Updated
          </motion.h2>
          <motion.p className="text-gray-400 mb-8 text-lg" variants={itemVariants}>
            Subscribe to my email list. I do not spam, ever.
          </motion.p>
          <motion.div className="flex gap-4" variants={itemVariants}>
            <Input
              placeholder="Enter your email"
              className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-gray-500 flex-1 h-12 rounded-xl backdrop-blur-sm focus:border-purple-500/50 focus:ring-purple-500/25 transition-all duration-300"
            />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 h-12 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Subscribe
              </Button>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-2xl font-semibold mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Skills
          </motion.h2>
          <motion.div className="flex flex-wrap gap-3" variants={containerVariants}>
            {["React", "Next.js", "TypeScript", "Python", "PyTorch", "Postgres", "Java", "Shitposting","XION",
  "Solana",
  "Smart Contract ",
  "Rust",
  "DevOps",].map(
              (skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-white to-gray-100 text-black text-sm rounded-full font-semibold shadow-lg hover:shadow-xl cursor-pointer transition-all duration-300 hover:scale-105"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px rgba(255, 255, 255, 0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.span>
              ),
            )}
          </motion.div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div
            className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-6"
            variants={itemVariants}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          ></motion.div>
          <motion.p className="text-gray-300 mb-12 text-lg" variants={itemVariants}>
            say hello on{" "}
            <a
              href="https://x.com/harsh_sharmaa9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 font-semibold underline hover:text-blue-300 transition-colors"
            >
              X
            </a>
          </motion.p>
        </motion.section>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
            {[
            { icon: Home, color: "hover:text-blue-400", href: "/" },
            { icon: Bookmark, color: "hover:text-green-400", href: "/#projects" },
            { icon: Github, color: "hover:text-purple-400", href: "https://github.com/harshdev2909" },
            { icon: Linkedin, color: "hover:text-blue-500", href: "hhttps://www.linkedin.com/in/harsh-sharma-4a3850241/" },
            { icon: Twitter, color: "hover:text-sky-400", href: "https://x.com/harsh_sharmaa9" },
            { icon: Mail, color: "hover:text-red-400", href: "mailto:harshsharmaa990@gmail" },
            { icon: ExternalLink, color: "hover:text-yellow-400", href: "" },
            ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target={social.href.startsWith("http") || social.href.startsWith("mailto:") ? "_blank" : undefined}
              rel={social.href.startsWith("http") || social.href.startsWith("mailto:") ? "noopener noreferrer" : undefined}
              className={`text-gray-400 ${social.color} transition-all duration-300 p-3 rounded-full hover:bg-white/5`}
              variants={itemVariants}
              whileHover={{
              scale: 1.2,
              rotate: 360,
              boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)",
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
