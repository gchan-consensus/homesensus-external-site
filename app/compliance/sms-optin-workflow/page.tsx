import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/Navbar"

export default function SmsOptInWorkflowPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6">
            HomeSensus SMS Opt-In Workflow
          </h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-[#717182] leading-relaxed mb-4">
              <strong>Last Updated:</strong> November 2025
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mb-8">
              <p className="text-[#0a0a0a] font-semibold mb-2">Compliance Note</p>
              <p className="text-[#717182]">
                This workflow ensures TCPA compliance by obtaining <strong>direct consent from the message recipient (tenant)</strong>,
                not through third-party consent. The landlord initiates an invitation, but the tenant must explicitly consent.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                Overview
              </h2>
              <p className="text-[#717182] leading-relaxed mb-4">
                HomeSensus provides AI-powered maintenance coordination services for residential landlords.
                Tenants receive SMS notifications about maintenance request status, vendor scheduling, and repair confirmations.
                This document outlines our TCPA-compliant opt-in process.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                Tenant Self-Consent Process
              </h2>

              {/* Step 1 */}
              <div className="bg-gray-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3">
                  <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm mr-2">1</span>
                  Landlord Initiates Invitation
                </h3>
                <p className="text-[#717182] leading-relaxed mb-4">
                  The landlord adds their tenant's phone number to the HomeSensus system.
                  This is <strong>NOT consent</strong> — it only initiates an invitation.
                </p>
                <div className="bg-indigo-50 p-4 rounded-lg text-center">
                  <Image
                    src="/images/design-mode/landlord-invitation.png"
                    alt="Landlord Portal - Add Tenant Form showing phone number field and opt-in invitation note"
                    width={600}
                    height={400}
                    className="mx-auto rounded-lg border-2 border-indigo-200"
                  />
                  <p className="text-sm text-[#717182] mt-2">
                    Landlord portal showing the Add Tenant form with opt-in invitation
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-gray-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3">
                  <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm mr-2">2</span>
                  System Sends Opt-In Request to Tenant
                </h3>
                <p className="text-[#717182] leading-relaxed mb-4">
                  HomeSensus automatically sends the first SMS to the tenant requesting their consent:
                </p>
                <div className="bg-green-50 border border-green-300 p-4 rounded-lg font-mono text-sm mb-4">
                  Your landlord [LANDLORD_NAME] has set up maintenance notifications via HomeSensus. Reply YES to opt-in, or STOP to decline. Msg frequency varies. Msg &amp; data rates may apply. Privacy: homesensus.com/compliance/privacy-policy
                </div>
                <p className="text-[#717182] leading-relaxed mb-2">
                  <strong>Key elements included:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 text-[#717182]">
                  <li>Business name (HomeSensus) explicitly stated</li>
                  <li>Clear opt-in instruction (Reply YES)</li>
                  <li>Easy opt-out option (STOP to decline)</li>
                  <li>Message frequency disclosure (varies)</li>
                  <li>Data rates disclosure</li>
                  <li>Privacy policy link</li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="bg-gray-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3">
                  <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm mr-2">3</span>
                  Tenant Provides Direct Consent
                </h3>
                <p className="text-[#717182] leading-relaxed mb-4">
                  The tenant replies "YES" to provide their explicit consent. This is the tenant's direct opt-in action.
                </p>
                <div className="bg-indigo-50 p-4 rounded-lg text-center mb-4">
                  <Image
                    src="/images/design-mode/tenant-consent.png"
                    alt="SMS conversation showing tenant replying YES to opt-in request"
                    width={400}
                    height={500}
                    className="mx-auto rounded-lg border-2 border-indigo-200"
                  />
                  <p className="text-sm text-[#717182] mt-2">
                    Tenant provides direct consent by replying YES
                  </p>
                </div>
                <p className="text-[#717182] leading-relaxed">
                  <strong>Alternative keywords accepted:</strong> YES, Y, SUBSCRIBE, OPT-IN, START
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-gray-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3">
                  <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm mr-2">4</span>
                  Confirmation Message Sent
                </h3>
                <p className="text-[#717182] leading-relaxed mb-4">
                  Upon receiving consent, the system confirms the subscription:
                </p>
                <div className="bg-green-50 border border-green-300 p-4 rounded-lg font-mono text-sm">
                  Thanks for opting in! You'll receive maintenance notifications from HomeSensus. Reply STOP to opt-out anytime. Msg &amp; data rates apply.
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-gray-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3">
                  <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm mr-2">5</span>
                  Service Activated
                </h3>
                <p className="text-[#717182] leading-relaxed mb-4">
                  Only after tenant consent is confirmed can the system send maintenance-related notifications.
                </p>
                <p className="text-[#717182] leading-relaxed mb-2">
                  <strong>Example maintenance notification:</strong>
                </p>
                <div className="bg-green-50 border border-green-300 p-4 rounded-lg font-mono text-sm">
                  123 Main St Maintenance: Plumbing Issue<br />
                  Vendor: ABC Plumbing<br />
                  Scheduled: Nov 20, 2025 2:00 PM<br />
                  Reply with questions or STOP to opt-out.
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                Opt-Out Process
              </h2>
              <div className="bg-gray-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3">
                  Tenant Opt-Out
                </h3>
                <p className="text-[#717182] leading-relaxed mb-4">
                  Tenants can opt-out at any time by replying:
                </p>
                <ul className="list-disc list-inside space-y-1 text-[#717182] mb-4">
                  <li>STOP</li>
                  <li>UNSUBSCRIBE</li>
                  <li>CANCEL</li>
                  <li>END</li>
                  <li>QUIT</li>
                </ul>
                <p className="text-[#717182] leading-relaxed mb-2">
                  System immediately confirms opt-out:
                </p>
                <div className="bg-green-50 border border-green-300 p-4 rounded-lg font-mono text-sm mb-4">
                  You've been unsubscribed from HomeSensus notifications. You will no longer receive messages. Reply START to re-subscribe.
                </div>
                <p className="text-[#717182] leading-relaxed">
                  <strong>Opt-out requests are honored within 10 days</strong> per FCC requirements (effective April 2025).
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                Consent Record Keeping
              </h2>
              <p className="text-[#717182] leading-relaxed mb-4">
                HomeSensus maintains comprehensive audit trails including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#717182]">
                <li>Timestamp of opt-in invitation sent</li>
                <li>Timestamp of tenant consent received</li>
                <li>Method of consent (SMS reply)</li>
                <li>Timestamp of any opt-out requests</li>
                <li>All message logs</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                Message Types and Frequency
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-left text-[#0a0a0a]">Message Type</th>
                      <th className="border border-gray-300 p-3 text-left text-[#0a0a0a]">Purpose</th>
                      <th className="border border-gray-300 p-3 text-left text-[#0a0a0a]">Frequency</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 text-[#717182]">Maintenance Updates</td>
                      <td className="border border-gray-300 p-3 text-[#717182]">Status changes on maintenance requests</td>
                      <td className="border border-gray-300 p-3 text-[#717182]">1-3 per request</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 text-[#717182]">Vendor Scheduling</td>
                      <td className="border border-gray-300 p-3 text-[#717182]">Confirm repair appointment times</td>
                      <td className="border border-gray-300 p-3 text-[#717182]">1-2 per vendor visit</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 text-[#717182]">Completion Confirmations</td>
                      <td className="border border-gray-300 p-3 text-[#717182]">Verify repair was completed</td>
                      <td className="border border-gray-300 p-3 text-[#717182]">1 per request</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#717182] leading-relaxed mt-4">
                <strong>Total estimated frequency:</strong> 1-5 messages per maintenance request. Actual frequency varies based on maintenance activity.
              </p>
            </section>

            <section className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-[#717182] font-semibold mb-4">
                HomeSensus
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/compliance/privacy-policy" className="text-[#54b5e0] hover:underline">
                  Privacy Policy
                </Link>
                <span className="text-gray-300">|</span>
                <Link href="/compliance/sms-terms" className="text-[#54b5e0] hover:underline">
                  SMS Terms
                </Link>
              </div>
              <p className="text-sm text-[#717182] mt-4">
                Questions? Contact:{" "}
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
