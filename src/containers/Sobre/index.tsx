import Titulo from '../../components/Titulo'
import { GithubSection } from './styles'
import Paragrafo from '../../components/Paragrafo'
const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque iure,
      reprehenderit consequuntur sed nihil iusto quis quas voluptas eveniet! Et
      officiis facilis natus neque laborum quidem veniam autem maiores eaque.
    </Paragrafo>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=EmilyMartinsDev&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=EmilyMartinsDev&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)
export default Sobre
