import { wellnessVerticalConfig } from "@/features/verticals/wellness/config"

// Vertical configs keep industry-specific language and modules out of the
// core platform, making it easier to reuse the same architecture for wellness,
// construction, interior design, or other service businesses.
//
export const verticalRegistry = {
  wellness: wellnessVerticalConfig,
} as const

export type VerticalKey = keyof typeof verticalRegistry

export function getVerticalConfig(vertical: VerticalKey) {
  return verticalRegistry[vertical]
}
