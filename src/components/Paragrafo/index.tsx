import { P } from './styles'
export type PropsP = {
  children: string
  tipo?: 'principal' | 'secundaria'
}

const Paragrafo = ({ children, tipo = 'principal' }: PropsP) => (
  <P tipo={tipo}>{children}</P>
)
export default Paragrafo
