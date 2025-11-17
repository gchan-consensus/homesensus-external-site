# A2P 10DLC Compliance Pages Package

**For implementation on homesensus.com (external public website)**

**Purpose:** Create TCPA-compliant documentation pages to submit for Twilio A2P 10DLC campaign approval.

---

## Business Context (IMPORTANT - READ FIRST)

### What is HomeSensus?

HomeSensus is pivoting from a full property management platform to a focused **AI-powered maintenance concierge service** for small residential landlords (1-5 units).

### The Core Product: Maintenance Concierge via SMS

**Value Proposition:** "Text us your maintenance problems - we handle everything."

HomeSensus acts as an SMS-based intermediary between:
- **Tenants** (report maintenance issues via text)
- **Vendors** (receive job requests, coordinate scheduling)
- **Landlords** (get updates, approve payments)

### How It Works:

1. **Landlord signs up** and adds their tenants' phone numbers
2. **Tenants text** their maintenance issues to a shared HomeSensus number
3. **AI + human operators** triage issues, find vendors, coordinate repairs
4. **HomeSensus coordinates** scheduling between tenant and vendor via SMS
5. **HomeSensus verifies** work completion and facilitates payment

### Why These Compliance Pages Are Needed:

To send SMS messages to US phone numbers, HomeSensus must:
1. Register for **A2P 10DLC** (Application-to-Person 10-digit long code)
2. Demonstrate **TCPA compliance** (Telephone Consumer Protection Act)
3. Show that **tenants provide their own consent** (not landlord on their behalf)
4. Document the complete **opt-in workflow**

**Current blocker:** Twilio rejected our campaign because we couldn't verify our Call to Action (CTA) / opt-in process. These pages document our TCPA-compliant workflow where tenants self-consent.

### Key Business Model Details:

- **Target customers:** DIY landlords with 1-5 rental units
- **Revenue model:** Monthly subscription per unit
- **Primary interface:** SMS (not a mobile app)
- **AI involvement:** AI-first with human monitoring/intervention
- **Message types:** Transactional/informational (NOT marketing)

### User Roles:

| User | Role | SMS Interaction |
|------|------|-----------------|
| Landlord | Pays for service, adds tenants, receives updates | Gets approval requests, status updates |
| Tenant | Reports issues, coordinates with vendors | Initiates conversations, receives notifications |
| Vendor | Receives jobs, schedules repairs | Gets job details, confirms appointments |

---

## ACTION PLAN - Next Steps

### Immediate Priority (Do This First)

**Step 1: Create Pages on homesensus.com** (1-2 hours)
```
Create these 3 pages using the HTML templates below:
├── /compliance/sms-optin-workflow    (main workflow doc)
├── /compliance/privacy-policy        (TCPA-compliant privacy)
└── /compliance/sms-terms             (SMS terms of service)
```

**Step 2: Create Simple UI Mockups** (30-60 min)
You need 2-3 screenshots/wireframes:
- [ ] Landlord "Add Tenant" form (showing phone number field)
- [ ] Phone SMS conversation (opt-in request → tenant replies YES)
- [ ] Confirmation screen (optional)

**Can be simple wireframes or Figma mockups** - doesn't need to be production UI.

**Step 3: Deploy & Test URLs** (15 min)
- Deploy to production
- Verify all 3 URLs are publicly accessible
- Test links between pages work
- Confirm privacy policy link resolves (referenced in SMS templates)

**Step 4: Resubmit to Twilio** (30 min)
In your A2P 10DLC campaign submission:
- Business URL: `https://www.homesensus.com`
- Privacy Policy: `https://www.homesensus.com/compliance/privacy-policy`
- Opt-In Workflow: `https://www.homesensus.com/compliance/sms-optin-workflow`
- Attach campaign description (provided below)

**Step 5: Follow Up with Twilio Support**
Reply to Ignacio L's ticket (#23825254) with:
> "Hi Ignacio, I've created the complete opt-in workflow documentation showing tenant self-consent (not third-party consent). Please review: [URLs]. This shows how tenants provide their own consent via SMS reply."

---

### Estimated Timeline:

