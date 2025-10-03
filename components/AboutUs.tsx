import Image from "next/image"

export default function AboutUs() {
  return (
    <section className="py-14 md:py-20 bg-gradient-to-r from-[#f5e6d3] to-[#d4f1f4]">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-3 md:mb-4">About us</h2>
          <p className="text-[#717182] text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
            We give landlords and property managers the tools to run their properties as efficiently as large-scale
            operators, simplifying management, strengthening tenant trust, and preserving returns.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Contact Card */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold text-[#0a0a0a] mb-5 md:mb-6">Contact us</h3>

            <div className="mb-6 md:mb-8">
              <p className="text-lg md:text-xl text-[#0a0a0a] font-medium">www.homesensus.com</p>
            </div>

            {/* Team Member 1 */}
            <div className="pb-5 md:pb-6 mb-5 md:mb-6 border-b border-gray-200">
              <h4 className="text-base md:text-lg font-semibold text-[#0a0a0a] mb-1.5">Eduardo Arreaga</h4>
              <p className="text-sm text-[#717182] mb-0.5">Co-founder & CEO</p>
              <p className="text-sm text-[#717182] mb-2">Tenant & HOA</p>
              <a href="mailto:eduardo@homesensus.com" className="text-sm text-[#54b5e0] hover:underline">
                eduardo@homesensus.com
              </a>
            </div>

            {/* Team Member 2 */}
            <div>
              <h4 className="text-base md:text-lg font-semibold text-[#0a0a0a] mb-1.5">Greg Chan</h4>
              <p className="text-sm text-[#717182] mb-0.5">Co-founder & CTPO</p>
              <p className="text-sm text-[#717182] mb-2">Landlord & Tenant</p>
              <a href="mailto:greg@homesensus.com" className="text-sm text-[#54b5e0] hover:underline">
                greg@homesensus.com
              </a>
            </div>
          </div>

          {/* Logo Card */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg flex flex-col items-center justify-center">
            <div className="mb-6">
              <Image
                src="/images/design-mode/image.png"
                alt="HomeSensus Logo"
                width={300}
                height={100}
                className="w-auto h-20 md:h-24"
              />
            </div>

            {/* Tagline */}
            <p className="text-[#54b5e0] text-lg md:text-xl font-medium text-center">
              Property management on autopilot
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
