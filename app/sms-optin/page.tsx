import Link from "next/link"
import Navbar from "@/components/Navbar"

export default function SmsOptInPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6">
            SMS Notifications
          </h1>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                About HomeSensus SMS Communications
              </h2>
              <p className="text-[#717182] leading-relaxed mb-4">
                Tenants and landlords who use the HomeSensus property management platform can
                receive optional text message notifications about rent reminders, maintenance updates,
                and lease renewals.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                How to Opt In
              </h2>
              <p className="text-[#717182] leading-relaxed mb-4">
                During the onboarding process on the HomeSensus platform, you will have the option
                to receive SMS notifications. To opt in:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-[#717182] mb-4">
                <li>Enter your mobile phone number during account setup</li>
                <li>Check the consent box that reads: <em>"I agree to receive SMS updates about rent payments,
                    maintenance requests, and lease notifications from HomeSensus on behalf of my landlord."</em></li>
                <li>Confirm your preferences</li>
              </ol>
              <p className="text-[#717182] leading-relaxed mb-4">
                After opting in, you will receive a welcome message with instructions on how to manage
                your preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                Types of Messages You May Receive
              </h2>
              <ul className="list-disc list-inside space-y-2 text-[#717182]">
                <li>Rent payment reminders and confirmations</li>
                <li>Maintenance request updates and scheduling</li>
                <li>Lease renewal notifications</li>
                <li>Important property announcements</li>
                <li>Account security alerts</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                Message Frequency &amp; Charges
              </h2>
              <p className="text-[#717182] leading-relaxed mb-4">
                Message frequency varies based on your lease activity and property management needs.
                You may receive up to 10 messages per month. Standard message and data rates may apply
                from your mobile carrier. HomeSensus does not charge for SMS notifications.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                How to Opt Out
              </h2>
              <p className="text-[#717182] leading-relaxed mb-4">
                You can opt out of SMS notifications at any time using any of these methods:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#717182] mb-4">
                <li><strong>Text STOP:</strong> Reply <code className="bg-gray-100 px-2 py-1 rounded">STOP</code> to any message from HomeSensus</li>
                <li><strong>Text UNSUBSCRIBE:</strong> Reply <code className="bg-gray-100 px-2 py-1 rounded">UNSUBSCRIBE</code> to any message</li>
                <li><strong>Account Settings:</strong> Update your notification preferences in your HomeSensus account dashboard</li>
                <li><strong>Contact Support:</strong> Email us at <a href="mailto:support@homesensus.com" className="text-[#54b5e0] hover:underline">support@homesensus.com</a></li>
              </ul>
              <p className="text-[#717182] leading-relaxed">
                After opting out, you will receive one final confirmation message, and then you will
                no longer receive SMS notifications from HomeSensus.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                Getting Help
              </h2>
              <p className="text-[#717182] leading-relaxed mb-4">
                For assistance with SMS notifications, you can:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#717182]">
                <li>Reply <code className="bg-gray-100 px-2 py-1 rounded">HELP</code> to any message for automated support</li>
                <li>Email our support team at <a href="mailto:support@homesensus.com" className="text-[#54b5e0] hover:underline">support@homesensus.com</a></li>
                <li>Visit our help center (available after platform launch)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                Privacy &amp; Data Protection
              </h2>
              <p className="text-[#717182] leading-relaxed mb-4">
                Your phone number and SMS communications are protected under our{" "}
                <Link href="/privacy" className="text-[#54b5e0] hover:underline">
                  Privacy Policy
                </Link>
                . We never sell or share your personal information with third parties for marketing
                purposes. SMS messages are sent solely for transactional and service-related purposes
                related to your property management activities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                TCPA Compliance
              </h2>
              <p className="text-[#717182] leading-relaxed">
                HomeSensus complies with the Telephone Consumer Protection Act (TCPA) and all applicable
                regulations. We only send SMS messages to users who have provided express written consent.
                Consent is not a condition of purchase or use of our services - you may use HomeSensus
                without opting in to SMS notifications.
              </p>
            </section>

            <section className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-[#717182]">
                Last updated: October 14, 2025
              </p>
              <p className="text-sm text-[#717182] mt-4">
                Questions? Contact us at{" "}
                <a href="mailto:support@homesensus.com" className="text-[#54b5e0] hover:underline">
                  support@homesensus.com
                </a>
              </p>
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
