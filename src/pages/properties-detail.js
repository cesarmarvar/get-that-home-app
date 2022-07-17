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
  const [ owner, setOwner ] = useState("");
  const [ showContact, setShowContact ] = useState(false);

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

   function handleShowContact(e) {
    e.preventDefault();
    setShowContact(true)
   }

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
      {/* Not logged in: */}
      <FlexColumn style={{width: "290px", height: "248px", padding: "32px"}}>
        <FlexColumn style={{alignItems: "center", justifyContent: "center", height: "100%", padding: "32px", gap: "20px", boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)", borderRadius: "8px"}}>
          <p style={{textAlign: "center"}}>Log in or Join to contact the advertiser</p>
          <Button IconL={ RiUserReceived2Fill } onClick={() => handleOpen(true)} type="primary" size="sm" children="LOGIN" />
        </FlexColumn>
      </FlexColumn> */}

      {/* logged in (first): */}
      { !showContact ? (
        <>
          <FlexColumn style={{width: "290px", height: "248px", padding: "32px"}}>
            <FlexColumn style={{alignItems: "center", justifyContent: "center", height: "100%", padding: "32px", gap: "20px", boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)", borderRadius: "8px"}}>
              <Button onClick={handleShowContact} type={"primary"} size={"sm"} children={"CONTACT ADVERTISER"}/>
              <AiOutlineHeart size="100px"/>
              <p>Add to favorites</p>
            </FlexColumn>
          </FlexColumn>
        </>
      ) : null}

      {/* logged in (second): */}
      { showContact ? (
        <>
          <FlexColumn style={{width: "290px", height: "236px", padding: "32px 16px"}}>
            <FlexColumn style={{alignItems: "center", justifyContent: "center", height: "100%", padding: "16px", gap: "16px", boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)", borderRadius: "8px"}}>
              <p css={css`${typography.headline.h6}`}>Contact information</p>
              <div>
                <p style={{textAlign: "center", color: `${colors.pink.dark}`}}>Email</p>
                <p style={{textAlign: "center"}}>Email</p>
              </div>
              <div>
                <p style={{textAlign: "center", color: `${colors.pink.dark}`}}>Phone</p>
                <p style={{textAlign: "center"}}>number</p>
              </div>
            </FlexColumn>
          </FlexColumn>
        </>
      ) : null}


    </Container>
  )
}