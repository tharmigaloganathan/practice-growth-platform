// These types describe the structure of configurable forms. The MVP starts
// with one wellness intake flow, but the same schema can later support other
// verticals such as quote requests or interior design inquiries.
//
export type FormFieldType =
  | "text"
  | "email"
  | "phone"
  | "textarea"
  | "single_select"
  | "multi_select"

export type FormFieldOption = {
  label: string
  value: string
}

export type FormField = {
  id: string
  type: FormFieldType
  label: string
  description?: string
  placeholder?: string
  required?: boolean
  options?: FormFieldOption[]
}

export type FormStep = {
  id: string
  title: string
  description?: string
  fields: FormField[]
}

export type FormSchema = {
  id: string
  title: string
  description?: string
  steps: FormStep[]
}
