import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { colors, typography } from "../../styles";

function typeButton(type) {
  switch (type) {
    case "primary":
      return`
        background-color: ${colors.pink.regular};
        color: ${colors.white};
        &:hover {
          background-color: ${colors.pink.dark};
        }
      `;
    case "secundary":
      return`
        background-color: ${colors.white};
        color: ${colors.gray.regular};
        border: 1px solid #F48FB1;
        &:hover {
          background-color: ${colors.shallowPink};
          border: 1px solid #BF5F82;
        }
      `;
    case "ghost":
      return`
        background-color: ${colors.white};
        color: ${colors.gray.regular};
        &:hover {
          background-color: ${colors.shallowPink};
        }
      `;
    default:
      break;
  }
}

function sizeButton(size) {
  switch (size) {
    case "sm":
      return `
        padding: 0.25rem 0.5rem;
        border-radius: 0.5rem;
      `;
    case "lg":
      return `
        padding: 1rem 1.5rem;
      `;
    default:
      break;
  }
}

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  margin: 50px;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  background-color: ${colors.pink.regular};
  ${typography.button};
  text-transform: uppercase;
  color: ${colors.white};
  font-family: 'Inter';
  &:hover {
    background-color: ${colors.pink.dark};
  }
  &:disabled {
    cursor: not-allowed;
    background-color: ${colors.shallowGray};
    opacity: 0.9;
  }
  ${(props) => typeButton(props.type)}
  ${(props) => sizeButton(props.size)}
`;


function Button({children="Button",IconL,IconR, ...props}) {
  return (
    <StyledButton {...props} >
     {IconL && <IconL size="16px"/>}
      {children}
     {IconR && <IconR size="16px"/>}
    </StyledButton>
  );
};

Button.propTypes = {
  disable: PropTypes.bool,
  type: PropTypes.oneOf([ "primay", "secundary", "ghost"]),
  size: PropTypes.oneOf(["sm", "lg"]),
  iconL: PropTypes.element,
  iconR: PropTypes.element,
  children: PropTypes.string,
  onclick: PropTypes.func
};

export default Button;