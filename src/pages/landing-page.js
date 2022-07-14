import styled from "@emotion/styled";
import Header from "../components/header";
import { colors, fonts, typography } from "../styles";
import Button from "../components/Button/button";
import { LandingSelect } from "../components/landing-select";
import { PropertyCard } from "../components/card";
import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { ReactComponent as LinkedinIcon } from "../assets/linkedin.svg";
import { ReactComponent as RubyIcon } from "../assets/ruby.svg";
import { ReactComponent as ReactIcon } from "../assets/react.svg";


/* ===== Main section que muestra la barra de busqueda de propiedades =====*/

const Illustration = styled.div`
// position: absolute;
width: 1862.03px;
height: 600px;
z-index: 999;
`

const SearchSection = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  align-items: center;
  height: 600px;
  gap: 60px;
  background-image: url("assets/illustration.svg");
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
const H4heading = styled.h4`
  ${typography.headline.h4};
  font-family: ${fonts.secundary};
  color: ${colors.pink.dark}

`
const ExampleCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
`

/* ===== Seccion rosada con link al SignUp =====*/

const SignupSection = styled.section`
  height: 312px;
  width: 100%;
  background: rgba(244, 143, 177, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 32px;
`

/* ===== Seccion 'Meet the team' =====*/

const TeamSection = styled.section`
  height: 486px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 26px;
`

const TeamContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`

const TeamMemberCard = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
`

const MemberPic = styled.div`
width: 180px;
height: 180px;
border: 2px solid black;
border-radius: 100px
`

const IconsContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 50px;
`

/* ===== Seccion 'Meet the team' =====*/

const Footer = styled.div`
  width: 100%;
  height: 73px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 120px;
  gap: 16px;
  font-family: ${fonts.secundary};
  background-color: ${colors.background.regular}
`
const RowFlex = styled.div`
display: flex;
flex-direction: row;
gap: 12px;
`
// style={{border: "2px solid brown"}} ====> debug

export function LandingPage() {

  return(
    <>
      <Header />
      <SearchSection style={{border: "2px solid brown"}}>
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
      <ExamplesSection>
        <TextsContainer>
          <p>Find an Apartment you Love</p>
          <H4heading>Homes for rent at the best prices</H4heading>
        </TextsContainer>
        <ExampleCardsContainer>
          <PropertyCard user="homeseeker" contract="rent"/>
          <PropertyCard user="homeseeker" contract="sale"/>
          <PropertyCard user="homeseeker" contract="rent"/>
        </ExampleCardsContainer>
      </ExamplesSection>
      <SignupSection>
        <H4heading style={{color: "black", width: "826px"}}>Getting someone to rent your apartment has never been this easy</H4heading>
        <Button size="lg">Create an account now</Button>
      </SignupSection>
      <TeamSection>
        <H4heading>Meet the team</H4heading>
        <TeamContainer>
          <TeamMemberCard >
            <MemberPic />
            <div>
              <p style={{textAlign: "center"}}>Cesar Martinez</p>
            </div>
            <IconsContainer>
              <a style={{cursor: "pointer"}}>
                <GithubIcon />
              </a>
              <a style={{cursor: "pointer"}}>
                <LinkedinIcon />  
              </a>            
            </IconsContainer>
          </TeamMemberCard>
          <TeamMemberCard >
            <MemberPic />
            <div>
              <p style={{textAlign: "center"}}>Enmanuel Chipana</p>
            </div>
            <IconsContainer>
              <a style={{cursor: "pointer"}}>
                <GithubIcon />
              </a>
              <a style={{cursor: "pointer"}}>
                <LinkedinIcon />  
              </a>
            </IconsContainer>
          </TeamMemberCard>
          <TeamMemberCard >
            <MemberPic />
            <div>
              <p style={{textAlign: "center"}}>Diego Manrique</p>
            </div>
            <IconsContainer>
              <a style={{cursor: "pointer"}}>
                <GithubIcon />
              </a>              
              <a style={{cursor: "pointer"}}>
                <LinkedinIcon />  
              </a>
            </IconsContainer>
          </TeamMemberCard>
          <TeamMemberCard >
            <MemberPic />
            <div>
              <p style={{textAlign: "center"}}>Luis Zelada</p>
            </div>
            <IconsContainer>
              <a style={{cursor: "pointer"}}>
                <GithubIcon />
              </a>              
              <a style={{cursor: "pointer"}}>
                <LinkedinIcon />  
              </a>
            </IconsContainer>
          </TeamMemberCard>
        </TeamContainer>
      </TeamSection>
      <Footer>
        <p>© 2021 - Find That Home</p>
        <div>
          <p style={{textAlign: "center"}}>Source Code</p>
          <RowFlex>
            <RowFlex>
              <RubyIcon />
              <p>Ruby on Rails REST API</p>
            </RowFlex>
            <RowFlex>
              <ReactIcon/>
              <p>React Responsive SPA</p>
            </RowFlex>
          </RowFlex>
        </div>
        <p>Codeable - Cohort 3 Final Project</p>
      </Footer>
    </>
  )

}