"use client"

import { useMemo, useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { wellnessIntakeTemplate } from "@/features/verticals/wellness/intake-template"
import type { WellnessInquiryFormValues } from "@/features/inquiries/inquiry.types"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

const inquirySchema = z.object({
  supportAreas: z.array(z.string()).min(1, "Choose at least one area of support."),
  sessionPreference: z.string().min(1, "Choose a session preference."),
  availability: z.array(z.string()).default([]),
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Enter a valid email address."),
  message: z.string().optional(),
})

type InquirySchemaValues = z.infer<typeof inquirySchema>

// This component starts as a code-based wellness form instead of a generic
// form builder. That keeps the MVP shippable while preserving a schema shape
// we can later generalize across industries.
export function WellnessInquiryForm() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const steps = wellnessIntakeTemplate.steps
  const currentStep = steps[currentStepIndex]
  const isFirstStep = currentStepIndex === 0
  const isLastStep = currentStepIndex === steps.length - 1

  const form = useForm<InquirySchemaValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      supportAreas: [],
      sessionPreference: "",
      availability: [],
      name: "",
      email: "",
      message: "",
    },
    mode: "onSubmit",
  })

  const progressValue = useMemo(() => {
    return ((currentStepIndex + 1) / steps.length) * 100
  }, [currentStepIndex, steps.length])

  async function goToNextStep() {
    const fieldsToValidate = currentStep.fields.map((field) => field.id) as Array<
        keyof InquirySchemaValues
    >

    const isStepValid = await form.trigger(fieldsToValidate)

    if (!isStepValid) {
      return
    }

    setCurrentStepIndex((index) => Math.min(index + 1, steps.length - 1))
  }

  function goToPreviousStep() {
    setCurrentStepIndex((index) => Math.max(index - 1, 0))
  }

  function onSubmit(values: WellnessInquiryFormValues) {
    console.log("Inquiry submitted", values)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Thank you — your inquiry has been received.</CardTitle>
          </CardHeader>
          <CardContent className="leading-7 text-stone-600">
            <p>
              In a production workflow, this would notify the practice, create a
              structured inquiry in the dashboard, and route you to the next step.
            </p>
          </CardContent>
        </Card>
    )
  }

  return (
      <Card className="rounded-2xl">
        <CardHeader>
          <div className="mb-6">
            <div className="flex items-center justify-between text-sm text-stone-500">
            <span>
              Step {currentStepIndex + 1} of {steps.length}
            </span>
              <span>{Math.round(progressValue)}%</span>
            </div>
            <Progress value={progressValue} className="mt-3" />
          </div>

          <CardTitle className="text-2xl">{currentStep.title}</CardTitle>
          {currentStep.description ? (
              <p className="mt-2 leading-7 text-stone-600">
                {currentStep.description}
              </p>
          ) : null}
        </CardHeader>

        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            {currentStep.id === "support" ? (
                <SupportAreasStep
                    values={form.watch("supportAreas")}
                    onChange={(values) => form.setValue("supportAreas", values)}
                    error={form.formState.errors.supportAreas?.message}
                />
            ) : null}

            {currentStep.id === "preferences" ? (
                <PreferencesStep
                    sessionPreference={form.watch("sessionPreference")}
                    availability={form.watch("availability")}
                    onSessionPreferenceChange={(value) =>
                        form.setValue("sessionPreference", value)
                    }
                    onAvailabilityChange={(values) =>
                        form.setValue("availability", values)
                    }
                    sessionPreferenceError={
                      form.formState.errors.sessionPreference?.message
                    }
                />
            ) : null}

            {currentStep.id === "contact" ? (
                <ContactStep
                    register={form.register}
                    errors={form.formState.errors}
                />
            ) : null}
          </CardContent>

          <CardFooter className="flex justify-between">
            <Button
                type="button"
                variant="outline"
                onClick={goToPreviousStep}
                disabled={isFirstStep}
            >
              Back
            </Button>

            {isLastStep ? (
                <Button type="submit">Submit inquiry</Button>
            ) : (
                <Button type="button" onClick={goToNextStep}>
                  Continue
                </Button>
            )}
          </CardFooter>
        </form>
      </Card>
  )
}

