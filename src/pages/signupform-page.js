import styled from "@emotion/styled"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../components/Button/button"
import Input from "../components/Input"
import { useAuth } from "../context/auth-context"
import { typography } from "../styles"

function Form({userType}) {

  const { signup } = useAuth();

  const navigate = useNavigate();

  const [dataForm, setDataForm] = useState({
    name: "",
    user_type: userType,
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
    navigate("/");
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
        <div>
          <Input 
            id="password"
            type="password"
            name="password"
            label="PASSWORD"
            size="sm"
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
            size="sm"
            placeholder={"******"}
            value={passwordValid.password} 
            onChange={validPassword}
          />
          {password && !passwordValid.isValid && <Sugerence>NO COINCIDE</Sugerence>}
        </div>
        <Button style={{margin: "1rem"}} type="primary" children="CREATE ACCOUNT" >CREATE ACCOUNT</Button>
      </form>
    </>
  )
}

function SignupForm({userType}) {

  const Fondo = styled.div`
    height: 100vh;
    background: linear-gradient(rgba(244, 143, 177, 0.15) 50%, white 50%);
    display: flex;
    justify-content: center;
  `

  const SigunpContainer = styled.div`
    width: 388px;
    height: 500px;
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
        <TitleForm>Create your Account</TitleForm>
        <InputContainer>
          <Form userType={userType}/>
        </InputContainer>
      </SigunpContainer>
    </Fondo>
  )
}

export default SignupForm;