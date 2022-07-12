import styled from "@emotion/styled";

const DefaultCard = styled.div`
width: 300px;
height: 360px;
`

const PropertyDetail = styled.div`
display: flex;
flex-direction: column;
height: 160px;
`

export function Card() {


  return(
    <DefaultCard>
      <div>photo</div>
      <PropertyDetail>

      </PropertyDetail>

    </DefaultCard>
  )
}