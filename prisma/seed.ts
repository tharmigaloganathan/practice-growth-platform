import "dotenv/config"
import { PrismaClient, VerticalType } from "@prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import { Pool } from "pg"

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  const tenant = await prisma.tenant.upsert({
    where: { slug: "willow-and-well" },
    update: {},
    create: {
      name: "Willow & Well Therapy",
      slug: "willow-and-well",
      vertical: VerticalType.WELLNESS,
      services: {
        create: [
          {
            name: "Individual Therapy",
            slug: "individual-therapy",
            description: "One-on-one therapy for adults navigating stress, anxiety, relationships, and life transitions.",
          },
          {
            name: "ADHD Support",
            slug: "adhd-support",
            description: "Support for adults seeking practical tools, self-understanding, and sustainable routines.",
          },
          {
            name: "Trauma-Informed Therapy",
            slug: "trauma-informed-therapy",
            description: "A gentle, body-aware approach for clients seeking safety, grounding, and emotional resilience.",
          },
        ],
      },
    },
  })

  const intakeForm = await prisma.form.upsert({
    where: {
      id: "demo-wellness-intake-form",
    },
    update: {},
    create: {
      id: "demo-wellness-intake-form",
      tenantId: tenant.id,
      name: "Consult Request",
      description: "A guided inquiry form for prospective clients.",
      versions: {
        create: {
          version: 1,
          schema: {
            title: "Consult Request",
            steps: [
              {
                id: "support",
                title: "What are you looking for support with?",
                fields: [
                  {
                    id: "supportAreas",
                    type: "multi_select",
                    label: "Choose any that apply",
                    options: ["Anxiety", "ADHD", "Relationships", "Trauma", "Life transitions"],
                    required: true,
                  },
                ],
              },
              {
                id: "contact",
                title: "How can the practice reach you?",
                fields: [
                  {
                    id: "name",
                    type: "text",
                    label: "Name",
                    required: true,
                  },
                  {
                    id: "email",
                    type: "email",
                    label: "Email",
                    required: true,
                  },
                ],
              },
            ],
          },
        },
      },
    },
  })

  console.log({ tenant, intakeForm })
}

main()
  .then(async () => {
    await prisma.$disconnect()
    await pool.end()
  })
  .catch(async (error) => {
    console.error(error)
    await prisma.$disconnect()
    await pool.end()
    process.exit(1)
  })
