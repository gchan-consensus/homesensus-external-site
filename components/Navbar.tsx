import Link from "next/link"
import Image from "next/image"
import WaitlistForm from "@/components/WaitlistForm"

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <div className="relative h-16 md:h-18 w-auto">
              <Image
                src="/images/design-mode/image.png"
                alt="HomeSensus Logo"
                width={280}
                height={72}
                className="h-full w-auto"
                priority
              />
            </div>
          </Link>

          {/* CTA Button */}
          <WaitlistForm
            buttonText="Join waiting list"
            buttonClassName="bg-[#54b5e0] hover:bg-[#4aa5d0] text-white font-medium px-4 py-2 md:px-6 md:py-2.5 rounded-lg transition-colors text-sm md:text-base"
          />
        </div>
      </div>
    </nav>
  )
}
