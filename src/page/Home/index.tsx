import { Card } from "../../components/Card";
import { SectionHome } from "../../components/SectionHome";
import { BoxTools, Container, GridCardTool, Line, SectionCard, TextTitle } from "./styles";
import bannerBRRP from "../../assets/BannerBRRP.jpg";
import bannerMusic from "../../assets/BannerMusic.jpg";
import BannerFoodExplorer from "../../assets/BannerFoodExplorer.jpg";
import { CardTools } from "../../components/CardTool";
import IconHTML from "../../assets/icons8-html-48.svg";
import IconCSS from "../../assets/icons8-css-48.svg";
import IconReact from "../../assets/icons8-nativo-de-reagir-48.svg";
import IconJavascript from "../../assets/icons8-javascript-48.svg";
import IconLua from "../../assets/icons8-linguagem-lua-48.svg";
import IconFigma from "../../assets/icons8-figma-48.svg";
import IconAdobeXD from "../../assets/icons8-adobe-xd-48.svg";
import IconExpress from "../../assets/icons8-expresso-js-48.svg";
import IconJava from "../../assets/icons8-logo-java-coffee-cup-48.svg";
import IconPHP from "../../assets/icons8-php-48 1.svg";
import IconMySQL from "../../assets/icons8-mysql-48.svg";
import IconGitHub from "../../assets/icons8-github-48.svg";
import IconStyledComponents from "../../assets/icons8-componentes-estilizados-48.svg";
import IconNodeJS from "../../assets/icons8-nodejs-48.svg";
import IconTypeScript from "../../assets/icons8-texto-datilografado-48.svg";
import Sep from "../../assets/sep.svg";
import BRRP1 from "../../assets/BRRP1.jpg";
import BRRP2 from "../../assets/BRRP2.jpg";
import BRRP3 from "../../assets/BRRP3.jpg";
import BRRP4 from "../../assets/BRRP4.jpg";
import Music from "../../assets/music.png";
import Music1 from "../../assets/music1.jpg";
import Music2 from "../../assets/music2.png";
import Music3 from "../../assets/music3.png";
import Music4 from "../../assets/music4.png";
import Music5 from "../../assets/music5.jpg";
import foodexplorer1 from "../../assets/foodexplorer1.jpg";
import foodexplorer2 from "../../assets/foodexplorer2.jpg";
import foodexplorer3 from "../../assets/foodexplorer3.jpg";
import foodexplorer4 from "../../assets/foodexplorer4.jpg";
import foodexplorer5 from "../../assets/foodexplorer5.jpg";
import foodexplorer6 from "../../assets/foodexplorer6.jpg";
import foodexplorer7 from "../../assets/foodexplorer7.jpg";
import foodexplorer8 from "../../assets/foodexplorer8.jpg";

interface ItemCard {
  name: string;
  img: string;
}

const itemsCard: ItemCard[] = [
  { name: "HTML", img: IconHTML },
  { name: "CSS", img: IconCSS },
  { name: "React", img: IconReact },
  { name: "JavaScript", img: IconJavascript },
  { name: "Lua", img: IconLua },
  { name: "Figma", img: IconFigma },
  { name: "Adobe XD", img: IconAdobeXD },
  { name: "Express", img: IconExpress },
  { name: "Java", img: IconJava },
  { name: "PHP", img: IconPHP },
  { name: "MySQL", img: IconMySQL },
  { name: "GitHub", img: IconGitHub },
  { name: "Styled Components", img: IconStyledComponents },
  { name: "Node.js", img: IconNodeJS },
  { name: "TypeScript", img: IconTypeScript },
];

interface Item{
  banner: string
  title: string
  description: string
  ImagesInfo: string[]
  fullDescription: React.ReactNode;
}

