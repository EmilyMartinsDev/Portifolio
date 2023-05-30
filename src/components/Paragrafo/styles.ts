import styled from 'styled-components'
import { PropsP } from '.'
export const P = styled.p<PropsP>`
  fon-size: 14px;
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
  line-height: 22px;
`
