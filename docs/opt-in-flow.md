# HomeSensus TCPA-Compliant SMS Opt-In Flow

**Document Purpose:** Blueprint for implementing a fully TCPA/A2P 10DLC compliant SMS opt-in system that addresses all Twilio compliance feedback.

**Last Updated:** November 2025

---

## Executive Summary

### The Problem

Twilio rejected the current opt-in workflow because:
1. ❌ First message (invitation) is sent WITHOUT prior consent
2. ❌ Missing documentation of WHERE tenant first learns about the service
3. ❌ Consent disclaimer not located at point of collection

### The Solution

Implement a **tokenized web form opt-in flow** where:
1. ✅ Landlord sends email invitation with unique link
2. ✅ Tenant clicks link → web form with explicit consent
3. ✅ Tenant submits consent → receives verification SMS
4. ✅ Tenant confirms verification → fully opted in
5. ✅ NO messages sent until consent is confirmed

---

## Compliant Workflow

### Step 1: Landlord Initiates (Internal System)

**Action:** Landlord adds tenant information in HomeSensus dashboard

**What Happens:**
- Landlord enters:
  - Tenant name
  - Tenant email address
  - Tenant phone number
  - Property address
- System generates unique opt-in token
- System stores: `{tenant_id, token, phone, email, property, created_at, expires_at, status: 'pending'}`
- **NO SMS is sent at this stage**

**Screenshot Needed:** Landlord dashboard showing "Add Tenant" form with note: *"Tenant will receive an email invitation to opt-in to SMS notifications"*

---

### Step 2: Email Invitation Sent

**Action:** System sends email to tenant (not SMS)

**Email Template:**

```
Subject: Set Up Maintenance Notifications for [PROPERTY_ADDRESS]

Hi [TENANT_NAME],

Your landlord has set up maintenance coordination through HomeSensus
for your rental property at [PROPERTY_ADDRESS].

You can receive SMS notifications for:
• Maintenance request updates
• Vendor scheduling
• Repair confirmations

To enable SMS notifications, please confirm your consent:

[Enable SMS Notifications Button]
→ https://www.homesensus.com/optin?token=[UNIQUE_TOKEN]

This is optional. You can still use HomeSensus services without SMS notifications.

Questions? Reply to this email or contact support@homesensus.com

HomeSensus Team
```

**Screenshot Needed:** Email in inbox showing the invitation with the "Enable SMS Notifications" button

---

### Step 3: Tenant Visits Opt-In Page

**Action:** Tenant clicks link in email

**URL Structure:**
```
https://www.homesensus.com/optin?token=abc123xyz789
```

**What Happens:**
1. System validates token:
   - Token exists and not expired (48-hour expiration)
   - Token not already used
   - Token maps to valid tenant record
2. System retrieves pre-filled information:
   - Tenant name
   - Phone number
   - Property address
3. Page renders with consent form (see design below)

**Screenshot Needed:** Full browser view of the opt-in page (this is the critical screenshot for Twilio)

---

### Step 4: Tenant Reviews and Consents

**Page URL:** `/optin?token=...`

**Page Title:** "SMS Notifications Opt-In - HomeSensus"

**Page Content:**

```markdown
# Enable SMS Notifications

## Your Information
**Property:** [123 Main St, Apt 2B]
**Phone Number:** [(555) 123-4567]
**Your Name:** [John Doe]

## What You're Agreeing To

By checking the box below, you consent to receive SMS text messages
from HomeSensus for maintenance coordination at the property listed above.

### Message Details
• **Message Types:** Maintenance request updates, vendor appointment
  scheduling, repair completion confirmations
• **Message Frequency:** Varies based on maintenance activity
  (typically 1-5 messages per maintenance request)
• **Cost:** Message and data rates may apply from your mobile carrier.
  HomeSensus does not charge for SMS.
• **Opt-Out:** Reply STOP to any message to unsubscribe at any time
• **Help:** Reply HELP for assistance or contact support@homesensus.com

### Your Rights
• SMS notifications are entirely optional
• You can use HomeSensus services without SMS
• You can opt-out at any time with no penalty
• Your phone number will NOT be shared with third parties for marketing

[View Privacy Policy] | [View SMS Terms]

---

☐ **I consent to receive SMS text messages from HomeSensus** at the
phone number shown above for maintenance coordination purposes.
I understand I can reply STOP to opt-out at any time.

[ Confirm and Enable SMS ]

---

*By clicking "Confirm and Enable SMS," you agree that your consent
is being provided directly by you, not by a third party.*

*This consent is specific to maintenance notifications for the
property listed above and cannot be transferred to other services.*
```

