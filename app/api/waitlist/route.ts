import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const waitlistSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  firstName: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json()
    const validationResult = waitlistSchema.safeParse(body)

    if (!validationResult.success) {
      return NextResponse.json(
        { error: validationResult.error.errors[0].message },
        { status: 400 }
      )
    }

    const { email, firstName } = validationResult.data

    // Get Kit credentials from environment
    const apiKey = process.env.KIT_API_KEY
    const formId = process.env.KIT_FORM_ID

    if (!apiKey || !formId) {
      console.error("Missing Kit API credentials")
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      )
    }

    // Kit V4 API requires a two-step process:
    // Step 1: Create the subscriber
    const createSubscriberResponse = await fetch(
      `https://api.kit.com/v4/subscribers`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Kit-Api-Key": apiKey,
        },
        body: JSON.stringify({
          email_address: email,
          state: 'active',
          ...(firstName && { first_name: firstName }),
        }),
      }
    )

    const subscriberData = await createSubscriberResponse.json()

    if (!createSubscriberResponse.ok) {
      console.error("Kit API error (create subscriber):", subscriberData)
      return NextResponse.json(
        { error: subscriberData.errors?.[0] || "Failed to create subscriber" },
        { status: createSubscriberResponse.status }
      )
    }

    // Tag the subscriber as "waitlist" for tracking
    const subscriberId = subscriberData.subscriber?.id
    if (subscriberId) {
      const tagResponse = await fetch(
        `https://api.kit.com/v4/tags`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Kit-Api-Key": apiKey,
          },
          body: JSON.stringify({
            tag: { name: "waitlist" },
            subscriber: { id: subscriberId },
          }),
        }
      )

      if (!tagResponse.ok) {
        console.error("Kit API error (tag subscriber):", await tagResponse.json())
        // Don't fail the request if tagging fails
      }
    }

    // Success!
    return NextResponse.json({
      success: true,
      message: "You're on the list! We'll keep you updated.",
    })
  } catch (error) {
    console.error("Waitlist API error:", error)
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    )
  }
}
