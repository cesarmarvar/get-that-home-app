import styled from "@emotion/styled";
import { fonts, typography } from "../styles";

const Label = styled.label`
  ${typography.overline};
`

const Select = styled.select`
  display: flex;
  border: none;
  width: 160px;
  height: 40px;
  ${typography.body.b1};
  font-family: ${fonts.primary};
  gap: 8px;
`

export function LandingSelect({label, name, options = [], ...props}) {


  /* Esta funcion solo es para formatear las opciones "house" a "A House" y "apartment" a "An Apartment". 
   No es necesario usarla en otra situacion */
  function formatPropertyOption(name) {
    return name === "house" ? "A House" : name === "apartment" ? "An Apartment" : null
  }

  return(
    <>
      <Label>{label}</Label>
      <Select name={name}>
        {options.map((option) => {
          return <option value={`${option}`}>{formatPropertyOption(option)}</option>
        })}
      </Select>
    </>
  )
}