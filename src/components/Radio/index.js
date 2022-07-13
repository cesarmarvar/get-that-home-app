import * as Style from "./styles";

function Radio({ children = "", value, name }) {
  const downcase = children.toLowerCase();

  return (
    <Style.Container>
      <Style.Button 
        type="radio"
        id={downcase}
        value={value}
        name={name}
      />
      <Style.Label htmlFor={downcase}>{ children }</Style.Label>
    </Style.Container>
  );
}

export default Radio;
