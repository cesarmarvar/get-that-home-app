import styled from "@emotion/styled";
import Header from "../components/header";
import { ReactComponent as Ilustration } from "../assets/illustration.svg"
import { colors, fonts, typography } from "../styles";
import Button from "../components/Button/button";
import { LandingSelect } from "../components/landing-select";
import { PropertyCard } from "../components/card"

/* ===== Main section que muestra la barra de busqueda de propiedades =====*/

const Illustration = styled.div`
width: 100vw;
height: 600px;
// position: absolute;
// z-index: 999px;
`

const SearchSection = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
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

const SearchBar = styled.form`
  display: flex;
  flex-direction: row;
  max-width: 800px;
  max-height: 72px;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`
const Division = styled.div` // linea divisora entre select/options
  width: 0px;
  height: 56px;
  border: 1px solid ${colors.background.regular};
`
/* ===== Seccion que muestra ejemplos de depas =====*/

const ExamplesSection = styled.section`
  height: 604px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`

const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  ${typography.subtitle.s2};
  font-family: ${fonts.secundary};
`
const ExamplesHeading = styled.h4`
  ${typography.headline.h4};
  color: ${colors.pink.dark}

`
const ExampleCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
`


// style={{border: "2px solid brown"}} ====> debug

export function LandingPage() {

  return(
    <>
      <Header />
      <SearchSection>
        <Introduction>
          <Title>Meet your new Home</Title>
          <p>The easiest way to find where you belong</p>
        </Introduction>
        <SearchBar>
          <div>
            <LandingSelect 
            label="I'M LOOKING FOR"
            name="property_type"
            options={["house", "apartment"]}
            />
          </div>
          <Division />
          <div>
            <LandingSelect
            label="I WANT TO"
            name="contract"
            options={["rent", "buy"]}
            />
          </div>
          <Division />
          <Button>search</Button>
        </SearchBar>
      </SearchSection>
      <ExamplesSection style={{border: "2px solid brown"}}>
        <TextsContainer>
          <p>Find an Apartment you Love</p>
          <ExamplesHeading>Homes for rent at the best prices</ExamplesHeading>
        </TextsContainer>
        <ExampleCardsContainer>
          <PropertyCard user="homeseeker" contract="rent"/>
          <PropertyCard user="homeseeker" contract="sale"/>
          <PropertyCard user="homeseeker" contract="rent"/>
        </ExampleCardsContainer>
      </ExamplesSection>
    </>
  )

}