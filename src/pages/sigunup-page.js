import styled from "@emotion/styled";
import Header from "../components/header";
import { typography } from "../styles";

function Signup() {

  const Fondo = styled.div`
    height: 100vh;
    background: linear-gradient(rgba(244, 143, 177, 0.15) 50%, white 50%)
  `

  const ContainerText = styled.div`
    padding-top: 4rem;
  `

  const Intro = styled.h5`
  text-align: center;
    ${typography.headline["h5"]}
  `

  const Question = styled.h2`
  text-align: center;
    ${typography.headline["h2"]}
  `

  const Card = styled.div`
    width: 280px;
    height: 274px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 1.25rem;
    gap: 0.5rem;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  `

  return (
    <Fondo>
      {/* <img src="assets/rafiki.svg" alt="prueba"/> */}
      <ContainerText>
        <Intro>Selecciona el perfil que estas buscando</Intro>
        <Question>Que estas buscando?</Question>
      </ContainerText>
    </Fondo>
  )
}

export default Signup;