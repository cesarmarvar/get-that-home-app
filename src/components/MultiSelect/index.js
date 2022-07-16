import { useState } from "react";
import { Container, customStyles, Label, StyleSelect } from "./styles";

function MultiSelect({ isMulti=true, label="", options, placeholder, withBorder = true, ...other}) {
  const [selectOptions, setSelectOptions] = useState([]);

  function handleChange(item) {
    setSelectOptions(item);
  }

  console.log(selectOptions);
  
  return (
    <Container>
      <Label>{ label }</Label>
      <StyleSelect
        placeholder={placeholder}
        styles={customStyles}
        isMulti={isMulti}
        options={options}
        isSearchable
        onChange={(item) => handleChange(item)}
        border={withBorder}
        {...other}
      />
    </Container>
  )
}

export default MultiSelect;
