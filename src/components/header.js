import styled from "@emotion/styled"
import { useEffect, useState } from "react";

function Header({ auth, type }) {

  const [login, setLogin] = useState(false);
  const [typeUser, setTypeUser] = useState("");

  useEffect(() => {
    setLogin(auth);
    setTypeUser(type);
  }, [auth, type])

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

  function Logout() {
    const Logout = styled.button`
      cursor: pointer;
    `
    return (
      <Logout>LOGOUT</Logout>
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
        <Logout />
        <Favorites/>
        <Profile/>
      </div>
    )
  }

  function AuthenticateLandlordHeader() {
    function Properties() {
      const Properties = styled.button`
        cursor: pointer;
      `
      return (
        <Properties>MY PROPERTIES</Properties>
      )
    }

    return (
      <div>
        <Search />
        <Logout />
        <Properties />
        <Profile />
      </div>
    )
  }


  return (
    <div>
      { login ? <AuthenticateBuyerHeader/> : <UnauthenticateHeader/>}
    </div>
  )
}

export default Header;