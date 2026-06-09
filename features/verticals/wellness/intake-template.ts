import type { FormSchema } from "@/features/forms/schema/form-schema.types"

export const wellnessIntakeTemplate: FormSchema = {
  id: "wellness-consult-request",
  title: "Consult Request",
  description:
    "A gentle, structured inquiry flow for prospective wellness clients.",
  steps: [
    {
      id: "support",
      title: "What are you looking for support with?",
      description:
        "Choose anything that feels relevant. This helps the practice understand what kind of support may fit best.",
      fields: [
        {
          id: "supportAreas",
          type: "multi_select",
          label: "Areas of support",
          required: true,
          options: [
            { label: "Anxiety or stress", value: "anxiety-stress" },
            { label: "ADHD support", value: "adhd-support" },
            { label: "Relationships", value: "relationships" },
            { label: "Trauma or nervous system support", value: "trauma" },
            { label: "Life transitions", value: "life-transitions" },
          ],
        },
      ],
    },
    {
      id: "preferences",
      title: "What kind of support are you hoping for?",
      description:
        "A few preferences help make the first conversation more useful.",
      fields: [
        {
          id: "sessionPreference",
          type: "single_select",
          label: "Session preference",
          required: true,
          options: [
            { label: "Virtual", value: "virtual" },
            { label: "In person", value: "in-person" },
            { label: "Either works", value: "either" },
          ],
        },
        {
          id: "availability",
          type: "multi_select",
          label: "General availability",
          options: [
            { label: "Morning", value: "morning" },
            { label: "Afternoon", value: "afternoon" },
            { label: "Evening", value: "evening" },
          ],
        },
      ],
    },
    {
      id: "contact",
      title: "How can the practice reach you?",
      description:
        "This information is used only to respond to your inquiry.",
      fields: [
        {
          id: "name",
          type: "text",
          label: "Name",
          placeholder: "Your name",
          required: true,
        },
        {
          id: "email",
          type: "email",
          label: "Email",
          placeholder: "you@example.com",
          required: true,
        },
        {
          id: "message",
          type: "textarea",
          label: "Anything else you’d like to share?",
          placeholder: "Optional",
        },
      ],
    },
  ],
}
