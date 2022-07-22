import styled from "@emotion/styled";
import { colors, fonts, typography } from "../../styles";

export const RentalChip = styled.div`
  width: 110px;
  height: 25px;  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 4px;
  gap: 4px;
  background-color: ${colors.pink.regular};
  color: ${colors.white};
  font-family: ${fonts.primary};
  ${typography.body.b2}
  position: absolute;
  left: 190px;
  border-top-right-radius: 8px;
`;

export const SaleChip = styled.div`
  width: 110px;
  height: 25px;  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 4px;
  gap: 4px;
  background-color: ${colors.pink.dark};
  color: ${colors.white};
  font-family: ${fonts.primary};
  ${typography.body.b2}
  position: absolute;
  left: 190px;
  border-top-right-radius: 8px;
`;

export const DefaultCard = styled.div`
  position: relative;
  width: 300px;
  height: 360px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

export const PropertyImg = styled.img`
  width: 300;
  height: 200px;
`;

export const PropertyData = styled.div`
  display: flex;
  flex-direction: column;
  height: 160px;
  padding: 8px;
`;

export const PriceRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Price = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  font-family: ${fonts.secundary}; // confirmar si este es Montserrat
  ${typography.headline.h5};
`;

export const PropertyType = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  font-family: ${fonts.primary};
  color: ${colors.gray.light};
  ${typography.body.b1}
`;

export const AddressAndIcons = styled.div`
  display: flex;
  flex-direction: column;
  height: 110px;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Adress = styled.p`
  color: ${colors.gray.dark};
  font-family: ${fonts.secundary};
  ${typography.subtitle.s1}; // Pendiente corregir el line height: debe ser 24.
  padding-top: 1rem;
`

export const IconsRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  color: ${colors.gray.regular};
  ${typography.body.b1};
  font-family: ${fonts.primary}
`

export const SingleIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

// ======== Bottom para el default card (cuando no eres un landlord) ==================================

export const DefaultBottom = styled.div`
  width: 300px;
  height: 7px;
  background-color: ${colors.pink.dark};
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`

// ======== Bottom para los landlords (tienen botones para editar y cerrar la venta/alquiler) ==========

export const LandlordButtons = styled.div`
  width: 300px;
  height: 47px;
  background-color: ${colors.pink.dark};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 32px;
`

export const CardButton = styled.button`
  border: none;
  background-color: ${colors.pink.dark};
  color: ${colors.white};
  font-family: ${fonts.primary};
  ${typography.button};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

export const Container = styled.div`
  cursor: pointer;
  transition: .3s ease-in;
  &:hover {
    transform: scale(1.1);
  }
`;
