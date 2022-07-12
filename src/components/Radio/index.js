import * as Style from "./styles";

function Radio({ children = "", value, name }) {
  const labelParsed = children.toLowerCase();

  return (
    <Style.Container>
      <Style.Button 
        type="radio"
        id={labelParsed}
        value={value}
        name={name}
      />
      <Style.Label htmlFor={labelParsed}>{ children }</Style.Label>
    </Style.Container>
  );
}

export default Radio;
