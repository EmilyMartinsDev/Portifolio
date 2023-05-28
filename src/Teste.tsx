import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`
const BotaoPerigo = styled(Botao)`
  background-color: red;

  span {
    font-wheight: bold;
  }
`

function Teste() {
  return (
    <>
      <Botao fontSize="18px" principal>
        Clique aqui
      </Botao>
      <Botao fontSize="14px" principal={false}>
        Clique aqui
      </Botao>
      <BotaoPerigo as="a" principal>
        <span>Nao cliqueeee</span>
      </BotaoPerigo>
    </>
  )
}
export default Teste
