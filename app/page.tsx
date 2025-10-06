import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import PlatformOverview from "@/components/PlatformOverview"
import SolutionOverview from "@/components/SolutionOverview"
import CompetitiveAdv from "@/components/CompetitiveAdv"
import AboutUs from "@/components/AboutUs"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PlatformOverview />
      <SolutionOverview />
      <CompetitiveAdv />
      <AboutUs />
    </div>
  )
}
