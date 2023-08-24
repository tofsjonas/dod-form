export type ElementProps = {
  name: string
  value: string
  style?: any
  className?: string
  setValue: (name: string, value: string) => void
}
