import { Container } from "./styles";

interface CardTool{
  img: string
  name: string
}

export function CardTools({img, name}: CardTool) {
  return (
    <Container>
      <img src={img} alt="" />
      <p>{name}</p>
    </Container>
  )
}
