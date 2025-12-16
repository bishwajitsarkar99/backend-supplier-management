declare module "react-input-mask" {
  import * as React from "react"

  interface Props {
    mask: string
    value?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    children?: (props: any) => React.ReactNode
  }

  export default class InputMask extends React.Component<Props> {}
}
