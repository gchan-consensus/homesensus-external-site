import Image from "next/image"

export default function SolutionOverview() {
  return (
    <section className="bg-[#f5f5f0] py-16 px-4 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-2xl font-bold leading-tight text-[#0a0a0a] sm:text-3xl lg:text-4xl">
            AI-powered platform built for everyday landlords
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-[#4a5565] sm:text-xl">
            AI-Driven orchestration of end-to-end lifecycle with deep integrations that replace fragmented tools.
          </p>
        </div>

        {/* Diagram */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-5xl">
            <Image
              src="/images/design-mode/Homesensus___Landing_page__2_.png"
              alt="HomeSensus platform lifecycle diagram showing tenant acquisition, lease management, payments, work orders, and financial management in a circular flow"
              width={1200}
              height={800}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
