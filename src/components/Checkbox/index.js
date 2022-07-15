import { Container, Label } from "./../Radio/styles"
import { Button } from "./styles";

function Checkbox({ children = "", value, name,...others }) {
  const downcase = children.toLowerCase();
  
  return (
    <Container>
      <Button 
        type="checkbox"
        id={downcase}
        value={value}
        name={name}
        {...others}
      />
      <Label htmlFor={downcase}>{ children }</Label>
    </Container>
  );
}

export default Checkbox;
