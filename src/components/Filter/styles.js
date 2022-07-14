import styled from "@emotion/styled";
import { colors, fonts } from "../../styles";

export const Container = styled.div`
  position: relative;
`;

export const Button = styled.div`
  background-color: ${colors.pink.regular};
  padding: 0.5rem;
  width: fit-content;
  border-radius: 1rem;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  font-family: ${fonts.primary};
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 90px;
`;

export const Card = styled.div`
  max-width: 270px;
  min-width: 240px;
  min-height: 120px;
  max-height: 185px;
  padding: 0.5rem;
  background-color: white;
  position: absolute;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  top: 115%;
  margin: 0 auto;
  left: -45px;
`;

export const DataFilters = styled.div`
  position: absolute;
  top: 500%;
  max-width: 240px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: end;
`;
