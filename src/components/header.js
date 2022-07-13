import styled from "@emotion/styled"
import { useState } from "react";

function Header() {

  const [login, setLogin] = useState(false)
  const [typeUser, setTypeUser] = useState("")

  const Logo = styled.img`
    padding: 0;
  `
  
  function Search() {
    const Search = styled.button`
      border: none;
      cursor: pointer;
    `
    return (
      <Search>Find a Home</Search>
    )
  }

  function UnauthenticateHeader() {
    function Signup() {
      const  Signup = styled.button`
        cursor: pointer;
      `
      return (
        <Signup>Join</Signup>
      )
    }

    function Login() {
      const Login = styled.button`
        cursor: pointer;
      `
  
      return (
        <Login>Login</Login>
      )
    }

    return (
      <div>
        <Search></Search>
        <Login></Login>
        <Signup></Signup>
      </div>
    )
  }

  function AuthenticateHeader() {
    function Logout() {
      const Logout = styled.button`
        cursor: pointer;
      `
      return (
        <Logout>Logout</Logout>
      )
    }

    function Favorites() {
      const Favorites = styled.button`
        cursor: pointer;
      `

      return (
        <Favorites />
      )
    }
  }


  return (
    <div>


    </div>
  )
}

export default Header;