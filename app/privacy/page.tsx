import Link from "next/link"
import Navbar from "@/components/Navbar"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6">
            Privacy Policy
          </h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-[#717182] leading-relaxed mb-8">
              <strong>Effective Date:</strong> October 14, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                1. Introduction
              </h2>
              <p className="text-[#717182] leading-relaxed mb-4">
                HomeSensus ("we," "our," or "us") is committed to protecting your privacy. This Privacy
                Policy explains how we collect, use, disclose, and safeguard your information when you
                use our property management platform and related services (collectively, the "Services").
              </p>
              <p className="text-[#717182] leading-relaxed">
                By using our Services, you agree to the collection and use of information in accordance
                with this Privacy Policy. If you do not agree with our policies and practices, please do
                not use our Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                2. Information We Collect
              </h2>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                2.1 Personal Information
              </h3>
              <p className="text-[#717182] leading-relaxed mb-4">
                We collect information that identifies, relates to, or could reasonably be linked with
                you ("Personal Information"), including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#717182] mb-4">
                <li>Name, email address, and phone number</li>
                <li>Property addresses and lease information</li>
                <li>Payment information and banking details</li>
                <li>Government-issued identification (for identity verification)</li>
                <li>Communications and correspondence with us</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                2.2 SMS and Phone Number Information
              </h3>
              <p className="text-[#717182] leading-relaxed mb-4">
                If you opt in to receive SMS notifications:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#717182] mb-4">
                <li>We collect your mobile phone number</li>
                <li>We maintain records of your SMS consent preferences</li>
                <li>We log message delivery status and timestamps</li>
                <li>We track opt-out requests and preferences</li>
              </ul>
              <p className="text-[#717182] leading-relaxed mb-4">
                <strong>Important:</strong> Providing your phone number and consenting to SMS notifications
                is entirely optional. You can use all core features of HomeSensus without opting in to
                SMS communications.
              </p>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                2.3 Automatically Collected Information
              </h3>
              <p className="text-[#717182] leading-relaxed mb-4">
                When you access our Services, we automatically collect:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#717182]">
                <li>Device information (type, operating system, browser)</li>
                <li>IP address and location data</li>
                <li>Usage data (pages viewed, features used, time spent)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-[#717182] leading-relaxed mb-4">
                We use your information to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#717182] mb-4">
                <li>Provide and maintain our property management Services</li>
                <li>Process rent payments and financial transactions</li>
                <li>Facilitate communication between landlords and tenants</li>
                <li>Send service-related notifications and updates</li>
                <li>Improve and personalize your experience</li>
                <li>Detect and prevent fraud and security threats</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                3.1 SMS Communications
              </h3>
              <p className="text-[#717182] leading-relaxed mb-4">
                If you opt in to SMS notifications, we use your phone number to send:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#717182] mb-4">
                <li>Rent payment reminders and confirmations</li>
                <li>Maintenance request updates</li>
                <li>Lease renewal notifications</li>
                <li>Property announcements from your landlord</li>
                <li>Account security alerts</li>
              </ul>
              <p className="text-[#717182] leading-relaxed">
                All SMS messages are transactional or service-related. We do not send marketing or
                promotional SMS messages. You can opt out at any time by replying STOP to any message
                or updating your preferences in your account settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                4. How We Share Your Information
              </h2>
              <p className="text-[#717182] leading-relaxed mb-4">
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                4.1 With Other Users
              </h3>
              <p className="text-[#717182] leading-relaxed mb-4">
                Landlords and tenants may see each other's names, contact information, and property-related
                communications necessary for property management.
              </p>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                4.2 Service Providers
              </h3>
              <p className="text-[#717182] leading-relaxed mb-4">
                We share information with trusted third-party service providers who assist us in:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#717182] mb-4">
                <li>Payment processing (e.g., Stripe, Plaid)</li>
                <li>SMS delivery (e.g., Twilio)</li>
                <li>Cloud hosting and data storage</li>
                <li>Analytics and performance monitoring</li>
                <li>Customer support tools</li>
              </ul>
              <p className="text-[#717182] leading-relaxed mb-4">
                These providers are contractually obligated to protect your information and use it only
                for the services they provide to us.
              </p>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                4.3 Legal Requirements
              </h3>
              <p className="text-[#717182] leading-relaxed mb-4">
                We may disclose your information if required by law, court order, or government request,
                or to protect the rights, property, or safety of HomeSensus, our users, or others.
              </p>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                4.4 Business Transfers
              </h3>
              <p className="text-[#717182] leading-relaxed">
                If HomeSensus is involved in a merger, acquisition, or sale of assets, your information
                may be transferred. We will notify you before your information becomes subject to a
                different privacy policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                5. Data Security
              </h2>
              <p className="text-[#717182] leading-relaxed mb-4">
                We implement industry-standard security measures to protect your information, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#717182] mb-4">
                <li>Encryption of data in transit (TLS/SSL) and at rest</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection practices</li>
              </ul>
              <p className="text-[#717182] leading-relaxed">
                While we strive to protect your information, no method of transmission or storage is
                100% secure. You are responsible for maintaining the confidentiality of your account
                credentials.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                6. Your Privacy Rights
              </h2>
              <p className="text-[#717182] leading-relaxed mb-4">
                Depending on your location, you may have the following rights:
              </p>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                6.1 Access and Portability
              </h3>
              <p className="text-[#717182] leading-relaxed mb-4">
                You can request a copy of your personal information in a portable format.
              </p>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                6.2 Correction
              </h3>
              <p className="text-[#717182] leading-relaxed mb-4">
                You can update or correct your information through your account settings or by contacting us.
              </p>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                6.3 Deletion
              </h3>
              <p className="text-[#717182] leading-relaxed mb-4">
                You can request deletion of your account and associated data, subject to legal retention
                requirements (e.g., tax records, lease agreements).
              </p>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                6.4 SMS Opt-Out
              </h3>
              <p className="text-[#717182] leading-relaxed mb-4">
                You can opt out of SMS notifications at any time by:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#717182] mb-4">
                <li>Replying STOP or UNSUBSCRIBE to any message</li>
                <li>Updating preferences in your account settings</li>
                <li>Contacting our support team</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                6.5 Marketing Communications
              </h3>
              <p className="text-[#717182] leading-relaxed">
                You can unsubscribe from marketing emails by clicking the unsubscribe link in any email
                or updating your preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                7. Data Retention
              </h2>
              <p className="text-[#717182] leading-relaxed mb-4">
                We retain your information for as long as necessary to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#717182] mb-4">
                <li>Provide our Services and fulfill transactions</li>
                <li>Comply with legal obligations (e.g., tax laws require 7 years retention)</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Maintain security and prevent fraud</li>
              </ul>
              <p className="text-[#717182] leading-relaxed">
                When you delete your account, we will delete or anonymize your information within 90 days,
                except where longer retention is required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                8. Children's Privacy
              </h2>
              <p className="text-[#717182] leading-relaxed">
                Our Services are not intended for individuals under 18 years of age. We do not knowingly
                collect personal information from children. If you believe we have collected information
                from a child, please contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                9. International Users
              </h2>
              <p className="text-[#717182] leading-relaxed">
                Our Services are operated from the United States. If you access our Services from outside
                the U.S., your information will be transferred to, stored, and processed in the U.S.,
                which may have different data protection laws than your jurisdiction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                10. TCPA and SMS Compliance
              </h2>
              <p className="text-[#717182] leading-relaxed mb-4">
                We comply with the Telephone Consumer Protection Act (TCPA) and related regulations:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#717182] mb-4">
                <li>We only send SMS messages to users who have provided express written consent</li>
                <li>Consent is not required to use our Services - SMS is entirely optional</li>
                <li>We honor opt-out requests immediately (within one message)</li>
                <li>We maintain records of all consent and opt-out requests</li>
                <li>We do not send SMS messages for marketing or promotional purposes</li>
              </ul>
              <p className="text-[#717182] leading-relaxed">
                For more information about SMS notifications, see our{" "}
                <Link href="/sms-optin" className="text-[#54b5e0] hover:underline">
                  SMS Opt-in Policy
                </Link>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                11. Changes to This Privacy Policy
              </h2>
              <p className="text-[#717182] leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of material
                changes by email or through our Services. Your continued use of our Services after
                changes become effective constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                12. Contact Us
              </h2>
              <p className="text-[#717182] leading-relaxed mb-4">
                If you have questions about this Privacy Policy or wish to exercise your privacy rights,
                please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-[#0a0a0a] font-semibold mb-2">HomeSensus</p>
                <p className="text-[#717182]">Email: <a href="mailto:privacy@homesensus.com" className="text-[#54b5e0] hover:underline">privacy@homesensus.com</a></p>
                <p className="text-[#717182]">Support: <a href="mailto:support@homesensus.com" className="text-[#54b5e0] hover:underline">support@homesensus.com</a></p>
                <p className="text-[#717182] mt-4">
                  Website: <a href="https://www.homesensus.com" target="_blank" rel="noopener noreferrer" className="text-[#54b5e0] hover:underline">www.homesensus.com</a>
                </p>
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
