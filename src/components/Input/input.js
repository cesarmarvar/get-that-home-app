import { StyledInput, Wrapper } from "./styles";

function Input({id, placeholder, type, onChange, value, IconL, IconR,...props }) {
  return(
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
  );
};

export default Input;
