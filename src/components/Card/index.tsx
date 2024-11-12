import { Container } from "./styles";
import linkedin from "../../assets/ri_linkedin-fill.svg";
import github from "../../assets/ri_github-fill.svg";
import phone from "../../assets/gridicons_phone.svg";
import email from "../../assets/mdi_email-open-outline.svg";
import location from "../../assets/ion_location-outline.svg";
import Download from "../../assets/Vector.svg";
import PDF from "../../assets/Rafael_Ribeiro_Mendonca_Martins.pdf"
import Foto from "../../assets/foto.jpg"
import { useTheme } from "styled-components";
import Switch from "react-switch";


interface Props{
  toggleTheme(): void;
}

export function Card({ toggleTheme }:Props) {
  const { colors, title } = useTheme()

  return (
    <Container>
      <img className="Foto" src={Foto} alt="" />

      <div className="switchTheme">
          <Switch 
            className="switchTheme"
            onChange={toggleTheme}
            checked={title == 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={26}
            width={48}
            handleDiameter={20}
            offColor={colors["primary-800"]}
            onColor={colors["primary-800"]}
            onHandleColor={colors.black}
            offHandleColor={colors.white}
          />
        </div>

      <div className="title">
        <h2>Rafael Martins</h2>
        <span>FullStack Developer</span>
      </div>

      <ul>
        <li><a href="https://www.linkedin.com/in/rafaelrmmartins/" target="_blank"><img src={linkedin} alt="" /></a></li>
        <li><a href="https://github.com/RafaelRMartins" target="_blank"><img src={github} alt="" /></a></li>
      </ul>

      <section>
        <div className="box">
          <div className="box-info">
            <img src={phone} alt="" />
            <div>
              <p>Phone</p>
              <span>(21)98082-7264</span>
            </div>
          </div>
          <hr />
        </div>

        <div className="box">
          <div className="box-info">
            <img src={email} alt="" />
            <div>
              <p>Email</p>
              <span>rafaelribeirommartins@gmail.com</span>
            </div>
          </div>
          <hr />
        </div>

        <div className="box">
          <div className="box-info">
            <img src={location} alt="" />
            <div>
              <p>Location</p>
              <span>Rio de Janeiro, RJ</span>
            </div>
          </div>
          <hr />
        </div>

        <a href={PDF} download><img src={Download} alt="" />Download Resume</a>
      </section>
    </Container>
  )
}
