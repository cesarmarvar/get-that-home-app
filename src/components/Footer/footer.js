import { ReactComponent as Logo } from "./../../assets/logo.svg";
import { RiGithubFill } from "react-icons/ri"
import styled from "@emotion/styled";

function Footer() {

  const Information = styled.p`
    weight: 400;
    size: 14px;
    line-height: 1.25rem;
    letter: 0.25px;
  `

  function Members() {
    
    function MemberComponent({ children }) {
      return (
        <>
          <RiGithubFill />
          <Information>{ children }</Information>
        </>
      )
    }
  }

  function LogoBox(){
    return (
      <>
        <Logo />
        <Information>© 2022 - Get That Home</Information>
        <Information>Codeable - Cohort 6 Final Project</Information>
      </>

    )

  }

  return (
    <>
    </>
  )  
}