import styled from "@emotion/styled";
import Header from "../components/header";
import { ReactComponent as Ilustration } from "../assets/illustration.svg"
import { fonts, typography } from "../styles";


const Illustration = styled.div`
width: 100vw;
height: 600px;
`

const SearchSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Introduction = styled.div`
  font-family: ${fonts.secundary};
  ${typography.headline.h5};
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 8px;
`

const Title = styled.h2` // este podria reemplazarse por el typography.headline.h2 pero falta corregir unos datos
  font-weight: 300;
  font-size: 64px;
  line-height: 88px;
`

export function LandingPage() {

  return(
    <>
      <Header />
      <SearchSection>
        <Introduction>
          <Title>Meet your new Home</Title>
          <p>The easiest way to find where you belong</p>
        </Introduction>
        <div>

        </div>
      </SearchSection>
    </>
  )

}