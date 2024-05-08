import { Container } from "./styles";
import Banner from "../../assets/Banner.svg"

export function SectionHome() {
  return (
    <Container>
      <div className="backgroundCircle"></div>
      <img src={Banner} alt="" />
      <section>
        <h2>Sou Rafael Martins, um programador <span>full stack.</span> Meu objetivo é evoluir cada vez mais na programação.</h2>
        <div>
          <p>Formado em técnico em informática na &nbsp;
            <a href="https://br.linkedin.com/school/iserj/" target="_blank">Faetec - ISERJ 
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="16px" height="16px">
                <path d="M19,21H5c-1.1,0-2-0.9-2-2V5c0-1.1,0.9-2,2-2h7v2H5v14h14v-7h2v7C21,20.1,20.1,21,19,21z" fill="#269AC9"/>
                <path d="M21 10L19 10 19 5 14 5 14 3 21 3z" fill="#269AC9"/>
                <path d="M6.7 8.5H22.3V10.5H6.7z" transform="rotate(-45.001 14.5 9.5)" fill="#269AC9"/>
              </svg>
            </a>
          </p>
          <p>
            Principais cursos &nbsp;
            <a href="https://www.origamid.com/" target="_blank">Origamid
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="16px" height="16px">
                <path d="M19,21H5c-1.1,0-2-0.9-2-2V5c0-1.1,0.9-2,2-2h7v2H5v14h14v-7h2v7C21,20.1,20.1,21,19,21z" fill="#269AC9"/>
                <path d="M21 10L19 10 19 5 14 5 14 3 21 3z" fill="#269AC9"/>
                <path d="M6.7 8.5H22.3V10.5H6.7z" transform="rotate(-45.001 14.5 9.5)" fill="#269AC9"/>
              </svg>
            </a>

            &nbsp;
            e
            &nbsp;
            
            <a href="https://www.rocketseat.com.br/" target="_blank">Rocketseat
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="16px" height="16px">
                <path d="M19,21H5c-1.1,0-2-0.9-2-2V5c0-1.1,0.9-2,2-2h7v2H5v14h14v-7h2v7C21,20.1,20.1,21,19,21z" fill="#269AC9"/>
                <path d="M21 10L19 10 19 5 14 5 14 3 21 3z" fill="#269AC9"/>
                <path d="M6.7 8.5H22.3V10.5H6.7z" transform="rotate(-45.001 14.5 9.5)" fill="#269AC9"/>
              </svg>
            </a>
          </p>
        </div>
      </section>
    </Container>
  )
}
