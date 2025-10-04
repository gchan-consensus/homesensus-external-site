import Image from "next/image"
import WaitlistForm from "@/components/WaitlistForm"

export default function Hero() {
  return (
    <section
      className="relative flex items-center py-16 lg:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(105.42deg, rgba(254, 208, 62, 0.2) 30.22%, rgba(180, 240, 250, 0.15) 52.38%, rgba(150, 225, 240, 0.15) 89.63%)",
        borderRadius: "0px",
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 lg:space-y-6 py-12 lg:py-0">
            <h1 className="text-2xl font-bold leading-tight text-[#000000] sm:text-3xl lg:text-4xl">
              The AI-Driven Future of Property Management
            </h1>

            <p className="text-lg text-[#334154] sm:text-xl">
              Property management on autopilot, because landlords and property managers deserve higher returns, lower
              costs, and zero stress.
            </p>

            <WaitlistForm
              buttonText="Join waiting list"
              buttonClassName="bg-[#0FB8E5] hover:bg-[#0da5cc] text-white font-medium transition-colors duration-200"
              buttonStyle={{
                padding: "23.5px 31.4px",
                borderRadius: "7.84px",
                fontSize: "17.65px",
                lineHeight: "27px",
                letterSpacing: "-0.43px",
              }}
            />
          </div>

          {/* Right Image - Extended to touch top and right edges */}
          <div
            className="hidden lg:block lg:absolute top-0 right-0 h-[350px] lg:h-[calc(100%-2rem)] w-[50%] overflow-hidden"
            style={{
              borderRadius: "0px 0px 0px 476.207px",
            }}
          >
            <Image
              src="/images/design-mode/Homesensus___Landing_page__2_.png.jpeg"
              alt="Aerial view of colorful residential houses"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
