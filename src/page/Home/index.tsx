import { Card } from "../../components/Card";
import { Main } from "../../components/Main";
import { Container, SectionHome } from "./styles";

interface Props{
  toggleTheme(): void;
}

export function Home({ toggleTheme }:Props) {
  return (
    <Container>
        <SectionHome>
          <Card toggleTheme={toggleTheme} />
          <Main toggleTheme={toggleTheme} />
        </SectionHome>
    </Container>
  )
}