| Task | Time | Priority |
|------|------|----------|
| Create HTML pages | 1-2 hours | HIGH |
| Create mockup images | 30-60 min | HIGH |
| Deploy & test | 15 min | HIGH |
| Resubmit to Twilio | 30 min | HIGH |
| **Total** | **~3-4 hours** | |

---

## Required Pages to Create

| URL Path | Purpose |
|----------|---------|
| `/compliance/sms-optin-workflow` | Visual guide showing tenant self-consent flow |
| `/compliance/privacy-policy` | TCPA/CTIA compliant privacy policy |
| `/compliance/sms-terms` | SMS-specific terms of service |

---

## Page 1: SMS Opt-In Workflow

**URL:** `https://www.homesensus.com/compliance/sms-optin-workflow`

### Content Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SMS Opt-In Workflow | HomeSensus</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif; line-height: 1.6; max-width: 900px; margin: 0 auto; padding: 20px; color: #333; }
        h1 { color: #1e3a5f; }
        h2 { color: #2563eb; margin-top: 40px; }
        .step { background: #f8fafc; border-left: 4px solid #2563eb; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0; }
        .step-number { background: #2563eb; color: white; padding: 4px 12px; border-radius: 20px; font-weight: bold; margin-right: 10px; }
        .sms-example { background: #dcfce7; border: 1px solid #86efac; padding: 15px; border-radius: 8px; margin: 10px 0; font-family: monospace; }
        .important { background: #fef3c7; border: 1px solid #fcd34d; padding: 15px; border-radius: 8px; margin: 20px 0; }
        .mockup { background: #e0e7ff; padding: 20px; border-radius: 8px; margin: 15px 0; text-align: center; }
        .mockup img { max-width: 100%; border: 2px solid #6366f1; border-radius: 4px; }
        footer { margin-top: 50px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; }
    </style>
</head>
<body>
    <h1>HomeSensus SMS Opt-In Workflow</h1>
    <p><strong>Last Updated:</strong> November 2025</p>

    <div class="important">
        <strong>Compliance Note:</strong> This workflow ensures TCPA compliance by obtaining direct consent from the message recipient (tenant), not through third-party consent.
    </div>

    <h2>Overview</h2>
    <p>HomeSensus provides maintenance coordination services for residential landlords. Tenants receive SMS notifications about maintenance request status, vendor scheduling, and repair confirmations.</p>

    <h2>Tenant Self-Consent Process</h2>

    <div class="step">
        <h3><span class="step-number">1</span> Landlord Initiates Invitation</h3>
        <p>The landlord adds their tenant's phone number to the HomeSensus system. This is <strong>NOT consent</strong> - it only initiates an invitation.</p>
        <div class="mockup">
            <p><em>[Screenshot: Landlord portal - Add Tenant form with phone number field]</em></p>
            <p>Form shows: "Add Tenant Contact Information"<br>
            Fields: Name, Email, Phone Number<br>
            Note: "Tenant will receive an opt-in invitation via SMS"</p>
        </div>
    </div>

    <div class="step">
        <h3><span class="step-number">2</span> System Sends Opt-In Request to Tenant</h3>
        <p>HomeSensus automatically sends the first SMS to the tenant requesting their consent:</p>
        <div class="sms-example">
            Your landlord [LANDLORD_NAME] has set up maintenance notifications via HomeSensus. Reply YES to opt-in, or STOP to decline. Msg frequency varies. Msg & data rates may apply. Privacy: homesensus.com/compliance/privacy-policy
        </div>
        <p><strong>Key elements included:</strong></p>
        <ul>
            <li>Business name (HomeSensus) explicitly stated</li>
            <li>Clear opt-in instruction (Reply YES)</li>
            <li>Easy opt-out option (STOP to decline)</li>
            <li>Message frequency disclosure (varies)</li>
            <li>Data rates disclosure</li>
            <li>Privacy policy link</li>
        </ul>
    </div>

    <div class="step">
        <h3><span class="step-number">3</span> Tenant Provides Direct Consent</h3>
        <p>The tenant replies "YES" to provide their explicit consent. This is the tenant's direct opt-in action.</p>
        <div class="mockup">
            <p><em>[Screenshot: Phone showing SMS conversation]</em></p>
            <p>Incoming: Opt-in request message<br>
            Outgoing: "YES"</p>
        </div>
        <p><strong>Alternative keywords accepted:</strong> YES, Y, SUBSCRIBE, OPT-IN, START</p>
    </div>

    <div class="step">
        <h3><span class="step-number">4</span> Confirmation Message Sent</h3>
        <p>Upon receiving consent, the system confirms the subscription:</p>
        <div class="sms-example">
            Thanks for opting in! You'll receive maintenance notifications from HomeSensus. Reply STOP to opt-out anytime. Msg & data rates apply.
        </div>
    </div>

    <div class="step">
        <h3><span class="step-number">5</span> Service Activated</h3>
        <p>Only after tenant consent is confirmed can the system send maintenance-related notifications.</p>
        <p><strong>Example maintenance notification:</strong></p>
        <div class="sms-example">
            123 Main St Maintenance: Plumbing Issue<br>
            Vendor: ABC Plumbing<br>
            Scheduled: Nov 20, 2025 2:00 PM<br>
            Reply with questions or STOP to opt-out.
        </div>
    </div>

    <h2>Opt-Out Process</h2>
    <div class="step">
        <h3>Tenant Opt-Out</h3>
        <p>Tenants can opt-out at any time by replying:</p>
        <ul>
            <li>STOP</li>
            <li>UNSUBSCRIBE</li>
            <li>CANCEL</li>
            <li>END</li>
            <li>QUIT</li>
        </ul>
        <p>System immediately confirms opt-out:</p>
        <div class="sms-example">
            You've been unsubscribed from HomeSensus notifications. You will no longer receive messages. Reply START to re-subscribe.
        </div>
        <p><strong>Opt-out requests are honored within 10 days</strong> per FCC requirements (effective April 2025).</p>
    </div>

    <h2>Consent Record Keeping</h2>
    <p>HomeSensus maintains comprehensive audit trails including:</p>
    <ul>
        <li>Timestamp of opt-in invitation sent</li>
        <li>Timestamp of tenant consent received</li>
        <li>Method of consent (SMS reply)</li>
        <li>Timestamp of any opt-out requests</li>
        <li>All message logs</li>
    </ul>

    <h2>Message Types and Frequency</h2>
    <table border="1" cellpadding="10" style="border-collapse: collapse; width: 100%;">
        <tr style="background: #f1f5f9;">
            <th>Message Type</th>
            <th>Purpose</th>
            <th>Frequency</th>
        </tr>
        <tr>
            <td>Maintenance Updates</td>
            <td>Status changes on maintenance requests</td>
            <td>1-3 per request</td>
        </tr>
        <tr>
            <td>Vendor Scheduling</td>
            <td>Confirm repair appointment times</td>
            <td>1-2 per vendor visit</td>
        </tr>
        <tr>
            <td>Completion Confirmations</td>
            <td>Verify repair was completed</td>
            <td>1 per request</td>
        </tr>
    </table>
    <p><strong>Total estimated frequency:</strong> 1-5 messages per maintenance request. Actual frequency varies based on maintenance activity.</p>

    <footer>
        <p><strong>HomeSensus</strong> | <a href="/compliance/privacy-policy">Privacy Policy</a> | <a href="/compliance/sms-terms">SMS Terms</a></p>
        <p>Questions? Contact: support@homesensus.com</p>
    </footer>
</body>
</html>
```

---

## Page 2: SMS Privacy Policy

**URL:** `https://www.homesensus.com/compliance/privacy-policy`

### Content Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Privacy Policy | HomeSensus</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif; line-height: 1.6; max-width: 900px; margin: 0 auto; padding: 20px; color: #333; }
        h1 { color: #1e3a5f; }
        h2 { color: #2563eb; margin-top: 30px; }
        .highlight { background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b; }
        footer { margin-top: 50px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; }
    </style>
</head>
<body>
    <h1>HomeSensus Privacy Policy</h1>
    <p><strong>Effective Date:</strong> November 2025</p>
    <p><strong>Last Updated:</strong> November 2025</p>

    <h2>1. Introduction</h2>
    <p>HomeSensus ("we," "us," or "our") provides maintenance coordination services for residential landlords and their tenants. This Privacy Policy explains how we collect, use, and protect your personal information, including mobile phone numbers and SMS communications.</p>

    <h2>2. Information We Collect</h2>
    <p>We collect the following types of information:</p>
    <ul>
        <li><strong>Contact Information:</strong> Name, email address, phone number, mailing address</li>
        <li><strong>Property Information:</strong> Rental property details for maintenance coordination</li>
        <li><strong>Communication Data:</strong> SMS messages sent to and from our service</li>
        <li><strong>Consent Records:</strong> Timestamps and methods of SMS opt-in and opt-out requests</li>
    </ul>

    <div class="highlight">
        <h3>IMPORTANT: Mobile Information Sharing Policy</h3>
        <p><strong>We do NOT share, sell, rent, or transfer your mobile phone number or SMS opt-in information with any third parties for marketing or promotional purposes.</strong></p>
        <p>Mobile information is used solely for the purpose of providing maintenance coordination services as described in this policy.</p>
    </div>

    <h2>3. How We Use Your Information</h2>
    <p>Your information is used exclusively for:</p>
    <ul>
        <li>Sending maintenance-related SMS notifications (with your consent)</li>
        <li>Coordinating maintenance requests between landlords, tenants, and vendors</li>
        <li>Processing opt-in and opt-out requests</li>
        <li>Maintaining audit trails for compliance purposes</li>
        <li>Improving our services</li>
    </ul>

    <h2>4. SMS Communications</h2>
    <p>When you opt-in to receive SMS notifications from HomeSensus:</p>
    <ul>
        <li><strong>Message Types:</strong> Maintenance request updates, vendor scheduling confirmations, repair completion notifications</li>
        <li><strong>Message Frequency:</strong> Varies based on maintenance activity (typically 1-5 messages per maintenance request)</li>
        <li><strong>Message and Data Rates:</strong> Standard messaging and data rates from your mobile carrier may apply</li>
        <li><strong>Opt-Out:</strong> Reply STOP to any message to unsubscribe at any time</li>
        <li><strong>Help:</strong> Reply HELP for assistance</li>
    </ul>

    <h2>5. Data Retention</h2>
    <p>We retain your information for the following periods:</p>
    <ul>
        <li><strong>Active Users:</strong> Information retained while you are an active user of our services</li>
        <li><strong>Opt-Out Records:</strong> Maintained indefinitely for compliance purposes</li>
        <li><strong>Message Logs:</strong> Retained for 2 years for audit and compliance purposes</li>
        <li><strong>Consent Records:</strong> Retained for 5 years after consent is revoked</li>
    </ul>

    <h2>6. Third-Party Service Providers</h2>
    <p>We use the following third-party services to deliver our SMS functionality:</p>
    <ul>
        <li><strong>Twilio:</strong> SMS delivery platform (messages are transmitted through Twilio's network)</li>
    </ul>
    <p>These providers are contractually obligated to protect your information and use it only for the services we engage them to provide.</p>

    <div class="highlight">
        <p><strong>To reiterate:</strong> Your mobile information will NOT be shared with third parties or affiliates for marketing or promotional purposes under any circumstances.</p>
    </div>

    <h2>7. Your Rights</h2>
    <p>You have the right to:</p>
    <ul>
        <li>Opt-out of SMS communications at any time (reply STOP)</li>
        <li>Request access to your personal information</li>
        <li>Request correction of inaccurate information</li>
        <li>Request deletion of your information (subject to legal retention requirements)</li>
        <li>Receive a copy of your consent records</li>
    </ul>

    <h2>8. Security</h2>
    <p>We implement industry-standard security measures to protect your information, including:</p>
    <ul>
        <li>Encrypted data transmission (HTTPS/TLS)</li>
        <li>Secure database storage</li>
        <li>Access controls and authentication</li>
        <li>Regular security audits</li>
    </ul>

    <h2>9. TCPA Compliance</h2>
    <p>HomeSensus complies with the Telephone Consumer Protection Act (TCPA) and related regulations:</p>
    <ul>
        <li>We obtain express consent before sending SMS messages</li>
        <li>Consent is obtained directly from the message recipient</li>
        <li>We honor all opt-out requests promptly</li>
        <li>We maintain complete consent audit trails</li>
    </ul>

    <h2>10. Changes to This Policy</h2>
    <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>

    <h2>11. Contact Us</h2>
    <p>If you have questions about this Privacy Policy or our data practices, please contact us at:</p>
    <p>
        <strong>HomeSensus</strong><br>
        Email: privacy@homesensus.com<br>
        Support: support@homesensus.com
    </p>

    <footer>
        <p><strong>HomeSensus</strong> | <a href="/compliance/sms-optin-workflow">SMS Opt-In Workflow</a> | <a href="/compliance/sms-terms">SMS Terms</a></p>
    </footer>
</body>
</html>
```

---

## Page 3: SMS Terms of Service

**URL:** `https://www.homesensus.com/compliance/sms-terms`

### Content Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SMS Terms of Service | HomeSensus</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif; line-height: 1.6; max-width: 900px; margin: 0 auto; padding: 20px; color: #333; }
        h1 { color: #1e3a5f; }
        h2 { color: #2563eb; margin-top: 30px; }
        .important { background: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb; }
        .sms-example { background: #dcfce7; border: 1px solid #86efac; padding: 15px; border-radius: 8px; margin: 10px 0; font-family: monospace; }
        footer { margin-top: 50px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; }
    </style>
</head>
<body>
    <h1>HomeSensus SMS Terms of Service</h1>
    <p><strong>Effective Date:</strong> November 2025</p>

    <h2>1. Service Description</h2>
    <p>HomeSensus provides SMS notification services for maintenance coordination in residential rental properties. By opting in to our SMS service, you agree to receive text messages related to maintenance requests, vendor scheduling, and repair status updates.</p>

    <h2>2. Opt-In and Consent</h2>
    <div class="important">
        <p><strong>Your consent is required to receive SMS messages.</strong> By replying YES to our opt-in invitation or completing our web-based opt-in form, you expressly consent to receive SMS messages from HomeSensus at the mobile number you provided.</p>
    </div>
    <p>Consent is not required as a condition of any purchase or lease agreement. You may decline SMS notifications and still use other HomeSensus services.</p>

    <h2>3. Message Types</h2>
    <p>You will receive the following types of SMS messages:</p>
    <ul>
        <li><strong>Maintenance Request Updates:</strong> Status changes and progress updates on maintenance issues</li>
        <li><strong>Vendor Scheduling:</strong> Appointment confirmations and scheduling coordination</li>
        <li><strong>Completion Notifications:</strong> Confirmation that repairs have been completed</li>
        <li><strong>Service Messages:</strong> Opt-in confirmations, opt-out confirmations, and help responses</li>
    </ul>

    <h2>4. Message Frequency</h2>
    <p>Message frequency varies depending on maintenance activity:</p>
    <ul>
        <li>Typical: 1-5 messages per maintenance request</li>
        <li>Monthly average: Varies based on property maintenance needs</li>
        <li>No marketing or promotional messages will be sent</li>
    </ul>

    <h2>5. Costs</h2>
    <p><strong>Message and data rates may apply.</strong> Standard messaging rates from your mobile carrier apply to messages sent to and from our service. HomeSensus does not charge for SMS messages, but your carrier may.</p>

    <h2>6. Opt-Out Instructions</h2>
    <p>You can opt-out of SMS notifications at any time by:</p>
    <ul>
        <li>Replying <strong>STOP</strong> to any message</li>
        <li>Replying <strong>UNSUBSCRIBE</strong>, <strong>CANCEL</strong>, <strong>END</strong>, or <strong>QUIT</strong></li>
    </ul>
    <p>Upon opting out, you will receive a confirmation message:</p>
    <div class="sms-example">
        You've been unsubscribed from HomeSensus notifications. You will no longer receive messages. Reply START to re-subscribe.
    </div>
    <p>Opt-out requests are processed promptly and honored within 10 days.</p>

    <h2>7. Help and Support</h2>
    <p>For assistance with SMS services:</p>
    <ul>
        <li>Reply <strong>HELP</strong> to any message for support information</li>
        <li>Email: support@homesensus.com</li>
    </ul>
    <p>Help response:</p>
    <div class="sms-example">
        HomeSensus SMS Help: You are subscribed to maintenance notifications. Reply STOP to unsubscribe. Contact support@homesensus.com for assistance. Msg & data rates may apply.
    </div>

    <h2>8. Privacy</h2>
    <p>Your mobile number and SMS consent information are protected under our <a href="/compliance/privacy-policy">Privacy Policy</a>. Key points:</p>
    <ul>
        <li>We do NOT share your mobile information with third parties for marketing purposes</li>
        <li>Your information is used solely for maintenance coordination services</li>
        <li>We maintain secure records of all consent and communication</li>
    </ul>

    <h2>9. Supported Carriers</h2>
    <p>Our SMS service is compatible with all major U.S. mobile carriers, including but not limited to:</p>
    <ul>
        <li>AT&T</li>
        <li>Verizon Wireless</li>
        <li>T-Mobile</li>
        <li>Sprint</li>
        <li>And most regional carriers</li>
    </ul>

    <h2>10. Disclaimer</h2>
    <p>SMS delivery is subject to mobile carrier networks and may be affected by:</p>
    <ul>
        <li>Network availability and coverage</li>
        <li>Device compatibility</li>
        <li>Carrier policies</li>
        <li>Technical issues beyond our control</li>
    </ul>
    <p>HomeSensus is not responsible for delays or failures in message delivery caused by factors outside our control.</p>

    <h2>11. Changes to Terms</h2>
    <p>We reserve the right to modify these terms at any time. Continued use of the SMS service after changes constitutes acceptance of the new terms.</p>

    <h2>12. Contact Information</h2>
    <p>
        <strong>HomeSensus</strong><br>
        Email: support@homesensus.com<br>
        Website: www.homesensus.com
    </p>

    <footer>
        <p><strong>HomeSensus</strong> | <a href="/compliance/sms-optin-workflow">SMS Opt-In Workflow</a> | <a href="/compliance/privacy-policy">Privacy Policy</a></p>
    </footer>
</body>
</html>
```

---

## Implementation Checklist

### For Your Public Website Project:

1. **Create `/compliance/` directory** on your website

2. **Add the three HTML pages:**
   - `sms-optin-workflow.html` (or index.html in workflow subdirectory)
   - `privacy-policy.html`
   - `sms-terms.html`

3. **Create/add mockup screenshots** (referenced in the workflow page):
   - Landlord portal showing "Add Tenant" form
   - Phone screenshot showing SMS conversation
   - These can be simple wireframes or actual UI mockups

4. **Update navigation** (optional):
   - Add links to compliance pages in footer
   - Ensure pages are accessible from main site

5. **Deploy and verify:**
   - Test all URLs are accessible
   - Verify links between pages work
   - Ensure privacy policy link in SMS template resolves correctly

6. **Submit to Twilio:**
   - Business URL: `https://www.homesensus.com`
   - Privacy Policy URL: `https://www.homesensus.com/compliance/privacy-policy`
   - Opt-In Workflow URL: `https://www.homesensus.com/compliance/sms-optin-workflow`
   - SMS Terms URL: `https://www.homesensus.com/compliance/sms-terms`

---

## What to Include in Twilio Campaign Submission

### Campaign Description:
```
HomeSensus provides maintenance coordination services for residential landlords.
Tenants receive SMS notifications about maintenance request status, vendor
scheduling, and repair confirmations.

Opt-in is obtained directly from tenants via SMS reply. Landlords initiate
invitations, but tenants must explicitly consent by replying YES.
```

### Opt-In Description:
```
Tenant self-consent via SMS. Landlord adds tenant phone to system, which
triggers opt-in invitation to tenant. Tenant must reply YES to consent.
Full workflow documented at: homesensus.com/compliance/sms-optin-workflow
```

### Sample Messages:
Copy the SMS templates from the workflow page.

---

## Notes for Twilio Reviewer

When submitting, emphasize:

1. **Direct tenant consent** - NOT third-party/landlord consent
2. **Clear opt-out mechanism** - STOP keyword honored
3. **Compliant privacy policy** - No mobile info sharing for marketing
4. **Transactional/informational** - Not marketing messages
5. **Audit trail** - Complete records of consent

---

*This package contains everything needed to create TCPA-compliant documentation for A2P 10DLC campaign approval.*
