import { ReactComponent as Logo } from "./../../assets/logo.svg";
import { RiGithubFill } from "react-icons/ri"
import { DiRuby, DiReact } from "react-icons/di"
import styled from "@emotion/styled";
import { colors, fonts } from "../../styles";

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

const Footer1 = styled.div`
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

function Footer() {
  function FooterLanding(){
    const RowFlex = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
   `
  
    return (
      <Footer1>
          <p>© 2022 - Find That Home</p>
          <div>
            <p style={{textAlign: "center"}}>Source Code</p>
            <RowFlex>
              <RowFlex>
                <DiRuby />
                <p>Ruby on Rails REST API</p>
              </RowFlex>
              <RowFlex>
                <DiReact/>
                <p>React Responsive SPA</p>
              </RowFlex>
            </RowFlex>
          </div>
          <p>Codeable - Cohort 6 Final Project</p>
        </Footer1>
    )
  }

  function Footer2() {
  
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

  const pathname = window.location.pathname === "/"

  return (
    <>
      { pathname ? <FooterLanding /> : <Footer2/> }
    </>
  )

}





export default Footer;