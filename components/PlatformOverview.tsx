"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Zap } from "lucide-react"

function MiniBars() {
  return (
    <div className="mt-6 flex h-28 items-end gap-3 rounded-xl bg-gradient-to-b from-[#0FB8E5]/10 to-white p-3">
      {[14, 38, 58, 76].map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0, opacity: 0.6 }}
          animate={{ height: h }}
          transition={{ delay: 0.5 + i * 0.15, type: "spring" }}
          className="w-8 rounded-lg bg-gradient-to-t from-[#0FB8E5]/40 to-[#0FB8E5] shadow-inner"
        />
      ))}
    </div>
  )
}

function PropertyIcon() {
  return (
    <motion.svg
      initial={{ rotate: -8 }}
      animate={{ rotate: 0 }}
      transition={{ duration: 2, type: "spring" }}
      width="180"
      height="180"
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="propGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0FB8E5" />
          <stop offset="100%" stopColor="#FDCF3F" />
        </linearGradient>
      </defs>
      <circle cx="90" cy="90" r="46" fill="url(#propGrad)" opacity="0.95" />
      <circle cx="78" cy="80" r="8" fill="white" opacity="0.45" />
      <circle cx="108" cy="102" r="6" fill="white" opacity="0.35" />
      <motion.ellipse
        cx="90"
        cy="90"
        rx="82"
        ry="28"
        stroke="white"
        strokeOpacity="0.6"
        fill="none"
        animate={{ strokeDashoffset: [160, 0] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        strokeDasharray="160 160"
      />
      <motion.circle
        cx="172"
        cy="90"
        r="3"
        fill="white"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 2.2, repeat: Number.POSITIVE_INFINITY }}
      />
    </motion.svg>
  )
}

export default function PlatformOverview() {
  return (
    <section className="py-16 px-4 md:py-20 platform-overview-gradient">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="mb-6 text-2xl font-bold leading-tight text-[#0a0a0a] text-center sm:text-3xl lg:text-4xl text-balance">
          Smarter property management for landlords, Property Managers & HOAs
        </h2>

        {/* Subheading */}
        <p className="text-lg text-[#717184] text-center max-w-4xl mx-auto mb-10 md:mb-12 sm:text-xl">
          Automating rent collection, lease renewals, maintenance, and tenant communication all without the need for
          manual oversight. Our autonomous AI agents run 24/7, handling tasks proactively and consistently to:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Card 1: Boost operational efficiency - Dark card with ripple effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative col-span-1 overflow-hidden rounded-xl bg-gradient-to-b from-[#0FB8E5] to-[#0a9ec7] p-6 text-white shadow-lg"
          >
            <div className="absolute inset-0">
              <svg
                className="absolute inset-0 h-full w-full opacity-20"
                viewBox="0 0 400 400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient id="rg" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FDCF3F" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                </defs>
                <rect width="400" height="400" fill="url(#rg)" />
                {[...Array(12)].map((_, i) => (
                  <circle
                    key={i}
                    cx="200"
                    cy="200"
                    r={20 + i * 14}
                    fill="none"
                    stroke="currentColor"
                    strokeOpacity="0.12"
                  />
                ))}
              </svg>
            </div>

            <div className="relative flex h-full flex-col justify-between min-h-[200px]">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-white/20 p-2 ring-1 ring-white/10">
                  <Zap className="h-5 w-5" />
                </div>
                <span className="text-xs uppercase tracking-wider text-white/90">Efficiency</span>
              </div>
              <div className="mt-6 text-xl leading-snug">
                Boost operational
                <br /> efficiency
              </div>
              <motion.div
                className="absolute right-6 top-6 h-12 w-12 rounded-full bg-[#FDCF3F]/30"
                animate={{ boxShadow: ["0 0 0 0 rgba(253,207,63,0.35)", "0 0 0 16px rgba(253,207,63,0)"] }}
                transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>
          </motion.div>

          {/* Card 2: Mitigate risk - Gradient card with animated icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative col-span-1 overflow-hidden rounded-xl bg-gradient-to-b from-[#FDCF3F] to-[#f0b91f] p-6 text-[#0a0a0a] shadow-lg"
          >
            <div className="pointer-events-none absolute -right-6 -top-8 opacity-60">
              <PropertyIcon />
            </div>
            <div className="relative mt-24 text-sm text-[#0a0a0a]/80">Compliance</div>
            <div className="text-xl font-medium leading-snug">
              Mitigate regulatory
              <br /> and financial risk
            </div>
          </motion.div>

          {/* Card 3: Maximize returns - White card with animated bars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="col-span-1 rounded-xl bg-white p-6 text-[#0a0a0a] shadow-lg ring-1 ring-gray-200"
          >
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-[#0FB8E5]" />
              <div className="text-sm text-gray-500">Financial Returns</div>
            </div>
            <div className="mt-2 text-2xl font-semibold tracking-tight">Maximize ROI</div>
            <div className="mt-1 text-xs text-green-600">↑ Optimized revenue</div>
            <MiniBars />
          </motion.div>

          {/* Card 4: Seamless interactions - Light card with icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="col-span-1 rounded-xl bg-gradient-to-b from-gray-50 to-white p-6 text-[#0a0a0a] shadow-lg ring-1 ring-gray-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-full bg-[#0FB8E5]/10 p-2">
                <Users className="h-5 w-5 text-[#0FB8E5]" />
              </div>
              <span className="text-xs uppercase tracking-wider text-gray-500">Communication</span>
            </div>
            <div className="text-xl leading-snug">Seamless landlord-tenant interactions</div>
            <div className="mt-4 text-sm text-gray-500">Behind-the-scenes automation for smooth operations</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
