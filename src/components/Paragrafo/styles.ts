import styled from 'styled-components'
import { PropsP } from '.'
export const P = styled.p<PropsP>`
  fon-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
  line-height: 22px;
`
