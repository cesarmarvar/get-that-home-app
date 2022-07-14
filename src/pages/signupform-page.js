import styled from "@emotion/styled"
import { typography } from "../styles"

function SignupForm({ typeUser }) {

  function Input({ prop, value, onChange, label, type}) {

    return (
      <div>
        {label && <label htmlFor={prop}>{label}</label>}
          <input
            id={prop}
            name={prop}
            type={type}
            value={value}
            onChange={onChange}
          />
      </div>
    )
  }

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
      </SigunpContainer>
      <InputContainer>
        <form>
          <Input prop={"name"} value={name} />

        </form>
      </InputContainer>
    </Fondo>
  )
}

export default SignupForm;