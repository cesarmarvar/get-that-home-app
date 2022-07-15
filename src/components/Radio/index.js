import * as Style from "./styles";

function Radio({ children = "", value, id,name, ...props }) {
  return (
    <Style.Container>
      <Style.Button 
        type="radio"
        id={id}
        value={value}
        name={name}
        {...props}
      />
      <Style.Label htmlFor={id}>{ children }</Style.Label>
    </Style.Container>
  );
}

export default Radio;
