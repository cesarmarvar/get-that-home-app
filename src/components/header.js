import styled from "@emotion/styled"
import { useEffect, useState } from "react";
import Button from "./Button/button";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: grow;
  justify-content: space-around;
`

const NavContainer = styled.div`
  display: flex;
  flex-direction: grow;
  gap: 1rem;
`

function Header({ auth, type }) {

  const [login, setLogin] = useState(false);
  const [typeUser, setTypeUser] = useState("");

  useEffect(() => {
    setLogin(auth);
    setTypeUser(type);
  }, [auth, type])

  const Logo = styled.img`
    padding: 0;
    width: 136px;
    height: 40px;
  `
  
  function Search() {
    return (
      <Button type={"ghost"} size={"sm"} children={"FIND A HOME"} />
    )
  }

  function Profile() {
    return (
      <Button type={"primary"} size={"sm"} children={"PROFILE"}/>
    )
  }

  function Logout() {
    return (
      <Button type={"secundary"} size={"sm"} children={"LOGOUT"} />
    )
  }

  function UnauthenticateHeader() {
    function Signup() {
      return (
        <Button type={"secundary"} size={"sm"} children={"JOIN"}/>
      )
    }

    function Login() {
      return (
        <Button type={"secundary"} size={"sm"} children={"LOGIN"} />
      )
    }

    return (
      <NavContainer>
        <Search />
        <Login />
        <Signup />
      </NavContainer>
    )
  }

  function AuthenticateBuyerHeader() {
    

    function Favorites() {
      return (
        <Button type={"primary"} size={"sm"} children={"SAVED PROPERTIES"}/>
      )
    }

    return (
      <NavContainer>
        <Search/>
        <Logout />
        <Favorites/>
        <Profile/>
      </NavContainer>
    )
  }

  function AuthenticateLandlordHeader() {
    function Properties() {
      return (
        <Button type={"primary"} size={"sm"} children={"MY PROPERTIES"} />
      )
    }

    return (
      <NavContainer>
        <Search />
        <Logout />
        <Properties />
        <Profile />
      </NavContainer>
    )
  }

  function AuthenticateHeader() {
    if (typeUser === "buyer") {
      return <AuthenticateBuyerHeader />
    } else {
      return <AuthenticateLandlordHeader />
    } 
  }


  return (
    <HeaderContainer>
      <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png" />
      { login ? <AuthenticateHeader/> : <UnauthenticateHeader/> }
    </HeaderContainer>
  )
}

export default Header;