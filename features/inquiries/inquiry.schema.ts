import { z } from "zod"

export const wellnessInquirySchema = z.object({
    supportAreas: z.array(z.string()).min(1, "Choose at least one area of support."),
    sessionPreference: z.string().min(1, "Choose a session preference."),
    availability: z.array(z.string()).default([]),
    name: z.string().min(1, "Name is required."),
    email: z.string().email("Enter a valid email address."),
    message: z.string().optional(),
})

export type WellnessInquiryInput = z.infer<typeof wellnessInquirySchema>