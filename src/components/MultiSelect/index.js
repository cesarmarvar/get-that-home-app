import { useState } from "react";
import { customStyles, StyleSelect } from "./styles";

function MultiSelect({ options, placeholder, withBorder = true, ...other}) {
  const [selectOptions, setSelectOptions] = useState([]);

  function handleChange(item) {
    setSelectOptions(item);
  }

  console.log(selectOptions);
  
  return (
    <StyleSelect
      placeholder={placeholder}
      styles={customStyles}
      isMulti
      options={options}
      isSearchable
      onChange={(item) => handleChange(item)}
      border={withBorder}
      {...other}
    />
  )
}

export default MultiSelect;
