import { useState } from "react";
import { Container, SectionHeader } from "./styles";
import outline_degree from "../../assets/icon-park-outline_degree-hat.svg";
import humbleicons_briefcase from "../../assets/humbleicons_briefcase.svg";
import BannerMusic from "../../assets/BannerMusic.jpg"
import BannerBRRP from "../../assets/BannerBRRP.jpg"
import BannerFoodExplorer from "../../assets/BannerFoodExplorer.jpg"

interface ItemCard {
  name: string;
}

const itemsCard: ItemCard[] = [
  { name: "React"},
  { name: "JavaScript"},
  { name: "HTML"},
  { name: "CSS"},
  { name: "Lua"},
  { name: "TypeScript"},
  { name: "Figma"},
  { name: "Adobe XD"},
  { name: "Express"},
  { name: "Java"},
  { name: "PHP"},
  { name: "MySQL"},
  { name: "GitHub"},
  { name: "Styled Components"},
  { name: "Node.js"},
];

export function Main() {
  const [activeButton, setActiveButton] = useState('resume');

  function Resume(){
    return(
      <div className="box-resume">
        <SectionHeader>
          <h2>Sobre</h2>
          <div className="line"></div>
        </SectionHeader>

        <div className="sectionList">
          <div className="listEducation">
            <div className="list-title">
              <img src={outline_degree} alt="" />
              <h3>Formações</h3>
            </div>
            
            <div className="box">
              <p className="date">2024-2028</p>
              <p className="title">Ciência da Computação</p>
              <p className="subtitle">Anhanguera</p>
            </div>

            <div className="box">
              <p className="date">2016-2018</p>
              <p className="title">Técnico em Informática</p>
              <p className="subtitle">Faetec - ISERJ</p>
            </div>
          </div>

          <div className="listExperience">
            <div className="list-title">
              <img src={humbleicons_briefcase} alt="" />
              <h3>Experiências</h3>
            </div>
            <div className="box">
              <p className="date">2020-2023</p>
              <p className="title">Programador</p>
              <p className="subtitle">Autônomo</p>
            </div>

            <div className="box">
              <p className="date">2017-2018</p>
              <p className="title">Estagiário</p>
              <p className="subtitle">ISERJ</p>
            </div>
          </div>
        </div>

        <div className="sectionSkills">
          <h3>Habilidades</h3>
          <div className="skills">
            {itemsCard.map((item, index) => (
              <span key={index}>{item.name}</span>
            ))}
          </div>
        </div>
      </div>
    )
  }

  function Portfolio(){
    return(
      <div className="box-Portfolio">
        <SectionHeader>
          <h2>Portfólio</h2>
          <div className="line"></div>
        </SectionHeader>
        <div className="sectionProject">
          <a href="https://github.com/RafaelRMartins/RM-music" target="_blank">
            <div className="image-container">
              <img src={BannerMusic} alt="" />
            </div>
            <p>Music</p>
          </a>
          <a href="https://github.com/RafaelRMartins/foodexplorer-frontend" target="_blank">
            <div className="image-container">
              <img src={BannerFoodExplorer} alt="" />
            </div>
            <p>FoodExplorer</p>
          </a>
          <a href="https://i.ibb.co/GkmMZmp/BRRP-Home.jpg" target="_blank">
            <div className="image-container">
              <img src={BannerBRRP} alt="" />
            </div>
            <p>BRRP</p>
          </a>
        </div>
      </div>
    )
  }

  return (
    <Container>
      <header>
        <div className="menu">
          <button 
            className={activeButton === 'resume' ? 'active' : ''} 
            onClick={() => setActiveButton('resume')}
          >
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 2H17.5C18.2956 2 19.0587 2.31607 19.6213 2.87868C20.1839 3.44129 20.5 4.20435 20.5 5V19C20.5 19.7956 20.1839 20.5587 19.6213 21.1213C19.0587 21.6839 18.2956 22 17.5 22H7.5C6.70435 22 5.94129 21.6839 5.37868 21.1213C4.81607 20.5587 4.5 19.7956 4.5 19V5C4.5 4.20435 4.81607 3.44129 5.37868 2.87868C5.94129 2.31607 6.70435 2 7.5 2ZM7.5 4C7.23478 4 6.98043 4.10536 6.79289 4.29289C6.60536 4.48043 6.5 4.73478 6.5 5V19C6.5 19.2652 6.60536 19.5196 6.79289 19.7071C6.98043 19.8946 7.23478 20 7.5 20H17.5C17.7652 20 18.0196 19.8946 18.2071 19.7071C18.3946 19.5196 18.5 19.2652 18.5 19V5C18.5 4.73478 18.3946 4.48043 18.2071 4.29289C18.0196 4.10536 17.7652 4 17.5 4H7.5ZM9.5 5H15.5C15.7652 5 16.0196 5.10536 16.2071 5.29289C16.3946 5.48043 16.5 5.73478 16.5 6C16.5 6.26522 16.3946 6.51957 16.2071 6.70711C16.0196 6.89464 15.7652 7 15.5 7H9.5C9.23478 7 8.98043 6.89464 8.79289 6.70711C8.60536 6.51957 8.5 6.26522 8.5 6C8.5 5.73478 8.60536 5.48043 8.79289 5.29289C8.98043 5.10536 9.23478 5 9.5 5ZM9.5 17H11.5C11.7652 17 12.0196 17.1054 12.2071 17.2929C12.3946 17.4804 12.5 17.7348 12.5 18C12.5 18.2652 12.3946 18.5196 12.2071 18.7071C12.0196 18.8946 11.7652 19 11.5 19H9.5C9.23478 19 8.98043 18.8946 8.79289 18.7071C8.60536 18.5196 8.5 18.2652 8.5 18C8.5 17.7348 8.60536 17.4804 8.79289 17.2929C8.98043 17.1054 9.23478 17 9.5 17ZM9.5 13H15.5C15.7652 13 16.0196 13.1054 16.2071 13.2929C16.3946 13.4804 16.5 13.7348 16.5 14C16.5 14.2652 16.3946 14.5196 16.2071 14.7071C16.0196 14.8946 15.7652 15 15.5 15H9.5C9.23478 15 8.98043 14.8946 8.79289 14.7071C8.60536 14.5196 8.5 14.2652 8.5 14C8.5 13.7348 8.60536 13.4804 8.79289 13.2929C8.98043 13.1054 9.23478 13 9.5 13ZM9.5 9H15.5C15.7652 9 16.0196 9.10536 16.2071 9.29289C16.3946 9.48043 16.5 9.73478 16.5 10C16.5 10.2652 16.3946 10.5196 16.2071 10.7071C16.0196 10.8946 15.7652 11 15.5 11H9.5C9.23478 11 8.98043 10.8946 8.79289 10.7071C8.60536 10.5196 8.5 10.2652 8.5 10C8.5 9.73478 8.60536 9.48043 8.79289 9.29289C8.98043 9.10536 9.23478 9 9.5 9Z" fill="black"/>
            </svg>
            Sobre
          </button>

          <button 
            className={activeButton === 'work' ? 'active' : ''} 
            onClick={() => setActiveButton('work')}
          >
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.5 21C3.95 21 3.479 20.804 3.087 20.412C2.695 20.02 2.49934 19.5493 2.5 19V8C2.5 7.45 2.696 6.979 3.088 6.587C3.48 6.195 3.95067 5.99934 4.5 6H8.5V4C8.5 3.45 8.696 2.979 9.088 2.587C9.48 2.195 9.95067 1.99934 10.5 2H14.5C15.05 2 15.521 2.196 15.913 2.588C16.305 2.98 16.5007 3.45067 16.5 4V6H20.5C21.05 6 21.521 6.196 21.913 6.588C22.305 6.98 22.5007 7.45067 22.5 8V19C22.5 19.55 22.304 20.021 21.912 20.413C21.52 20.805 21.0493 21.0007 20.5 21H4.5ZM4.5 19H20.5V8H4.5V19ZM10.5 6H14.5V4H10.5V6Z" fill="#1A1003"/>
            </svg>
            Portfólio
          </button>
        </div>
      </header>

      <section>
        {activeButton === 'resume' && <Resume />}
        {activeButton === 'work' && <Portfolio />}
      </section>
    </Container>
  )
}
