/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useContext, useEffect, useState } from "react";
import { getProperty } from "../services/properties-service";
import { colors, fonts, typography } from "../styles";
import { RiMoneyDollarCircleLine, RiUserReceived2Fill } from "react-icons/ri";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { FaPaw } from "react-icons/fa";
import GoogleMaps from "simple-react-google-maps";
import Button from "../components/Button/button";
import { AiOutlineHeart } from "react-icons/ai";
import { TiEdit } from "react-icons/ti";


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
  justify-content: center;
  gap: 1rem;
  margin: 32px 120px;
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


export function PropertyDetail({userType, handleOpen}) {

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
    user_id,
   } = property

   function handleShowContact(e) {
    e.preventDefault();
    setShowContact(true)
   }

  useEffect(() => {
    getProperty(5)
    .then(setProperty)
    .catch(console.log)
  }, []);


  function NotLogged() {
    return(
      <FlexColumn style={{width: "290px", height: "248px", padding: "32px"}}>
        <FlexColumn style={{alignItems: "center", justifyContent: "center", height: "100%", padding: "32px", gap: "20px", boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)", borderRadius: "8px"}}>
          <p style={{textAlign: "center"}}>Log in or Join to contact the advertiser</p>
          <Button IconL={ RiUserReceived2Fill } onClick={() => handleOpen(true)} type="primary" size="sm" children="LOGIN" />
        </FlexColumn>
      </FlexColumn>
    )
  }

  function LandlordButton() {
    return(
      <FlexColumn cssstyle={{width: "290px", height: "104px", padding: "32px 16px", alignItems: "center", justifyContent: "center"}}>
        <Button IconL={ TiEdit } type={"primary"} size={"sm"} children={"EDIT PROPERTY"}/>
      </FlexColumn>
    )
  }

  function LoggedBuyerButton() {
    return(
      <FlexColumn style={{width: "340px", height: "248px", padding: "32px"}}>
        <FlexColumn style={{alignItems: "center", justifyContent: "center", height: "100%", padding: "32px", gap: "20px", boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)", borderRadius: "8px"}}>
          <Button onClick={handleShowContact} type={"primary"} size={"sm"} children={"CONTACT ADVERTISER"}/>
          <AiOutlineHeart size="100px"/>
          <p>Add to favorites</p>
        </FlexColumn>
      </FlexColumn>
    )
  }

  function LoggedBuyerContactDetail() {
    return(
      <FlexColumn style={{width: "340px", height: "248px", padding: "32px"}}>
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
    )
  }

  return (
    <Container>
      <FlexColumn style={{maxWidth: "830px"}}>
        <FlexRow style={{width: "100%", justifyContent: "space-between", fontFamily: `${fonts.secundary}`}}>
          <FlexColumn>
            <h3 css={css`${typography.headline.h4}`}>{address}</h3>
          </FlexColumn>
          <FlexColumn style={{alignItems: "end"}}>
            <FlexRow style={{alignItems: "center", gap: "12px"}}>
              <RiMoneyDollarCircleLine size="30px" color={`${colors.gray.dark}`}/>
              <p css={css`${typography.headline.h4}`}>{price}</p>
            </FlexRow>
            {maintenance ? <p css={css`${typography.headline.h6}`}>+ {maintenance}</p>: null}
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
        <GoogleMaps
          apiKey={"AIzaSyBba0fHGfvFZT1rT4cnQ_9BOLh7UOQkf3M"}
          style={{height: "760px", width: "760px"}}
          zoom={18}
          center={{lat: -12.123380, lng: -77.021240}}
          />
      </FlexColumn>
      { !isAuth ? <NotLogged /> :

      isAuth && typeUser === "buyer" ? (!showContact ? <LoggedBuyerButton /> : <LoggedBuyerContactDetail />) :

      isAuth && typeUser === "landlord" ? <LandlordButton /> : null}

    </Container>
  )
}