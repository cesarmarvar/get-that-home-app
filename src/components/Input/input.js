import { IndividualInput, LabelInput, StyledInput, Wrapper } from "./styles";

function Input({id, placeholder, type, onChange, value, IconL, label,IconR,...props }) {
  return(
    <IndividualInput>
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
          min="0"
        />
        {IconR && <IconR size="16px"/>}
      </Wrapper>
    </IndividualInput>
  );
};

export default Input;
