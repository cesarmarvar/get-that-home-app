import styled from "@emotion/styled"
import { useState } from "react"
import Input from "../components/input"
import { signup } from "../services/sessions-service"
import { typography } from "../styles"

function Form() {

  const [dataForm, setDataForm] = useState({
    name: "",
    user_type: 0,
    email: "",
    password: "",
    phone: ""
  })
  
  const { name, email, password, phone } = dataForm;
  
  function handleChange(e) {
    const { name, value } = e.target
    setDataForm({ ...dataForm, [name]: value})
  }
  
  function handleSubmit(e) {
    // setDataForm({ ...dataForm, [user_type]: 0})
    e.preventDefault();
    signup(dataForm)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input 
          label="Name"
          prop="name"
          type="text"
          value={name} 
          onChange={handleChange}
        />
        <Input 
          label={"Email"}
          prop={"email"}
          type={"email"} 
          value={email} 
          onChange={handleChange}
        />
        <Input 
          label={"Phone"}
          prop={"phone"}
          type={"number"} 
          value={phone} 
          onChange={handleChange}
        />
        <Input 
          label={"Password"}
          prop={"password"}
          type={"password"} 
          value={password} 
          onChange={handleChange}
        />
        <button>CREATE ACCOUNT</button>
      </form>
    </div>
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
    padding: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    background: white;
  `

  const InputContainer = styled.div`
    width: 356px;
    height: 332px;
    display: flex;
    flex-direction: column;
    align-items: center;
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