**Form Requirements:**
- Checkbox must be explicitly checked (no pre-checked boxes)
- Submit button disabled until checkbox is checked
- All consent language visible without scrolling (or above the fold)
- Links to full privacy policy and terms

**Screenshot Needed:** Full page view showing all consent language and unchecked checkbox

---

### Step 5: Form Submission & Verification SMS

**Action:** Tenant checks box and clicks "Confirm and Enable SMS"

**What Happens:**
1. System validates form submission
2. System updates database: `{status: 'awaiting_verification', opted_in_at: timestamp}`
3. System sends **first SMS** (verification message):

```
HomeSensus: Please reply YES to confirm SMS notifications
for maintenance at [PROPERTY]. Reply STOP to cancel.
Msg & data rates may apply.
```

4. System displays confirmation page:

```
# Verification Sent

We've sent a verification code to (555) 123-4567.

Please check your phone and reply YES to complete setup.

Once confirmed, you'll receive SMS notifications for
maintenance updates at [PROPERTY ADDRESS].

Didn't receive a message? [Resend Verification]
```

**Screenshot Needed:** Confirmation page showing "Verification Sent" message

---

### Step 6: Tenant Replies YES (Verification)

**Action:** Tenant receives SMS and replies "YES"

**SMS Conversation:**

```
[Incoming from HomeSensus]
HomeSensus: Please reply YES to confirm SMS notifications
for maintenance at 123 Main St. Reply STOP to cancel.
Msg & data rates may apply.

[Tenant replies]
YES

[Incoming from HomeSensus - Confirmation]
Thanks! You're now opted in to maintenance notifications
from HomeSensus. Reply STOP anytime to opt-out.
Msg & data rates apply.
```

**What Happens:**
1. System receives "YES" reply
2. System updates database: `{status: 'active', verified_at: timestamp}`
3. System sends welcome confirmation (see above)
4. Tenant is now fully opted in

**Screenshot Needed:** Phone showing the SMS conversation with tenant replying YES

---

### Step 7: Service Active

**Action:** HomeSensus can now send maintenance notifications

**Example Notification:**

```
HomeSensus: Maintenance Update
Property: 123 Main St, Apt 2B
Issue: Leaking faucet
Vendor: ABC Plumbing scheduled for Nov 22, 2PM
Reply STOP to opt-out
```

---

## Technical Implementation

### 1. Database Schema

```sql
CREATE TABLE sms_opt_ins (
  id UUID PRIMARY KEY,
  tenant_id UUID REFERENCES tenants(id),
  phone_number VARCHAR(15) NOT NULL,
  email VARCHAR(255) NOT NULL,
  property_address TEXT NOT NULL,
  token VARCHAR(128) UNIQUE NOT NULL,
  status ENUM('pending', 'awaiting_verification', 'active', 'expired', 'cancelled'),

  -- Timestamps
  created_at TIMESTAMP DEFAULT NOW(),
  expires_at TIMESTAMP NOT NULL, -- token expiration (48 hours)
  email_sent_at TIMESTAMP,
  form_submitted_at TIMESTAMP,
  verification_sent_at TIMESTAMP,
  verified_at TIMESTAMP,

  -- Consent tracking
  consent_ip_address VARCHAR(45),
  consent_user_agent TEXT,
  consent_method VARCHAR(50) DEFAULT 'web_form',

  -- Verification
  verification_attempts INT DEFAULT 0,
  last_verification_sent_at TIMESTAMP,

  INDEX idx_token (token),
  INDEX idx_phone (phone_number),
  INDEX idx_status (status)
);

CREATE TABLE sms_consent_audit_log (
  id UUID PRIMARY KEY,
  opt_in_id UUID REFERENCES sms_opt_ins(id),
  event_type VARCHAR(50), -- 'created', 'email_sent', 'form_viewed', 'consented', 'verified', 'opted_out'
  event_data JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 2. Token Generation

```javascript
// Generate secure, unique token
function generateOptInToken() {
  return crypto.randomBytes(64).toString('hex');
}

// Token validation
function validateToken(token) {
  const optIn = await db.query(
    'SELECT * FROM sms_opt_ins WHERE token = ? AND expires_at > NOW()',
    [token]
  );

  if (!optIn) {
    throw new Error('Invalid or expired token');
  }

  if (optIn.status !== 'pending') {
    throw new Error('Token already used');
  }

  return optIn;
}
```

### 3. API Endpoints

```
POST /api/landlord/invite-tenant
  → Create opt-in record, send email invitation

GET /api/optin/validate-token?token=xxx
  → Validate token and return pre-filled data

POST /api/optin/submit
  → Process consent form, send verification SMS

POST /api/sms/webhook (Twilio)
  → Receive "YES" reply, activate opt-in

POST /api/sms/opt-out (Twilio)
  → Handle STOP keyword
