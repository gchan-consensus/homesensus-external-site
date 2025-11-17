import Link from "next/link"
import Navbar from "@/components/Navbar"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6">
            HomeSensus Privacy Policy
          </h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-[#717182] leading-relaxed mb-2">
              <strong>Effective Date:</strong> November 2025
            </p>
            <p className="text-[#717182] leading-relaxed mb-8">
              <strong>Last Updated:</strong> November 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                1. Introduction
              </h2>
              <p className="text-[#717182] leading-relaxed">
                HomeSensus ("we," "us," or "our") provides AI-powered maintenance coordination services for residential landlords and their tenants.
                This Privacy Policy explains how we collect, use, and protect your personal information, including mobile phone numbers and SMS communications.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                2. Information We Collect
              </h2>
              <p className="text-[#717182] leading-relaxed mb-4">
                We collect the following types of information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#717182]">
                <li><strong>Contact Information:</strong> Name, email address, phone number, mailing address</li>
                <li><strong>Property Information:</strong> Rental property details for maintenance coordination</li>
                <li><strong>Communication Data:</strong> SMS messages sent to and from our service</li>
                <li><strong>Consent Records:</strong> Timestamps and methods of SMS opt-in and opt-out requests</li>
              </ul>
            </section>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg mb-8">
              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3">
                IMPORTANT: Mobile Information Sharing Policy
              </h3>
              <p className="text-[#717182] leading-relaxed mb-4">
                <strong>We do NOT share, sell, rent, or transfer your mobile phone number or SMS opt-in information with any third parties for marketing or promotional purposes.</strong>
              </p>
              <p className="text-[#717182] leading-relaxed">
                Mobile information is used solely for the purpose of providing maintenance coordination services as described in this policy.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-[#717182] leading-relaxed mb-4">
                Your information is used exclusively for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#717182]">
                <li>Sending maintenance-related SMS notifications (with your consent)</li>
                <li>Coordinating maintenance requests between landlords, tenants, and vendors</li>
                <li>Processing opt-in and opt-out requests</li>
                <li>Maintaining audit trails for compliance purposes</li>
                <li>Improving our services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                4. SMS Communications
              </h2>
              <p className="text-[#717182] leading-relaxed mb-4">
                When you opt-in to receive SMS notifications from HomeSensus:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#717182]">
                <li><strong>Message Types:</strong> Maintenance request updates, vendor scheduling confirmations, repair completion notifications</li>
                <li><strong>Message Frequency:</strong> Varies based on maintenance activity (typically 1-5 messages per maintenance request)</li>
                <li><strong>Message and Data Rates:</strong> Standard messaging and data rates from your mobile carrier may apply</li>
                <li><strong>Opt-Out:</strong> Reply STOP to any message to unsubscribe at any time</li>
                <li><strong>Help:</strong> Reply HELP for assistance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                5. Data Retention
              </h2>
              <p className="text-[#717182] leading-relaxed mb-4">
                We retain your information for the following periods:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#717182]">
                <li><strong>Active Users:</strong> Information retained while you are an active user of our services</li>
                <li><strong>Opt-Out Records:</strong> Maintained indefinitely for compliance purposes</li>
                <li><strong>Message Logs:</strong> Retained for 2 years for audit and compliance purposes</li>
                <li><strong>Consent Records:</strong> Retained for 5 years after consent is revoked</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                6. Third-Party Service Providers
              </h2>
              <p className="text-[#717182] leading-relaxed mb-4">
                We use the following third-party services to deliver our SMS functionality:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#717182] mb-4">
                <li><strong>Twilio:</strong> SMS delivery platform (messages are transmitted through Twilio's network)</li>
              </ul>
              <p className="text-[#717182] leading-relaxed">
                These providers are contractually obligated to protect your information and use it only for the services we engage them to provide.
              </p>
            </section>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg mb-8">
              <p className="text-[#717182] leading-relaxed">
                <strong>To reiterate:</strong> Your mobile information will NOT be shared with third parties or affiliates for marketing or promotional purposes under any circumstances.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                7. Your Rights
              </h2>
              <p className="text-[#717182] leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#717182]">
                <li>Opt-out of SMS communications at any time (reply STOP)</li>
                <li>Request access to your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information (subject to legal retention requirements)</li>
                <li>Receive a copy of your consent records</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                8. Security
              </h2>
              <p className="text-[#717182] leading-relaxed mb-4">
                We implement industry-standard security measures to protect your information, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#717182]">
                <li>Encrypted data transmission (HTTPS/TLS)</li>
                <li>Secure database storage</li>
                <li>Access controls and authentication</li>
                <li>Regular security audits</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                9. TCPA Compliance
              </h2>
              <p className="text-[#717182] leading-relaxed mb-4">
                HomeSensus complies with the Telephone Consumer Protection Act (TCPA) and related regulations:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#717182]">
                <li>We obtain express consent before sending SMS messages</li>
                <li>Consent is obtained directly from the message recipient</li>
                <li>We honor all opt-out requests promptly</li>
                <li>We maintain complete consent audit trails</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                10. Changes to This Policy
              </h2>
              <p className="text-[#717182] leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                11. Contact Us
              </h2>
              <p className="text-[#717182] leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-[#0a0a0a] font-semibold mb-2">HomeSensus</p>
                <p className="text-[#717182]">
                  Email:{" "}
                  <a href="mailto:privacy@homesensus.com" className="text-[#54b5e0] hover:underline">
                    privacy@homesensus.com
                  </a>
                </p>
                <p className="text-[#717182]">
                  Support:{" "}
                  <a href="mailto:support@homesensus.com" className="text-[#54b5e0] hover:underline">
                    support@homesensus.com
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
                <Link href="/compliance/sms-terms" className="text-[#54b5e0] hover:underline">
                  SMS Terms
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
