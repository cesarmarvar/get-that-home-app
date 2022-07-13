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
      <Search>FIND A HOME</Search>
    )
  }

  function Profile() {
    const Profile = styled.button`
      cursor: pointer;
    `
    return (
      <Profile>PROFILE</Profile>
    )
  }

  function UnauthenticateHeader() {
    function Signup() {
      const  Signup = styled.button`
        cursor: pointer;
      `
      return (
        <Signup>JOIN</Signup>
      )
    }

    function Login() {
      const Login = styled.button`
        cursor: pointer;
      `
  
      return (
        <Login>LOGIN</Login>
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

  function AuthenticateBuyerHeader() {
    function Logout() {
      const Logout = styled.button`
        cursor: pointer;
      `
      return (
        <Logout>LOGOUT</Logout>
      )
    }

    function Favorites() {
      const Favorites = styled.button`
        cursor: pointer;
      `

      return (
        <Favorites>SAVED PROPERTIES</Favorites>
      )
    }

    return (
      <div>
        <Search/>
        <Favorites/>
        <Profile/>
      </div>
    )
  }


  return (
    <div>


    </div>
  )
}

export default Header;