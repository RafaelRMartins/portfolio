import { BoxGrid, Container } from "./styles";
export function Header() {
  return (
    <Container id="header">
      <BoxGrid>
        <h1>Rafael Martins</h1>
        <ul>
          <li><a href="#tools">Ferramentas</a></li>
          <li><a href="#project">Projetos</a></li>
          <li><a href="">Currículo</a></li>
        </ul>
      </BoxGrid>
    </Container>
  )
}