```

### 4. Security Measures

**Token Security:**
- 128-character hex token (64 bytes)
- 48-hour expiration
- Single-use only
- HTTPS required
- Rate limiting: 5 requests per IP per hour

**Form Submission:**
- CSRF protection
- Honeypot field (anti-bot)
- Rate limiting: 3 submissions per IP per hour
- IP address logging
- User agent logging

**Verification:**
- Maximum 3 verification attempts per opt-in
- 5-minute cooldown between resends
- Phone number validation

### 5. Email Sending

**Provider:** SendGrid / AWS SES / Postmark

**Requirements:**
- SPF/DKIM/DMARC configured
- Unsubscribe link (for marketing emails)
- Professional sender address: noreply@homesensus.com
- Track open rates (optional)
- Track click rates (required)

---

## Frontend Components

### Page: `/optin?token=xxx`

**File:** `app/optin/page.tsx`

**Features:**
- Server-side token validation
- Pre-filled form data
- Checkbox validation
- Disabled submit until consent checked
- Loading states
- Error handling (invalid/expired token)
- Success confirmation page

**Styling:**
- Match existing HomeSensus design
- Mobile responsive
- Clear, readable consent text
- Professional, trustworthy appearance

---

## Screenshots Required for Twilio

### 1. Email Invitation (Step 2)
**Filename:** `public/images/compliance/email-invitation.png`

**Content:**
- Full email view in email client
- Shows subject line
- Shows "Enable SMS Notifications" button
- Shows property address
- Shows opt-in URL (can be truncated)

---

### 2. Opt-In Web Form (Step 4)
**Filename:** `public/images/compliance/optin-form.png`

**Content:** ⭐ **MOST CRITICAL FOR TWILIO**
- Full browser window showing the opt-in page
- URL bar visible: `homesensus.com/optin?token=...`
- Complete consent language visible
- Unchecked checkbox
- All disclosures visible (message types, frequency, costs)
- Links to privacy policy and terms
- "Confirm and Enable SMS" button

**This screenshot must show:**
✅ WHERE the user first encounters the opt-in
✅ That consent is given BEFORE any SMS is sent
✅ All required TCPA disclosures at point of collection
✅ Clear, explicit consent checkbox

---

### 3. Verification SMS Conversation (Step 6)
**Filename:** `public/images/compliance/verification-sms.png`

**Content:**
- Phone screenshot showing:
  - Incoming verification request
  - Tenant replies "YES"
  - Incoming confirmation message
- Shows this is the FIRST SMS sent (after web consent)

---

### 4. Landlord Dashboard (Step 1) - Optional but Helpful
**Filename:** `public/images/compliance/landlord-add-tenant.png`

**Content:**
- Landlord interface showing "Add Tenant" form
- Clear note: "Tenant will receive an email to opt-in"
- Shows NO SMS is sent from this screen

---

## Updated SMS Opt-In Workflow Page

Update `/compliance/sms-optin-workflow` to reflect new process:

### Changes Required:

1. **Step 1:** Landlord Initiates **Email** Invitation (not SMS)
   - Screenshot: Landlord dashboard
   - Note: "NO SMS sent at this stage"

2. **Step 2:** **Email** Sent to Tenant (new step)
   - Screenshot: Email invitation
   - Shows link to web form

3. **Step 3:** Tenant Visits Web Form (new step)
   - Screenshot: Opt-in form page
   - Shows complete consent language

4. **Step 4:** Tenant Submits Consent
   - Shows checkbox being checked
   - Explains this is consent BEFORE any SMS

5. **Step 5:** Verification SMS Sent
   - Screenshot: SMS conversation
   - Shows this is the FIRST message (after web consent)

6. **Step 6:** Tenant Confirms via SMS
   - Shows YES reply
   - Confirmation received

7. **Step 7:** Service Activated
   - Example maintenance notification

---

## Twilio Campaign Submission

### Updated Campaign Description:

```
HomeSensus provides AI-powered maintenance coordination for residential
landlords. Tenants receive SMS notifications about maintenance requests,
vendor scheduling, and repair confirmations.

OPT-IN PROCESS:
1. Landlord adds tenant contact information to system
2. System sends EMAIL invitation to tenant (no SMS sent)
3. Tenant clicks link in email to web form
4. Tenant reviews consent, checks box, submits form
5. System sends verification SMS (first message)
6. Tenant replies YES to confirm
7. Opt-in complete - service activated

Consent is obtained directly from the message recipient via explicit
web form submission BEFORE any SMS messages are sent.
```

### URLs to Submit:

- **Business URL:** `https://www.homesensus.com`
- **Privacy Policy:** `https://www.homesensus.com/compliance/privacy-policy`
- **SMS Terms:** `https://www.homesensus.com/compliance/sms-terms`
- **Opt-In Workflow:** `https://www.homesensus.com/compliance/sms-optin-workflow`
- **Opt-In Form:** `https://www.homesensus.com/optin` (with sample token)

