import { Container, customStyles, Label, StyleSelect } from "./styles";

function MultiSelect({ isMulti=true, label="", setFilters, type, options, placeholder, withBorder = true, ...other}) {
  
  function handleChange(item) {
    if(type === "type") {
      setFilters(filters => ({...filters, type: item.value}));
    }else if(type === "contract"){
      setFilters(filters => ({...filters, contract: item.value}));
    }else {
      const items = item.map(i => (i.value));
      setFilters(filters => ({...filters, where: items}))
    }
  }
  
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
