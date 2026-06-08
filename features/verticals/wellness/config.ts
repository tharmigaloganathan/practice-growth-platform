export const wellnessVerticalConfig = {
  id: "wellness",
  label: "Wellness",
  demoTenantSlug: "willow-and-well",
  terminology: {
    tenant: "Practice",
    customer: "Prospective client",
    inquiry: "Consult request",
    service: "Service",
  },
  modules: ["marketing", "guided-intake", "lead-pipeline", "handoff"],
} as const