### Sample Message Templates:

**Verification SMS:**
```
HomeSensus: Please reply YES to confirm SMS notifications for
maintenance at [PROPERTY]. Reply STOP to cancel. Msg & data
rates may apply. Privacy: homesensus.com/compliance/privacy-policy
```

**Confirmation SMS:**
```
Thanks! You're now opted in to maintenance notifications from
HomeSensus for [PROPERTY]. Reply STOP anytime to opt-out.
Msg & data rates apply.
```

**Maintenance Update:**
```
HomeSensus: Maintenance Update - [PROPERTY]
Issue: [DESCRIPTION]
Vendor: [NAME] scheduled for [DATE/TIME]
Reply STOP to opt-out | Help: support@homesensus.com
```

---

## Implementation Phases

### Phase 1: Documentation & Design (Current)
- ✅ Create this implementation plan
- ⬜ Design opt-in form mockups
- ⬜ Design email template mockup
- ⬜ Get stakeholder approval

### Phase 2: Frontend Development
- ⬜ Create `/optin` page with token validation
- ⬜ Build consent form component
- ⬜ Add form validation and submission
- ⬜ Create success/error pages
- ⬜ Mobile responsive design

### Phase 3: Backend Development
- ⬜ Database schema and migrations
- ⬜ Token generation system
- ⬜ API endpoints
- ⬜ Email sending integration
- ⬜ Twilio SMS webhook integration
- ⬜ Audit logging

### Phase 4: Testing
- ⬜ Token generation/validation
- ⬜ Email delivery
- ⬜ Form submission flow
- ⬜ SMS verification
- ⬜ Opt-out handling
- ⬜ Security testing
- ⬜ Mobile device testing

### Phase 5: Screenshots & Documentation
- ⬜ Take all required screenshots
- ⬜ Update compliance pages
- ⬜ Prepare Twilio submission package
- ⬜ Internal compliance review

### Phase 6: Deployment & Submission
- ⬜ Deploy to production
- ⬜ Test end-to-end on production
- ⬜ Submit to Twilio A2P 10DLC
- ⬜ Respond to Twilio feedback
- ⬜ Obtain approval

---

## Key Compliance Points

### ✅ What Makes This Compliant:

1. **Consent Before First Message**
   - Web form consent obtained BEFORE any SMS
   - Email invitation doesn't count as SMS message
   - First SMS is verification (after consent given)

2. **Documented Initial Source**
   - Email invitation is the initial source
   - Web form is where consent happens
   - Screenshots show complete journey

3. **Consent at Point of Collection**
   - All disclosures on the opt-in form
   - Not buried in separate T&Cs
   - Clear, explicit checkbox

4. **Direct Consent from Recipient**
   - Tenant submits form themselves
   - Not third-party (landlord) consent
   - Verification confirms phone ownership

5. **Campaign-Specific Consent**
   - Consent tied to specific property
   - Clearly states "maintenance coordination"
   - Not transferable to other services

6. **Audit Trail**
   - Complete timestamps of each step
   - IP addresses and user agents logged
   - Consent records retained per TCPA requirements

---

## Questions for Stakeholders

1. **Email Provider:** Are we using SendGrid, AWS SES, or another provider?
2. **Current SMS Provider:** Confirmed using Twilio?
3. **Tenant Database:** Does tenant management system exist, or build from scratch?
4. **Timeline:** When does this need to be live?
5. **Verification Resend:** How many times can tenant request resend? (Recommend: 3)
6. **Token Expiration:** 48 hours acceptable? (Industry standard)
7. **Support Contact:** Confirm support@homesensus.com is monitored

---

## Resources & References

- [TCPA Compliance Guide](https://www.twilio.com/docs/glossary/what-is-tcpa)
- [Twilio A2P 10DLC Requirements](https://www.twilio.com/docs/sms/a2p-10dlc)
- [CTIA Messaging Principles](https://www.ctia.org/the-wireless-industry/industry-commitments/messaging-principles-and-best-practices)
- [FCC TCPA Rules](https://www.fcc.gov/sites/default/files/tcpa-rules.pdf)

---

## Next Steps

1. **Review this plan** with stakeholders
2. **Get approval** on workflow and implementation
3. **Create design mockups** for opt-in form and email
4. **Begin Phase 2** (Frontend Development) once approved

---

**Document Owner:** Development Team
**Approvers Required:** Product, Legal/Compliance, Engineering Lead
**Twilio Ticket Reference:** #23825254 (Ignacio L)
