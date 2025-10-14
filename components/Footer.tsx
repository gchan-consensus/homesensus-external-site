import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <div className="relative h-14 w-auto">
                <Image
                  src="/images/design-mode/image.png"
                  alt="HomeSensus Logo"
                  width={200}
                  height={56}
                  className="h-full w-auto"
                />
              </div>
            </Link>
            <p className="text-sm text-[#717182] mb-4">
              Property management on autopilot
            </p>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="text-sm font-semibold text-[#0a0a0a] mb-4 uppercase tracking-wider">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#platform" className="text-sm text-[#717182] hover:text-[#54b5e0] transition-colors">
                  Platform Overview
                </Link>
              </li>
              <li>
                <Link href="/#solutions" className="text-sm text-[#717182] hover:text-[#54b5e0] transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/#competitive" className="text-sm text-[#717182] hover:text-[#54b5e0] transition-colors">
                  Why HomeSensus
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-sm font-semibold text-[#0a0a0a] mb-4 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-[#717182] hover:text-[#54b5e0] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-[#717182] hover:text-[#54b5e0] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/sms-optin" className="text-sm text-[#717182] hover:text-[#54b5e0] transition-colors">
                  SMS Opt-in Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-semibold text-[#0a0a0a] mb-4 uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.homesensus.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#717182] hover:text-[#54b5e0] transition-colors"
                >
                  www.homesensus.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@homesensus.com"
                  className="text-sm text-[#717182] hover:text-[#54b5e0] transition-colors"
                >
                  support@homesensus.com
                </a>
              </li>
              <li>
                <Link href="/#about" className="text-sm text-[#717182] hover:text-[#54b5e0] transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-[#717182] mb-4 md:mb-0">
              &copy; {currentYear} HomeSensus. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                href="/privacy"
                className="text-xs text-[#717182] hover:text-[#54b5e0] transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-[#717182] hover:text-[#54b5e0] transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/sms-optin"
                className="text-xs text-[#717182] hover:text-[#54b5e0] transition-colors"
              >
                SMS Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
