"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function CompetitiveAdv() {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/design-mode/competitiveadv-bg.png"
        alt="Competitive advantages background"
        fill
        className="object-cover z-0"
        priority={false}
      />

      <div className="relative max-w-7xl mx-auto z-20">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-center mb-10 lg:mb-12">
          Built for the Modern Property Manager
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: Tailored for DIY Landlords */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-700 p-6 text-white shadow-xl"
          >
            {/* Decorative concentric circles */}
            <div className="absolute inset-0">
              <svg className="absolute inset-0 h-full w-full opacity-20" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="rg1" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                </defs>
                <rect width="400" height="400" fill="url(#rg1)" />
                {[...Array(10)].map((_, i) => (
                  <circle key={i} cx="200" cy="200" r={20 + i * 16} fill="none" stroke="currentColor" strokeOpacity="0.1" />
                ))}
              </svg>
            </div>

            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-white/20 p-2.5 ring-1 ring-white/20 backdrop-blur-sm">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <span className="text-xs uppercase tracking-wider text-cyan-100">For DIY Landlords</span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-bold leading-snug mb-2">
                  Tailored for Non-Technical Users
                </h3>
                <p className="text-sm text-cyan-50/90 leading-relaxed">
                  Clean interface and easy usability designed for part-time landlords without tech skills.
                </p>
              </div>
              <motion.div
                className="absolute right-6 top-6 h-12 w-12 rounded-full bg-cyan-400/30"
                animate={{ boxShadow: ["0 0 0 0 rgba(34,211,238,0.4)", "0 0 0 20px rgba(34,211,238,0)"] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Card 2: Always-On Agentic-AI Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6 text-white shadow-xl"
          >
            {/* Animated gradient orb */}
            <motion.div
              className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-yellow-300/40 to-pink-400/40 blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-white/20 p-2.5 ring-1 ring-white/20 backdrop-blur-sm">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-xs uppercase tracking-wider text-purple-100">AI-Powered</span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-bold leading-snug mb-2">
                  Always-On Agentic-AI Team
                </h3>
                <p className="text-sm text-white/90 leading-relaxed">
                  Intelligent and proactive team working behind the scenes to resolve issues before they become problems.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Simple and Secure by Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 p-6 text-white shadow-xl"
          >
            {/* Decorative sparkle elements */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute right-8 top-8 h-2 w-2 rounded-full bg-white/60"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              />
              <motion.div
                className="absolute right-16 top-16 h-1.5 w-1.5 rounded-full bg-white/50"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
              />
              <motion.div
                className="absolute right-12 bottom-12 h-2.5 w-2.5 rounded-full bg-white/70"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}
              />
            </div>

            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-white/20 p-2.5 ring-1 ring-white/20 backdrop-blur-sm">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <span className="text-xs uppercase tracking-wider text-emerald-100">Easy to Use</span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-bold leading-snug mb-2">
                  Simple and Secure by Design
                </h3>
                <p className="text-sm text-emerald-50/90 leading-relaxed">
                  Built natively for AI with convenience and ease of use — no tech skills required.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
