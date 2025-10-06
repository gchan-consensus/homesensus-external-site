"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CreditCard, Wrench, Calculator, FileCheck, UserPlus, MessageSquare } from "lucide-react"

const components = [
  { name: "Payments & Rent Collection", position: "right", angle: 30, icon: CreditCard, metric: "98% On-time", color: "#0FB8E5" },
  { name: "Work Order Management", position: "right", angle: 90, icon: Wrench, metric: "24/7 Active", color: "#f59e0b" },
  { name: "Financial Mgt & Tax Reporting", position: "right", angle: 150, icon: Calculator, metric: "$2.5M Tracked", color: "#10b981" },
  { name: "Lease Mgt & Tenant Screening", position: "left", angle: 210, icon: FileCheck, metric: "85% Approved", color: "#8b5cf6" },
  { name: "Tenant Acquisition", position: "left", angle: 270, icon: UserPlus, metric: "45% Conversion", color: "#6366f1" },
  { name: "Communication & Engagement", position: "left", angle: 330, icon: MessageSquare, metric: "2.5k Messages", color: "#ec4899" },
]

export default function SolutionOverview() {
  return (
    <section className="bg-[#f5f5f0] py-8 px-4 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-6 sm:mb-12 text-center">
          <h2 className="mb-6 text-2xl font-bold leading-tight text-[#0a0a0a] sm:text-3xl lg:text-4xl">
            Let AI run the rentals, while you collect the rewards.
          </h2>
          <p className="mx-auto max-w-3xl text-base text-[#4a5565] sm:text-lg">
            AI-Driven orchestration of end-to-end lifecycle with deep integrations that replace fragmented tools.
          </p>
        </div>

        {/* Animated Diagram */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl h-[450px] sm:h-[600px]">
            {/* Background blobs */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Left yellow blob */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[45%] h-[70%] bg-gradient-to-r from-[#F5DEB3]/40 to-transparent rounded-full blur-3xl" />
              {/* Right blue blob */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] h-[70%] bg-gradient-to-l from-[#ADD8E6]/40 to-transparent rounded-full blur-3xl" />
            </div>

            {/* Center logo */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="rounded-2xl p-4"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/images/design-mode/image.png"
                  alt="HomeSensus Logo"
                  width={280}
                  height={84}
                  className="w-auto h-[60px] sm:h-[80px] lg:h-[100px]"
                />
              </motion.div>
            </motion.div>

            {/* Circular flow path */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600">
              {/* Animated circular path */}
              <circle
                cx="400"
                cy="300"
                r="200"
                fill="none"
                stroke="#9CA3AF"
                strokeWidth="3"
              />

              {/* Orbiting arrowheads */}
              {[0, 120, 240].map((startAngle, idx) => (
                <motion.g
                  key={idx}
                  animate={{
                    x: Array.from({ length: 361 }, (_, i) => {
                      const angle = ((i + startAngle) - 90) * Math.PI / 180
                      return 400 + 200 * Math.cos(angle)
                    }),
                    y: Array.from({ length: 361 }, (_, i) => {
                      const angle = ((i + startAngle) - 90) * Math.PI / 180
                      return 300 + 200 * Math.sin(angle)
                    }),
                    rotate: Array.from({ length: 361 }, (_, i) => i + startAngle),
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <path
                    d="M -4,-12 L 8,0 L -4,12"
                    stroke="#9CA3AF"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </motion.g>
              ))}

              {/* Component cards as SVG foreignObjects */}
              {components.map((comp, index) => {
                const rad = (comp.angle - 90) * Math.PI / 180
                const distance = 280
                const x = 400 + distance * Math.cos(rad)
                const y = 300 + distance * Math.sin(rad)
                const Icon = comp.icon

                return (
                  <foreignObject
                    key={comp.name}
                    x={x - 125}
                    y={y - 50}
                    width="250"
                    height="100"
                  >
                    <motion.div
                      className={`flex items-center justify-center h-full`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    >
                      <div className="flex items-center gap-3 px-4 py-3 rounded-full border border-gray-200 bg-white shadow-md transition-all duration-300 hover:scale-105 text-[#2C3E50]">
                        <div
                          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full"
                          style={{ backgroundColor: `${comp.color}15` }}
                        >
                          <Icon className="h-6 w-6" style={{ color: comp.color }} />
                        </div>
                        <div className="flex-1">
                          <p className="text-base lg:text-sm font-medium leading-tight">{comp.name}</p>
                          <p className="text-sm lg:text-xs text-gray-500 mt-0.5">{comp.metric}</p>
                        </div>
                      </div>
                    </motion.div>
                  </foreignObject>
                )
              })}
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
