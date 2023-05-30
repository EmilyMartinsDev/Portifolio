import Titulo from '../../components/Titulo'
import Avatar from '../../components/Avatar'
import { Description, BotaoTema, SideBarContainer } from './styles'
import Paragrafo from '../../components/Paragrafo'
const Sidebar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>Emily Martins</Titulo>
      <Paragrafo tipo="secundaria">EmilyMartinsDev</Paragrafo>
      <Description tipo="principal" fontSize={12}>
        Desenvolvedora fullstack Python e Nodejs
      </Description>
      <BotaoTema>Trocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
)
export default Sidebar
