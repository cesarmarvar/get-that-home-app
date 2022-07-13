import { colors } from "../../styles";
import Select from "react-select";
import styled from "@emotion/styled";

export const customStyles = {
  option: (provided) => {

    return {
      ...provided,
      color: colors.gray.regular,
      fontSize: 14,
      padding: 8,
    }
  },
  control: (styles) => {
    return {
      ...styles,
      border: "none",
      outline: "none",
      boxShadow: "none"
    }
  },
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition}
  },
  multiValue: (styles) => {
    return {
      ...styles,
      backgroundColor: "rgba(244, 143, 177, 0.15)",
      borderRadius: "8px",
      color: colors.gray.regular,
      letterSpacing: "0.4px",
      fontSize: "14px"
    }
  }
}

export const StyleSelect = styled(Select)`
  width: 280px;
  border: ${({ border }) => border ? `1px solid ${colors.pink.regular}` : "none"};
  border-radius: 4px;
`;
