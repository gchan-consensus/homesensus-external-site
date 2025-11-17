import Link from "next/link"
import Navbar from "@/components/Navbar"

export default function SmsTermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6">
            HomeSensus SMS Terms of Service
          </h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-[#717182] leading-relaxed mb-8">
              <strong>Effective Date:</strong> November 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                1. Service Description
              </h2>
              <p className="text-[#717182] leading-relaxed">
                HomeSensus provides SMS notification services for maintenance coordination in residential rental properties.
                By opting in to our SMS service, you agree to receive text messages related to maintenance requests, vendor scheduling, and repair status updates.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                2. Opt-In and Consent
              </h2>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
                <p className="text-[#717182] leading-relaxed">
                  <strong>Your consent is required to receive SMS messages.</strong> By replying YES to our opt-in invitation or completing our web-based opt-in form,
                  you expressly consent to receive SMS messages from HomeSensus at the mobile number you provided.
                </p>
              </div>
              <p className="text-[#717182] leading-relaxed">
                Consent is not required as a condition of any purchase or lease agreement. You may decline SMS notifications and still use other HomeSensus services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                3. Message Types
              </h2>
              <p className="text-[#717182] leading-relaxed mb-4">
                You will receive the following types of SMS messages:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#717182]">
                <li><strong>Maintenance Request Updates:</strong> Status changes and progress updates on maintenance issues</li>
                <li><strong>Vendor Scheduling:</strong> Appointment confirmations and scheduling coordination</li>
                <li><strong>Completion Notifications:</strong> Confirmation that repairs have been completed</li>
                <li><strong>Service Messages:</strong> Opt-in confirmations, opt-out confirmations, and help responses</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                4. Message Frequency
              </h2>
              <p className="text-[#717182] leading-relaxed mb-4">
                Message frequency varies depending on maintenance activity:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#717182]">
                <li>Typical: 1-5 messages per maintenance request</li>
                <li>Monthly average: Varies based on property maintenance needs</li>
                <li>No marketing or promotional messages will be sent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                5. Costs
              </h2>
              <p className="text-[#717182] leading-relaxed">
                <strong>Message and data rates may apply.</strong> Standard messaging rates from your mobile carrier apply to messages sent to and from our service.
                HomeSensus does not charge for SMS messages, but your carrier may.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                6. Opt-Out Instructions
              </h2>
              <p className="text-[#717182] leading-relaxed mb-4">
                You can opt-out of SMS notifications at any time by:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#717182] mb-4">
                <li>Replying <code className="bg-gray-100 px-2 py-1 rounded">STOP</code> to any message</li>
                <li>Replying <code className="bg-gray-100 px-2 py-1 rounded">UNSUBSCRIBE</code>, <code className="bg-gray-100 px-2 py-1 rounded">CANCEL</code>, <code className="bg-gray-100 px-2 py-1 rounded">END</code>, or <code className="bg-gray-100 px-2 py-1 rounded">QUIT</code></li>
              </ul>
              <p className="text-[#717182] leading-relaxed mb-2">
                Upon opting out, you will receive a confirmation message:
              </p>
              <div className="bg-green-50 border border-green-300 p-4 rounded-lg font-mono text-sm mb-4">
                You've been unsubscribed from HomeSensus notifications. You will no longer receive messages. Reply START to re-subscribe.
              </div>
              <p className="text-[#717182] leading-relaxed">
                Opt-out requests are processed promptly and honored within 10 days.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                7. Help and Support
              </h2>
              <p className="text-[#717182] leading-relaxed mb-4">
                For assistance with SMS services:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#717182] mb-4">
                <li>Reply <code className="bg-gray-100 px-2 py-1 rounded">HELP</code> to any message for support information</li>
                <li>Email: <a href="mailto:support@homesensus.com" className="text-[#54b5e0] hover:underline">support@homesensus.com</a></li>
              </ul>
              <p className="text-[#717182] leading-relaxed mb-2">
                Help response:
              </p>
              <div className="bg-green-50 border border-green-300 p-4 rounded-lg font-mono text-sm">
                HomeSensus SMS Help: You are subscribed to maintenance notifications. Reply STOP to unsubscribe. Contact support@homesensus.com for assistance. Msg &amp; data rates may apply.
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                8. Privacy
              </h2>
              <p className="text-[#717182] leading-relaxed mb-4">
                Your mobile number and SMS consent information are protected under our{" "}
                <Link href="/compliance/privacy-policy" className="text-[#54b5e0] hover:underline">
                  Privacy Policy
                </Link>
                . Key points:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#717182]">
                <li>We do NOT share your mobile information with third parties for marketing purposes</li>
                <li>Your information is used solely for maintenance coordination services</li>
                <li>We maintain secure records of all consent and communication</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                9. Supported Carriers
              </h2>
              <p className="text-[#717182] leading-relaxed mb-4">
                Our SMS service is compatible with all major U.S. mobile carriers, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#717182]">
                <li>AT&amp;T</li>
                <li>Verizon Wireless</li>
                <li>T-Mobile</li>
                <li>Sprint</li>
                <li>And most regional carriers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                10. Disclaimer
              </h2>
              <p className="text-[#717182] leading-relaxed mb-4">
                SMS delivery is subject to mobile carrier networks and may be affected by:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#717182] mb-4">
                <li>Network availability and coverage</li>
                <li>Device compatibility</li>
                <li>Carrier policies</li>
                <li>Technical issues beyond our control</li>
              </ul>
              <p className="text-[#717182] leading-relaxed">
                HomeSensus is not responsible for delays or failures in message delivery caused by factors outside our control.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                11. Changes to Terms
              </h2>
              <p className="text-[#717182] leading-relaxed">
                We reserve the right to modify these terms at any time. Continued use of the SMS service after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                12. Contact Information
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-[#0a0a0a] font-semibold mb-2">HomeSensus</p>
                <p className="text-[#717182]">
                  Email:{" "}
                  <a href="mailto:support@homesensus.com" className="text-[#54b5e0] hover:underline">
                    support@homesensus.com
                  </a>
                </p>
                <p className="text-[#717182]">
                  Website:{" "}
                  <a href="https://www.homesensus.com" target="_blank" rel="noopener noreferrer" className="text-[#54b5e0] hover:underline">
                    www.homesensus.com
                  </a>
                </p>
              </div>
            </section>

            <section className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-[#717182] font-semibold mb-4">
                HomeSensus
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/compliance/sms-optin-workflow" className="text-[#54b5e0] hover:underline">
                  SMS Opt-In Workflow
                </Link>
                <span className="text-gray-300">|</span>
                <Link href="/compliance/privacy-policy" className="text-[#54b5e0] hover:underline">
                  Privacy Policy
                </Link>
              </div>
            </section>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-[#54b5e0] hover:underline font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
