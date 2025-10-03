export default function CompetitiveAdv() {
  return (
    <section className="relative bg-[#54b5e0] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative geometric shapes in bottom right */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#f6d15c] opacity-60 transform rotate-45 translate-x-32 translate-y-32" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#f4a261] opacity-70 transform rotate-45 translate-x-24 translate-y-24" />
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#ffb3c1] opacity-50 transform rotate-45 translate-x-40 translate-y-20" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-center mb-10 lg:mb-12">
          Built for the Modern Property Manager
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: Tailored for DIY Landlords */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="w-16 h-16 rounded-full bg-[#f6d15c]/30 flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-[#54b5e0]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-base font-bold text-black uppercase mb-3 tracking-wide">TAILORED FOR DIY LANDLORDS</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              HomeSensus is designed for non-technical, part-time landlords, featuring a clean interface and easy
              usability.
            </p>
          </div>

          {/* Card 2: Always-On Agentic-AI Team */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="w-16 h-16 rounded-full bg-[#f6d15c]/30 flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-[#54b5e0]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-base font-bold text-black uppercase mb-3 tracking-wide">ALWAYS-ON AGENTIC-AI TEAM</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              An intelligent and proactive team that works behind the scenes to resolve issues before they become
              problems.
            </p>
          </div>

          {/* Card 3: Simple and Secure by Design */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="w-16 h-16 rounded-full bg-[#f6d15c]/30 flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-[#54b5e0]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <h3 className="text-base font-bold text-black uppercase mb-3 tracking-wide">SIMPLE AND SECURE BY DESIGN</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              HomeSensus is built natively for AI, built for convenience and ease of use — no tech skills required.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
