import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Button = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid ${colors.pink.regular};
  cursor: pointer;
  background-color: white;
  transition: .2s ease-in;
  &:checked {
    background-color: ${colors.pink.regular};
    background-image: url(./assets/check.png);
    background-repeat: no-repeat;
    background-position: center;
  }
`;
