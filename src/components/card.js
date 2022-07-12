import styled from "@emotion/styled";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { RiBuildingLine } from "react-icons/ri";
import { BiBed } from "react-icons/bi";
import { BiBath } from "react-icons/bi";

const DefaultCard = styled.div`
  width: 300px;
  height: 360px;
`

const PropertyData = styled.div`
  display: flex;
  flex-direction: column;
  height: 160px;
`

const PriceRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`

const IconsRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`

export function Card() {


  return(
    <DefaultCard>
      <div>photo</div>
      <PropertyData>
        <PriceRow>
          <div>
            <RiMoneyDollarCircleLine />
            <text>3,000</text>
          </div>
          <div>
            <RiBuildingLine />
            <text>Apartment</text>
          </div>
        </PriceRow>
        <text>Adress</text>
        <IconsRow>
          <BiBed />

        </IconsRow>
      </PropertyData>

    </DefaultCard>
  )
}