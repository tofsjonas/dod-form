import { FormData } from '../pages/form'

export type ComponentProps = {
  data: FormData
  setValue: (name: string, value: string) => void
}
