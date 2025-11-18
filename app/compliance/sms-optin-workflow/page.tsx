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
                This workflow ensures TCPA compliance by obtaining <strong>direct consent from the message recipient (tenant)
                BEFORE any SMS messages are sent</strong>. The landlord initiates an email invitation, and the tenant must
                explicitly consent via web form before receiving any text messages.
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
                  Landlord Initiates Email Invitation
                </h3>
                <p className="text-[#717182] leading-relaxed mb-4">
                  The landlord adds their tenant's contact information to the HomeSensus system.
                  This is <strong>NOT consent</strong> — it only triggers an <strong>email invitation</strong>.
                  <strong className="text-blue-600"> No SMS messages are sent at this stage.</strong>
                </p>
                <div className="bg-indigo-50 p-4 rounded-lg text-center">
                  <Image
                    src="/images/design-mode/landlord-invitation.png"
                    alt="Landlord Portal - Add Tenant Form showing phone number and email fields"
                    width={600}
                    height={400}
                    className="mx-auto rounded-lg border-2 border-indigo-200"
                  />
                  <p className="text-sm text-[#717182] mt-2">
                    Landlord portal - tenant will receive an EMAIL invitation (not SMS)
                  </p>
                </div>
              </div>

              {/* Step 2 - NEW */}
              <div className="bg-gray-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3">
                  <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm mr-2">2</span>
                  Email Invitation Sent to Tenant
                </h3>
                <p className="text-[#717182] leading-relaxed mb-4">
                  HomeSensus sends an <strong>email</strong> to the tenant with a unique link to the opt-in form.
                  This is the initial source where the tenant learns about the SMS service.
                </p>
                <div className="bg-indigo-50 p-4 rounded-lg text-center">
                  <p className="text-[#717182] italic mb-2">[Screenshot: Email Invitation]</p>
                  <div className="bg-white p-6 rounded border-2 border-indigo-200 text-left max-w-md mx-auto">
                    <p className="text-sm text-[#0a0a0a] font-semibold mb-2">Subject: Set Up Maintenance Notifications</p>
                    <p className="text-xs text-[#717182] mb-4">
                      Hi [Tenant], your landlord has set up maintenance coordination via HomeSensus
                      for [Property Address].
                    </p>
                    <p className="text-xs text-[#717182] mb-3">
                      To enable SMS notifications for maintenance updates:
                    </p>
                    <div className="bg-blue-600 text-white text-center py-2 px-4 rounded text-xs">
                      Enable SMS Notifications
                    </div>
                    <p className="text-xs text-[#717182] mt-3 italic">
                      → homesensus.com/optin?token=abc123...
                    </p>
                  </div>
                  <p className="text-sm text-[#717182] mt-2">
                    Email invitation with link to web-based opt-in form
                  </p>
                </div>
              </div>

              {/* Step 3 - NEW - CRITICAL FOR TWILIO */}
              <div className="bg-gray-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3">
                  <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm mr-2">3</span>
                  Tenant Visits Opt-In Web Form
                </h3>
                <div className="bg-blue-50 border border-blue-300 p-3 rounded-lg mb-4">
                  <p className="text-sm text-blue-900 font-semibold">
                    ⭐ Critical Compliance Point: Consent obtained BEFORE any SMS
                  </p>
                </div>
                <p className="text-[#717182] leading-relaxed mb-4">
                  The tenant clicks the link in the email and arrives at a web form where they can review
                  and provide explicit consent. All TCPA-required disclosures are displayed at the point of collection.
                </p>
                <div className="bg-indigo-50 p-4 rounded-lg text-center">
                  <p className="text-[#717182] italic mb-2">[Screenshot: Web Opt-In Form - CRITICAL for Twilio]</p>
                  <div className="bg-white p-6 rounded border-2 border-indigo-200 text-left max-w-md mx-auto">
                    <p className="text-sm text-[#0a0a0a] font-bold mb-4">Enable SMS Notifications</p>
                    <div className="text-xs space-y-2 mb-4">
                      <p><strong>Property:</strong> 123 Main St, Apt 2B</p>
                      <p><strong>Phone:</strong> (555) 123-4567</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded text-xs mb-4">
                      <p className="font-semibold mb-2">Message Details:</p>
                      <ul className="list-disc list-inside space-y-1 text-xs">
                        <li>Types: Maintenance updates, scheduling</li>
                        <li>Frequency: 1-5 msgs per request</li>
                        <li>Msg & data rates may apply</li>
                        <li>Reply STOP to opt-out anytime</li>
                      </ul>
                    </div>
                    <div className="flex items-start gap-2 mb-3">
                      <input type="checkbox" className="mt-1" />
                      <p className="text-xs">
                        <strong>I consent to receive SMS</strong> from HomeSensus for maintenance coordination
                      </p>
                    </div>
                    <div className="bg-blue-600 text-white text-center py-2 rounded text-xs mb-3">
                      Confirm and Enable SMS
                    </div>
                    <div className="text-center text-xs text-[#54b5e0]">
                      <a href="#" className="underline">Privacy Policy</a>
                      {" | "}
                      <a href="#" className="underline">SMS Terms</a>
                    </div>
                  </div>
                  <p className="text-sm text-[#717182] mt-2">
                    Web form showing all consent disclosures at point of collection
                  </p>
                </div>
              </div>

              {/* Step 4 - NEW */}
              <div className="bg-gray-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3">
                  <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm mr-2">4</span>
                  Tenant Submits Consent Form
                </h3>
                <p className="text-[#717182] leading-relaxed mb-4">
                  The tenant checks the consent checkbox and clicks "Confirm and Enable SMS."
                  This web form submission is their <strong>direct consent</strong> to receive SMS messages.
                </p>
                <p className="text-[#717182] leading-relaxed">
                  The system records the consent with timestamp, IP address, and user agent for compliance audit trail.
                  Only <strong>after</strong> this consent is recorded does the system proceed to send any SMS.
                </p>
              </div>

              {/* Step 5 - Verification SMS (FIRST MESSAGE) */}
              <div className="bg-gray-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3">
                  <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm mr-2">5</span>
                  Verification SMS Sent (First Message)
                </h3>
                <div className="bg-green-50 border border-green-300 p-3 rounded-lg mb-4">
                  <p className="text-sm text-green-900 font-semibold">
                    ✅ This is the FIRST SMS sent - only after web consent obtained
                  </p>
                </div>
                <p className="text-[#717182] leading-relaxed mb-4">
                  After the tenant submits the web form, HomeSensus sends a verification SMS to confirm
                  they own the phone number:
                </p>
                <div className="bg-green-50 border border-green-300 p-4 rounded-lg font-mono text-sm">
                  HomeSensus: Please reply YES to confirm SMS notifications for maintenance at 123 Main St.
                  Reply STOP to cancel. Msg &amp; data rates may apply.
                  Privacy: homesensus.com/compliance/privacy-policy
                </div>
              </div>

              {/* Step 6 - Tenant Replies YES */}
              <div className="bg-gray-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3">
                  <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm mr-2">6</span>
                  Tenant Confirms Verification
                </h3>
                <p className="text-[#717182] leading-relaxed mb-4">
                  The tenant replies "YES" to verify they own the phone number and confirm the opt-in.
                </p>
                <div className="bg-indigo-50 p-4 rounded-lg text-center mb-4">
                  <Image
                    src="/images/design-mode/tenant-consent.png"
                    alt="SMS conversation showing verification request and tenant replying YES"
                    width={400}
                    height={500}
                    className="mx-auto rounded-lg border-2 border-indigo-200"
                  />
                  <p className="text-sm text-[#717182] mt-2">
                    Tenant confirms verification by replying YES
                  </p>
                </div>
                <p className="text-[#717182] leading-relaxed">
                  <strong>Alternative keywords accepted:</strong> YES, Y, CONFIRM, START
                </p>
              </div>

              {/* Step 7 - Confirmation & Service Active */}
              <div className="bg-gray-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3">
                  <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm mr-2">7</span>
                  Confirmation Sent & Service Activated
                </h3>
                <p className="text-[#717182] leading-relaxed mb-4">
                  Upon receiving the YES reply, the system confirms the subscription:
                </p>
                <div className="bg-green-50 border border-green-300 p-4 rounded-lg font-mono text-sm mb-4">
                  Thanks! You're now opted in to maintenance notifications from HomeSensus for 123 Main St.
                  Reply STOP anytime to opt-out. Msg &amp; data rates apply.
                </div>
                <p className="text-[#717182] leading-relaxed mb-4">
                  Only after this verification is complete can the system send maintenance-related notifications.
                </p>
                <p className="text-[#717182] leading-relaxed mb-2">
                  <strong>Example maintenance notification:</strong>
                </p>
                <div className="bg-green-50 border border-green-300 p-4 rounded-lg font-mono text-sm">
                  HomeSensus: Maintenance Update - 123 Main St<br />
                  Issue: Plumbing repair<br />
                  Vendor: ABC Plumbing scheduled for Nov 22, 2PM<br />
                  Reply STOP to opt-out | Questions: support@homesensus.com
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
                <li>Timestamp of email invitation sent</li>
                <li>Timestamp of web form viewed</li>
                <li>Timestamp of web consent form submitted</li>
                <li>IP address and user agent of consent submission</li>
                <li>Method of consent (web form)</li>
                <li>Timestamp of verification SMS sent</li>
                <li>Timestamp of tenant SMS verification reply</li>
                <li>Timestamp of any opt-out requests</li>
                <li>All message logs and consent records (retained for 5 years)</li>
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
