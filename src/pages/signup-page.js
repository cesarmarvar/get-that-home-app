import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { typography } from "../styles";

function Signup({ setUserType }) {

  const Fondo = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background: linear-gradient(rgba(244, 143, 177, 0.15) 50%, white 50%)
  `

  const ContainerText = styled.div`
    padding-top: 4rem;
  `

  const ContainerCards = styled.div`
    display: flex;
    gap: 54px;
    align-items: center;
    justify-content: center;
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
    background: white;
    cursor: pointer;
  `

  const TypeUser = styled.h6`
    ${typography.headline["h6"]}
  `

  const DescriptionUser = styled.p`
    ${typography.subtitle["s2"]}
  `

  const LandlordImage = styled.img`
    width: 240px;
    height: 180px;
  `

  const HomeseekerImage = styled.img`
    width: 240px;
    height: 180px;
  `
  const navigate = useNavigate()

  function handleSubmitBuyer() {
    navigate("/register/form")
    setUserType(1)
  }

  function handleSubmitLandlord() {
    navigate("/register/form")
    setUserType(0)
  }


  return (
    <Fondo>
      <ContainerText>
        <Intro>Selecciona el perfil que estas buscando</Intro>
        <Question>Que estas buscando?</Question>
      </ContainerText>
      <ContainerCards>
        <Card onClick={handleSubmitLandlord}>
          <LandlordImage src="assets/rafiki.svg" alt="Landlord reference"/>
          <TypeUser>Landlord</TypeUser>
          <DescriptionUser>You want to rent or sell a home</DescriptionUser>
        </Card>
        <Card onClick={handleSubmitBuyer}>
          <HomeseekerImage src="assets/pana.svg" alt="Home Seeker reference"/>
          <TypeUser>Home seeker</TypeUser>
          <DescriptionUser>You want to find a home</DescriptionUser>
        </Card>
      </ContainerCards>
    </Fondo>
  )
}

export default Signup;