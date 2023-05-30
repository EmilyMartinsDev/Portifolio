import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'
import { ListContainer } from './styles'
const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos</Titulo>
    <ListContainer>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
    </ListContainer>
  </section>
)

export default Projetos
