import { LabelInput, StyledInput, Wrapper } from "./styles";

function Input({id, placeholder, type, onChange, value, IconL, label,IconR,...props }) {
  return(
    <>
     { label && <LabelInput htmlFor={id}>{label}</LabelInput>}
      <Wrapper {...props} >
        {IconL && <IconL size="16px"/>}
        <StyledInput 
          id={id}
          type={type}
          name={id} 
          placeholder={placeholder} 
          value={value}
          onChange={onChange}
        />
        {IconR && <IconR size="16px"/>}
      </Wrapper>
    </>
  );
};

export default Input;