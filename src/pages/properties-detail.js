import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { getProperty } from "../services/properties-service";
import { colors, fonts, typography } from "../styles";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { FaPaw } from "react-icons/fa";


const FlexRow = styled.div`
  display: flex;
`

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  // justify-content: center;
  gap: 1rem;
  margin: 0 120px;
`
const Division = styled.div`
  background-color: ${colors.pink.dark};
  height: 1px;
  width: 100%;
`

const Subtitle = styled.p`
  ${typography.headline.h6};
  color: ${colors.pink.dark};
  font-family: ${fonts.secundary};
`
// style={{border: "2px solid brown"}} ====> debug


export function PropertyDetail() {

  const [ property, setProperty ] = useState({});

  const { 
    address,
    price, 
    maintenance,
    pets,
    about,
    bedrooms, 
    bathrooms,
    area,
    operation_type,
   } = property

  useEffect(() => {
    getProperty(2)
    .then(setProperty)
    .catch(console.log)
  }, []);

  return (
    < >
      <FlexColumn style={{maxWidth: "830px"}}>
        <FlexRow style={{width: "100%", justifyContent: "space-between"}}>
          <FlexColumn>
            <h3>{address}</h3>
          </FlexColumn>
          <FlexColumn>
            <h4>{price}</h4>
            <p>+ {maintenance}</p>
          </FlexColumn>
        </FlexRow>
        <Division />
        <FlexRow style={{gap: "30px", paddingTop: "1rem", paddingBottom: "1rem", fontFamily: `${fonts.secundary}`}}>
          <FlexRow style={{gap: "6px"}}>
            <BiBed size="20px" color={`${colors.gray.regular}`}/>
            <div>{bedrooms} bedrooms</div>
          </FlexRow>
          <FlexRow style={{gap: "6px"}}>
            <BiBath size="20px" color={`${colors.gray.regular}`}/>
            <div>{bathrooms} bathrooms</div>
          </FlexRow>
          <FlexRow style={{gap: "6px"}}>
            <BiArea size="20px" color={`${colors.gray.regular}`}/>
            <div>{area} m2</div>
          </FlexRow>
          <FlexRow style={{gap: "6px"}}>
            { pets ? (<><FaPaw size="20px" color={`${colors.gray.regular}`} /><div>Pets allowed</div></>) : null}
          </FlexRow>
        </FlexRow>
        <Division />
        <FlexColumn style={{marginTop: "1rem", gap: "0.5rem"}}>
          <Subtitle>About this property</Subtitle>
          <p>{about}</p>
        </FlexColumn>
        <Subtitle style={{margin: "1rem 0"}}>Location</Subtitle>
        <p>{address}</p>

      </FlexColumn>
    </>
  )
}