import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Form = styled.form`
  background-color: white;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 2rem;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${colors.gray.regular};
  font-size: 24px;
  line-height: 32px;
`;

export const ErrorMessage = styled.p`
  font-size: 14px;
  color: ${colors.pink.dark};
  align-self: start;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 65%;
  align-items: center;
  align-self: flex-end;
`;
