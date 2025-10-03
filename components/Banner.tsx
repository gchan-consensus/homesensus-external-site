import WaitlistForm from "@/components/WaitlistForm"

export default function Banner() {
  return (
    <section className="bg-[#fac748] py-14 px-6 md:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-black mb-5 md:mb-6">
          Ready to Transform Your Property Management?
        </h2>

        <p className="text-sm md:text-base text-black mb-6 md:mb-8 max-w-3xl mx-auto">
          Be among the first to experience the power of AI-native property management. Join early access, and{" "}
          <span className="font-bold">get a 3-month free trial.</span>
        </p>

        <WaitlistForm
          buttonText="Join waiting list"
          buttonClassName="bg-[#54b5e0] hover:bg-[#4aa5d0] text-white font-medium px-6 py-2.5 rounded-lg transition-colors duration-200 mb-3"
        />

        <p className="text-xs text-black">(Limited early access spots available).</p>
      </div>
    </section>
  )
}
