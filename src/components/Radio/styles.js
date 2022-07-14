import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Label = styled.label`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: ${colors.gray.regular};
`;

export const Button = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid ${colors.pink.regular};
  border-radius: 50%;
  cursor: pointer;
  &:checked {
    border: none;
    background-color: ${colors.pink.regular};
    width: 12px;
    height: 12px;
    outline: 1px solid ${colors.pink.regular};
    outline-offset: 3px;
    margin: 4px;
  }
`;