function SupportAreasStep({
                            values,
                            onChange,
                            error,
                          }: {
  values: string[]
  onChange: (values: string[]) => void
  error?: string
}) {
  const field = wellnessIntakeTemplate.steps[0].fields[0]

  function toggleValue(value: string) {
    if (values.includes(value)) {
      onChange(values.filter((item) => item !== value))
    } else {
      onChange([...values, value])
    }
  }

  return (
      <div className="space-y-3">
        <Label>{field.label}</Label>

        <div className="grid gap-3">
          {field.options?.map((option) => (
              <label
                  key={option.value}
                  className="flex cursor-pointer items-center gap-3 rounded-xl border bg-white p-4 hover:bg-stone-50"
              >
                <Checkbox
                    checked={values.includes(option.value)}
                    onCheckedChange={() => toggleValue(option.value)}
                />
                <span>{option.label}</span>
              </label>
          ))}
        </div>

        {error ? <p className="text-sm text-red-600">{error}</p> : null}
      </div>
  )
}

function PreferencesStep({
                           sessionPreference,
                           availability,
                           onSessionPreferenceChange,
                           onAvailabilityChange,
                           sessionPreferenceError,
                         }: {
  sessionPreference: string
  availability: string[]
  onSessionPreferenceChange: (value: string) => void
  onAvailabilityChange: (values: string[]) => void
  sessionPreferenceError?: string
}) {
  const sessionField = wellnessIntakeTemplate.steps[1].fields[0]
  const availabilityField = wellnessIntakeTemplate.steps[1].fields[1]

  function toggleAvailability(value: string) {
    if (availability.includes(value)) {
      onAvailabilityChange(availability.filter((item) => item !== value))
    } else {
      onAvailabilityChange([...availability, value])
    }
  }

  return (
      <div className="space-y-8">
        <div className="space-y-3">
          <Label>{sessionField.label}</Label>

          <RadioGroup
              value={sessionPreference}
              onValueChange={onSessionPreferenceChange}
              className="grid gap-3"
          >
            {sessionField.options?.map((option) => (
                <label
                    key={option.value}
                    className="flex cursor-pointer items-center gap-3 rounded-xl border bg-white p-4 hover:bg-stone-50"
                >
                  <RadioGroupItem value={option.value} />
                  <span>{option.label}</span>
                </label>
            ))}
          </RadioGroup>

          {sessionPreferenceError ? (
              <p className="text-sm text-red-600">{sessionPreferenceError}</p>
          ) : null}
        </div>

        <div className="space-y-3">
          <Label>{availabilityField.label}</Label>

          <div className="grid gap-3">
            {availabilityField.options?.map((option) => (
                <label
                    key={option.value}
                    className="flex cursor-pointer items-center gap-3 rounded-xl border bg-white p-4 hover:bg-stone-50"
                >
                  <Checkbox
                      checked={availability.includes(option.value)}
                      onCheckedChange={() => toggleAvailability(option.value)}
                  />
                  <span>{option.label}</span>
                </label>
            ))}
          </div>
        </div>
      </div>
  )
}

function ContactStep({
                       register,
                       errors,
                     }: {
  register: ReturnType<typeof useForm<InquirySchemaValues>>["register"]
  errors: ReturnType<typeof useForm<InquirySchemaValues>>["formState"]["errors"]
}) {
  return (
      <div className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Your name" {...register("name")} />
          {errors.name?.message ? (
              <p className="text-sm text-red-600">{errors.name.message}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="you@example.com" {...register("email")} />
          {errors.email?.message ? (
              <p className="text-sm text-red-600">{errors.email.message}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Anything else you’d like to share?</Label>
          <Textarea
              id="message"
              placeholder="Optional"
              rows={5}
              {...register("message")}
          />
        </div>
      </div>
  )
}