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
              <motion.g
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ transformOrigin: "400px 300px" }}
              >
                {/* Arc segments with arrows */}
                {[0, 120, 240].map((startAngle, idx) => {
                  // Arc segment (85 degrees)
                  const arcLength = 85
                  const arcStart = (startAngle - 90) * Math.PI / 180
                  const arcEnd = (startAngle + arcLength - 90) * Math.PI / 180

                  // Tapered arc - thick at end (near arrow), thin at start (tail)
                  const radiusOuter1 = 201 // tail outer
                  const radiusInner1 = 199 // tail inner
                  const radiusOuter2 = 205 // head outer
                  const radiusInner2 = 195 // head inner

                  const x1Outer = 400 + radiusOuter1 * Math.cos(arcStart)
                  const y1Outer = 300 + radiusOuter1 * Math.sin(arcStart)
                  const x2Outer = 400 + radiusOuter2 * Math.cos(arcEnd)
                  const y2Outer = 300 + radiusOuter2 * Math.sin(arcEnd)
                  const x1Inner = 400 + radiusInner1 * Math.cos(arcStart)
                  const y1Inner = 300 + radiusInner1 * Math.sin(arcStart)
                  const x2Inner = 400 + radiusInner2 * Math.cos(arcEnd)
                  const y2Inner = 300 + radiusInner2 * Math.sin(arcEnd)

                  // Arrow position at end of arc
                  const arrowAngle = startAngle + arcLength
                  const arrowRad = (arrowAngle - 90) * Math.PI / 180
                  const arrowX = 400 + 200 * Math.cos(arrowRad)
                  const arrowY = 300 + 200 * Math.sin(arrowRad)

                  return (
                    <g key={idx}>
                      {/* Tapered curved arc */}
                      <path
                        d={`
                          M ${x1Outer} ${y1Outer}
                          A ${radiusOuter1} ${radiusOuter1} 0 0 1 ${x2Outer} ${y2Outer}
                          L ${x2Inner} ${y2Inner}
                          A ${radiusInner2} ${radiusInner2} 0 0 0 ${x1Inner} ${y1Inner}
                          Z
                        `}
                        fill="#9CA3AF"
                      />
                      {/* Large filled triangular arrow */}
                      <g transform={`translate(${arrowX}, ${arrowY}) rotate(${arrowAngle})`}>
                        <polygon
                          points="-20,-20 15,0 -20,20"
                          fill="#9CA3AF"
                        />
                      </g>
                    </g>
                  )
                })}
              </motion.g>

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
