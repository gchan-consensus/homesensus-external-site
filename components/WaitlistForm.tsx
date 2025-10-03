"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import * as Dialog from "@radix-ui/react-dialog"

const waitlistSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  firstName: z.string().optional(),
})

type WaitlistFormData = z.infer<typeof waitlistSchema>

interface WaitlistFormProps {
  buttonText?: string
  buttonClassName?: string
  buttonStyle?: React.CSSProperties
  showFirstName?: boolean
  inline?: boolean
}

export default function WaitlistForm({
  buttonText = "Join waiting list",
  buttonClassName = "",
  buttonStyle,
  showFirstName = false,
  inline = false,
}: WaitlistFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [open, setOpen] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  })

  const onSubmit = async (data: WaitlistFormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setIsSuccess(true)
        toast.success(result.message || "Successfully joined the waitlist!")
        reset()
        // Close dialog and reset success state after 2 seconds
        setTimeout(() => {
          setIsSuccess(false)
          setOpen(false)
        }, 2000)
      } else {
        toast.error(result.error || "Failed to join waitlist. Please try again.")
      }
    } catch (error) {
      console.error("Waitlist submission error:", error)
      toast.error("An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (inline) {
    // Inline form for use in text flow
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3 items-start max-w-md">
        <div className="flex-1 w-full">
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0FB8E5] focus:border-transparent"
            disabled={isSubmitting}
          />
          {errors.email && (
            <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting || isSuccess}
          className={`px-6 py-2.5 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap ${
            isSuccess
              ? "bg-green-500 text-white cursor-default"
              : "bg-[#0FB8E5] hover:bg-[#0da5cc] text-white"
          } disabled:opacity-50 disabled:cursor-not-allowed ${buttonClassName}`}
        >
          {isSuccess ? "✓ Joined!" : isSubmitting ? "Joining..." : buttonText}
        </button>
      </form>
    )
  }

  // Dialog version for button clicks
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className={buttonClassName} style={buttonStyle}>
          {buttonText}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 w-full max-w-[440px] translate-x-[-50%] translate-y-[-50%] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
          {/* Glassmorphic card with gradient background glow */}
          <div className="relative">
            {/* Glow effect behind card */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-200/20 to-cyan-200/20 blur-xl scale-110 -z-10" />

            {/* Main card */}
            <div className="relative backdrop-blur-xl bg-white/30 border border-slate-200/60 rounded-3xl p-8 shadow-2xl">
              {/* Inner gradient overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-slate-50/80 to-transparent pointer-events-none" />

              {/* Top gradient overlay for extra depth */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-white/10 to-white/20 pointer-events-none" />

              <div className="relative z-10">
                {!isSuccess ? (
                  <>
                    <div className="mb-8 text-center">
                      <Dialog.Title className="text-4xl font-light text-slate-800 mb-4 tracking-wide">
                        Join the waitlist
                      </Dialog.Title>
                      <Dialog.Description className="text-slate-600 text-base leading-relaxed">
                        Get early access to HomeSensus - the intelligent
                        <br />
                        AI-native platform built for modern landlords, property managers & HOA members
                      </Dialog.Description>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="mb-6">
                      <div className="flex gap-3">
                        <input
                          type="email"
                          placeholder="you@example.com"
                          {...register("email")}
                          className="flex-1 bg-white/60 border border-slate-300 text-slate-800 placeholder:text-slate-500 focus:border-slate-400 focus:ring-2 focus:ring-slate-300 focus:outline-none h-12 rounded-xl backdrop-blur-sm px-4 transition-all"
                          disabled={isSubmitting}
                        />
                        <button
                          type="submit"
                          disabled={isSubmitting || isSuccess}
                          className="h-12 px-6 bg-slate-600 hover:bg-slate-700 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl shadow-slate-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? "Joining..." : "Sign Up"}
                        </button>
                      </div>
                      {errors.email && (
                        <span className="text-red-500 text-sm mt-2 block text-center">{errors.email.message}</span>
                      )}
                    </form>

                    <div className="flex items-center justify-center gap-3">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-white text-xs font-medium shadow-sm">
                          A
                        </div>
                        <div className="w-8 h-8 rounded-full bg-emerald-600 border-2 border-white flex items-center justify-center text-white text-xs font-medium shadow-sm">
                          B
                        </div>
                        <div className="w-8 h-8 rounded-full bg-purple-600 border-2 border-white flex items-center justify-center text-white text-xs font-medium shadow-sm">
                          C
                        </div>
                      </div>
                      <span className="text-slate-600 text-sm">100+ property managers joined</span>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-4">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-emerald-100 to-emerald-200 flex items-center justify-center border border-emerald-300 shadow-lg">
                      <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">You're on the list!</h3>
                    <p className="text-slate-600 text-sm">We'll notify you when we launch. Thanks for joining!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
