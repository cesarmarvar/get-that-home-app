import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/button";
import Input from "../components/Input";
import { getUser, updateUser } from "../services/users-service";
import { typography } from "../styles";

function Form() {

  const navigate = useNavigate();

  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    phone: ""
  })
  
  const { name, email, phone } = dataForm;
  
  useEffect(() => {
    getUser().then(setDataForm).catch(console.log)
  }, [])
  
  
  function handleChange(e) {
    const { name, value } = e.target
    setDataForm({ ...dataForm, [name]: value})
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    updateUser(dataForm)
    navigate("/");
  }

  return (
    <>
      <form style={{display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "center", justifyContent: "center"}} onSubmit={handleSubmit}>
        <div>
          <Input 
            id="name"
            type="text"
            name="name"
            label="NAME"
            size="sm"
            placeholder={"John Doe"}
            value={name} 
            onChange={handleChange}
          />
        </div>
        <div>
          <Input 
            id="email"
            type="email"
            name="email"
            label="EMAIL"
            size="sm"
            placeholder={"user@mail.com"}
            value={email} 
            onChange={handleChange}
          />
        </div>
        <div>
          <Input 
            id="phone"
            type="text"
            name="phone"
            label="PHONE"
            size="sm"
            placeholder={"999-999-999"}
            value={phone} 
            onChange={handleChange}
          />
        </div>
        <Button style={{margin: "1rem"}} type="primary" children="CREATE ACCOUNT" >EDIT PROFILE</Button>
      </form>
    </>
  )
}

export function ProfilePage({userType}) {


  const Fondo = styled.div`
    height: 100vh;
    background: linear-gradient(rgba(244, 143, 177, 0.15) 50%, white 50%);
    display: flex;
    justify-content: center;
  `

  const SigunpContainer = styled.div`
    width: 388px;
    height: 350px;
    border-radius: 0.5rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    background: white;
    margin: auto;
    // margin-bottom: 10px;
  `

  const InputContainer = styled.div`
    width: 356px;
    height: 332px;
    display: flex;
    flex-direction: column;
    padding: 0;
    gap: 0.5rem;
  `

  const TitleForm = styled.h5`
    ${typography.headline["h5"]}
  `

  return (
    <Fondo>
      <SigunpContainer>
        <TitleForm>Edit Profile</TitleForm>
        <InputContainer>
          <Form />
        </InputContainer>
      </SigunpContainer>
    </Fondo>
  )
}   