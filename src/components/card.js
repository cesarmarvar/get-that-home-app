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

const DefaultCard = styled.div`
  width: 300px;
  height: 360px;
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
  gap: 8px;
`

const SingleIcon = styled.div`
  display: flex;  
  flex-directin: row;
  gap: 4px;
`

export function Card() {


  return(
    <DefaultCard style={{border: "2px solid brown"}} >
      <PropertyImg style={{border: "2px solid brown"}}>photo</PropertyImg>
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
              <BiBed />
              <div>4</div>
            </SingleIcon>
            <SingleIcon>
              <BiBath />
              <div>2</div>
            </SingleIcon>
            <SingleIcon>
              <BiArea />
              <div>180 m2</div>
            </SingleIcon>
            <FaPaw />
          </IconsRow>
        </AddressAndIcons>
      </PropertyData>
    </DefaultCard>
  )
}