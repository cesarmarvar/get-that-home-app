import { ReactComponent as Logo } from "./../../assets/logo.svg";
import { RiGithubFill } from "react-icons/ri"
import styled from "@emotion/styled";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: grow;
  justify-content: space-around;
`

function Footer() {

  const Information = styled.p`
    weight: 400;
    size: 14px;
    line-height: 1.25rem;
    letter: 0.25px;
  `

  const LittleInfo = styled.p`
    weight: 400;
    size: 12px;
    line-height: 1rem;
    letter: 0.4px;
  `

  const ContainerMembers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
  `



  function LogoBox(){
    return (
      <div>
        <Logo />
        <Information>© 2022 - Get That Home</Information>
        <Information>Codeable - Cohort 6 Final Project</Information>
      </div>
    )
  }

  function Members() {
    
    function MemberComponent({ children }) {
      return (
        <div style={{ display: "flex", flexDirection: "grow", gap: "0.25rem"}}>
          <RiGithubFill />
          <Information>{ children }</Information>
        </div>
      )
    }

    return (
      <div>
        <LittleInfo>Build with ❤ by:</LittleInfo>
        <ContainerMembers>
          <MemberComponent>Enmanuel Chipana</MemberComponent>
          <MemberComponent>Cesar Martinez</MemberComponent>
          <MemberComponent>Diego Manrique</MemberComponent>
          <MemberComponent>Luis Zelada</MemberComponent>
        </ContainerMembers>
      </div>
    )
  }


  return (
    <FooterContainer>
      <LogoBox></LogoBox>
      <Members></Members>
    </FooterContainer>
  )  
}

export default Footer;