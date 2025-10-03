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

    // Subscribe to Kit form using v3 API
    const kitResponse = await fetch(
      `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key: apiKey,
          email,
          ...(firstName && { first_name: firstName }),
        }),
      }
    )

    const kitData = await kitResponse.json()

    if (!kitResponse.ok) {
      console.error("Kit API error:", kitData)
      return NextResponse.json(
        { error: kitData.message || "Failed to subscribe to waitlist" },
        { status: kitResponse.status }
      )
    }

    // Success!
    return NextResponse.json({
      success: true,
      message: "Successfully joined the waitlist! Check your email to confirm.",
    })
  } catch (error) {
    console.error("Waitlist API error:", error)
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    )
  }
}