const items: Item[] = [
  { banner: bannerBRRP, title: "BRRP", description: "Esse site foi para o servidor BRRP do FiveM, utilizando apenas HTML e CSS.", ImagesInfo: [bannerBRRP, BRRP1, BRRP2, BRRP3, BRRP4], fullDescription: <DescriptionBRRP/>},
  { banner: bannerMusic, title: "Music", description: "Esse é um script de música feito para o FiveM, utilizando Lua, React e MySQL.", ImagesInfo: [bannerMusic, Music1, Music2, Music3, Music4, Music5, Music,], fullDescription: <DescriptionMusic/>},
  { banner: BannerFoodExplorer, title: "Food Explorer", description: "Food Explorer foi um projeto de conclusão do curso explorer da RocketSeat.", ImagesInfo: [BannerFoodExplorer, foodexplorer1, foodexplorer2, foodexplorer3, foodexplorer4, foodexplorer5, foodexplorer6, foodexplorer7, foodexplorer8], fullDescription: <DescriptionFoodExplorer/>},
];

function DescriptionBRRP(){
  return(
    <div className="about">
      <h2>BRRP</h2>
      <p>
        <h3>Introdução:</h3>
        Embarquei em um projeto desafiador que uniu minhas habilidades criativas e técnicas: a criação de um site para o servidor BRRP do FiveM. Desde a fase inicial de conceituação até a implementação final.
      </p>
      <p>
        <h3>Conceituação:</h3>
        O primeiro passo foi estabelecer uma visão clara para o site, alinhada com as necessidades e identidade do servidor BRRP. Utilizei ferramentas como o Figma para esboçar ideias, criar wireframes e definir o layout geral.
      </p>
      <p>
        <h3>Design no Figma:</h3>
        Com o design system  criado e visão consolidada, mergulhei na criação do design do site no Figma, adaptando-o ao ambiente e temática do servidor BRRP.
      </p>
      <p>
        <h3>Desenvolvimento com HTML e CSS:</h3>
        Com o design finalizado, foi hora de transformá-lo em realidade utilizando HTML e CSS. Trabalhei para garantir que o site fosse intuitivo e fácil de navegar, proporcionando aos jogadores acesso rápido a informações importantes sobre o servidor BRRP, como regras, tutorial de como entrar no server e facções disponíveis.
      </p>
      <p>
        <h3>Conclusão:</h3>
        Este projeto me desafiou a expandir minhas habilidades de design e me proporcionou uma oportunidade única de contribuir para a comunidade de jogadores.
      </p>
      <p>
        O svg do background foi gerado no site <a href="https://bgjar.com/" target="_blank">bgjar</a>
      </p>
    </div>
  )
}
function DescriptionMusic(){
  return(
    <div className="about">
      <h2>Music</h2>
      <p><h3>Introdução:</h3>
        Realizei o desenvolvimento de um script de música para o FiveM. Este projeto envolveu a criação de um sistema completo que permite aos jogadores ouvirem suas músicas favoritas dentro do jogo, seja por meio de uma mesa de DJ ou durante uma viagem de carro.
      </p>
      <p><h3>Conceituação:</h3>
        O ponto de partida foi estabelecer uma visão clara para o script, inspirada em aplicativos de música populares. Utilizei minha experiência em design para criar um layout intuitivo e elegante, que oferecesse aos jogadores uma experiência imersiva e fácil de usar. Cada elemento, desde a barra de pesquisa até a criação de playlists e a navegação pela biblioteca musical, foi cuidadosamente planejado para proporcionar a melhor experiência possível.
      </p>
      <p><h3>Desenvolvimento:</h3>
        O desenvolvimento do script foi uma jornada multidisciplinar que envolveu diversas tecnologias e linguagens de programação. Utilizei Node.js para a API de pesquisa, React.js para o front-end e Lua para integrar o script ao ambiente do FiveM. Além disso, o uso do MySQL permitiu a criação de um banco de dados para armazenar informações sobre músicas, playlists e preferências dos usuários.
      </p>
      <p><h3>Funcionalidades:</h3>
        O script oferece uma ampla gama de funcionalidades, incluindo uma barra de pesquisa para encontrar músicas específicas, a capacidade de criar e gerenciar playlists personalizadas, filas temporárias para controlar a ordem de reprodução, histórico de reprodução para revisitar músicas favoritas e a opção de curtir músicas para criar uma lista de favoritos.
      </p>
      <p><h3>Integração com YouTube:</h3>
        Utilizando o Puppeteer, o script é capaz de pesquisar músicas no YouTube e reproduzi-las diretamente dentro do jogo usando o XSound.
      </p>
      <p><h3>Conclusão:</h3>
        O script de música para o FiveM foi mais do que apenas um projeto técnico - foi uma oportunidade de explorar minha criatividade e habilidades de programação em um contexto único. Estou orgulhoso do resultado final. Este projeto demonstra meu compromisso com a excelência técnica e minha paixão por criar soluções inovadoras para desafios complexos.
      </p>
      <p>Link do Projeto <a href="https://github.com/RafaelRMartins/RM-music" target="_blank">Music</a></p>
      <p>Link da API de Pesquisa <a href="https://github.com/RafaelRMartins/RM-API-Music-Search" target="_blank">API-Search</a></p>
    </div>
  )
}
function DescriptionFoodExplorer(){
  return(
    <div className="about">
      <h2>Food Explorer</h2>
      <p><h3>Introdução:</h3>
        Participei do desafio final do curso Explorer da Rocketseat, onde tive a oportunidade de desenvolver o Food Explorer. Este projeto representou um marco significativo em minha jornada de aprendizado, utilizando tecnologias como SQLite, Node.js, React, Styled-Components, Knex, entre outras. O Food Explorer é um site de restaurante online que oferece aos clientes a conveniência de fazer pedidos e aos administradores a facilidade de gerenciar o sistema.
      </p>
      <p><h3>Desenvolvimento:</h3>
        O desenvolvimento do Food Explorer foi uma experiência enriquecedora, envolvendo a integração de diversas tecnologias para criar um sistema completo. Utilizamos Node.js para o back-end, SQLite como banco de dados, React para o front-end e Knex para facilitar a interação com o banco de dados.
      </p>
      <p><h3>Funcionalidades:</h3>
        O Food Explorer oferece uma ampla gama de funcionalidades tanto para os clientes quanto para os administradores. Os clientes podem fazer login, navegar pelas categorias de pratos, bebidas e sobremesas, adicionar itens ao carrinho, favoritar pratos favoritos e finalizar pedidos. Os administradores têm acesso a um painel de controle onde podem adicionar novos pratos, visualizar e gerenciar pedidos pendentes.
      </p>
      <p><h3>Conclusão:</h3>
        O Food Explorer foi mais do que apenas um projeto técnico - foi uma oportunidade de aplicar os conhecimentos adquiridos no curso Explorer em um contexto prático e desafiador. Estou orgulhoso do resultado final e do progresso que alcancei ao longo deste desafio. O Food Explorer demonstra minha capacidade de enfrentar desafios complexos e minha determinação em buscar soluções inovadoras.
      </p>
      <p>Projeto no GitHub <a href="https://github.com/RafaelRMartins/foodexplorer-backend" target="_blank">Food Explorer Front-end</a></p>
      <p>Projeto no GitHub <a href="https://github.com/RafaelRMartins/foodexplorer-frontend" target="_blank">Food Explorer Back-end</a></p>
    </div>
  )
}

export function Home() {
  return (
    <Container>
        <SectionHome />

        <BoxTools id="tools">
          <img src={Sep} className="bollLeft" />
          <div className="containerTools">

            <TextTitle>Essas são algumas das linguagens e ferramentas que eu uso ou utilizei ao longo da minha jornada como desenvolvedor.</TextTitle>
            
            <Line/>

            <GridCardTool>
                {itemsCard.map((item, index) => (
                  <CardTools key={index} img={item.img} name={item.name} />
                ))}
            </GridCardTool>

          </div>
          <img src={Sep} className="bollRight" />
        </BoxTools>

        <SectionCard id="project">
          {items.map((item, index) => (
            <Card 
              key={index} 
              banner={item.banner} 
              title={item.title} 
              description={item.description} 
              ImagesInfo={item.ImagesInfo} 
              fullDescription={item.fullDescription}
            />
          ))}
        </SectionCard>
    </Container>
  )
}
