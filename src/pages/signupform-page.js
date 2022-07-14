import styled from "@emotion/styled"
import { useState } from "react"
import Input from "../components/Input"
import { signup } from "../services/sessions-service"
import { typography } from "../styles"

function Form({userType}) {

  const [dataForm, setDataForm] = useState({
    name: "",
    user_type: userType,
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
          id="name"
          type="text"
          name="name"
          // label="Name"
          // prop="name"
          placeholder={"John Doe"}
          value={name} 
          onChange={handleChange}
        />
        <Input 
          id="name"
          type="text"
          name="name"
          // label="Name"
          // prop="name"
          placeholder={"John Doe"}
          value={name} 
          onChange={handleChange}
        />
        <Input 
          id="name"
          type="text"
          name="name"
          // label="Name"
          // prop="name"
          placeholder={"John Doe"}
          value={name} 
          onChange={handleChange}
        />
        <Input 
          id="name"
          type="text"
          name="name"
          // label="Name"
          // prop="name"
          placeholder={"John Doe"}
          value={name} 
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