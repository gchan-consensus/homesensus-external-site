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
          <div className="relative z-10 space-y-4 lg:space-y-6 py-12 lg:py-0">
            <h1 className="text-3xl font-bold leading-tight text-[#000000] md:text-4xl xl:text-5xl">
              AI-Driven Future of Property Management
            </h1>

            <p className="text-base text-[#334154] sm:text-lg">
              Property management on autopilot, because landlords and property managers deserve higher returns, lower
              costs, and zero stress.
            </p>

            <p className="text-base text-[#334154] sm:text-lg">
              Be among the first to experience the power of AI-native property management. Join early access, and get a <strong>3-month free trial</strong>.
            </p>

            <WaitlistForm
              inline={true}
              buttonText="Sign Up"
              buttonClassName="bg-[#0FB8E5] hover:bg-[#0da5cc] text-white font-medium transition-colors duration-200"
            />
          </div>
        </div>

        {/* Background Image with Fade Effect */}
        <div className="hidden lg:block absolute inset-0">
          <div aria-hidden className="absolute z-[1] inset-0 bg-gradient-to-r from-white from-35%" />
          <div className="relative h-full overflow-hidden">
            <img
              src="/images/design-mode/housing.png"
              alt="Residential houses background"
              width={3840}
              height={2160}
              className="absolute inset-0 w-full h-full object-cover object-[75%_center]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
