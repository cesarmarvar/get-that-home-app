import styled from "@emotion/styled";
import { colors, typography } from "../../styles";

function sizeInput(size) {
  switch (size) {
    case "lg":
      return`
        width: 600px;
      `
    case "sm":
      return`
        width: 356px;
      `;
    case "other":
      return`
        width: 600px;
        min-height: 76px;
        align-items: start;
      `;
    default:
      break;
  }
};

const Wrapper = styled.div`
  display: flex;
  border-radius: 0.5rem;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;
  width: 100%;
  border: 1px solid ${colors.pink.add};
  ${(props)=> sizeInput(props.size)}
`;

const StyledInput = styled.input`
  outline: none;
  border: none;
  width: 100%;
  box-sizing: border-box;
  ${typography.body.b1};
  &:placeholder {
    ${typography.body.b1};
    color: ${colors.gray.light};
  }
`;

const LabelInput = styled.label`
  ${typography.overline};
  color: ${colors.gray.dark};
`
const IndividualInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`; 

export {
  Wrapper,
  StyledInput,
  LabelInput,
  IndividualInput
};