import styled from "@emotion/styled"
import { useState } from "react"
import Button from "../components/Button/button"
import Input from "../components/Input"
import { signup } from "../services/sessions-service"
import { typography } from "../styles"

function Form({userType}) {

  const [dataForm, setDataForm] = useState({
    name: "",
    user_type: 0,
    email: "",
    password: "",
    phone: ""
  })

  const [passwordValid, setPasswordValid] = useState({
    password: "",
    isValid: null
  })
  
  const { name, email, password, phone } = dataForm;
  
  function handleChange(e) {
    const { name, value } = e.target
    setDataForm({ ...dataForm, [name]: value})
  }

  function validPassword(e) {
    setPasswordValid({isValid: password === e.target.value, password: e.target.value })
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    signup(dataForm)
  }

  const Sugerence = styled.p`
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1rem;
    letter-spacing: 0.4px;
    color: #8E8E8E;
  `

  return (
    <>
      <form style={{display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "center", justifyContent: "center"}} onSubmit={handleSubmit}>
        <div>
          <Input 
            id="name"
            type="text"
            name="name"
            label="NAME"
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
            placeholder={"999-999-999"}
            value={phone} 
            onChange={handleChange}
          />
        </div>
        <div>
          <Input 
            id="password"
            type="password"
            name="password"
            label="PASSWORD"
            placeholder={"******"}
            value={password} 
            onChange={handleChange}
          />
          <Sugerence>At least 6 characteres</Sugerence>
        </div>
        <div>
          <Input 
            id="password2"
            type="password"
            name="password2"
            label="CONFIRM PASSWORD"
            placeholder={"******"}
            value={passwordValid.password} 
            onChange={validPassword}
          />
          {password && !passwordValid.isValid && <Sugerence>NO COINCIDE</Sugerence>}
        </div>
        <Button  type="primary" size="default" children="CREATE ACCOUNT" >CREATE ACCOUNT</Button>
      </form>
    </>
  )
}

function SignupForm() {

  const Fondo = styled.div`
    height: 100vh;
    background: linear-gradient(rgba(244, 143, 177, 0.15) 50%, white 50%)
  `

  const SigunpContainer = styled.div`
    width: 388px;
    height: 468px;
    border-radius: 0.5rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    background: white;
    position: 50%;
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
        <TitleForm>Create your Account</TitleForm>
        <InputContainer>
          <Form />
        </InputContainer>
      </SigunpContainer>
    </Fondo>
  )
}

export default SignupForm;