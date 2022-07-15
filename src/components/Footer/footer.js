import { ReactComponent as Logo } from "./../../assets/logo.svg";
import { RiGithubFill } from "react-icons/ri"
import { DiRuby, DiReact } from "react-icons/di"
import styled from "@emotion/styled";

const FooterContainer = styled.div`
  height: 124px;
  width: 100%;
  display: flex;
  flex-direction: grow;
  align-items: center;
  justify-content: space-around;
  background: #F5F5F6;
  position: absolute;
  bottom: 0;
  border-top: 1px solid #BF5F82;
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
    grid-template-columns: 180px 180px;
    grid-template-rows: 1fr 4px 1fr;
  `

  function LogoBox(){
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem"}}>
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
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem"}}>
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

  function Frameworks() {

    function FrameworksComponent({ children }) {
      return (
        <div style={{ display: "flex", flexDirection: "grow", gap: "0.25rem"}}>
          <Information>{ children }</Information>
        </div>
      )
    }

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem"}}>
        <LittleInfo>Source code:</LittleInfo>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem"}}>
          <FrameworksComponent>
            <DiRuby /> Ruby on Rails REST API
          </FrameworksComponent>
          <FrameworksComponent>
            <DiReact /> React Responsive SPA
          </FrameworksComponent>
        </div> 
      </div>
    )
  }

  return (
    <FooterContainer>
      <LogoBox></LogoBox>
      <Members></Members>
      <Frameworks></Frameworks>
    </FooterContainer>
  )  
}

export default Footer;