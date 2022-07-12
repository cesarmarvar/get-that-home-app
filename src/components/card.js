import styled from "@emotion/styled";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { RiBuildingLine } from "react-icons/ri";
import { BiBed } from "react-icons/bi";
import { BiBath } from "react-icons/bi";
import { BiArea } from "react-icons/bi";
import { FaPaw } from "react-icons/fa";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";
import { fonts } from "../styles/fonts";

const CardContainer = styled.div`

`

const DefaultCard = styled.div`
  width: 300px;
  height: 360px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`

const PropertyImg = styled.div`
  width: 300;
  height: 200px;
`

const PropertyData = styled.div`
  display: flex;
  flex-direction: column;
  height: 160px;
  padding: 8px;
`

const PriceRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`

const Price = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  font-family: ${fonts.secundary}; // confirmar si este es Montserrat
  ${typography.headline.h5};
`

const PropertyType = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  font-family: ${fonts.primary};
  color: ${colors.gray.light};
  ${typography.body.b1}
`

const AddressAndIcons = styled.div`
  display: flex;
  flex-direction: column;
  height: 97px;
  justify-content: space-between;
  align-items: flex-start;
`

const Adress = styled.text`
  color: ${colors.gray.dark};
  font-family: ${fonts.secundary};
  ${typography.subtitle.s1}; // Pendiente corregir el line height: debe ser 24.
  padding-top: 8px;
`

const IconsRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  color: ${colors.gray.regular};
  ${typography.body.b1};
  font-family: ${fonts.primary}
`

const SingleIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

const ColorBottom = styled.div`
  width: 300px;
  height: 7px;
  background-color: ${colors.pink.dark};
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`

// style={{border: "2px solid brown"}} ====> debug

export function Card() {


  return(
    <CardContainer>
      <DefaultCard>
        <PropertyImg>photo</PropertyImg>
        <PropertyData>
          <PriceRow>
            <Price style={{width: "161px"}}>
              <RiMoneyDollarCircleLine size="30px" color={`${colors.gray.dark}`}/>
              <text>3,000</text>
            </Price>
            <PropertyType>
              <RiBuildingLine size="30px" color={`${colors.gray.light}`}/>
              <text>Apartment</text>
            </PropertyType>
          </PriceRow>
          <AddressAndIcons>
            <Adress>86872 Jacob Gateway, Durganport, WV 48044</Adress>
            <IconsRow>
              <SingleIcon>
                <BiBed size="20px" color={`${colors.gray.regular}`}/>
                <div>4</div>
              </SingleIcon>
              <SingleIcon>
                <BiBath size="20px" color={`${colors.gray.regular}`}/>
                <div>2</div>
              </SingleIcon>
              <SingleIcon>
                <BiArea size="20px" color={`${colors.gray.regular}`}/>
                <div>180 m2</div>
              </SingleIcon>
              <FaPaw size="20px" color={`${colors.gray.regular}`}/>
            </IconsRow>
          </AddressAndIcons>
        </PropertyData>
      </DefaultCard>
      <ColorBottom />
    </CardContainer>
  )
}