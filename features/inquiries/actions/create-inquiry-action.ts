"use server"

import { db } from "@/lib/db"
import { wellnessInquirySchema } from "@/features/inquiries/inquiry.schema"
import type { WellnessInquiryFormValues } from "@/features/inquiries/inquiry.types"

export async function createInquiryAction(values: WellnessInquiryFormValues) {
    // Validate again on the server because client-side validation can be bypassed.
    //
    const parsed = wellnessInquirySchema.safeParse(values)

    if (!parsed.success) {
        return {
            success: false,
            error: "Invalid inquiry data."
        }
    }

    const data = parsed.data

    // The MVP uses a seeded demo tenant. Later, this will come fom the request
    // context, subdomain, route parameter, or authenticated user's membership.
    //
    const tenant = await db.tenant.findUnique({
        where: {
            slug: "willow-and-well",
        },
        include: {
            forms: {
                include: {
                    versions: true,
                },
            },
        },
    })

    if (!tenant) {
        return {
            success: false,
            error: "Practice not found. Run the seed command first.",
        }
    }

    const activeForm = tenant.forms[0]
    const activeFormVersion = activeForm?.versions[0]

    if (!activeForm || !activeFormVersion) {
        return {
            success: false,
            error: "Intake form not found. Run the seed command first.",
        }
    }

    // Store the raw structured form answers separately from the dashboard inquiry.
    // This preserves the original submission even if the inquiry workflow changes.
    //
    const formSubmission = await db.formSubmission.create({
        data: {
            tenantId: tenant.id,
            formVersionId: activeFormVersion.id,
            data,
        },
    })

    // Create the dashboard-facing lead record practitioners will manage.
    //
    const inquiry = await db.inquiry.create({
        data: {
            tenantId: tenant.id,
            formSubmissionId: formSubmission.id,
            name: data.name,
            email: data.email,
            source: "guided-inquiry",
            summary: buildInquirySummary(data),
        },
    })

    console.log("Created inquiry", inquiry.id)

    return {
        success: true,
        inquiryId: inquiry.id,
    }
}

// Simple human-readable summary for the dashboard MVP.
// Later, this can be replaced with richer formatting or routing output.
//
function buildInquirySummary(data: {
    supportAreas: string[]
    sessionPreference: string
    availability: string[]
    message?: string
}) {
    const supportAreas = data.supportAreas.join(", ")
    const availability = data.availability.length > 0 ? data.availability.join(", ") : "Not specified"

    return `Support areas: ${supportAreas}. Session preference: ${data.sessionPreference}. Availability: ${availability}.${
        data.message ? ` Message: ${data.message}` : ""
    }`
}