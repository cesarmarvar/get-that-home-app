import styled from "@emotion/styled";
import Header from "../components/header";
import { ReactComponent as Ilustration } from "../assets/illustration.svg"
import { fonts, typography } from "../styles";
import Button from "../components/Button/button";
import { LandingSelect } from "../components/landing-select";


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
          <Button>search</Button>
        </SearchBar>
      </SearchSection>
    </>
  )

}