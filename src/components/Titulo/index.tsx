import { Title } from './styles'
export type Props = {
  children: string
  fontSize?: number
}

const Titulo = (props: Props) => (
  <Title fontSize={props.fontSize}>{props.children}</Title>
)

export default Titulo
