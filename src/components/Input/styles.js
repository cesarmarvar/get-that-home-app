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
  border: 1px solid ${colors.pink.add};
  ${(props)=> sizeInput(props.size)}
`;

const StyledInput = styled.input`
  outline: none;
  border: none;
  width: 100%;
  ${typography.body.b1};
  &:placeholder {
    ${typography.body.b1};
    color: ${colors.gray.light};
  }
`;

export {
  Wrapper,
  StyledInput
};