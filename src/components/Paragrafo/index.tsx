import { P } from './styles'
export type PropsP = {
  children: string
  tipo?: 'principal' | 'secundaria'
  fontSize?: number
}

const Paragrafo = ({ children, tipo = 'principal', fontSize }: PropsP) => (
  <P fontSize={fontSize} tipo={tipo}>
    {children}
  </P>
)
export default Paragrafo
