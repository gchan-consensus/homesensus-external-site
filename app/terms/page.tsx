import Link from "next/link"
import Navbar from "@/components/Navbar"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6">
            Terms of Service
          </h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-[#717182] leading-relaxed mb-8">
              <strong>Effective Date:</strong> October 14, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-[#717182] leading-relaxed mb-4">
                Welcome to HomeSensus. These Terms of Service ("Terms") govern your access to and use
                of the HomeSensus platform, website, mobile applications, and related services
                (collectively, the "Services").
              </p>
              <p className="text-[#717182] leading-relaxed mb-4">
                By accessing or using our Services, you agree to be bound by these Terms and our{" "}
                <Link href="/privacy" className="text-[#54b5e0] hover:underline">
                  Privacy Policy
                </Link>
                . If you do not agree to these Terms, you may not use our Services.
              </p>
              <p className="text-[#717182] leading-relaxed">
                We may modify these Terms at any time. We will notify you of material changes via
                email or through the Services. Your continued use after such changes constitutes
                acceptance of the modified Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                2. Eligibility
              </h2>
              <p className="text-[#717182] leading-relaxed mb-4">
                You must be at least 18 years old and legally capable of entering into binding
                contracts to use our Services. By using our Services, you represent and warrant that
                you meet these requirements.
              </p>
              <p className="text-[#717182] leading-relaxed">
                If you are using the Services on behalf of an organization, you represent that you
                have the authority to bind that organization to these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                3. Account Registration and Security
              </h2>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                3.1 Account Creation
              </h3>
              <p className="text-[#717182] leading-relaxed mb-4">
                To access certain features, you must create an account. You agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#717182] mb-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your information to keep it accurate</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized access</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                3.2 Account Responsibility
              </h3>
              <p className="text-[#717182] leading-relaxed">
                You are responsible for all activities that occur under your account. We are not
                liable for any loss or damage arising from your failure to maintain account security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                4. Use of Services
              </h2>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                4.1 Permitted Use
              </h3>
              <p className="text-[#717182] leading-relaxed mb-4">
                HomeSensus provides property management tools for landlords, property managers, tenants,
                and HOA members. You may use our Services only for lawful purposes and in accordance
                with these Terms.
              </p>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                4.2 Prohibited Conduct
              </h3>
              <p className="text-[#717182] leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#717182] mb-4">
                <li>Violate any applicable laws, regulations, or third-party rights</li>
                <li>Use the Services for fraudulent or illegal activities</li>
                <li>Interfere with or disrupt the Services or servers</li>
                <li>Attempt to gain unauthorized access to any part of the Services</li>
                <li>Transmit viruses, malware, or other harmful code</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Impersonate any person or entity</li>
                <li>Scrape, data mine, or use automated tools without permission</li>
                <li>Reverse engineer or attempt to extract source code</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                5. SMS Notifications and Communications
              </h2>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                5.1 Opt-In Consent
              </h3>
              <p className="text-[#717182] leading-relaxed mb-4">
                By providing your mobile phone number and checking the SMS consent box during onboarding,
                you expressly consent to receive text messages from HomeSensus and/or on behalf of your
                landlord or property manager regarding:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#717182] mb-4">
                <li>Rent payment reminders and confirmations</li>
                <li>Maintenance request updates and scheduling</li>
                <li>Lease renewal notifications</li>
                <li>Property announcements and emergency alerts</li>
                <li>Account security and verification messages</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                5.2 Message Frequency and Charges
              </h3>
              <p className="text-[#717182] leading-relaxed mb-4">
                Message frequency varies based on your property management activities. You may receive
                up to 10 messages per month. Standard message and data rates from your mobile carrier
                may apply. HomeSensus does not charge for SMS notifications.
              </p>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                5.3 Consent Is Not Required
              </h3>
              <p className="text-[#717182] leading-relaxed mb-4">
                <strong>Important:</strong> Consenting to receive SMS notifications is not a condition
                of using HomeSensus. You may use all features of our Services without opting in to SMS
                communications. Alternative notification methods (email, in-app) are available.
              </p>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                5.4 Opting Out
              </h3>
              <p className="text-[#717182] leading-relaxed mb-4">
                You may opt out of SMS notifications at any time by:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#717182] mb-4">
                <li>Replying <code className="bg-gray-100 px-2 py-1 rounded">STOP</code> or <code className="bg-gray-100 px-2 py-1 rounded">UNSUBSCRIBE</code> to any SMS message</li>
                <li>Updating your notification preferences in your account settings</li>
                <li>Contacting support at <a href="mailto:support@homesensus.com" className="text-[#54b5e0] hover:underline">support@homesensus.com</a></li>
              </ul>
              <p className="text-[#717182] leading-relaxed mb-4">
                After opting out, you will receive one final confirmation message, and then no further
                SMS communications will be sent.
              </p>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                5.5 Getting Help
              </h3>
              <p className="text-[#717182] leading-relaxed mb-4">
                For SMS support, reply <code className="bg-gray-100 px-2 py-1 rounded">HELP</code> to
                any message or visit our{" "}
                <Link href="/sms-optin" className="text-[#54b5e0] hover:underline">
                  SMS Opt-in Policy
                </Link>
                .
              </p>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                5.6 TCPA Compliance
              </h3>
              <p className="text-[#717182] leading-relaxed">
                Our SMS communications comply with the Telephone Consumer Protection Act (TCPA) and
                related regulations. We maintain records of all consent and opt-out requests.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                6. Payment Terms
              </h2>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                6.1 Fees
              </h3>
              <p className="text-[#717182] leading-relaxed mb-4">
                Certain features of the Services may require payment of fees. All fees are
                non-refundable unless otherwise specified. We reserve the right to change our fees
                with 30 days' notice.
              </p>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                6.2 Rent Payments
              </h3>
              <p className="text-[#717182] leading-relaxed mb-4">
                If you use our Services to pay rent, you authorize us to facilitate such payments on
                your behalf through our third-party payment processors. You are responsible for ensuring
                sufficient funds and timely payments.
              </p>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                6.3 Third-Party Fees
              </h3>
              <p className="text-[#717182] leading-relaxed">
                You may incur fees from third parties (banks, payment processors, mobile carriers)
                in connection with using our Services. HomeSensus is not responsible for such fees.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                7. Intellectual Property
              </h2>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                7.1 Our Rights
              </h3>
              <p className="text-[#717182] leading-relaxed mb-4">
                The Services and all content, features, and functionality are owned by HomeSensus and
                are protected by copyright, trademark, and other intellectual property laws. You may
                not copy, modify, distribute, or create derivative works without our permission.
              </p>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                7.2 Your Content
              </h3>
              <p className="text-[#717182] leading-relaxed mb-4">
                You retain ownership of any content you submit through the Services ("User Content").
                By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free
                license to use, reproduce, and display such content solely to provide the Services.
              </p>
              <p className="text-[#717182] leading-relaxed">
                You represent that you have all necessary rights to your User Content and that it does
                not violate any third-party rights or laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                8. Privacy and Data Protection
              </h2>
              <p className="text-[#717182] leading-relaxed mb-4">
                Our collection and use of your information is governed by our{" "}
                <Link href="/privacy" className="text-[#54b5e0] hover:underline">
                  Privacy Policy
                </Link>
                , which is incorporated into these Terms by reference.
              </p>
              <p className="text-[#717182] leading-relaxed">
                By using our Services, you consent to our data practices as described in the Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                9. Disclaimers and Limitations of Liability
              </h2>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                9.1 As-Is Basis
              </h3>
              <p className="text-[#717182] leading-relaxed mb-4">
                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND,
                EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                9.2 No Guarantee
              </h3>
              <p className="text-[#717182] leading-relaxed mb-4">
                We do not guarantee that the Services will be uninterrupted, secure, or error-free.
                We are not responsible for any delays, failures, or errors in the Services or any
                loss of data.
              </p>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                9.3 Limitation of Liability
              </h3>
              <p className="text-[#717182] leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, HOMESENSUS SHALL NOT BE LIABLE FOR ANY
                INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF
                PROFITS, REVENUE, DATA, OR USE, ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES.
              </p>
              <p className="text-[#717182] leading-relaxed">
                OUR TOTAL LIABILITY SHALL NOT EXCEED THE GREATER OF (A) $100 OR (B) THE AMOUNT YOU
                PAID US IN THE 12 MONTHS PRECEDING THE CLAIM.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                10. Indemnification
              </h2>
              <p className="text-[#717182] leading-relaxed">
                You agree to indemnify, defend, and hold harmless HomeSensus and its officers, directors,
                employees, and agents from any claims, liabilities, damages, losses, and expenses
                (including legal fees) arising out of or related to your use of the Services, your User
                Content, or your violation of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                11. Termination
              </h2>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                11.1 By You
              </h3>
              <p className="text-[#717182] leading-relaxed mb-4">
                You may terminate your account at any time through your account settings or by contacting
                support.
              </p>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                11.2 By Us
              </h3>
              <p className="text-[#717182] leading-relaxed mb-4">
                We may suspend or terminate your access to the Services at any time, with or without
                cause, with or without notice. We may also remove or disable any User Content.
              </p>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                11.3 Effect of Termination
              </h3>
              <p className="text-[#717182] leading-relaxed">
                Upon termination, your right to use the Services will cease immediately. Sections of
                these Terms that by their nature should survive termination will continue to apply.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                12. Dispute Resolution
              </h2>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                12.1 Informal Resolution
              </h3>
              <p className="text-[#717182] leading-relaxed mb-4">
                Before filing any formal claim, you agree to contact us at{" "}
                <a href="mailto:support@homesensus.com" className="text-[#54b5e0] hover:underline">
                  support@homesensus.com
                </a>{" "}
                to attempt to resolve the dispute informally.
              </p>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                12.2 Governing Law
              </h3>
              <p className="text-[#717182] leading-relaxed mb-4">
                These Terms are governed by the laws of the State of [Your State], without regard to
                conflict of law principles.
              </p>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                12.3 Arbitration
              </h3>
              <p className="text-[#717182] leading-relaxed">
                Any dispute not resolved informally shall be resolved through binding arbitration in
                accordance with the rules of the American Arbitration Association. You waive your right
                to participate in class actions or class arbitrations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                13. General Provisions
              </h2>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                13.1 Entire Agreement
              </h3>
              <p className="text-[#717182] leading-relaxed mb-4">
                These Terms, together with our Privacy Policy, constitute the entire agreement between
                you and HomeSensus regarding the Services.
              </p>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                13.2 Severability
              </h3>
              <p className="text-[#717182] leading-relaxed mb-4">
                If any provision of these Terms is found to be unenforceable, the remaining provisions
                will remain in full effect.
              </p>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                13.3 Waiver
              </h3>
              <p className="text-[#717182] leading-relaxed mb-4">
                Our failure to enforce any right or provision in these Terms does not constitute a waiver
                of that right or provision.
              </p>

              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3 mt-6">
                13.4 Assignment
              </h3>
              <p className="text-[#717182] leading-relaxed">
                You may not assign or transfer these Terms without our consent. We may assign our rights
                and obligations without restriction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                14. Contact Information
              </h2>
              <p className="text-[#717182] leading-relaxed mb-4">
                If you have questions about these Terms, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-[#0a0a0a] font-semibold mb-2">HomeSensus</p>
                <p className="text-[#717182]">Email: <a href="mailto:support@homesensus.com" className="text-[#54b5e0] hover:underline">support@homesensus.com</a></p>
                <p className="text-[#717182]">Legal: <a href="mailto:legal@homesensus.com" className="text-[#54b5e0] hover:underline">legal@homesensus.com</a></p>
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
