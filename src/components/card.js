import styled from "@emotion/styled";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { RiBuildingLine } from "react-icons/ri";

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


export function Card() {


  return(
    <DefaultCard>
      <div>photo</div>
      <PropertyData>
        <PriceRow>
          <RiMoneyDollarCircleLine />
          <text>3,000</text>
        </PriceRow>
        <div>
          <RiBuildingLine />
          <text>Apartment</text>
        </div>
      </PropertyData>

    </DefaultCard>
  )
}